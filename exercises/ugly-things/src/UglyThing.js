import React from 'react'


const UglyThing = props =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img className ="image">{props.imgUrl}</img>
        </div>
    )
}

export default UglyThing