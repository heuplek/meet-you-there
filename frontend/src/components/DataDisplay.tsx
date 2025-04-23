import {DataGrid} from '@mui/x-data-grid';


interface DataDisplayProps {
    rows: Array<{ id: number; [key: string]: any }>;
    columns: Array<{ field: string; headerName: string; width?: number }>;
}

function DataDisplay({ rows, columns }: DataDisplayProps) {
    
    return <DataGrid rows={rows} columns={columns}/>
}
export default DataDisplay;
