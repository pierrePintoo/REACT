
const initialState = {nbNotes: 0, moyenne: 0, notes: {}}
export {initialState};

const reducer = (state, action) => {
    const { type, payload, name, value } = action
    console.log(state)
    switch (type){
        case 'nbNotes':
            return {
                ...state,
                nbNotes: payload
            }
        case 'note':
            return {
                ...state,
                notes: {...state.notes, [name]: value}
            }
        case 'submit':
            let somme = 0
            for(let note in state.notes){
                    somme += parseInt(state.notes[note])
            }

            return {
                ...state,
                moyenne: somme / (Object.keys(state.notes).length)
            }

        default: 
            return state
    }
}

export{reducer}
