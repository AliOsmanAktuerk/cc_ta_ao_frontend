"use client"

import {useState, useMemo} from "react";
import {AllCommunityModule, ModuleRegistry, ColDef} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {PlayerType} from "@/app/types/TypesDef";
import DateStatus from "@/app/component/DateStatus";
import {formatNumberNachKommer} from "@/app/utils/Utils";


ModuleRegistry.registerModules([AllCommunityModule]);

export default function PlayerInfo({rowData = []}: { rowData: PlayerType[] }) {

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<PlayerType>[]>([
        {
            field: "date",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Date",
            cellRenderer: (date: any) => {
                return <DateStatus date={date.value}/>;
            }
        },
        {
            field: "rank",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Rank",
            cellStyle: {textAlign: "right"}
        },
        {field: "allianceName", editable: false, filter: true, sortable: true, headerName: "Alliance"},
        {field: "name", editable: false, filter: true, sortable: true, headerName: "Player Name"},

        {
            field: "researchPoints", editable: false, filter: true, sortable: true, headerName: "Research Points",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        },
        {
            field: "credits", editable: false, filter: true, sortable: true, headerName: "Credits",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        },
        {
            field: "creditProd",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Credit Production (All Bases)",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        }, {
            field: "baseCount",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Base Count",
            cellStyle: {textAlign: "right"}
        },
        {
            field: "nextBase",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Next Base in",
            cellStyle: {textAlign: "right"}
        },
        {
            field: "controlHub",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Control Hub",
            cellRenderer: (rowData: any) => <div>{rowData.valeu === true ? "✔️" : "❌"}</div>
        }
    ]);

    const defaultColDef = useMemo(() => {
        return {flex: 1};
    }, []);


    return (
        <div style={{height: 500, marginBottom: 50, marginTop: 10}}>
            <h2>Player</h2>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                getRowStyle={(params) => {
                    // @ts-ignore
                    if (params.node.rowIndex % 2 === 0) {
                        return {background: "#ededed"}; // Hellgrau
                    } else {
                        return {background: "#ffffff"}; // Weiß
                    }
                }}

            />
        </div>
    );
}
