import React, {Component} from 'react';
import { connect } from 'react-redux';
import NoteItemList from './NoteItemList';

class Notes extends Component
{
    constructor(props){
        super(props);
    }

    render() {
        console.log("Notes.render(): incoming props: " + JSON.stringify(this.props));
        return (
            <div id="notes" name="notes" className="notes">
                <p className="App-intro">
                    Put something here...
                </p>
                <NoteItemList />
            </div>
        );
    }
}

export default Notes;
