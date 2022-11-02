from sklearn import tree
import numpy as np


def decisionTreeClassifier(Xtrain, Xtest, Ytrain, Ytest):
    '''
    Returns a prediction based on the testing dataset
    '''
    classifier = tree.DecisionTreeClassifier()


    classifier = classifier.fit(Xtrain, Ytrain)

    prediction = classifier.predict(Xtest)

    return prediction