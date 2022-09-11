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


type ActionFunction = ((length: number) => void) | ((included: boolean) => void);

export default function useStatus (): [State, ActionFunction, ActionFunction, ActionFunction, ActionFunction, ActionFunction] {
    const [status, dispatch] = useReducer(reducer, initState);

    const setLength:ActionFunction = (length: number) => dispatch({
        type: ActionType.changeLength, 
        length: length});

    const setIncludeLowerCase:ActionFunction = (included: boolean) => dispatch({
        type: ActionType.setIncludeLowwerCase, 
        lowercaseIncluded: included});

    const setIncludeUpperCase:ActionFunction = (included: boolean) => dispatch({
        type: ActionType.setIncludeUpperCase, 
        uppercaseIncluded: included});
    
    const setIncludeNumbers:ActionFunction = (included: boolean) => dispatch({
        type: ActionType.setIncludeNumbers, 
        numberIncluded: included});

    const setIncludeSymbols:ActionFunction = (included: boolean) => dispatch({
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
