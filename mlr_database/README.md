# MLR Database 

Currently, the database for Machine Learning Roulette is hosted using AWS RDS Services.

> Note: we are currently using free tier RDS service from 10/2022 - 10/2023, which has a limit of 20GB of data storage.

## Accessing RDS Database

The results of the database will be available by querying the lambda function in AWS.

### Current Lambda Methods
- `get_training_result(email)`

## Storing Data into RDS Database
![relation diagram](/mlr_database/image/ML%20Relational%20Diagram.PNG)
 - to be completed