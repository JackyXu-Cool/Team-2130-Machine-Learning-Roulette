import React, { useState } from "react";
import UserPool from "./UserPool";
import Button from "../../components/Button/Button";

//Method to Sign up
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            //if user signup password not fit requirement, log error
            if (err) {
                console.log(err);
                setSuccess();
                if(err == "UsernameExistsException: An account with the given email already exists."){
                    setError("The account already existed");
                }else{
                    setError("The Password requires"+ "\r\n" + "1.lowercase letters" +  "\r\n" +  "2.numbers" +  "\r\n" + "3.minimum length 8");
                }
                
            }else{
                console.log(data);
                setError();
                setSuccess("Success! Please confim your email account.")

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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>

                <Button type="submit">Signup</Button>
                {error?<label style={{ color: 'red'}}>{error}</label>:null}
                {success?<label style={{ color: 'green'}}>{success}</label>:null}     
            </form>

        </div>
    );
};

export default Signup;