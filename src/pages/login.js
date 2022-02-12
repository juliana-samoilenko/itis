import {useState} from 'react';

export default function Login() {
    const [loginForm, setLoginForm] = useState({login: '', password: ''});

    const handleChange = (event) => {
        const {id, value} = event.target;
        setLoginForm((currentState) => ({
            ...currentState,
            [id]: value,
        }));
    }

    const handleBlur = (event) => {
        const {id, value} = event.target;
        setLoginForm((currentState) => ({
            ...currentState,
            [id]: value.trim(),
        }));
    }

    const handleLoginClick = (event) => {
        event.preventDefault();
        console.log('login', loginForm);
    }


    return <div>
        <form>
            <input type="text" id="login" onChange={handleChange} onBlur={handleBlur} value={loginForm.login}/>
            <input type="password" id="password" onChange={handleChange} onBlur={handleBlur}
                   value={loginForm.password}/>
            <button onClick={handleLoginClick}> login</button>
        </form>
    </div>
}
