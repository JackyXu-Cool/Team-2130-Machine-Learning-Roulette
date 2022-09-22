import numpy as np
import random

# Calculates the Euclidean distance between two vectors
def distEuclid(vecA, vecB):
    return np.sqrt(sum(np.power(vecA - vecB, 2)))

def distCosine(vecA,vecB):
    normA = np.linalg.norm(vecA)
    normB = np.linalg.norm(vecB)
    sims = np.dot(vecA,vecB)/(normA * normB)
    dists = 1 - sims
    return dists

'''
randCent(), creates a set of k ran-dom  centroids  for  a  given  dataset.  
The  random  centroids  need  to  be  within  thebounds of the dataset. 
This is accomplished by finding the minimum and maximumvalues of each dimension 
in the dataset. 
Random values from 0 to 1.0 are then chosenand  scaled  by  the  range  and  
minimum  value  to  ensure  that  the  random  points  arewithin  the  bounds  
of  the  data.  
'''
def randCent(dataSet, k, random_state, cpp_reproduce):
    np.random.seed(random_state)
    n = np.shape(dataSet)[1]
    centroids = np.zeros((k,n), dtype=float)
    for j in range(n): #create random cluster centers
        minJ = min(dataSet[:,j])
        rangeJ = float(max(dataSet[:,j]) - minJ)

        randomFloats = np.empty(k)
        for i in range(k):
            if cpp_reproduce: 
                randInt = np.random.randint(256**4, dtype='<u4')
            else: randInt = random.randint(0,(256**4)-1)
            rand = randInt / 256**4
            randomFloats[i] = rand
        centroids[:,j] = minJ + rangeJ * randomFloats

    return centroids 

# kMeans function
def kMeans(dataSet, k, distMeas=distEuclid, createCent=randCent, random_state=0, cpp_reproduce=True):
    m = np.shape(dataSet)[0]
    clusterAssment = np.zeros((m,2)) #create mat to assign data points 
                                  #to a centroid, also holds SE of each point
    centroids = createCent(dataSet, k, random_state, cpp_reproduce)
    clusterChanged = True
    while clusterChanged:
        clusterChanged = False
        for i in range(m): #for each data point assign it to the closest centroid
            minDist = np.inf
            minIndex = -1
            for j in range(k):
                distJI = distMeas(centroids[j,:],dataSet[i,:])
                if (distJI < minDist):
                    minDist = distJI
                    minIndex = j
            clusterAssment[i] = minIndex,minDist**2
            if clusterAssment[i,0] != minIndex: clusterChanged = True
        
        for cent in range(k):#recalculate centroids
            ptsInClust = dataSet[np.nonzero(clusterAssment[:,0]==cent)[0]] #get all the point in this cluster - Note: this was incorrect in the original distribution.
            if(len(ptsInClust)!=0):
                centroids[cent,:] = np.mean(ptsInClust, axis=0) #assign centroid to mean - Note condition was added 10/28/2013
    return centroids, clusterAssment


'''
To overcome the problem of poor clusters because of k-means getting caught in a local minimum, another algorithm has been developed. 
This algorithm, known as bisecting k-means, starts out with one cluster and then splits the cluster in two. 
It then chooses a cluster to split. The cluster to split is decided by minimizing the SSE. 
This splitting based on the SSE is repeated until the user-defined number of clusters is attained.
'''
def biKmeans(dataSet, k, distMeas=distEuclid):
    m = np.shape(dataSet)[0]
    clusterAssment = np.mat(np.zeros((m,2)))
    centroid0 = np.mean(dataSet, axis=0).tolist()[0]
    centList =[centroid0] #create a list with one centroid

    for j in range(m): #calc initial Error
        clusterAssment[j,1] = distMeas(np.mat(centroid0), dataSet[j,:])**2

    while (len(centList) < k):
        lowestSSE = np.inf
        for i in range(len(centList)):
            ptsInCurrCluster = dataSet[np.nonzero(clusterAssment[:,0].A==i)[0],:] #get the data points currently in cluster i
            centroidMat, splitClustAss = kMeans(ptsInCurrCluster, 2, distMeas)
            sseSplit = sum(splitClustAss[:,1]) #compare the SSE to the currrent minimum
            sseNotSplit = sum(clusterAssment[np.nonzero(clusterAssment[:,0].A!=i)[0],1])
            #print("sseSplit, and notSplit: ",sseSplit,sseNotSplit)
            if (sseSplit + sseNotSplit) < lowestSSE:
                bestCentToSplit = i
                bestNewCents = centroidMat
                bestClustAss = splitClustAss.copy()
                lowestSSE = sseSplit + sseNotSplit

        bestClustAss[np.nonzero(bestClustAss[:,0] == 1)[0],0] = len(centList) #change 1 to 3,4, or whatever
        bestClustAss[np.nonzero(bestClustAss[:,0] == 0)[0],0] = bestCentToSplit
        
        centList[bestCentToSplit] = bestNewCents[0,:].tolist()[0] #replace a centroid with two best centroids 
        centList.append(bestNewCents[1,:].tolist()[0])
        clusterAssment[np.nonzero(clusterAssment[:,0].A == bestCentToSplit)[0],:]= bestClustAss #reassign new clusters, and SSE

    return centList, clusterAssment