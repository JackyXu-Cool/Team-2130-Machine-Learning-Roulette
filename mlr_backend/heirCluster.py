from sklearn.cluster import AgglomerativeClustering
import numpy as np


def heirClusting(data, seed=np.random(), clusters=2):
    np.random.seed = seed
    clustering = AgglomerativeClustering(n_clusters=clusters).fit(data)
    # prediction = fit_predict(data)
    return clustering
