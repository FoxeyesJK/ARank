import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class LocationContainer extends Component{
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city"/>
                <input type="text" name="state"/>
                <button>Get Weather</button>
            </form>
        )
    }
}

import React from "react";
