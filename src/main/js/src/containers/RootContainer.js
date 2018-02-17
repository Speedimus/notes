import React from 'react';
import { connect } from 'react-redux';
//import { something } from '../actions/actions';


// configureStore() ??
const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)()     // TODO: what goes in here?

export default RootContainer;
