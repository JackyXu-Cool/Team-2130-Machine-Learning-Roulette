from sklearn.metrics import accuracy_score,silhouette_samples, silhouette_score
from kmeans.kmeans import kMeans
import numpy as np

def calculateAccuracy(y, labels):
    # model_output = [int(row[0]) for row in y.tolist()]
    # Update Nov 12th: I dont think we need to convert the input y array to a list
    # as accuracy_score can take in both arrays and lists
    return accuracy_score(y, labels)

def silhouette_analysis(X):
    '''
    This analysis is specific to K-means for now. 
    It is used to determine the best value of k to use for K-means
    X is the dataset 
    '''

    range_n_clusters = [2, 3, 4, 5, 6]
    result = {} # The results are stored in a dictionary for now
    for n in range_n_clusters:
        centroid, assignment = kMeans(X,n)
        cluster_labels = [int(row[0]) for row in assignment.tolist()]

        silhouette_avg = silhouette_score(X, cluster_labels)

        result[n] = silhouette_avg
        print(
            "For n_clusters =",
            n,
            "The average silhouette_score is :",
            silhouette_avg,
        )
    return result

if __name__ == "__main__":
    X_test = np.genfromtxt('testdata/X_test.csv', delimiter=',')
    silhouette_analysis(X_test)