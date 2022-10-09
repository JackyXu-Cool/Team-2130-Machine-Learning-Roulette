import numpy as np

def separate_classes(X, y):
    separated_classes = {}
    for i in range(len(X)):
        feature_values = X[i]
        class_name = y[i]
        if class_name not in separated_classes:
            separated_classes[class_name] = []
        separated_classes[class_name].append(feature_values)
    return separated_classes


def fit (X, y):
    separated_classes = separate_classes(X, y)
    class_summary = {}

    for class_name, feature_values in separated_classes.items():
        class_summary[class_name] = {
            'prior_prob': len(feature_values)/len(X),
            'summary': [i for i in get_std_and_mean(feature_values)],
        }
    return class_summary


def naive_bayes(X, y):
    '''
    Following lines were commented for possible future use.
    Currently, how to separate data into training set and test set is uncertain.
    In case Naive Bayes requires separation of training/test set and predicting,
    predict() function will be used.

    X_train, y_train, X_test, y_test = split_data(X, y)
    class_summary = fit(X_train, y_train)
    y_predicted = predict(X_test, class_summary)
    '''
    class_summary = fit(X, y)
    return class_summary

def get_std_and_mean(X):
    for feature in zip(*X):
        yield {
            'std' : np.std(feature),
            'mean' : np.mean(feature)
        }

def get_df(x, mean, std):
    return np.exp(-((x-mean)**2 / (2*std**2))) / (np.sqrt(2*np.pi)*std)

def predict(X, class_summary):
    MAPs = []

    for row in X:
        joint_prob = {}
        
        for class_name, features in class_summary.items():
            total_features = len(features['summary'])
            likelihood = 1

            for idx in range(total_features):
                feature = row[idx]
                mean = features['summary'][idx]['mean']
                stdev = features['summary'][idx]['std']
                df = get_df(feature, mean, stdev)
                likelihood *= df
            prior_prob = features['prior_prob']
            joint_prob[class_name] = prior_prob * likelihood

        MAP = max(joint_prob, key= joint_prob.get)
        MAPs.append(MAP)

    return MAPs

def split_data(X, y, weight = 0.7):
    dataset = np.concatenate((X, y.reshape(y.shape+(1,))), axis=1)
    train_length = int(dataset.shape[0] * weight)
    np.random.shuffle(dataset)
    return dataset[:train_length,:-1], dataset[:train_length,-1], dataset[train_length:,:-1], dataset[train_length:, -1]
