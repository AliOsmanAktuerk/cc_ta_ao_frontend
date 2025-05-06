"use client"

import {useState, useMemo} from "react";
import {AllCommunityModule, ModuleRegistry, ColDef} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {AllianceType} from "@/app/types/TypesDef";
import DateStatus from "@/app/component/DateStatus";
import {formatNumberNachKommer} from "@/app/utils/Utils";


ModuleRegistry.registerModules([AllCommunityModule]);

export default function Alliance({rowData = []}: { rowData: AllianceType[] }) {

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<AllianceType>[]>([
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
            field: "id",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Alliance ID",
            cellStyle: {textAlign: "right"}
        },
        {field: "name", editable: false, filter: true, sortable: true, headerName: "Alliance Name"},
        {
            field: "rank",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Rank",
            cellStyle: {textAlign: "right"}
        },

        {
            field: "score",
            editable: false,
            filter: true,
            sortable: true,
            headerName: "Score",
            cellStyle: {textAlign: "right"},
            cellRenderer: (rowData: any) => formatNumberNachKommer(rowData.value)
        },
    ]);

    const defaultColDef = useMemo(() => {
        return {flex: 1};
    }, []);


    return (
        <div style={{height: 200, marginBottom: 50}}>
            <h2>Alliance</h2>
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
