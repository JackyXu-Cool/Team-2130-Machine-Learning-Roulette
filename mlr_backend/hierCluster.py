from sklearn.cluster import AgglomerativeClustering
import numpy as np


# Generates a model based on training data
def generateHierClustingModel(data, seed=None, clusters=2):
    if seed is not None:
        np.random.seed = seed
    clustering = AgglomerativeClustering(n_clusters=clusters).fit(data)
    # prediction = fit_predict(data)
    return clustering


# Returns the assigned clusters of datapoints in model
def predictHierClustering(model):
    predictions = model.labels_
    return predictions
