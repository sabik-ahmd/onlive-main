import React from 'react'
import Card from "react-bootstrap/Card";
export default function AboutCard2() {
  return (
    <Card className="quote-card-view">
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Ahammad sabik </span>
                <br />
                <br/>
                1. BSc (Maths, Cs) : St.Philomena College <span className="purple">  Result : 8.4 CGPA</span>
                <br />
                | 2021 - 2024 |   | Manglore University |
                <br />
                <br />
                2. PUC (PCMB) : GPUC Puttur <span className="purple">  Result : 82 %</span>
                <br />
                | 2019 - 2021 |
                <br />
                <br />
                3. SSLC  : Sri RamaKrishna High School  <span className="purple">  Result : 92 %</span>
                <br />
                | 2017 - 2019 |
                <br />
                <br />
            </p>
            <p style={{ color: "rgb(155 126 172)" }}>
                "The function of education is to teach one to think intensively and to think critically. 
                Intelligence plus character — that is the goal of true education."{" "}
            </p>
            <footer className="blockquote-footer"> - Martin Luther King Jr.</footer>
            </blockquote>
        </Card.Body>
    </Card>
  )
}
