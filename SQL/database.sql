-- Create table for county
-- DROP TABLE county
CREATE TABLE county (
     county_name varchar(40) NOT NULL,
     fips_no INT(6) NOT NULL,
     PRIMARY KEY (fips_no)
);

SELECT * FROM county



-- Create table for cancer rates
-- add uniques here after model dataset
-- DROP TABLE cancer rates
CREATE TABLE cancer_rates (
	avg_adj_rates varchar (10) NOT NULL,
	avg_annual_count varchar (10) NOT NULL,
	recent_trends varchar (10) NOT NULL,
	fips_no INT NOT NULL,
	PRIMARY KEY (fips_no)
);

SELECT * FROM cancer_rates



-- create table for model_dataset
-- update as necessary
-- DROP TABLE model_dataset
CREATE TABLE model_dataset (
	fips_no INT NOT NULL,
	PRIMARY KEY (fips_no)
);

SELECT * FROM model_dataset



-- create table for ozone pollution
-- DROP TABLE ozone_pollution
CREATE TABLE ozone_pollution (
	fips_no INT NOT NULL,
	max_pred varchar (10) NOT NULL,
	min_pred varchar (10) NOT NULL,
	mean_pred varchar (10) NOT NULL,
	PRIMARY KEY (fips_no)
);

SELECT * FROM ozone_pollution




-- create table for pm_pollution
--DROP TABLE pm_pollution
CREATE TABLE pm_pollution (
	fips_no INT NOT NULL,
	max_pred DEC NOT NULL,
	min_pred DEC NOT NULL,
	mean_pred DEC NOT NULL,
	PRIMARY KEY (fips_no)

);

SELECT * FROM pm_pollution
