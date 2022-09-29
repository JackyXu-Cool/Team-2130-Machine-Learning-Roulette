from flask import Flask, jsonify, request, session
from flask_cors import CORS
from io import StringIO
from flask_caching import Cache
from kmeans.kmeans import kMeans
import numpy as np

app = Flask(__name__)
app.config["CACHE_TYPE"] = "SimpleCache"
cache = Cache(app)
CORS(app)

app.secret_key = "2130"


@app.route("/upload", methods=["POST"])
def uploadCSVFile():
    input_dataset = request.files['file'].read().decode('utf-8')
    cache.set("dataset", input_dataset)
    return jsonify({"message": "uploaded successfully"})


@app.route("/training", methods=["POST"])
def trainData():
    request_data = request.get_json()
    models = request_data.get('models')
    params = request_data.get('params')
    dataset = cache.get("dataset")
    dataset_in_np_array = np.genfromtxt(StringIO(dataset),
                                        delimiter=',', usecols=np.arange(0, 5))
    if ("KMeans" in models):
        centroid, clusterAssessment = kMeans(
            dataset_in_np_array, int(params['Number_of_Clusters']))
    return jsonify({"message": "trained successfully"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
