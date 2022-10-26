from sklearn import tree
import numpy as np


def decisionTreeClassifier(dataset,testing_dataset):
    '''
    Returns a prediction based on the testing dataset
    '''
    class_label = dataset[:, -1] # for last column
    dataset = dataset[:, :-1]
    classifier = tree.DecisionTreeClassifier()


    classifier = classifier.fit(dataset, class_label)

    prediction = classifier.predict(testing_dataset)

    return prediction