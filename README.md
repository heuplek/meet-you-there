# Meet You There - WIP
About: Application that gathers flight data from multiple origins to a single destination and recommends flights combinations that arrive at the destination in the closest window. Useful for meeting friends/family/coworkers from different parts of the country so no one is left hanging at the airport or with seperate rental cars/taxis/ubers

# Stack
Python, FastAPI, Vite, React, MUI.
Built on top of Booking COM Rapid-api: https://rapidapi.com/DataCrawler/api/booking-com15

# Current State:
Development started 4-22-2025
## Front End: 
- Complete:
    Implemented Input Form submission and query to backend
- Todo:
    Results datagrid, return flight flow, set up env variables, loader/loading state, polish theme styling, dockerize

## Backend:
- Complete:
    Connection to external rapid-api, threading, environment variables, basic file structure
- In-progress:
    Flight compilation logic, caching
- Todo:
    benchmark performance, Error handling, data restriction, dockerize

# To run 
## Frontend
from frontend folder:
`npm i`
`npm run dev`

## Backend
from backend folder:
create .env in src
`KEY=[YOUR_API_KEY]`
`HOST=[YOUR_API_HOST]`
create venv
`pip install -r requirements.txt`
`python main.py`
