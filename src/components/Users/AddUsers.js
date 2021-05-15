import React,{ useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUsers.module.css'
const AddUsers = props => {
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const adduserhandler = (e) => {
        e.preventDefault();
        console.log(username,age)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >UserName</label>
                <input id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />

                <label htmlFor="age" >Age (years)</label>
                <input id="age" value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" />

                <Button type="submit" >Add user</Button>

            </form>
        </Card>
    )
}
export default AddUsers