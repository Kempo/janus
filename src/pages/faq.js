import React from 'react';
import Layout from '../components/layout';

import SEO from "../components/seo"
import Question from '../components/question';

import psd from '../images/psd.svg'

import nopsd from '../images/nopsd.svg'

/**
 * the faq page that is linked to the vision and about page
 */
const faqPage = () => (
    <Layout> 
        <SEO title="FAQ" keywords={[`janus`, `application`, `react`]} />
        <h1> Frequently Asked Questions </h1>

        <Question 
            number="1)"
            question="Is Janus real?" 
            answer={ <p> <b> Sadly, no. </b> Janus was developed as a project by Aaron Chen for ENGL 182 at the University of Washington. </p> }
        /> 

        <Question 
            number="2)"
            question="What is Janus in one sentence?" 
            answer={ <p> <i> Janus is a browser extension that allows you to control who sees your data and rewards you for information you provide for advertising. </i> </p>}
        /> 

        <Question 
            number="3)"
            question="Why the name Janus?" 
            answer="Janus is the Greek mythological God of change, future, and choice. 
            He represents a new beginning for this industry. And you, the user, now
            have power and responsibility over your online data. "
        /> 

        <Question 
            number="4)"
            question="Why don't we just restrict ALL our data from being accessed?" 
            answer={<p>Much of the online content we see is funded by advertising, and 
                    would otherwise be only available to consumers for a fee (Christiansen).
                    If companies were suddenly restricted access to our data, then the products we see today would
                    <b> drastically </b> change in response.</p>}
        
        /> 

        <Question 
            number="5)"
            question="How does Janus work?" 
            answer="A key structure to Janus would be the use of PSDs, also known as Personal Data Stores (Kirkham)."
            answerComponent={
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}> 
                    <img src={psd} style={{ width: 300, padding: 10 }}></img>
                    <p> vs. </p>
                    <img src={nopsd} style={{ width: 300, padding: 10}}></img> 
                </div>
                <p> 
                PSDs are a centralized point of data storage that allows the removal of data duplicates, and allocates full power to the user.
                Advertising companies cannot access any specific data point without having permission explicitly given in the PSD.
                </p>
            </div>
            }
        /> 

        <Question 
            number="6)"
            question="Why do we delegate a third party to handle our data release?" 
            answer="Without a third party intermediary between the advertising ventures and the user, 
            you'd be personally saying 'YES' and 'NO' to thousands of data requests per day (Mundie). With Janus,
            you give us your baseline preferences and we intercede on behalf of you, releasing data that fits with your
            restrictions. All of this is done in the background of your usual web surfing."
        /> 

        <Question 
            number="7)"
            question="How can we trust you?" 
            answer={<div> <p> Transparency is <b> key </b> for us. That's why you can review your data release history and undo our actions. </p>
                    <p> This type of power is only because we utilise PSDs as the basis to our permissioned system. </p> </div>
                    }
        /> 

        <Question 
            number="8)"
            question="How do we get paid?" 
            answer={<div> 
                        <p> Janus users will be paid out for the data they choose to release. </p> 

                        <p> This reward is a minute portion of the total revenue generated by tech companies off of advertising that utilised user information.
                            As a result, users are incentivized to release information while companies can continue using personal information for targeted advertising.
                        </p>
                    </div>
            }
            answer="Janus users will be paid out for the data they choose to release. 
            This reward is a minute portion of the total revenue generated by tech companies off of advertising that utilised user information.
            As a result, users are incentivized to release information while companies can continue using personal information for targeted advertising."

        /> 

    </Layout>
)
export default faqPage;