import numpy as np


def splitDataset(X, ylabel, percent_to_split=70):
    '''
    Splits the input dataset and y-label based on the percentage provided
    If a percentage is not provided, a default value of 70 is used instead.
    '''
    if percent_to_split < 0 or percent_to_split > 100:
        # handle invalid input
        percent_to_split = 70
    percentage = percent_to_split / 100

    Xrow,_ = X.shape
    XrowIndex = int(np.ceil(Xrow * percentage))

    Xtrain = X[:XrowIndex,:]
    Xtest = X[XrowIndex:,:]

    Yrow = ylabel.shape[0]
    YrowIndex = int(np.ceil(Yrow * percentage))
    Ytrain = ylabel[:YrowIndex]
    Ytest = ylabel[YrowIndex:]


    return Xtrain, Xtest, Ytrain, Ytest


def testSplitDataset():
    X = np.genfromtxt('testdata/X_test.csv', delimiter=',')
    y = np.genfromtxt('testdata/y_test.csv', delimiter=',')
    Xtrain1, Xtest1, ytrain1,ytest1 = splitDataset(X,y)

    assert Xtrain1.shape[0]==74 and ytrain1.shape[0] == 74 and Xtrain1.shape[1] == X.shape[1], "The split dimensions is not correct"


    Xtrain2, Xtest2, ytrain2,ytest2 = splitDataset(X,y,50)

    assert Xtrain2.shape[0]==53 and ytrain2.shape[0] == 53 and Xtrain2.shape[1] == X.shape[1], "The split dimensions is not correct"