import React from 'react';
import { connect } from 'react-redux';

class NoteItem extends React.Component
{
    constructor(props) {
        super(props);
    };

	render()
	{
	    console.log("NoteItem.render(): incoming props: " + JSON.stringify(this.props));
		return (
		    <div id={`noteItem_${this.key}`} title={this.props.object.tooltip}>
                <h2>
                    {this.props.object.headline}
                </h2>
                <p>
                    {this.props.object.title}
                </p>
                <p>
                    {this.props.object.content}
                </p>
            </div>
		)
	}
}

export default NoteItem;
