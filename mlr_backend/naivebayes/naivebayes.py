from math import sqrt, pi, exp

'''
Step 1: Separate dataset by class
'''

def separate_class(dataSet):
    separated = {}
    for i in range(len(dataSet)):
        v = dataSet[i]
        class_val = v[-1]
        if class_val not in separated:
            separated[class_val] = []
        separated[class_val].append(v)
    return separated

'''
Step 2: Summarize dataset
'''

def mean(numbers):
    return sum(numbers)/float(len(numbers))

def stdev(numbers):
    average = mean(numbers)
    variance = sum([(x-average)**2 for x in numbers])/float(len(numbers)-1)
    return sqrt(variance)

def summarize(dataset):
    summaries = [(mean(column), stdev(column), len(column)) for column in zip(*dataset)]
    del(summaries[-1])
    return summaries

'''
Step 3: Summarize dataset by class using summarize()
'''
def summarize_by_class(dataset):
    separated = separate_class(dataset)
    summaries = {}
    for class_val, rows in separated.items():
        summaries[class_val] = summarize(rows)
    return summaries

'''
Step 4: Get probabilities by class
'''

def get_probability(x, mean, stdev):
    return (1/(sqrt(2*pi)*stdev))*exp(-((x-mean)**2)/2* (stdev**2))

def get_class_probability(summaries, row):
    all_rows = sum([summaries[label][0][2] for label in summaries])
    probabilities = {}
    for class_val, class_sum in summaries.items():
        probabilities[class_val] = summaries[class_val][0][2]/float(all_rows)
        for i in range(len(class_sum)):
            mean, stdev, _ = class_sum[i]
            probabilities[class_val] *= get_probability(row[i], mean, stdev)
    return probabilities

'''
Step 5: predict class for a given row
'''

def predict(summaries, row):
    probabilities = get_class_probability(summaries, row)
    best_label, best_prob = None, -1
    for class_val, prob in probabilities.items():
        if best_label is None or prob > best_prob:
            best_prob = prob
            best_label = class_val
    return best_label



def naive_bayes(train, test):
    summarize = summarize_by_class(train)
    predictions = []
    for row in test:
        output = predict(summarize, row)
        predictions.append(output)
    return predictions
