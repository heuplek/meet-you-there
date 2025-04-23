import { useState } from 'react';
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

function LandingPage() {
    const {setDepartureDate, setArrivalTime, setOrigins, setDestination} = useFlightSearchContext();
    const { mutate: getFlights } = useGetFlightData();
    const handleSubmit = () => {
        getFlights();
    }
    return (
        <main className="landing-page">
            <h1 className="title">Meet You There</h1>
            <ThemeProvider theme={theme}>
                <MultiSelect
                    label="Departure Airports"
                    options={airportData}
                    setValue={setOrigins} />
                <Select
                    label="Destination Airport"
                    options={airportData}
                    setValue={setDestination}
                />
                <div className='pickers-container'>
                    <Datepicker setDate={setDepartureDate}/>
                    <Timepicker setTime={setArrivalTime} />
                </div>
                <SubmitButton clickHandler={handleSubmit}/>
            </ThemeProvider>

        </main>
    );
}

export default LandingPage;