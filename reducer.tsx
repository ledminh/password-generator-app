import { lchown } from "fs";
import { useReducer } from "react";

enum ActionType {
    changeLength = 'ACTION/CHANGE_LENGTH',
    setIncludeUpperCase = 'ACTION/SET_UPPERCASE',
    setIncludeLowwerCase = 'ACTION/SET_LOWERCASE',
    setIncludeNumbers = 'ACTION/SET_NUMBERS',
    setIncludeSymbols = 'ACTION/SET_SYMBOLS'
}



type Action = {type: ActionType.changeLength, length: number}
                | {type: ActionType.setIncludeLowwerCase, lowercaseIncluded: boolean } 
                | {type: ActionType.setIncludeUpperCase, uppercaseIncluded: boolean }
                | {type: ActionType.setIncludeNumbers, numberIncluded: boolean}
                | {type: ActionType.setIncludeSymbols, symbolIncluded: boolean};


export interface State {
    length : number,
    upperCaseIncluded : boolean,
    lowerCaseIncluded : boolean,
    numbersIncluded : boolean,
    symbolsIncluded : boolean
}

const initState: State = {
    length: 0,
    upperCaseIncluded: false,
    lowerCaseIncluded: false,
    numbersIncluded: false,
    symbolsIncluded: false
}

function reducer(state:State, action:Action) : State {
    switch (action.type) {
        case ActionType.changeLength:
            return {...state, length: action.length};
        case ActionType.setIncludeLowwerCase:
            return {...state, lowerCaseIncluded: action.lowercaseIncluded};
        case ActionType.setIncludeUpperCase:
            return {...state, upperCaseIncluded: action.uppercaseIncluded};
        case ActionType.setIncludeNumbers:
            return {...state, numbersIncluded: action.numberIncluded};
        case ActionType.setIncludeSymbols:
            return {...state, symbolsIncluded: action.symbolIncluded};
        default:
            return state;

    }


}


export type SetIncludeFunction = (included: boolean) => void;
export type SetLengthAction = (length: number) => void;

export default function useStatus (): [State, SetLengthAction, SetIncludeFunction, SetIncludeFunction, SetIncludeFunction, SetIncludeFunction] {
    const [status, dispatch] = useReducer(reducer, initState);

    const setLength = (length: number) => dispatch({
        type: ActionType.changeLength, 
        length: length});

    const setIncludeLowerCase = (included: boolean) => dispatch({
        type: ActionType.setIncludeLowwerCase, 
        lowercaseIncluded: included});

    const setIncludeUpperCase= (included: boolean) => dispatch({
        type: ActionType.setIncludeUpperCase, 
        uppercaseIncluded: included});
    
    const setIncludeNumbers = (included: boolean) => dispatch({
        type: ActionType.setIncludeNumbers, 
        numberIncluded: included});

    const setIncludeSymbols = (included: boolean) => dispatch({
        type: ActionType.setIncludeSymbols, 
        symbolIncluded: included});
    

    return [
        status,
        setLength,
        setIncludeLowerCase,
        setIncludeUpperCase,
        setIncludeNumbers,
        setIncludeSymbols
    ]

}
