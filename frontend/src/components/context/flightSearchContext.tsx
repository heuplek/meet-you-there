import React, { createContext, useContext, useState } from "react";


export interface FlightSearchContextType {
    destination: string;
    setDestination: (desitnation: string) => void;
    origins: string[];
    setOrigins: (origins: string[]) => void;
    departureDate: Date | undefined;
    setDepartureDate: (departureDate: Date | undefined) => void;
    arrivalTime: Date | undefined;
    setArrivalTime: (arrivalTime: Date | undefined) => void;
}

const AppContext = createContext<FlightSearchContextType | undefined>(undefined);

export function useFlightSearchContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useFlightSearchContext must be used within a FlightContextProvider");
    }
    return context;
}

export function FlightContextProvider({ children }: { children: React.ReactNode }) {
    const [destination, setDestination] = useState<string>("");
    const [origins, setOrigins] = useState<string[]>([]);
    const [departureDate, setDepartureDate] = useState<Date>();
    const [arrivalTime, setArrivalTime] = useState<Date>();


    const value: FlightSearchContextType = {
        destination,
        setDestination,
        origins,
        setOrigins,
        departureDate,
        setDepartureDate,
        arrivalTime,
        setArrivalTime,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
