const alphabet = 'ABCDEFGHIJKLMNOPQRSTWXYZ';

export default function generatePassword(length: number, upper: boolean, lower: boolean, number: boolean, symbols: boolean):string {
    let password = '';
    
    const options:{[opt:string]:string} = {
        upper: upper? alphabet : '',
        lower: lower? alphabet.toLowerCase() : '',
        number: number? '0123456789': '',
        symbols: symbols? '~!@#$%^&*()-_+{[}]|:;?>.<,': ''
    };


    const source = Object.keys(options).filter(opt => options[opt] !== '').map(opt => options[opt]);
    let iS = 0;

    while(password.length < length) {
        if(iS == source.length)
            iS = 0;
        
        password += source[iS][Math.floor(Math.random()*source[iS].length)];
        iS++;


    }
    

    return password;
}