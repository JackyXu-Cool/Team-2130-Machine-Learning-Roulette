# MLR Database 

Currently, the database for Machine Learning Roulette is hosted using AWS RDS Services.

> Note: we are currently using free tier RDS service from 10/2022 - 10/2023, which has a limit of 20GB of data storage.

## Database Structures - ER Diagram
![relation diagram](/mlr_database/image/ML%20Relational%20Diagram.PNG)

## Retrieving and Storing User's Training History

There are two ways to retrieve and store users' information into RDS database. 
- [REST API](#rest-api)
- [Lambda Methods](#lambda-methods)

### REST API
There are currently two endpoints exposed to REST API

- [gethistory](#gethistory) - retrieve all of a user's history from the database based on email
- [storehistory](#storehistory) - store a user's training history into the database, requires unique id

#### gethistory
- Endpoint: https://6ub4cm85uh.execute-api.us-east-1.amazonaws.com/trainingdata/gethistory
- Access this endpoint in `get_training_result` in `get_history.py`
- **Parameter**
    ```python
    email -> string
    ```
- **Return**
    - The returned result of this function will be a list, with the entry of the list in the following order.
    ```python
    [time_stamp : string, 
    training_id: int,
    models: string,         // ex: "KNN, SVM", which each separated by a comma
    epoch: int,
    training_percent: int
    training_output: json in string format]
    ```
    - Status Code:
        - 200: method executed successfully
        - Other: there are some errors
    
#### storehistory
- Endpoint: https://6ub4cm85uh.execute-api.us-east-1.amazonaws.com/trainingdata/storehistory
- Access this endpoint with `store_history` method in `store_history.py`, the input to the method would be user's email, which must be a string
- **Parameter**
The input to the function must be in the following format
    - **Note: the `training_id` must be a unique integer, I would recommend using uuid as input to training_id**
    ```python
    {
    "email": "demo@gmail.com",  -> string
    "time_stamp": "2022-06-20 16:06:13.176788", -> string of date time
    "training_id": 17,  -> int
    "models": "model1, model2",   -> string separated by commas
    "random_seed": 12,  -> double
    "epoch": 1, -> int
    "training_percent": 30, -> int
    "training_output": "{'1':'2', '2':3}" -> json in string form, use json.dumps() to convert json to json string
    }
    ```
- **Return**
    - Status Code:
        - 200: Successfully stored into the database
        - Other: Storing failed, the most probable reason is that the input is not formatted correctly.


### Lambda Methods
- `get_training_result(email: json) -> list`
    - **Parameter** is `email`, return a list of training results associated with this email, ordered by time of the result in descending order. 
    - The input `email` to this lambda function must be in json format with 
    ```json
    {
        "email": ""
    }
    ```
    - The returned result of this function will be a list, with the entry of the list in the following order.
    ```python
    [time_stamp : string, 
    training_id: int,
    models: string,         // ex: "KNN, SVM", which each separated by a comma
    epoch: int,
    training_percent: int
    training_output: json in string format]
    ```

- `store_history(user_history: json) -> null`
    - This lambda function takes in a json input and stores the user's training history into the database.
    - The format of input json is as follows as an example
    ```python
    {
    "email": "demo@gmail.com",  -> string
    "time_stamp": "2022-06-20 16:06:13.176788", -> string of date time
    "training_id": 17,  -> int
    "models": "model1, model2",   -> string separated by commas
    "random_seed": 12,  -> double
    "epoch": 1, -> int
    "training_percent": 30, -> int
    "training_output": "{'1':'2', '2':3}" -> json in string form, use json.dumps() to convert json to json string
    }
    ```