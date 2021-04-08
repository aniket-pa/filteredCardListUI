import {React} from 'react';
import './cardlist.css';
import {Card} from '../card/card.component'

const CardList = props =>{
    return (
    <div className="card-list">
        { 
          props.members.map( member=> <Card key={member.id} member={member} /> )
        } 
    </div>)
}

export default CardList