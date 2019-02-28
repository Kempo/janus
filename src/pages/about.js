import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import google from "../images/google-revenue.svg"
import facebook from "../images/facebook-revenue.svg"

import venture from '../images/venturebeat.svg'
import verge from '../images/verge.svg'
import reuters from '../images/reuters.svg'

import './about.css';

/*
  about the company and WHY this
*/
const aboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className="claim-box" style={{ backgroundColor: "#f7f7f7" }}>
      <h2 className="claim-text"> You should be awarded for the use of your data. </h2>
    </div>

    <div style={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}>
      <div className="infographic" style={{ maxWidth: `445px` }}>
        <a href="https://www.fool.com/investing/general/2015/06/14/how-does-google-make-money-ads-ads-ads.aspx"> <img src={google} alt="google revenue"></img></a>
      </div>
      <span style={{ flex: "1 1 auto" }}> </span>
      <div className="infographic" style={{ maxWidth: '445px' }}>
        <a href="https://www.investopedia.com/tech/how-much-can-facebook-potentially-make-selling-your-data"> <img src={facebook} alt="facebook revenue"></img> </a>
      </div>
    </div>

    <div className="claim-box" style={{ backgroundColor: "#f7f7f7"}}>
      <h2 className="claim-text"> You should be the primary steward of your data. </h2>
    </div>

    <div style={{ display: "flex", flexDirection: "row", marginBottom: "1.45rem", flexWrap: "wrap" }}>
    <div className="headline">
    <a href="https://www.reuters.com/article/us-facebook-cambridge-analytica-regulati-idUSKCN1GU01A"> <img src={reuters} alt="reuters"></img> </a>
    </div>
    <div className="headline">
    <a href="https://venturebeat.com/2019/02/24/were-giving-away-more-personal-data-than-ever-despite-growing-risks/">  <img src={venture} alt="venture"></img> </a>
    </div>

    <div className="headline">
    <a href="https://www.theverge.com/2013/12/6/5181472/brightest-flashlight-free-ftc-location-data-settlement"> <img src={verge} alt="verge"></img> </a>
    </div>
    </div>

    <div className="claim-box" style={{ backgroundColor: "white", marginBottom: 0 }}>
      <h1 className="claim-text"> Be empowered with your data using Janus. </h1>
    </div>
    <div className="claim-box" style={{ backgroundColor: "white", marginBottom: "25vh" }}> 
      <h2 className="claim-text"> A browser extension that does data your way. </h2>
    </div>

  </Layout>
)

export default aboutPage;
