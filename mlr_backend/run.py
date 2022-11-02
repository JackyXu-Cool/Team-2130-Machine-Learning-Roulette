from flask import Flask, jsonify, request, session
from flask_cors import CORS
from io import StringIO
from flask_caching import Cache
from kmeans.kmeans import kMeans
from naivebayes.naivebayes import naive_bayes
from dtree.dtree import decisionTreeClassifier
from split import splitDataset
from hierCluster import generateHierClustingModel, predictHierClustering
import numpy as np
import metrics

app = Flask(__name__)
app.config["CACHE_TYPE"] = "SimpleCache"
cache = Cache(app)
CORS(app)

app.secret_key = "2130"


@app.route("/upload", methods=["POST"])
def uploadCSVFile():
    input_dataset = request.files['file'].read()
    try:
        decoded_dataset = input_dataset.decode("utf-8")
    except UnicodeDecodeError:
        try:
            decoded_dataset = input_dataset.decode("ANSI")
        except UnicodeDecodeError:
            return 'fail to find encoding', 404
    # TODO: pre-processing the dataset. Currently, if any value includes a comma in it, we will
    # have issue in parsing it with np.genfromtxt()
    cache.set("dataset", decoded_dataset)

    input_y_labels = request.files['ylabel'].read()
    try:
        decoded_y_label = input_y_labels.decode("utf-8")
    except UnicodeDecodeError:
        try:
            decoded_y_label = input_y_labels.decode("ANSI")
        except UnicodeDecodeError:
            return 'fail to find encoding', 404
    cache.set("labels", decoded_y_label)

    return jsonify({"message": "uploaded successfully"})


@app.route("/training", methods=["POST"])
def trainData():
    request_data = request.get_json()
    models = request_data.get('models')
    params = request_data.get('params')
    dataset = cache.get("dataset")
    dataset_in_np_array = np.genfromtxt(StringIO(dataset),
                                        delimiter=',')

    labels = cache.get("labels")
    labels_in_np_array = np.genfromtxt(StringIO(labels),
                                       delimiter=',')

    cluster_number = int(params['Number_of_Clusters'])
    training_percentage = int(params.get('Training(%)',70)) # Using a default value of 70


    Xtrain, Xtest, Ytrain, Ytest = splitDataset(dataset_in_np_array,labels_in_np_array,training_percentage);

    if ("KMeans" in models):
        centroid, clusterAssessment = kMeans(
            dataset_in_np_array, cluster_number)
    if ("Naive Bayes" in models and labels_in_np_array is not None):
        class_summary = naive_bayes(dataset_in_np_array, labels_in_np_array)
    if ("Decision Tree" in models and Ytrain is not None):
        prediction =  decisionTreeClassifier(Xtrain, Xtest, Ytrain, Ytest)
    if ('Hierarcical Clustering' in models):
        model = generateHierClustingModel(Xtrain, None, cluster_number) # or just leave as 2
        HCprediction = predictHierClustering(model, Ytrain)
    # Evaluation
    if labels_in_np_array is not None:
        kMeans_accuracy = metrics.calculateAccuracy(
            clusterAssessment, labels_in_np_array)
        dtree_accuracy = metrics.calculateAccuracy(
            prediction, Ytest)
    if ("KMeans" in models):
        bestNumOfK = metrics.silhouette_analysis(dataset_in_np_array)

    return jsonify({"message": "trained successfully"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
