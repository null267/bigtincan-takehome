import React from 'react';
import CardList from './CardList';
import AddCard from './AddCard';

export default function Application() {
    return (
        <div className="App">
           <AddCard />
           <CardList />
        </div>
    );
}