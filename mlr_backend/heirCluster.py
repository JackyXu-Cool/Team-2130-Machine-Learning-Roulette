from sklearn.cluster import AgglomerativeClustering
import numpy as np


def heirClusting(data, seed=None, clusters=2):
    if seed is not None:
        np.random.seed = seed
    clustering = AgglomerativeClustering(n_clusters=clusters).fit(data)
    # prediction = fit_predict(data)
    return clustering
