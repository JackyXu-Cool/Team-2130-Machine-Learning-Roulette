import React, {useState} from "react";
import UserPool from "./UserPool";
const Signup = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        UserPool.signUp(email,password,[],null,(err,data) =>{
            if(err){
                console.log(err);
            }
            console.log(data);
        });
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <p style={{ marginBottom: '5pt', fontWeight: 500 }}>Email Address</p>
                <input
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <p style={{ marginBottom: '5pt', fontWeight: 500 }}>Email Address</p>
                <input
                    value = {password}
                    onChange={(event) => setPassword(event.target.value)} 
                ></input>       
                {/* <label htmlFor="password">Password</label> */}

                <button type="submit">Signup</button>
            </form>

        </div>
    );
};

export default Signup;