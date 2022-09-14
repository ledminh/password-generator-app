export default function copyTextToClipboard(text:string, cb: () => void):void {

    navigator.clipboard.writeText(text).then(cb, (err) => {
        console.error('Async: Could not copy text: ', err);
    });
}