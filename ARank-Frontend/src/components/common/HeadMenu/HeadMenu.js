import React from 'react';
import { Image, Icon, Menu, Container } from 'semantic-ui-react';

const style = {
    Container: {
      width: '100%',
    },
  }

const HeadMenu = ({onLoginClick}) => (
  <div>
    <Container style={style.Container}>
        <Menu stackable>
            <Menu.Item>
            <Image src='https://static-s.aa-cdn.net/img/ios/1143390028/ce6c711d3c4c8bf403b07e9e13502ed1' size='mini'/>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>Features</Menu.Item>
              <Menu.Item>Testimonials</Menu.Item>
              <Menu.Item>
                  <Icon name='user'/>Sign-in
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </Container>
    </div>
)

export default HeadMenu;