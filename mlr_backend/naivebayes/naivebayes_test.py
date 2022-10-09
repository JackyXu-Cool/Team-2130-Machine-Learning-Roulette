import numpy as np
from naivebayes import * 
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from os import getcwd

def testNaiveBayes():
    curr = getcwd()
    X_data = np.genfromtxt(f'{curr}/mlr_backend/testdata/X_test.csv', delimiter=',')
    y_data = np.genfromtxt(f'{curr}/mlr_backend/testdata/y_test.csv', delimiter=',')

    X_train, y_train, X_test, y_test = split_data(X_data, y_data)

    class_summary = naive_bayes(X_train, y_train)
    y_pred = predict(X_test, class_summary)
    print("Own Model accuracy: {0:.3f}".format(accuracy_score(y_test, y_pred)))

    model = GaussianNB()
    model.fit(X_train, y_train)
    scikit_y_pred = model.predict(X_test)
    print("Scikit-learn GaussianNB accuracy: {0:.3f}".format(accuracy_score(y_test, scikit_y_pred)))

    assert accuracy_score(y_test, y_pred) == accuracy_score(y_test, scikit_y_pred), "The accuracies do not match"

if __name__ == "__main__":
    testNaiveBayes()
