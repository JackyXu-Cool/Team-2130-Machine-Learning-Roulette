import requests

url = 'https://6ub4cm85uh.execute-api.us-east-1.amazonaws.com/trainingdata/gethistory'

def get_training_result(email):
    payload = {"email": f"{email}"}

    response = requests.post(url, json=payload)

    return response.status_code, response.json()
