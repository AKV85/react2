import React from 'react';
import MyButton from '../components/UI/buttons/MyButton';
import MyInput from '../components/UI/inputs/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Page for Login</h1>
            <form>
                <MyInput type="text" placeholder="Write login" />
                <MyInput type="password" placeholder="Write password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;