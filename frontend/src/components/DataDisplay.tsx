import { DataGrid } from '@mui/x-data-grid';


interface DataDisplayProps {
    flightData: any,
    origins: string[];
}

interface Cols {
    field: string;
    headerName: string;
    width?: number;
}

function DataDisplay({ flightData, origins }: DataDisplayProps) {
    
    let rows:  any[] | undefined = [];
    for (const origin of origins) {
        if (!flightData[origin]) {
            continue;
        }
        flightData[origin].map((flight: any) => {
            rows.push( {
                id: flight.flight_id,
                arrival_time: flight.arrival_time,
                departure_time: flight.departure_time,
                origin: flight.origin,
                airline: flight.airline,
                to: origin,
                flight_number: flight.flight_number,
                connections: flight.connections,
                price: flight.price,
            })
        })
    }

    console.log(rows)

    const columns: Cols[] = [

        { field: 'origin', headerName: 'From', width: 150 },
        { field: 'arrival_time', headerName: 'Arrival Time', width: 150 },
        { field: 'departure_time', headerName: 'Departure Time', width: 150 },
        { field: 'airline', headerName: 'Airline', width: 150 },
        { field: 'flight_number', headerName: 'Flight Number', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'connections', headerName: 'Connections', width: 150 },
    ];
    console.log(columns)
    return <DataGrid rows={rows} columns={columns}/>
}
export default DataDisplay;
