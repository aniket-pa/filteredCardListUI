import React from 'react'
import './card.styles.css'

export const Card = props =>{
return (
    <div className="card-container">
    <img src={`https://robohash.org/${props.member.id}?set=set2`}></img>
    <h1 key={props.member.id}>{props.member.name}</h1>
    <p > {props.member.email} </p>
    </div>
)

}