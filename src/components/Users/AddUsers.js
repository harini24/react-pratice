import React,{ useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUsers.module.css'
import Modal from '../UI/Modal'
const AddUsers = props => {
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState()
    const adduserhandler = (e) => {
        e.preventDefault();
        if(username.trim().length ===0 || age.trim().length ===0){
            setError({
                title:"Invalud Input",
                message:"Invalid username or age (non empty values)"
            })
            return;
        }
        if(age<1){
            setError({
                title:"Invalud Input",
                message:"Please enter valid age above 0"
            })
            return;
        }
        props.onAddUser(username,age)
        setUsername('')
        setAge('')
    }

    const clearModal=()=>{
    setError()
    }
    return (
    <div>
        {error && <Modal title={error.title} message={error.message} onclearModal={clearModal}></Modal>}
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >UserName</label>
                <input id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />

                <label htmlFor="age" >Age (years)</label>
                <input id="age" value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" />

                <Button type="submit" >Add user</Button>

            </form>
        </Card>
        </div>
    )
}
export default AddUsers