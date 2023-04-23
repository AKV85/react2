import React, { useContext } from 'react';
import MyButton from '../components/UI/buttons/MyButton';
import MyInput from '../components/UI/inputs/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Page for Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Write login" />
                <MyInput type="password" placeholder="Write password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;