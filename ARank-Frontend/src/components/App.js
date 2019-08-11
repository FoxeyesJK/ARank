import React from "react";
import { Switch, Route } from 'react-router-dom';
import { ListPage, NotFoundPage } from 'pages';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;

// import Form from "./components/Form.js";

// const API_KEY = "c59f61f4-3a4e-4afd-8fe0-6b80953740de";
// class App extends React.Component {
//   //initialize state
//   state = {  
//     items: []
//   };
  
//   getDJevents = async (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     const state = e.target.elements.state.value;
//     const api_call = await fetch(`https://edmtrain.com/api/events?locationIds=${city},${state}&client=${API_KEY}`);
//     const data = await api_call.json();
//     //set the values of the state
//     this.setState({
//       items: data
//     });
//   }

//   render() {
//     console.log(this.state.items.data);
//     const itemList = (this.state.items.data && this.state.items.data.length > 0) ? this.state.items.data.map(
//       (item, index) => 
//       <li
//         key={index}>
//         {item.link}
//       </li>
//     ) : ''

//     let DJname = "Illenium";
//     let ImgLink = "https://edmtrain.s3.amazonaws.com/img/artist/" + DJname + ".jpg?v=1";
//     return (
//       <div>
//         <p>Hello!</p>
//         <h1>hi</h1>
//         <Form getDJevents={this.getDJevents}/>
//         <ul>{itemList}</ul>
//         <img src={ImgLink}></img> 
//       </div>
//     )
//   }
// }
