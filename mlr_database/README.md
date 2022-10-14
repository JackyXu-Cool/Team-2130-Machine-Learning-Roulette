# MLR Database 

Currently, the database for Machine Learning Roulette is hosted using AWS RDS Services.

> Note: we are currently using free tier RDS service from 10/2022 - 10/2023, which has a limit of 20GB of data storage.

## Accessing RDS Database

The entries of the database will be available by querying the lambda function in AWS.

### Current Lambda Methods
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

## Storing Data into RDS Database
![relation diagram](/mlr_database/image/ML%20Relational%20Diagram.PNG)

Storing data into RDS database will also be available through a lambda method.

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

## Writing AWS Lambda for Database
#### Python
First create an empty folder.

In the empty folder, execute `pip install -t $PWD pymysql`, which will install `pymysql` in package form.

Create `.py` file and write your lambda function inside. Please refer to code inside folder `lambda_function`.