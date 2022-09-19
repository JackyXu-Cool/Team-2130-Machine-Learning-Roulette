import numpy as np

# Calculates the Euclidean distance between two vectors
def distEuclid(vecA, vecB):
    return np.sqrt(sum(np.power(vecA - vecB, 2)))

def distCosine(vecA,vecB):
    normA = np.linalg.norm(vecA)
    normB = np.linalg.norm(vecB)
    sims = np.dot(vecA,vecB)/(normA * normB)
    dists = 1 - sims
    return dists