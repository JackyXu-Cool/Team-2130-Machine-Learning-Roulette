import pandas


def upload_handler(data):
    df = pandas.read_csv(data)
    return df
