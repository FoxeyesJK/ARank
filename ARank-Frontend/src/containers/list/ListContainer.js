import React, { Component } from 'react';
import PostList from 'components/list/PostList';
//import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
//import Course from '../components/Course';

class ListContainer extends Component{
    initialize = async () => {
        const { ListActions, city, state } = this.props;
        try {
            await ListActions.getPostList(city, state);
        } catch(e) {
            console.log(e);
        } 
    }
    // getPostList = () => {
    //     const { city, state, ListActions } = this.props;
    //     ListActions.getPostList({
    //         city,
    //         state
    //     })
    // }

    componentDidMount() {
        //this.getPostList();
        this.initialize();
    }

    componentDidUpdate(prevProps, prevState) {
        // Update list when location data is changed
        if(prevProps.city !== this.props.city || prevProps.state !== this.props.state) {
            this.getPostList();

            // Scroll Bar to the top
            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const { loading, posts, city, state } = this.props;
        //console.log(posts)
        // const itemList = (this.state.items.data && this.state.items.data.length > 0) ? this.state..data.map(
        //     (item, index) => 
        //     <li
        //       key={index}>
        //       {item.link}
        //     </li>
        //   ) : '';

          let DJname = "Illenium";
          let ImgLink = "https://edmtrain.s3.amazonaws.com/img/artist/" + DJname + ".jpg?v=1";

        if(loading) return null; // Do not show anything while loading
        return (
            /*<div>
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city"/>
            <input type="text" name="state"/>
            <button>Get Weather</button>
            </form>
            </div>*/
            <div>
                <PostList posts={posts}/>
                {/* {posts} */}
                {/* <p>Hello!</p>
              <h1>hi</h1>
              <Form getDJevents={this.getDJevents}/>
              <ul>{itemList}</ul>
              <img src={ImgLink}></img>  */}
              <TextField style={{padding: 24}}
                id="searchInput"
                placeholder="Search for Courses"
                margin="normal"
                onChange={this.onSearchInputChange} />
            <Grid container spacing={24} style={{padding: 24}}>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <div style={{height:0, paddingTop: '56.25%'}}
                    title="hello"> hi</div>
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        //lastPage: state.list.get('lastPage'),
        posts: state.list.get('posts'),
        loading: state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(ListContainer);


