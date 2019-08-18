import React from 'react';
import { Header, Menu, Container } from 'semantic-ui-react';

const style = {
    Container: {
      width: '100%',
    },
  }

const HeadMenu = () => (
  <div>
    <Container style={style.Container}>
        <Menu stackable>
            <Menu.Item>
            <img src='/logo.png' />
            </Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item>Features</Menu.Item>
            <Menu.Item>Testimonials</Menu.Item>
            <Menu.Item>Sign-in</Menu.Item>
            </Menu.Menu>
        </Menu>
    </Container>
    </div>
)

export default HeadMenu;