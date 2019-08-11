import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as listActions from 'store/modules/list';

// Obtain action creation functions
import * as inputActions from 'store/modules/input';
import PostForm from 'components/form/PostForm';

class FormContainer extends Component {
    // getLocation = () => {
    //     const { value, InputActions } = this.props;
    //     InputActions.getLocation({
    //         value
    //     })
    // }

    // componentDidMount() {
    //     this.getLocation();
    // }

    // state = {
    //     city: 32,
    //     state: 94
    // }
    // Only renders when props are updated
    componentDidUpdate(prevProps, prevState) {
        // Update list when location data is changed
        if(prevProps.city !== this.props.city || prevProps.state !== this.props.state) {
            this.getLocation();

            // Scroll Bar to the top
            document.documentElement.scrollTop = 0;
        }
    }

    handleChange = (e) => {
        // this.setState({
        //     city: e.target.city,
        //     state: e.target.state
        // })
        //const { InputActions } = this.props;
        // this.setState({
        //     city: e.target.city,
        //     state: e.target.state
        // });

        const { value } = e.target;
         //console.log(e.target.value)
        // console.log(value);
        const { InputActions } = this.props;
        InputActions.changeLocationInput(value);
        console.log(this.props)
        //console.log(value)
    }

    handleInsert = async () => {
        const { InputActions, city, state } = this.props;
        try {
            // Initializing input, if sucess close modal
            await InputActions.changeLocation(city);
            //inputActions.hideModal('search');
        } catch(e) {
            console.log(e);
        }
    }
    
    handleKeyPress = (e) => {
        if((e.key) === 'Enter') {
            this.handleInsert();
        }
    }

    // handleInsert = (e) => {
    //     const { city, state } = e.target;
    //     const { InputActions } = this.props;
    //     InputActions.setInput({city, state});
    // }

    render() {
        //const { city, state } = this.state;
        const { city, state } = this.props;
        const { handleChange, handleInsert, handleKeyPress } = this;
        return (
            <div>
        city: <input onChange={handleChange} value={city} onKeyPress={handleKeyPress} />
        state: <input onChange={handleChange} value={state} onKeyPress={handleKeyPress}/>
    </div>
            // <PostForm 
            //     onChange={handleChange}
            //     onInsert={handleInsert}
            //     city={city}
            //     state={state}
            // />
        );
    }
}

export default connect(
    (state) => ({
        city: state.city,//.getIn(['modal','city']),
        loading: state.pender.pending['input/CHANGE_LOCATION_INPUT']
    }),
    (dispatch) => ({
        // bindActionCreators allows dispatch data without initalizing one by one
        // this.props.InputActions.setInput: calling data code
        InputActions: bindActionCreators(inputActions, dispatch)
    })
)(FormContainer);