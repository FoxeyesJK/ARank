import React from 'react';
import { Header, Menu, Container } from 'semantic-ui-react';

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

const HeadMenu = () => (
  <div>
    <Header as='h3' content='' style={style.h3} textAlign='center' />
    <Container>
        <Menu stackable>
            <Menu.Item>
            <img src='/logo.png' />
            </Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item>Testimonials</Menu.Item>
            <Menu.Item>Sign-in</Menu.Item>
        </Menu>
    </Container>
    </div>
)

export default HeadMenu;