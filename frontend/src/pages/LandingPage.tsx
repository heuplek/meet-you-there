import Select from "../components/selects/Select";
import MultiSelect from "../components/selects/MultiSelect";
import { airportData } from "../assets/airportData";
import './LandingPage.css'
import SubmitButton from '../components/Button';
import Datepicker from '../components/pickers/Datepicker';
import { ThemeProvider } from '@mui/material';
import theme from './Theme';
import Timepicker from '../components/pickers/Timepicker';
import { useGetFlightData } from '../api/getFlights';
import { useFlightSearchContext } from '../components/context/flightSearchContext';
import DataDisplay from '../components/DataDisplay';

function LandingPage() {
    const { setDepartureDate, setArrivalTime, setOrigins, setDestination, origins } = useFlightSearchContext();
    const { mutate: getFlights, data } = useGetFlightData();
    const handleSubmit = () => {
        getFlights();
    }
    console.log(data)
    return (
        <main className="landing_page">
            <h1 className="title">Meet You There</h1>
            <ThemeProvider theme={theme}>
                <div className={data ? "form_container__results" : "form_container"}>
                    <div className='departure_airport'>
                        <MultiSelect
                            label="Departure Airports"
                            options={airportData}
                            setValue={setOrigins} 
                            isOneLine={data ? true:false}/>
                    </div>
                    <div className='arrival_airport'>
                        <Select
                            label="Destination Airport"
                            options={airportData}
                            setValue={setDestination}
                        />
                    </div>
                    <div className={"pickers_container"}>
                        <Datepicker setDate={setDepartureDate} />
                        <Timepicker setTime={setArrivalTime} />
                    </div>
                    <SubmitButton clickHandler={handleSubmit} />
                </div>
                {data && <DataDisplay flightData={data} origins={origins} />}
            </ThemeProvider>

        </main>
    );
}

export default LandingPage;