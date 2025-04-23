import { useMutation } from '@tanstack/react-query';
import { useFlightSearchContext } from '../components/context/flightSearchContext';
import { formatDateString, formatTimeString } from '../helpers/formatDateTimeStrings';

const getFlightData = async (origins: string[], destination:string, departureDate:string, arrival:string) => {
    
    //const apiUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'https://sc-sandbar.onrender.com';
    const response = await fetch(`http://localhost:8000/find_flights`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        redirect: 'follow',
        body: JSON.stringify({
            start: origins,
            date: departureDate,
            arrival: arrival,
            destination: destination,
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useGetFlightData = () => {
    const { destination, origins, arrivalTime, departureDate } = useFlightSearchContext();
    const departureDateString = formatDateString(departureDate);
    const arrivalTimeString = formatTimeString(arrivalTime);
    const {
        mutate,
        data: data,
        isPending,
    } = useMutation({
        mutationFn: () => getFlightData(origins, destination, departureDateString, arrivalTimeString),
        onSuccess: (data) => {
            console.log(data)
        },
        onSettled: () => {},
        onError: (error) => {
            throw error;
        },
    });
    return { mutate, data, isPending };
};
