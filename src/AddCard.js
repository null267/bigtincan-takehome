import React, {useState, useContext} from 'react';
import {CardContext} from './CardContext';

export default function AddCard() {
    
    const [card, setCard] = useState({});
    const { addCard } = useContext(CardContext);
    const handleChange = (event) => {
        event.preventDefault();
        addCard({...card, initials: card['firstName'][0].toUpperCase() + card['lastName'][0].toUpperCase(), id:id()});
        console.log(card);
    }

    return(
        <form className="NewCard" onSubmit={handleChange}>
            <input 
                className="FirstName"
                placeholder="First Name"
                type="text"
                onChange={event => setCard({...card, firstName: event.target.value})}
            />
            <input 
                className="LastName"
                placeholder="Last Name"
                type="text"
                onChange={event => setCard({...card, lastName: event.target.value})}
            />
            <input 
                className="Email"
                placeholder="Email Address"
                type="email"
                onChange={event => setCard({...card, email: event.target.value})}
            />
            <input 
                className="Address"
                placeholder="Address"
                type="text"
                onChange={event => setCard({...card, address: event.target.value})}
            />
            <input 
                className="Phone"
                placeholder="Phone Number"
                type="tel"
                onChange={event => setCard({...card, phone: event.target.value})}
            />
             <input 
                className="Website"
                placeholder="Website"
                type="text"
                onChange={event => setCard({...card, url: event.target.value})}
            />
            <input 
                className="Company"
                placeholder="Company"
                type="text"
                onChange={event => setCard({...card, company: event.target.value})}
            />
             <input 
                className="Motto"
                placeholder="Motto"
                type="text"
                // value={card['motto']}
                onChange={event => setCard({...card, phrase: event.target.value})}
            />
            <input className="card-submit" type="submit" />
        </form>
    );
}