import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Button from 'components/common/Button';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import FormWrapper from 'components/form/FormWrapper';
import FormContainer from 'containers/form/FormContainer';

//import Form from "./components/Form.js";

// this.state = {
//   city: 36,
//   state: 96
// }
const ListPage = ({match}) => {
    // const { city = 36, state = 96} = match.params;
    return (
        <PageTemplate>
          <FormWrapper>
            <FormContainer
              // city={city}
              // state={state}
              />
          </FormWrapper>
          <ListWrapper>
            <ListContainer
              // city={city}
              // state={state}
              />
            
            <Button theme="" to="/editor">Default Button</Button>
          </ListWrapper>
        </PageTemplate>
    );
};
/*
const API_KEY = "c59f61f4-3a4e-4afd-8fe0-6b80953740de";
class App extends React.Component {
  //initialize state
  state = {  
    items: []
  };
  
  getDJevents = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const api_call = await fetch(`https://edmtrain.com/api/events?locationIds=${city},${state}&client=${API_KEY}`);
    const data = await api_call.json();
    //set the values of the state
    this.setState({
      items: data
    });
  }

 render() {
    const ListPage = () => {
    console.log(this.state.items.data);
    const itemList = (this.state.items.data && this.state.items.data.length > 0) ? this.state.items.data.map(
      (item, index) => 
      <li
        key={index}>
        {item.link}
      </li>
    ) : ''

    let DJname = "Illenium";
    let ImgLink = "https://edmtrain.s3.amazonaws.com/img/artist/" + DJname + ".jpg?v=1";
    return (
      <div>
        <p>Hello!</p>
        <h1>hi</h1>
        <Form getDJevents={this.getDJevents}/>
        <ul>{itemList}</ul>
        <img src={ImgLink}></img> 
      </div>
    )
  }
}
*/

export default ListPage;