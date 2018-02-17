import { CREATE_NOTE, UPDATE_NOTE } from '../actions/actionTypes'

const noteForm = (state = {}, action) => {
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
        case CREATE_NOTE:
            console.log( action.event );
            console.log( 'CREATE_NOTHING: ', action.event.target );
            console.log( 'CREATE_NOTHING: ', action.event.target.noteForm );
            newState = state;
            break;
        case UPDATE_NOTE:
            newState = state;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default noteForm;
