export default function getStrength(length: number, uppercase: boolean, lowercase:boolean, numbers: boolean, symbols: boolean): number {
    let result = 0;
    const options = [uppercase, lowercase, numbers, symbols].filter(option => option);

    if(length > 9) {
        if(uppercase)
            result++;
        
        if(lowercase)
            result++;
        
        if(numbers)
            result++;
    
        if(symbols)
            result++;
    }
    else if(length !== 0 && options.length > 0 && length >=  options.length) {
        result = 1;
    }



    return result;
} 