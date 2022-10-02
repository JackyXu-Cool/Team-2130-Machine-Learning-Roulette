import numpy as np
import random
from kmeans import * 
from sklearn.metrics import accuracy_score


# To run test locally, type "pytest kmeans_test.py" into the terminal

#Random seed used for testing
seed = 1659561473


def testKmeans(num_clusters=1, randSeed = seed):
    X_test = np.genfromtxt('testdata/X_test.csv', delimiter=',')
    y_test = np.genfromtxt('testdata/y_test.csv', delimiter=',')

    np.random.seed(seed)
    random.seed(seed)
    _, clusterAssignments = kMeans(dataSet=X_test, k=num_clusters, random_state=randSeed, cpp_reproduce=False)

    labels = [int(row[0]) for row in clusterAssignments.tolist()]

    accuracy = accuracy_score(y_test, labels)
    print("The accuracy is: ", accuracy)
    assert accuracy == 0.3142857142857143, "The accuracies do not match"

def testEuclideanDist(num_clusters=1, randSeed = seed):
    arr1 = np.array([3,50,1,14,2])
    arr2 = np.array([7,32,10,23,40])
    dist = distEuclid(arr1,arr2)
    assert dist == np.linalg.norm(arr1-arr2), "The euclidean distances do not match"

def testBiKmeans(num_clusters=1, randSeed = seed):
    X_test = np.genfromtxt('testdata/X_test.csv', delimiter=',')
    y_test = np.genfromtxt('testdata/y_test.csv', delimiter=',')

    np.random.seed(seed)
    random.seed(seed)
    _, clusterAssignments = kMeans(dataSet=X_test, k=num_clusters, random_state=randSeed, cpp_reproduce=False)

    labels = [int(row[0]) for row in clusterAssignments.tolist()]

    accuracy = accuracy_score(y_test, labels)
    print("The accuracy is: ", accuracy)
    assert accuracy == 0.3142857142857143, "The accuracies do not match"



if __name__ == "__main__":
    testKmeans(1)
    testEuclideanDist()
    testBiKmeans(1)