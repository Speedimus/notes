import React, {Component} from 'react';
import { connect } from 'react-redux';
import NoteItemList from './NoteItemList';

class NoteForm extends Component
{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        alert('value is ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log("NoteForm.render(): incoming props: " + JSON.stringify(this.props));
        return (
            <div id="noteForm" name="noteForm" className="noteForm">
                <form>
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    let result = [];
        console.log("NoteForm.mapStateToProps: state.noteForm prototype:" + Object.prototype.toString.call(state.noteForm));
    if(state != null && state.noteForm != null && Object.prototype.toString.call(state.noteForm) === '[object Array]')
    {
        result = state.noteForm;
    }

    return {
        array: result
    }
}

export default connect(mapStateToProps)(NoteForm);
