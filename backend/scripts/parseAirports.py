import pandas as pd
import argparse
import math

"""
===============================================================================
parseAirports.py
    @ret dict: returns sorted flights based on the input parameters

    @desc: script to parse airport csv to return only US aiports in the format 
    Key, code, longname
===============================================================================
"""

def parse_csv(csv_file):
    """
    Parse the csv file and return value, key json
    """
    df = pd.read_csv(csv_file)
    results = []
    for _, row in df.iterrows():
        if row['type'] == 'large_airport' or row['type'] == 'medium_airport':
            if row['iata_code'] and row['name'] and type(row['iata_code']) == str and type(row['name']) == str:
                label_string = row['name'] + " (" + row['iata_code'] + ")" 
                results.append({"value": row['iata_code'], "label":label_string})
    results.sort(key=lambda x: x['value'])
    print(results)
    return results

def main():
    parser = argparse.ArgumentParser(description="Parse JSON for airports")
    parser.add_argument("csv_file", help="Input csv file")
    args = parser.parse_args()
    parse_csv(args.csv_file)

if __name__ == "__main__":
    main()
