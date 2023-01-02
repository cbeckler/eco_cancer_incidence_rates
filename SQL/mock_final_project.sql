-- Create table for county
CREATE TABLE county (
     county_name varchar(40) NOT NULL,
     fips_no varchar(6) NOT NULL,
     PRIMARY KEY (fips_no)
);


-- Create table for cancer rates
-- add uniques here after model dataset
CREATE TABLE cancer_rates (
	avg_adj_rates varchar (10) NOT NULL,
	avg_annual_count varchar (10) NOT NULL,
	recent_trends varchar (10) NOT NULL,
	fips_no varchar (6) NOT NULL,
	PRIMARY KEY (fips_no)
);


-- create table for model_dataset
-- update as necessary
CREATE TABLE model_dataset (
	fips_no varchar (6) NOT NULL,
	PRIMARY KEY (fips_no)
);


-- create tale for ozone pollution
CREATE TABLE ozone_pollution (
	fips_no varchar (6) NOT NULL,
	max_pred varchar (10) NOT NULL,
	min_pred varchar (10) NOT NULL,
	mean_pred varchar (10) NOT NULL,
	PRIMARY KEY (fips_no)
);

