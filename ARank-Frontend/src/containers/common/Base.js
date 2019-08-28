import React, { Component } from 'react';
import LoginModalContainer from '../../containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/modules/base';

class Base extends Component {
    intialize = async () => {
        const { BaseActions } = this.props;
        if(localStorage.logged === "true") {
            BaseActions.tempLogin();
        }
        BaseActions.checkLogin();
    }
    componentDidMount() {
        this.intialize();
    }
    render() {
        return (
            <div>
                <LoginModalContainer/>
                {
                    // Any Components for all pages
                }
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Base);