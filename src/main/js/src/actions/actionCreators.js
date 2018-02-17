import * as ActionTypes from './actionTypes';

/*
 * action creator functions
 */
// note actions
export function createNote(note)
{
    return { type: ActionTypes.CREATE_NOTE, note};
}

export function readNote(id)
{
    return { type: ActionTypes.READ_NOTE, id};
}

export function updateNote(note)
{
    return { type: ActionTypes.UPDATE_NOTE, note};
}

export function deleteNote(note)
{
    return { type: ActionTypes.DELETE_NOTE, note};
}

export function listNotes()
{
    return { type: ActionTypes.LIST_NOTE_ITEMS};
}

export function loadNotes(noteItems)
{
    return { type: ActionTypes.LOAD_NOTE_ITEMS, noteItems};
}

export function showNoteForm()
{
    return { type: ActionTypes.SHOW_NOTE_FORM };
}
