export default function getStrength(length: number, uppercase: boolean, lowercase:boolean, numbers: boolean, symbols: boolean): number {
    let result = 0;
    
    if(length > 0) {
        if(uppercase)
            result++;
        
        if(lowercase)
            result++;
        
        if(numbers)
            result++;
    
        if(symbols)
            result++;
    }



    return result;
} 