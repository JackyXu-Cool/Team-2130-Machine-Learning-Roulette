import React, { useState } from "react";
import Button from '../../components/Button/Button';
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Upload from '../UploadPage/UploadPage';
import {useNavigate } from "react-router-dom"; 



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
                navigate("/upload");
                

            },
            onFailure: (err) => {
                console.log("onFailure: ", err);
            }
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p style={{ marginBottom: '5pt', fontWeight: 500 }}>Email Address</p>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <p style={{ marginBottom: '5pt', fontWeight: 500 }}>Password</p>
                <input
                    value={password} type="password"
                    onChange={(event) => setPassword(event.target.value)}
                ></input>

                <Button type="submit">Login</Button>
            </form>

        </div>
    );
};

export default Login;