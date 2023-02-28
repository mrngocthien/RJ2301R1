import { handleLogIn } from "../App";

export default function Login({onLogIn}) {
    
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Please Log in</h1>
                <button onClick={onLogIn}>Log in</button>
            </div>
        </div>
    )
}