export default function getStrength(length: number, uppercase: boolean, lowercase:boolean, numbers: boolean, symbols: boolean): number {
    let result = 0;
    
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
    else if(length >=  [uppercase, lowercase, numbers, symbols].filter(option => option).length) {
        result = 1;
    }



    return result;
} 