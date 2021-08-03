import React, { useReducer, createContext, useCallback } from "react";
import createState from './initialState';

export const CardContext = createContext();

const CARD_ADD = 'CARD_ADD';
const CARD_MOD = 'CARD_MOD';



const reducer = (state, action) => {
    if(action.type === CARD_ADD) {
        return [action.payload,...state];
    }
    if(action.type === CARD_MOD) {
        console.log('card mod reducer');
        const { editCard, index } = action.payload;
        console.log(editCard);
        // let replaceCard = { ...editCard, ...state[index] };
        // console.log(replaceCard);
        // let newList = [...state];
        // newList[index] = editCard;
        // console.log(newList);
        return state.map((card, cardIndex) => {
            if (cardIndex !== index) {
                return card;
            }
            return editCard;
        });
    }
    return state;
}

export const CardProvider = ({children}) => {
    const [cards, dispatch] = useReducer(reducer, createState());

    const addCard = useCallback((newCard) => {
        dispatch({
            type: CARD_ADD,
            payload: {...newCard},
        });
    }, [dispatch]);

    const modCard = useCallback((index, editCard) => {
        console.log(editCard);
        dispatch({
            type: CARD_MOD,
            payload: {
                index,
                editCard,
            }
        })
    }, [dispatch]);

    const value = {cards, addCard, modCard};

    return <CardContext.Provider value={ value }>{children}</CardContext.Provider>
}