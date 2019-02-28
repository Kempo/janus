import React from "react"

const Question = ({number, question, answer, answerComponent}) => (
    <div style={{ padding: 50 }}>
        <h2> <b> {number} </b> {question} </h2>
        <p> {answer} </p>

        {answerComponent}
    </div>
)

export default Question;