import React from 'react'

const Card = (props) => {

    return (
        <div className="parent">
            <div className="card">
                <img src={props.image} alt="" />
                <h1 className="name">{props.name}</h1>
                <p>{props.para}</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card 