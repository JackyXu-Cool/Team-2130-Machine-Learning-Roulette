from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.secret_key = "2130"


@app.route("/upload", methods=["POST"])
def uploadCSVFile():
    request_data = request.get_json()
    print("request data is")
    print(request_data)
    # TODO: Upload data
    return jsonify({"message": "uploaded successfully"})


@app.route("/training", methods=["POST"])
def trainData():
    request_data = request.get_json()
    print("request data is")
    print(request_data)
    # TODO: Use ML Models to train data and send back useful information
    return jsonify({"message": "trained successfully"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
