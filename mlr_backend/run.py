from flask import Flask, jsonify, request
from flask_jwt import JWT
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.secret_key = "2130"

## Process uploaded CSF File
@app.route("/upload", methods=["POST"])
def uploadCSVFile():
    request_data = request.get_json()
    print("request data is ")
    print(request_data)
    return jsonify({"message": "uploaded successfully"})

if __name__ == "__main__":
    app.run(port=5000, debug=True)