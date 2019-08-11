import React from 'react';
// import styles from './PostList.scss';
// import classNames from 'classnames/bind';
import  { Link } from 'react-router-dom';

// const cx = classNames.bind(styles);
  
// const PostItem = ({title, body, publishedDate, tags, id}) => {
//     const tagList = tags.map(
//         tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
//     );
//     return (
//         <div>
//         <p>Hello!</p>
//               <h1>hi</h1>
//               <Form getDJevents={this.getDJevents}/>
//               <ul>{itemList}</ul>
//               <img src={ImgLink}></img> 
//               </div>
//         // <div>
//         //     <h2><Link to={`/post/${id}`}>{title}</Link></h2>
//         //     <div></div>
//         //     <p></p>
//         //     <div>
//         //         {tagList}
//         //     </div> 
//         // </div>
//     )
// }

const PostList = ({posts}) => {
    // const postList = posts;
    console.log(posts)
    console.log(posts.data)
    console.log(posts.data)
    const postList = (posts.data) ? posts.data.map(
        (post, _id) => {
            //const { _id } = post.toJS();
            console.log(post);
            return(
            <div key={_id}>
                {post.link}
                </div>
                )
        }) : "";
        //const itemList = (this.state.items.data && this.state.items.data.length > 0) ? this.state.items.data.map(
            //       (item, index) => 
            //       <li
            //         key={index}>
            //         {item.link}
            //       </li>
    // const postList = posts.map(
    //     (post) => {
    //         // Destructing Assignment: insert in an array in a consecutive order
    //         const { _id, title, body, publishedDate, tags } = post.toJS(); // List to array
    //         return (
    //             <div>
    //                 {_id}
    //                 {title}
    //             </div>


    //         //     <PostItem
    //         //     title={title}
    //         //     body={body}

    //         // />
    //             // <PostItem
    //             //     title={title}
    //             //     body={body}
    //             //     publishedDate={publishedDate}
    //             //     tags={tags}
    //             //     key={_id}
    //             //     id={_id}
    //             // />
    //         )
    //     }
    // );
    return (
        <div>
            {postList}
        </div>
    );
};

export default PostList;