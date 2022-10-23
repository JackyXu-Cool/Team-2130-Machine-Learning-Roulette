from flask import Flask, jsonify, request, session
from flask_cors import CORS
from io import StringIO
from flask_caching import Cache
from kmeans.kmeans import kMeans
from naivebayes.naivebayes import naive_bayes
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
    if ("KMeans" in models):
        centroid, clusterAssessment = kMeans(
            dataset_in_np_array, int(params['Number_of_Clusters']))
    if ("Naive Bayes" in models and labels_in_np_array is not None):
        class_summary = naive_bayes(dataset_in_np_array, labels_in_np_array)

    # Evaluation
    if labels_in_np_array is not None:
        kMeans_accuracy = metrics.calculateAccuracy(
            clusterAssessment, labels_in_np_array)
    if ("KMeans" in models):
        bestNumOfK = metrics.silhouette_analysis(dataset_in_np_array)

    return jsonify({"message": "trained successfully"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
