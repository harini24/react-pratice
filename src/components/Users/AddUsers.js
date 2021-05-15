import Card from '../UI/Card'
import classes from './AddUsers.module.css'
const addUsers = props => {
    const adduserhandler = (e) => {
        e.preventDefault();

    }
    return (
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >UserName</label>
                <input id="username" type="text" />

                <label htmlFor="age" >Age (years)</label>
                <input id="age" type="number" />

                <button type="submit" >Add user</button>

            </form>
        </Card>
    )
}
export default addUsers