# Machine Learning Model
## Segment 1: Model Mock Up
<BR>
The model_data_ML_Mock.csv is the mock up of ther machine learning model inputs and outputs. The goal of the Machine Leanring Model is to ingest the inputs of all counties IDs/FIPS along with the max, min, and mean values for both air pollutants (PM) and Ozone (oz) and the cancer incidence trends associated for years 2001-2014. The model will then predict and output future trends of cancer incidence for each location. 
<BR>
Questions Machine Model will answer:
<BR>
• Do the levels of air particulate matter affect the number of cancer instances in the United States?
<BR>
• Is the rate of cancer incidence in counties with more pollution higher than in those with moderate and lower PM rates?
<BR>
• Are specific years more impactful than others?
<BR>
Machine Learning Model Selection:
<BR>
The input data is labeled so a supervised learning model was selected. To answer the questions a classification is the best fit. Support Vector Machine (SVM) was then considered upon because of it's ability to analyze the data and label the proper class. 
<BR>
<BR>
Segment 2:
Description of preliminary data Preprocessing:
The Preprocessing of the data was done by X dropping the ‘Index’, ‘FIPS’, and ‘Recent_Trends’ columns and taking in the PM2.5 and Ozone mean, median, and modes. And The output was the Recent Trend predictions.
Description of preliminary feature, engineering and preliminary feature selection, including their decision-making process:
Testing was done using SVM and Random Forest Models both with and without interpolated data. Further testing was done through trialing different kernel’s (RBF, Poly, linear). The decision-making process was made based on accuracy report of each instance. We then compared our models and decided as of now “cbeckler/final_project/blob/cb_etl/SVM_w_interpolated_data.ipynb” has the best formatting and accuracy.
Description of how data was split into training and testing sets:
The data was split into training and test sets through the 80/20 method using scikit-learn train_test_split function.
Explanation of model choice, including limitations and benefits:
Benefits of using a multiclass SVM include:
• It can handle multiple classes of data effectively, unlike binary SVMs which require one-vs-all or one-vs-one approaches for multi-class problems.
• It can handle non-linearly separable data by transforming the input space into a higher dimensional space where the data may be linearly separable.
• It is a powerful method for classification problems with a large number of classes.
<BR>
Limitations of using a multiclass SVM include:
• It may be computationally expensive for large datasets, especially if the number of classes is also large.
• It may not perform well if the data is highly imbalanced across classes.
• It can be sensitive to the choice of kernel function and the values of the regularization parameters.
• It is not well suited for problems with a lot of noise, as it tries to fit a hard margin which can cause overfitting.
• It is not suitable for problems with non-linearly separable data, as it will not be able to find a solution.
