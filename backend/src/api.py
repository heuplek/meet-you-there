from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.services.get_flights import get_flights
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import os
from os.path import join, dirname

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = FastAPI()

origins = os.environ.get("ALLOWED_ORIGINS").split(",") if os.environ.get("ALLOWED_ORIGINS") else [
    "http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FlightRequest(BaseModel):
    start: list[str] 
    date: str
    arrival: str
    destination: str


@app.options('/find_flights', status_code=200)
def root_options():
    print("OPTIONS request received at root")
    return {"message": "received"}  # Preflight request for CORS


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your backend."}

@app.post("/find_flights")
async def create_item(flight_request: FlightRequest):
    return get_flights(
        flight_request.start, 
        flight_request.date, 
        flight_request.arrival, 
        flight_request.destination, 
        os.environ.get("KEY"), 
        os.environ.get("HOST"), 
        os.environ.get("ENV"))