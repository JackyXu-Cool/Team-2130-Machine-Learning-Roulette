import requests
import json

url = 'https://6ub4cm85uh.execute-api.us-east-1.amazonaws.com/trainingdata/storehistory'

def store_history(history):
    """
    Store user's history into the database.

    Please see readme for more info.

    Args:
        history (json): json containing user's training history.

    Returns:
        int: status code, if it does not return 200, there is an error.
    """
    response = requests.post(url, json=history)

    return response.status_code
