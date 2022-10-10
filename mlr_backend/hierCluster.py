from sklearn.cluster import AgglomerativeClustering
import numpy as np


# Generates a model based on training data
def generateHierClustingModel(data, seed=None, clusters=2):
    if seed is not None:
        np.random.seed = seed
    clustering = AgglomerativeClustering(n_clusters=clusters).fit(data)
    # prediction = fit_predict(data)
    return clustering

# Uses the model to predict the placement of the input data
def predictHierClustering(model, data):
    predictions = model.predict(data)
    return predictions
