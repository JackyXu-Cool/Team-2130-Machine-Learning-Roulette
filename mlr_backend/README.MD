### How to run Backend
Install virtual environment inside the "./python-backend"
```shell
pip install virtualenv

virtualenv venv --python=python3.8
```
_Note that python3.8 is my version. Change it to your current version_ <br />

To activate it:
```shell
./venv/Scripts/activate
```

If above gives error, try:
```shell
source venv/bin/activate
```

To install necessary python library after you activate the virtual environment:
```shell
pip install Flask
pip install Flask-RESTful
pip install Flask-JWT
pip install -U flask-cors
pip install numpy
pip install requests
```
Run backend:
```
python run.py
```
To quit:
```
deactivate
```
