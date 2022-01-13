import { useEffect, useState } from "react";

const ReadMore = () => {

    const [text, setText] = useState(' ');
    const [click, setClick] = useState(false);

    useEffect(() => {
        more();
    }, [click]);

    const more = () => {
        setText(text + "more text")
    }
    return (
        <div>
            <h2>Read text</h2>
            <h4>Here is some text{text}</h4>
            <button type='button' onClick={() => setClick(!click)}>Click me for more text</button>

        </div>
        );
}

export default ReadMore;