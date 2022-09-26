from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
from io import StringIO

app = Flask(__name__)
CORS(app)

app.secret_key = "2130"


@app.route("/upload", methods=["POST"])
def uploadCSVFile():
    input_dataset = request.files['file'].read().decode('utf-8')
    print(input_dataset)
    # TODO: usecol param change
    X_test = np.genfromtxt(StringIO(input_dataset),
                           delimiter=',', usecols=np.arange(0, 5))
    return jsonify({"message": "uploaded successfully"})


@app.route("/training", methods=["POST"])
def trainData():
    request_data = request.get_json()
    models = request_data.get('models')
    params = request_data.get('params')
    # TODO: Use ML Models to train data and send back useful information
    return jsonify({"message": "trained successfully"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
