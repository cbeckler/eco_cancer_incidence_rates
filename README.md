# Predicting cancer incidence associated with environmental pollutants

  
 ### Why we choose this project

A 2016 study out of Hong Kong, <a href="https://aacrjournals.org/cebp/article/25/5/839/71066/Cancer-Mortality-Risks-from-Long-term-Exposure-to">Cancer Mortality Risks From Long-term Exposure to Ambient Fine Particle</a>,  showed that long-term exposure to pollution rates of PM2.5 (ambient fine particulate matter) is associated with a higher risk of cancer in various organs. In fact, the study showed that every 10 µg/m3 of increased PM2.5 exposure <a href="https://www.aacr.org/patients-caregivers/progress-against-cancer/air-pollution-associated-cancer/">increased the risk of dying from cancer by 22%</a>.
<BR><BR>
While the cancer risk of air pollutants is considered a clear link, the link between <a href="https://www.nature.com/articles/s41370-019-0135-4">ozone exposure and cancer incidence isn't as straightforward</a>. Studies show that while ozone increases the risk of lunch cancer, exposure does not increase the risk or mortality of other cancers. 
<BR><BR>
Our team's interest and experience in community health, and the environmental concerns that affect it, are what led us to create this project. We have scaled the data down to represent select counties in the United States.
<BR>
<HR>

<a name="backup">  

###  
  
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
<a href="https://github.com/cbeckler">Charlie Beckler</a> - Project leader, ETL, data engineering
<BR>
 <a href="https://github.com/katiarp">Katia Paredes</a> - ETL, machine learning, web development
<BR>
 <a href="https://github.com/meggrooms">Meg Grooms</a> - ERD, database administator, slideshow
<BR><a href="https://github.com/cmwardcode"> Cassidy Ward</a> - Machine learning/big data engineer, web development

<BR>
<HR>

### Machine Learning Model 
The goal of the Machine Learning Model is to ingest the inputs of all counties IDs/FIPS along with the max, min, and mean values for both air pollutants (PM) and Ozone (oz) and the cancer incidence trends associated for years 2001-2014. The model will then predict and output future trends of cancer incidence for each location. The selection of a machine learning model was based on several factors. The input data is labeled so a supervised learning model was selected. A classification is the best fit for our data. Support Vector Machine (SVM) was also considered because of its ability to analyze the data and label the proper class.
<BR><BR>


## Project Maps

• Map here<BR>
• Map here<BR>
• Map here<BR>

<BR><BR>
<HR>
ERD Schema
<BR>
<a href="https://app.quickdatabasediagrams.com/#/d/Bo92Js">See ERD Scheme online </a>
<img width = 600 src="https://github.com/cbeckler/eco_cancer_incidence_rates/blob/main/Database/ERD/Screenshot%202023-01-19%20at%201.59.26%20PM.png">
<BR><BR>
 
### <a href="https://docs.google.com/presentation/d/1th906EIn5OX-S-B3GdT8gL4d71oXpQRHXfPzZ-eeQrI/edit?usp=sharing">View the Slideshow</a>
<BR>
<a href="https://docs.google.com/presentation/d/1th906EIn5OX-S-B3GdT8gL4d71oXpQRHXfPzZ-eeQrI/edit?usp=sharing"><img src="https://github.com/cbeckler/eco_cancer_incidence_rates/blob/main/Slideshow/slideshow_title.png"></a>

  
  
  
----
<a name="sources">
 
<BR>
<HR>
 <a href="https://data.cdc.gov/Environmental-Health-Toxicology/Daily-County-Level-Ozone-Concentrations-2001-2016/kmf5-t9yc">County-Level Ozone, All Years</a>
<BR>
<a href="https://https://www.kaggle.com/datasets/thedevastator/us-county-level-cancer-mortality-and-incidence-r?resource=download>Cancer Mortality & Incidence Rates</a>
<BR>
<a href="*https://data.cdc.gov/Environmental-Health-Toxicology/Daily-PM2-5-Concentrations-All-County-2001-2016/7vdq-ztk9">Daily PM2.5 Concentrations, All Counties</a>
<BR>         
<a href="#backup"> Go back up</a>
