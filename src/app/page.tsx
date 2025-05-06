"use client"

import {AllCommunityModule, ModuleRegistry} from "ag-grid-community";
import CititesInfo from "@/app/component/CititesInfo";
import PlayerInfo from "@/app/component/PlayerInfo";
import Alliance from "@/app/component/Alliance";
import {useEffect, useState} from "react";
import {FetchDataType} from "@/app/types/TypesDef";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Home() {

    const [rowData, setRowData] = useState<FetchDataType>({alliance: [], players: [], cities: []});

    const getUrlParameter = (name: string) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const fetchData = async () => {
        const password = getUrlParameter("passwort");
        if (password) {
            console.log("Passwort: **********************************");
        } else {
            console.log("Kein Passwort angegeben.");
        }

        const apiUrl = `https://hip-robin-active.ngrok-free.app/api/read/data/${password}`;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setRowData(data);
            })
            .catch(error => {
                console.error("Fehler beim Abrufen der Daten:", error);
            });

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{paddingLeft: 50, paddingRight: 50}}>
            <div style={{marginBottom: 20}}>
                <button onClick={fetchData}>Fetch Data</button>
            </div>
            <Alliance rowData={rowData.alliance}/>
            <hr/>
            <PlayerInfo rowData={rowData.players}/>
            <hr/>
            <CititesInfo rowData={rowData.cities}/>
        </div>
    );
}
