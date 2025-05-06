"use client"

import {useState, useMemo} from "react";
import {AllCommunityModule, ModuleRegistry, ColDef} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {TypesDef} from "@/app/types/TypesDef";
import DateStatus from "@/app/component/DateStatus";
import {formatNumber, formatNumberNachKommer} from "@/app/utils/Utils";


ModuleRegistry.registerModules([AllCommunityModule]);

export default function CititesInfo({rowData = []}: { rowData: TypesDef[] }) {

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<TypesDef>[]>([
        {
            field: "date",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Date",
            cellRenderer: (rowData: any) => {
                return <DateStatus date={rowData.value}/>;
            }
        },
        {field: "allianceName", editable: false, filter: true, sortable: true, headerName: "Alliance"},
        {field: "player", editable: false, filter: true, sortable: true, headerName: "Player"},
        {field: "city", editable: false, filter: true, sortable: true, headerName: "City Name"},
        {
            field: "tib_prod",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Tiberium Production",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "cry_prod", editable: false, filter: true, sortable: true, headerName: "Crystal Production",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "power_prod", editable: false, filter: true, sortable: true, headerName: "Power Production",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "tib_res", editable: false, filter: true, sortable: true, headerName: "Tiberium Resources",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "cry_res", editable: false, filter: true, sortable: true, headerName: "Crystal Resources",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "power_res", editable: false, filter: true, sortable: true, headerName: "Power Resources",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumber(rowData.value)
        },
        {
            field: "off", editable: false, filter: true, sortable: true, headerName: "Offensive",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        },
        {
            field: "def", editable: false, filter: true, sortable: true, headerName: "Defensive",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        }
    ]);

    const defaultColDef = useMemo(() => {
        return {flex: 1};
    }, []);


    return (
        <div style={{height: 500, marginTop: 10}}>
            <h2>Citites</h2>
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
