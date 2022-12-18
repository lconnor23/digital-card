import React from "react"

export default function Info(){
    return (
        <div className = "info">
            <img src = "/images/headshot-small.png" />
            <div className = "body">
                <h1>Laura Connor</h1>
                <h3>Software Engineer</h3>
                <button><a href="mailto:lauracodes1@gmail.com"><i className ="fa-regular fa-envelope"></i>          Email</a></button>
            </div>
        </div>
    )
}