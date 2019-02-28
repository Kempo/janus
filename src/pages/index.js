import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Particles from 'react-particles-js';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`janus`, `application`, `react`]} />
            
            <div style={{ 
              top: 0, 
              left: 0, 
              right: 0, 
              position: "absolute", 
              pointerEvents: "none" }}>

            <Particles 

            height="100vh"
            width="100vw"
            
            params={{
              "particles": {
                "color": {
                  "value": "random"
                },
                "opacity": {
                  "value": .5
                },
                "number": {
                  "value": 75
                },
                "size": {
                  "value": 4
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#000000",
                  "opacity": 0.2,
                  "width": 1
                }
              } 
            }}/> 

            </div>
    
    <div style={{ marginTop: "25vh" }}>
      <h1 style={{ fontSize: "2.75rem" }}>Welcome to the new age of privacy.</h1>
      <p style={{ fontSize: "1.15rem" }}>Your data. Your choice. </p>
    </div>

  </Layout>
)
   
export default IndexPage;
