import * as ActionTypes from '../actions/actionTypes'

function noteItems(state = [], action)
{
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
//        case ActionTypes.CREATE_NOTE_ITEM:
//            newState = Object.assign({}, state);
//            break;
//        case ActionTypes.READ_NOTE_ITEM:
//            newState = Object.assign({}, state);
//            break;
//        case ActionTypes.UPDATE_NOTE_ITEM:
//            newState = Object.assign({}, state);
//            break;
//        case ActionTypes.DELETE_NOTE_ITEM:
//            newState = Object.assign({}, state);
//            break;
//        case ActionTypes.LIST_NOTE_ITEMS:
//            newState = Object.assign({}, state);
//            break;
        case ActionTypes.LOAD_NOTE_ITEMS:
            newState = action.noteItems;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default noteItems;
