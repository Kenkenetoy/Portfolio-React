import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [sum, setSum] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        (username === 'cute' && password === 'owen')
         ? (setLoggedIn(true), alert('Login successful!'), navigate("/")) : alert('Invalid username or password. Please try again.');

    };

    const handleSubmitAdd = (e) => {
        var numb1 = parseFloat(num1);
        var numb2 = parseFloat(num2);
        var ans = numb1 + numb2;
        setSum(ans);
        e.preventDefault();

    };
    return (
        <div style={{ textAlign: "center" }}>
            {loggedIn ?
                <>
                    <h1>Add Two Numbers</h1>
                    <form onSubmit={handleSubmitAdd}>
                        <label>
                            Num 1: <input type="number" value={num1} onChange={(e) => setnum1(e.target.value)} required autoFocus /></label> <br /><label>
                            Num 2: <input type="number" value={num2} onChange={(e) => setnum2(e.target.value)} required /></label><br /><br />
                        <button type="submit">ADD</button>
                    </form>
                    <br />
                    {sum !== null && <p>Sum: {sum}</p>}
                </> : (

                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required autoFocus /></label> <br />
                        <label> Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label><br /><br />
                        <button type="submit">Login</button>
                    </form>)}
        </div>
    );
};
export default Login;