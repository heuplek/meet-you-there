import requests
import threading
import json
from src.services.filter_suggestions import filter_suggestions
"""
===============================================================================
get_flights
    @input start: list[str] list of start location airports
    @input date: str date of the flight
    @input arrival: str arrival time
    @input destination: str destination airport

    @ret dict: returns sorted flights based on the input parameters

    @desc: Base function for API
===============================================================================
"""
def get_flights(start:list[str], date:str, arrival:str, destination:str, key:str, host:str, env:str) -> dict:
    """
    This function is a placeholder for the actual flight search logic.
    It currently returns a mock response with flight details.
    """
    # Mock response simulating flight data
    ## Build API request loop 
    request_endpoints = []
    for start_airport in start:
        base_url = f"https://{host}/api/v1/flights/searchFlights?"
        base_url += f"fromId={start_airport}.AIRPORT&"
        base_url += f"toId={destination}.AIRPORT&"
        base_url += f"departDate={date}&currency_code=USD"
        request_endpoints.append(base_url)
    #thread pool requests to endpoints await result, filter times
    print(request_endpoints)
    results = fetch_threaded_requests(request_endpoints, key, host, env, arrival, start)
    ## probably need to add this to the threaded requests
    return results


''''
===============================================================================
fetch_threaded_requests
    @input urls: list[str] list of urls to fetch
    @input key: str API key for authentication
    @input host: str API host

    @ret list[dict]: returns a list of JSON responses from the API

    @desc: Fetches data from multiple URLs using threading
===============================================================================
'''
def fetch_threaded_requests(urls, key, host, env, arrival):
    threads = []
    filtered_results = {}
    if env == "dev":
        print("Using mock data")
        with open("../backend/helpers/testResponse__2.json", "r") as f:
            results = f.read()
            json_data = json.loads(results)
            for result in json_data:
                filtered_results = filter_suggestions(result, arrival, filtered_results)
            return filtered_results
    print("Using API data")
    def fetch(url, key, host):
        print(url, key, host)
        headers = {
            'x-rapidapi-key': key,
            'x-rapidapi-host': host
        }
        response = requests.get(url, headers=headers)
        filtered_results = filter_suggestions(response.json(), arrival, -filtered_results)
        

    for url in urls:
        thread = threading.Thread(target=fetch, args=(url,key,host))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    return filtered_results