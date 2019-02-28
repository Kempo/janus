import React from "react";

import Layout from "../components/layout"

import SEO from "../components/seo"


import preferences from '../images/preferences-2.svg'
import history from '../images/history.svg'
import payment from '../images/payment.svg'


/**
 * what the company envisions
 */
const productPage = () => (
    <Layout> 
        <SEO title="Our Product" keywords={[`janus`, `application`, `react`]} />
        <div style={{ marginBottom: 100 }}>
            <h1> This is Janus. </h1>
            <p> We imagine a world where your data is managed your way. </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", marginBottom: 150 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>  
                <h2 style={{ width: "70%" }}> Add and check information you don't want to send. </h2>
            </div> {/* centered text */}
            <span style={{ flex: "1 1 auto" }}></span>
            <div> 
                <img alt="preferences" src={preferences} style={{ width: 500 }} ></img>
            </div> {/* preferences  */}
        </div>


        <div style={{ display: "flex", flexDirection: "row", marginBottom: 250 }}>

            <div> 
                <img alt="history" src={history} style={{ width: 600 }} ></img>
            </div> {/* preferences  */}
            
            <span style={{ flex: "1 1 auto" }}></span>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>  
                <h2 style={{ width: "60%" }}> View your data history and undo what you don't want known. </h2>
            </div> {/* centered text */}
        </div>

        <div style={{ height: "25vh", marginBottom: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            
            <img alt="payment" src={payment} style={{ width: 500, paddingBottom: 100 }} ></img>
            <h1> Get paid for the data you release. </h1>
        </div>


    </Layout>
)
export default productPage;