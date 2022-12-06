# Machine Learning Roulette - Team 2130
![](https://github.com/JackyXu-Cool/Team-2130-Machine-Learning-Roulette/actions/workflows/node.js.yml/badge.svg)

Our project is to create a website that allows users to receive an evaluation on the performance of selected machine learning algorithms on the dataset (csv form) which the users upload. In front-end, the website accepts a data set, selects a model or models, and displays statistical model quality results based on other parameter selection. For back-end, we will run the various models, as configured, on the uploaded dataset and offer aggregated quality metrics for the website to render in an informative way.

# Team members
Hyelin Lee: hyelin.lee@gatech.edu (Role: Summarizer)

Yuanzhi (David) Liu: yliu3201@gatech.edu (Role: Opinion Seeker)

Ruokun (Tommy) Niu: rniu8@gatech.edu (Role: Information Giver)

Harrison L O'Neal: honeal3@gatech.edu (Role: Clarifier)

Junqi (Jacky) Xu: jxu477@gatech.edu (Role: Initiator, Information Giver)

Haoran (Marty) Zhao: hzhao353@gatech.edu (Role: Information Seeker)

# Release Note

## Version 0.4.0
### New Features
1. Display metrics for the Machine learning model training result (including accuracy, prior probability, mean, standard deviation, etc)
2. Seperate login page and register page. After new user is registered, they will be redirected into the upload page automatically.
3. Set up database procedure to store history data
4. Default training percentage set to 70%
### Bug Fixes
1. Disabled the model selection once the user has uploaded their dataset


## Version 0.3.0
### New Features
1. Implemented Naive Bayes
2. Implemented Hierarchical Clustering
3. Implemented Decision Tree
4. Database setup
5. Supported y-label for accuracy comparison
### Bug Fixes
1. Modified the order of frontend upload stage. User will choose the ML model first and then upload their dataset. Y-label is required for some ML models and is optional for the others. The logic will be much clear if the user chooses ML model first, so that our frontend can decide whether y-label is must or not.


## Version 0.2.0
### New Features
1. Implemented KMeans Algorithm that takes in CSV dataset and # of clusters as parameters
2. Built backend API that call KMeans algorithm to get cluster assessment
3. User authentication (Register and Login)
4. Deploy the website (https://www.mleroulette.com/)
### Bug Fixes
1. Disabled upload button when the user is not in the first stage of upload.


## Version 0.1.0
### New Features
1. Frontend page for uploading dataset (CSV Format) and selecting ML models and parameters.
2. Frontend page for Login and registration
3. Error Modal
4. Backedn APIs to receive CSV dataset and parameters
### Bug Fixes
1. Large margin in "Upload: step2"

## Installation Guide
1. Install Git https://github.com/git-guides/install-git <br />
Git is a distributed version control system, tracking changes in any set of files. In this project, we use git to do the version control.
```
git clone https://github.com/JackyXu-Cool/Team-2130-Machine-Learning-Roulette
```
2. Install node and npm
For our backend, we use [node.js](https://nodejs.org/en/download/) <nr />
After node is installed, follow the instruction here to [install backend](https://github.com/JackyXu-Cool/Team-2130-Machine-Learning-Roulette/tree/master/mlr_backend)

3. Install Frontend related package
Follow the instruction [here](https://github.com/JackyXu-Cool/Team-2130-Machine-Learning-Roulette/tree/master/mlr_frontend)

4. Database Integration
The features we'd like to have are fully set up but we don't integrate it into our application yet. Follow the guide here to learn more about [how our database works](https://github.com/JackyXu-Cool/Team-2130-Machine-Learning-Roulette/tree/master/mlr_database)

5. IDE installation
It is strongly recommende to use a light-weighted IDE to run our application. For example, [Visual Studio Code](https://code.visualstudio.com/Download)


# Client
Jay Lofstead, Sandia National Laboratories
