import React from 'react'
import './styles.css'

const Card = ({ avatar, name }) => {
    return (
        <div className="card-container">
            <div className="container-avatar">
                <img className="avatar" src={avatar} alt={name} />
            </div>
            <p className="name">{name}</p>
        </div>
    )
}

export default Card