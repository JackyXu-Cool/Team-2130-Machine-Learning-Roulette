import numpy as np


def splitDataset(X, ylabel, percent_to_split):
    '''
    Splits the input dataset and y-label based on the percentage provided
    If a percentage is not provided, a default value of 70 is used instead.
    '''
    if percent_to_split < 0 or percent_to_split > 100:
        # handle invalid input
        percent_to_split = 70
    percentage = percent_to_split / 100

    Xrow,_ = X.shape
    XrowIndex = np.ceil(Xrow * percentage)

    Xtrain = X[:XrowIndex,:]
    Xtest = X[XrowIndex:,:]

    Yrow,_ = ylabel.shape
    YrowIndex = np.ceil(Yrow * percentage)
    Ytrain = ylabel[:YrowIndex,:]
    Ytest = ylabel[YrowIndex:,:]


    return Xtrain, Xtest, Ytrain, Ytest