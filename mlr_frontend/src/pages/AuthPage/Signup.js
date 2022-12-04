import React, { useState } from "react";
import UserPool from "./UserPool";
import Button from "../../components/Button/Button";

//Method to Sign up
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //Error Message
    const [error, setError] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            //if user signup password not fit requirement, log error
            if (err) {
                console.log(err);
                setError("" + err);
            }
            console.log(data);
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>

                <Button type="submit">Signup</Button>
                {/*If user input password is wrong, showed the error message */}
                {error?<label style={{ color: 'red'}}>{error}</label>:null}   
            </form>

        </div>
    );
};

export default Signup;