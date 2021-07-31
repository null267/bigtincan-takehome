import React, { useReducer, createContext, useCallback } from "react";
import createState from './initialstate';

export const CardContext = createContext();

const CARD_ADD = 'CARD_ADD';
const CARD_MOD = 'CARD_MOD';

const initialState = createState();

const reducer = (state, action) => {

}