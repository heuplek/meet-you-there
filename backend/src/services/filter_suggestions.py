import json
from datetime import datetime, timedelta

"""
===============================================================================
filter_suggestions
    @input flight_data: list[dict] list of flight data dictionaries
    @input arrival: str arrival time to filter by

    @ret list[dict]: returns a list of filtered flight data dictionaries

    @desc: Filters flight data based on the specified arrival time
===============================================================================
"""
def filter_suggestions(flight_data: json, arrival_time: str, origin_cities: list[str], filtered_flights: dict) -> dict:
    #make sure flight_data length matches origin_cities length
    dummy_date = datetime.now().date()
    arrival_time = datetime.strptime(arrival_time, "%H:%M").time()
    print("Arrival time is", arrival_time)
    start_window = (datetime.combine(dummy_date, arrival_time) - timedelta(minutes=30)).time()
    end_window = (datetime.combine(dummy_date, arrival_time) + timedelta(minutes=30)).time()
    print("number of flights for ", flight_data['data']['flightOffers'][0]['segments'][0]['departureAirport']['code'], len(flight_data['data']['flightOffers']))
    origin = flight_data['data']['flightOffers'][0]['segments'][0]['departureAirport']['code']
    #check if origin is in the dictionary
    if origin not in filtered_flights:
        filtered_flights[origin] = []
    for flight_offer in flight_data['data']['flightOffers']:
        flight_arrival = flight_offer['segments'][0]['arrivalTime']
        #is arrival time in 30 min +/- of the arrival time
        flight_arrival_time = datetime.strptime(flight_arrival, "%Y-%m-%dT%H:%M:%S").time()
        print("Arrival time for this flight is", flight_arrival_time)
        if flight_arrival_time >= start_window and flight_arrival_time <= end_window:
            filtered_flights[origin].append(flight_offer)
    
    print("Filtered flights are", filtered_flights)
    
    return filtered_flights