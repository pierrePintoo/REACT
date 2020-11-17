import { Fragment, useReducer } from 'react';
import { reducer, initialState } from '../reducer/notesReducer'

const SaisieNotes = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { nbNotes, moyenne } = state

    const drawOptions = () => {

        const options = []
        for(let i=1; i <= 10; i++){
            options.push(<option value={i}>{i}</option>)
        }
        return options
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({type: 'note', name, value})
    }

    const drawInputs = (nbNotes) => {
        const inputs = []
        for(let i=1; i <= nbNotes; i++){
            inputs.push(<label>Note {i}<input name={`note${i}`} onChange={handleChange} key={i} /><br/></label>)
        }
        return inputs
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'submit'})
    }

    return (
        <Fragment>
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <label>Choisi le nombre de notes que tu veux : </label>
                <select 
                onChange={e => 
                dispatch({
                    type: 'nbNotes',
                    payload: parseInt(e.target.value, 10)})}
                    >

                    {drawOptions().map((option) => option)}
                </select>
                <br />
                {drawInputs(nbNotes).map((input) => input)}
                <button type="submit">Calculer la moyenne des notes</button>
            </form>
            {moyenne && <p>Votre moyenne : {moyenne}</p>}
        </Fragment>
    )
}

export default SaisieNotes;