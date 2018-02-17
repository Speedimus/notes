import React from 'react';
import NoteItem from './NoteItem';
import * as ActionTypes from '../../../../actions/actionTypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-bootstrap';

class NoteItemList extends React.Component
{
    constructor(props, store) {
        super(props);
    };

    itemArray( items )
    {
	    console.log("NoteItemList.itemArray(): incoming data: " + JSON.stringify(items));
        return items.map((item, i) => {
            return (
    			<NoteItem key={i} object={item}/>
            )
        })
    }

	render()
	{
	    console.log("NoteItemList.render(): incoming props: " + JSON.stringify(this.props));
		return (
		    <div id="noteItemList">
                { this.itemArray( this.props.array ) }
            </div>
		)
	}
}

function mapStateToProps(state)
{
    let result = [];
        console.log("NoteItemList.mapStateToProps: state.noteItems prototype:" + Object.prototype.toString.call(state.noteItems));
    if(state != null && state.noteItems != null && Object.prototype.toString.call(state.noteItems) === '[object Array]')
    {
        result = state.noteItems;
    }

    return {
        array: result
    }
}

export default connect(mapStateToProps)(NoteItemList);
