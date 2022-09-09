import { FunctionComponent } from "react";

export const Panel: FunctionComponent = () => {


    return (
        <>
            <div>
                Character Length
            </div>
            <form>
                Include Uppercase Letters
                Include Lowercase Letters
                Include Numbers
                Include Symbols
            </form>
        </>
    );
}