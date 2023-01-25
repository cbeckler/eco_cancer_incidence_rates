import React from 'react'

import { Helmet } from 'react-helmet'

import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>Eco Cancer Incidence Rates</title>
        <meta property="og:title" content="Eco Cancer Incidence Rates" />
      </Helmet>
      <div data-role="Header" className="index-navbar-container">
        <div className="index-navbar">
          <div className="index-left-side">
            <div className="index-links-container">
              <a href="#resources" className="index-link Anchor">
                Overview
              </a>
              <a href="#inspiration" className="index-link1 Anchor">
                Data Sources
              </a>
              <a href="#process" className="index-link2 Anchor">
                Visualizations
              </a>
              <a href="#ourstory" className="index-link3">
                <span className="Anchor">Details</span>
                <br></br>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="index-hero">
        <div className="index-content-container">
          <div className="index-hero-text">
            <h1 className="index-heading">
              Predicting Cancer Incidence Associated with Environmental
              Pollutants
            </h1>
            <span className="index-text02">
              This is a webpage to showcase the final project for the Data
              Science and Visualization Boot Camp at UC San Diego Extended
              Studies
            </span>
            <a
              href="https://github.com/cbeckler/eco_cancer_incidence_rates"
              target="_blank"
              rel="noreferrer noopener"
              className="index-cta-btn Anchor button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div id="inspiration" className="index-data-sources">
        <div className="index-heading-container">
          <h2 className="index-text03">
            <span className="Section-Heading">Data Sources</span>
            <br></br>
          </h2>
        </div>
        <div className="index-cards-container">
          <div className="index-features-card">
            <div className="index-icon-container">
              <svg viewBox="0 0 1024 1024" className="index-icon">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="index-text-container">
              <a
                href="https://www.kaggle.com/datasets/thedevastator/us-county-level-cancer-mortality-and-incidence-r?resource=download"
                target="_blank"
                rel="noreferrer noopener"
                className="index-heading1 Card-Heading"
              >
                Cancer &amp; Incidence Rates (link)
              </a>
              <span className="index-text06">
                Country-level cancer mortality and incidence rates in the United
                States between 2000-2014.
              </span>
            </div>
          </div>
          <div className="index-features-card1">
            <div className="index-icon-container1">
              <svg viewBox="0 0 1024 1024" className="index-icon03">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="index-text-container1">
              <a
                href="https://data.cdc.gov/Environmental-Health-Toxicology/Daily-County-Level-Ozone-Concentrations-2001-2016/kmf5-t9yc"
                target="_blank"
                rel="noreferrer noopener"
                className="index-heading2 Card-Heading"
              >
                Ozone Concentrations (link)
              </a>
              <span className="index-text07">
                Country-level ozone concentrations between 2001-2016
              </span>
            </div>
          </div>
          <div className="index-features-card2">
            <div className="index-icon-container2">
              <svg viewBox="0 0 1024 1024" className="index-icon06">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="index-text-container2">
              <a
                href="https://data.cdc.gov/Environmental-Health-Toxicology/Daily-PM2-5-Concentrations-All-County-2001-2016/7vdq-ztk9"
                target="_blank"
                rel="noreferrer noopener"
                className="index-heading3 Card-Heading"
              >
                PM2.5 Concentrations (link)
              </a>
              <span className="index-text08">
                Daily PM2.5 Concentrations 2001-2016
              </span>
            </div>
          </div>
          <div className="index-features-card3">
            <div className="index-text-container3"></div>
          </div>
          <div className="index-features-card4">
            <div className="index-icon-container3">
              <svg viewBox="0 0 1024 1024" className="index-icon09">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="index-text-container4">
              <a
                href="https://katiarp.github.io/visualization_map/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-heading4 Card-Heading"
              >
                Interactive Mapped Data (link)
              </a>
              <span className="index-text09 Card-Text">
                To represent our plotted data our team developed an interactive
                leafly map..
              </span>
            </div>
          </div>
          <div className="index-features-card5">
            <div className="index-text-container5"></div>
          </div>
        </div>
      </div>
      <div id="process" className="index-visualizations">
        <div className="index-heading-container1">
          <h1 className="index-text10 Section-Heading">Visualizations</h1>
          <span className="index-text11 Section-Text">
            Developed to display the most notable data and project development
            concepts
          </span>
        </div>
        <div className="index-cards-container1">
          <div className="index-service-card">
            <img
              alt="image"
              src="/playground_assets/confusion_matrix1-1000w.png"
              className="index-image"
            />
          </div>
          <div className="index-service-card1">
            <img
              alt="image"
              src="/playground_assets/feature_importances_top101-800w.png"
              className="index-image1"
            />
          </div>
          <div className="index-service-card2">
            <img
              alt="image"
              src="/playground_assets/tree-500w.png"
              className="index-image2"
            />
          </div>
        </div>
        <div className="index-cards-container2">
          <div className="index-service-card3">
            <img
              alt="image"
              src="/playground_assets/classes_before_resampling-1300w.png"
              className="index-image3"
            />
          </div>
          <div className="index-service-card4">
            <img
              alt="image"
              src="/playground_assets/feature_importances_top101-800w.png"
              className="index-image4"
            />
          </div>
          <div className="index-service-card5">
            <img
              alt="image"
              src="/playground_assets/classes_after_resampling1-1300w.png"
              className="index-image5"
            />
          </div>
        </div>
      </div>
      <div className="index-team">
        <div className="index-heading-container2">
          <h1 className="index-text12 Section-Heading">Meet the Team</h1>
        </div>
        <div className="index-cards-container3">
          <div className="index-team-card">
            <a
              href="https://github.com/cbeckler"
              target="_blank"
              rel="noreferrer noopener"
              className="index-link4"
            >
              <div className="index-avatar-container">
                <svg viewBox="0 0 1024 1024" className="index-icon12">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
            </a>
            <span className="index-name Card-Heading">Charlie Beckler</span>
            <span className="index-position">
              <span className="Card-Text">
                Team Lead
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="Card-Text"></br>
              <span className="Card-Text">  Engineer</span>
              <br></br>
            </span>
          </div>
          <div className="index-team-card1">
            <a
              href="https://github.com/katiarp"
              target="_blank"
              rel="noreferrer noopener"
              className="index-link5"
            >
              <div className="index-avatar-container1">
                <svg viewBox="0 0 1024 1024" className="index-icon14">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
            </a>
            <span className="index-name1 Card-Heading">Katia Paredes</span>
            <span className="index-position1">
              <span className="Card-Text">    ETL, Modeling,</span>
              <br className="Card-Text"></br>
              <span className="Card-Text"> Web Development</span>
              <br></br>
            </span>
          </div>
          <div className="index-team-card2">
            <a
              href="https://github.com/meggrooms"
              target="_blank"
              rel="noreferrer noopener"
              className="index-link6"
            >
              <div className="index-avatar-container2">
                <svg viewBox="0 0 1024 1024" className="index-icon16">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
            </a>
            <span className="index-name2 Card-Heading">Meg Grooms</span>
            <span className="index-position2">
              <span>
                Database Management
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>      Communications</span>
            </span>
          </div>
          <div className="index-team-card3">
            <a
              href="https://github.com/cmwardcode"
              target="_blank"
              rel="noreferrer noopener"
              className="index-link7"
            >
              <div className="index-avatar-container3">
                <svg viewBox="0 0 1024 1024" className="index-icon18">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
            </a>
            <span className="index-name3 Card-Heading">Cassidy Ward</span>
            <span className="index-position3">
              <span>
                         Modeling
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Web Development</span>
            </span>
          </div>
        </div>
      </div>
      <div id="ourstory" className="index-our-story">
        <h1 className="index-text27 Section-Heading">Project Breakdown</h1>
        <div className="index-heading-container3"></div>
        <div className="index-cards-container4">
          <div className="index-left-section">
            <div className="index-video-container"></div>
            <div className="index-content-container1">
              <span className="index-heading5 Card-Heading">
                Why We Chose This Project:
              </span>
              <span className="index-text28">
                <span>
                  A 2016 study out of Hong Kong, Cancer Mortality Risks From
                  Long-term Exposure to Ambient Fine Particle, showed that
                  long-term exposure to pollution rates of PM2.5 (ambient fine
                  particulate matter) is associated with a higher risk of cancer
                  in various organs. In fact, the study showed that every 10
                  µg/m3 of increased PM2.5 exposure increased the risk of dying
                  from cancer by 22%.
                </span>
                <br></br>
                <br></br>
                <span>
                  While the cancer risk of air pollutants is considered a clear
                  link, the link between ozone exposure and cancer incidence
                  isn&apos;t as straightforward. Studies show that while ozone
                  increases the risk of lung cancer, exposure does not increase
                  the risk or mortality of other cancers.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our team&apos;s interest and experience in community health,
                  and the environmental concerns that affect it, are what led us
                  to create this project. We have scaled the data down to
                  represent select counties in the United States.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
