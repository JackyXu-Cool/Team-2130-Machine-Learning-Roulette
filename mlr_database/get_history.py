import requests

url = 'https://6ub4cm85uh.execute-api.us-east-1.amazonaws.com/trainingdata/gethistory'

def get_training_result(email):
    """
    Retrieve user's training result' from the database using user's email address'

    Args:
        email (string): user's email address

    Returns:
        int: status code, 200 means success, other means there are errors
        list: each entry will be a list of user's training results', please see readme for details.
    """

    payload = {"email": f"{email}"}

    response = requests.post(url, json=payload)

    return response.status_code, response.json()
