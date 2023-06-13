import React, { useState, useRef } from "react";

import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [username, setUsername] = useState("");
    // const [age, setAge] = useState("");

    const [error, setError ] = useState();

    // const onChangeUsername = event => {

    //     setUsername( event.target.value );
    // }

    // const onChangeAge = event => {
    //     setAge(event.target.value);
    // }

    const addUserHandler = (event) => {
        event.preventDefault();

        // console.log("name: " + nameInputRef.current.value);
        // console.log("age: " + ageInputRef.current.value);

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 )
        {
            
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid name and age (non-empty values)."
            });
            return ;
        }

        // +age will convert to the number
        if( +enteredAge < 1)
        {
            
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid age (>0)."
            });
            return ;
        }
        props.addUser(enteredName, enteredAge);
    
        // reseting the input fields
        // setUsername("");
        // setAge("");

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        
        <Wrapper>
            {error && <ErrorModel 
                title= {error.title}
                message={error.message} 
                onConfirm={errorHandler} /> }

            <Card className={styles.input}  >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username </label>
                    <input 
                        type="text" 
                        // value={username} 
                        id="username" 
                        // onChange={onChangeUsername}
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        type="number" 
                        // value={age} 
                        id="age" 
                        // onChange={onChangeAge} 
                        ref={ageInputRef} />

                    <Button type="Submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    );

}

export default AddUser;