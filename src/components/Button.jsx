import { useState } from 'react';

function Button() {
    const [color, setColor] = useState("Blue");

    const toggleColor = () => {
        setColor(prevColor => (prevColor === "Blue" ? "Red" : "Blue"));
    };

    return(
        <button onClick={toggleColor} style={{ color }}>{color}</button>
    );
}

export default Button;