import React, { useReducer, createContext, useCallback } from "react";
import createState from './initialstate';

export const CardContext = createContext();

const CARD_ADD = 'CARD_ADD';
const CARD_MOD = 'CARD_MOD';



const reducer = (state, action) => {
    if(action.type === CARD_ADD) {

    }
    if(action.type === CARD_MOD) {

    }
}

export const CardProvider = ({children}) => {
    const [cards, dispatch] = useReducer(reducer, createState());

    const addCard = (newCard) => {
        dispatch({
            type: CARD_ADD,
            payload: {...newCard},
        });
    }
}