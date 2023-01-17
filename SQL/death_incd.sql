
CREATE TABLE "Cancer_Death" (
    "index" INT   NOT NULL,
    "county" VARCHAR   NOT NULL,
    "FIPS" INT   NOT NULL,
    "met_objective" VARCHAR   NOT NULL,
    "age_adj_death_rate" DEC   NOT NULL,
    "Lower_95_confid_interval_death" DEC   NOT NULL,
    "Upper_95_confid_interval_death" DEC   NOT NULL,
    "Avg_deaths_year" INT   NOT NULL,
    "Recent_trend" VARCHAR   NOT NULL,
    "recent_5year_trend_death" FLOAT   NOT NULL,
    "Lower_95_confid_interval_trend" FLOAT   NOT NULL,
    "Upper_95_confid_interval_trend" FLOAT   NOT NULL
);

CREATE TABLE "Cancer_Incidence" (
    "index" INT   NOT NULL,
    "county" VARCHAR   NOT NULL,
    "FIPS" INT   NOT NULL,
    "Age_adj_incidence_rate" DEC   NOT NULL,
    "Lower_95_confid_interval" DEC   NOT NULL,
    "Upper_95_confid_interval" DEC   NOT NULL,
    "Avg_annual_Count" INT   NOT NULL,
    "Recent_trend" VARCHAR   NOT NULL,
    "recent_5year_trend_incidence" FLOAT   NOT NULL,
    "Lower_95_confid_interval_incidence" FLOAT   NOT NULL,
    "Upper_95_confid_interval_incidence" FLOAT   NOT NULL,
    CONSTRAINT "pk_Cancer_Incidence" PRIMARY KEY (
        "index","FIPS"
     )
);

CREATE TABLE "Ozone" (
    "index" INT   NOT NULL,
    "county" VARCHAR   NOT NULL,
    "FIPS" INT   NOT NULL,
    "age_adj_incidence_rate" DEC   NOT NULL,
    "Lower_95_confid_interval" DEC   NOT NULL,
    "Upper_95_confid_interval" DEC   NOT NULL,
    "avg_annual_count" INT   NOT NULL,
    "recent_trand" VARCHAR   NOT NULL,
    "recent_5year_trend_incidence" FLOAT   NOT NULL,
    "Lower_95_confid_interval_ozone" FLOAT   NOT NULL,
    "Upper_95_confid_interval_ozone" FLOAT   NOT NULL,
    "03_max_pred" FLOAT   NOT NULL,
    "03_med_pred" FLOAT   NOT NULL,
    "03_mean_pred" FLOAT   NOT NULL
);

ALTER TABLE "Cancer_Incidence" ADD CONSTRAINT "fk_Cancer_Incidence_index_FIPS" FOREIGN KEY("index", "FIPS")
REFERENCES "Cancer_Death" ("index", "FIPS");

ALTER TABLE "Ozone" ADD CONSTRAINT "fk_Ozone_index" FOREIGN KEY("index")
REFERENCES "Cancer_Incidence" ("index");

ALTER TABLE "Ozone" ADD CONSTRAINT "fk_Ozone_FIPS" FOREIGN KEY("FIPS")
REFERENCES "Cancer_Death" ("FIPS");

