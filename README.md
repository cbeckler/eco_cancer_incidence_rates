# Predicting cancer incidence associated with environmental pollutants

  
 ### Why we choose this project

A 2016 study out of Hong Kong, <a href="https://aacrjournals.org/cebp/article/25/5/839/71066/Cancer-Mortality-Risks-from-Long-term-Exposure-to">Cancer Mortality Risks from Long-term Exposure to Ambient Fine Particle</a>,  showed that long-term exposure to pollution rates of PM2.5 (ambient fine particulate matter) are associated with a higher risk of cancer in various organs. In fact, the study showed that for every 10 µg/m3 of increased PM2.5 exposure <a href="https://www.aacr.org/patients-caregivers/progress-against-cancer/air-pollution-associated-cancer/">increased the risk of dying from cancer by 22%</a>.
<BR><BR>
While the cancer risk of air pollutants is considered a clear link, the link between <a href="https://www.nature.com/articles/s41370-019-0135-4">ozone exposure and cancer incidence isn't as clear</a>. Studies show that while ozone increases the risk of lunch cancer, exposure does not increase the risk or mortality of other cancers. 
<BR><BR>
Our team's interest and experience in community health, and the environmental concerns that affect it, are what led us to create this project. We have scaled the data down to represent select counties in the United States.
<BR>
<HR>

  
### Communication Protocols
<strong>Type of data used:</strong><BR>
  • We are using <a href="#sources"> data sources</a> from Kaggle and the CDC, primarily in CSV form.
<BR><BR>
 <Strong> Our mission is to predict the following:</strong> <br>
• Do the levels of air particulate matter affect the number of cancer instances in the United States?
<BR>
• Is the rate of cancer incidence in counties with more pollution higher than in those with moderate and lower PM rates?
<BR>
• Are specific years more impactful than others?
<BR>
• Is there a significant correlation between cancer incidence and ozone exposure?
<BR><BR>
<strong>Communication Methods</strong>
<BR>
• Slack for daily communication
<BR>
• Github for sharing resources
<BR>
• Meeting 2-3 times a week via Zoom  
<BR>
<strong> Team members and their roles:</strong><Br>
<a href="https://github.com/cbeckler/final_project/tree/cb_etl">Charlie Beckler</a> - Project leader, ETL, data engineering
<BR>
 <a href="https://github.com/cbeckler/final_project/tree/kp_etl">Katia Paredes</a> - ETL, data engineering, web development
<BR>
 <a href="https://github.com/cbeckler/final_project/tree/mg_SQL">Meg Grooms</a> - ERD, database administator, writer
<BR>
 <a href="https://github.com/cbeckler/final_project/tree/cw_mlm"> Cassidy Ward</a> - Machine learning/ big data engineer, web development

<BR>
<HR>

### Machine Learning Model 
The goal of the Machine Leanring Model is to ingest the inputs of all counties IDs/FIPS along with the max, min, and mean values for both air pollutants (PM) and Ozone (oz) and the cancer incidence trends associated for years 2001-2014. The model will then predict and output future trends of cancer incidence for each location. The slection of a machine learning model was based on several factors. The input data is labeled so a supervised learning model was selected. To answer the questions a classification is the best fit. Support Vector Machine (SVM) was then considered upon because of its ability to analyze the data and label the proper class.
<BR><BR>
<HR>
ERD Schema
<img width = 1000 src="https://github.com/cbeckler/final_project/blob/mg_SQL/ERD/model_dataset_erd.png">
  
  
  
  
  
----
<a name="sources">
<BR>
  
  ### Data sources

<a href="https://www.kaggle.com/datasets/thedevastator/us-county-level-cancer-mortality-and-incidence-r?resource=download">Cancer Mortality & Incidence Rates</a>
<BR>
<a href="https://data.cdc.gov/Environmental-Health-Toxicology/Daily-PM2-5-Concentrations-All-County-2001-2016/7vdq-ztk9">County-Level PM2.5, All Years</a>
<BR>
 <a href="https://data.cdc.gov/Environmental-Health-Toxicology/Daily-County-Level-Ozone-Concentrations-2001-2016/kmf5-t9yc">County-Level Ozone, All Years</a>
<BR>

