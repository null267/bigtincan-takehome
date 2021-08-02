import React, {useContext} from 'react';
import Card from './Card';
import {CardContext} from './CardContext';

export default function CardList() {
    const { cards } = useContext(CardContext);
    return (
        <div className="CardList">
            {cards.map((card, index) => (
                <Card key={card['id']} index={index} cardData={card} />
            ))}
        </div>
        
    );
}