import { useState } from "react";
import HelloComponent from "./HelloComponent";

export default function HiddenComponent() {
    const [display, setDisplay] = useState('block');

    const Hidden = () => {
        setDisplay('none');
    }

    
    return (
        <div style={{ textAlign: 'center' }}>
            {display === 'block' && <HelloComponent />}
            <button onClick={Hidden}>Hide</button>
        </div>
    )
}