import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUsers.module.css'
import Modal from '../UI/Modal'
import Wrapper from '../Helpers/Wrapper'
const AddUsers = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef(); 
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()
    const adduserhandler = (e) => {
        e.preventDefault();
        console.log(nameInputRef.current.value)
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalud Input",
                message: "Invalid username or age (non empty values)"
            })
            return;
        }
        if (age < 1) {
            setError({
                title: "Invalud Input",
                message: "Please enter valid age above 0"
            })
            return;
        }
        props.onAddUser(username, age)
        setUsername('')
        setAge('')
    }

    const clearModal = () => {
        setError()
    }
    return (
        <Wrapper>
            {error && <Modal title={error.title} message={error.message} onclearModal={clearModal}></Modal>}
            <Card className={classes.input}>
                <form onSubmit={adduserhandler}>
                    <label htmlFor="username" >UserName</label>
                    <input id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" ref={nameInputRef}/>

                    <label htmlFor="age" >Age (years)</label>
                    <input id="age" value={age} onChange={(e) => { setAge(e.target.value) }} type="number" ref={ageInputRef}/>

                    <Button type="submit" >Add user</Button>

                </form>
            </Card>
        </Wrapper>
    )
}
export default AddUsers