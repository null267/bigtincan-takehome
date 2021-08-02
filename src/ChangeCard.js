import React, { useState, useContext } from 'react';
import { CardContext } from './CardContext';

export default function ChangeCard({index, cardData}) {
    const [card, setCard] = useState(cardData);
    const { modCard } = useContext(CardContext);
    
    const handleChange = (event) => {
        event.preventDefault();
        console.log(card);
        modCard(index, {...card, initials: card['firstName'][0].toUpperCase() + card['lastName'][0].toUpperCase()});
    }
    return (
        <div>

            <h3>Edit Card</h3>
            <form className="NewCard" onSubmit={handleChange}>
                <input
                    className="FirstName"
                    type="text"
                    placeholder={ card['firstName']}
                    onChange={event => setCard({ ...card, firstName: event.target.value })}
                />
                <input
                    className="LastName"
                    type="text"
                    placeholder={card['lastName']}
                    onChange={event => setCard({ ...card, lastName: event.target.value })}
                />
                <input
                    className="Email"
                            
                    type="email"
                    placeholder={card['email']}
                    onChange={event => setCard({ ...card, email: event.target.value })}
                />
                <input
                    className="Address"
                    type="text"
                    placeholder={card['address']}
                    onChange={event => setCard({ ...card, address: event.target.value })}
                />
                <input
                    className="Phone"
                            
                    type="tel"
                    placeholder={card['phone']}
                    onChange={event => setCard({ ...card, phone: event.target.value })}
                />
                <input
                    className="Website"
                    type="text"
                    placeholder={card['url']}
                    onChange={event => setCard({ ...card, url: event.target.value })}
                />
                <input
                    className="Company"
                    type="text"
                    placeholder={card['company']}
                    onChange={event => setCard({ ...card, company: event.target.value })}
                />
                <input
                    className="Motto"
                    type="text"
                    placeholder={card['phrase']}
                    onChange={event => setCard({ ...card, phrase: event.target.value })}
                />
                <input className="card-submit" type="submit" value="Confirm Changes"/>
            </form>
        </div>);
}