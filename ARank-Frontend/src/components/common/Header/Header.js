import React from 'react';
import { Modal, Button, Image, Icon, Menu, Container } from 'semantic-ui-react';
import Base from '../../../containers/common/Base';

const style = {
    Container: {
      width: '100%',
    },
    SignIn: {
        boxShadow: 'none',
        color: 'rgba(0,0,0,1) !important'
    }
  }

const Header = ({onLoginClick, logged}) => (
    <header>
      <Container style={style.Container}>
          <Menu stackable>
              <Menu.Item>
              <Image src='https://static-s.aa-cdn.net/img/ios/1143390028/ce6c711d3c4c8bf403b07e9e13502ed1' size='mini'/>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Testimonials</Menu.Item>
                <Menu.Item>
                    <Modal trigger={logged ? <Icon name='user'/> : <Button onClick={onLoginClick} style={style.SignIn} basic>Sign In</Button>}>
                        <Base/>
                    </Modal>
                  </Menu.Item>
              </Menu.Menu>
          </Menu>
      </Container>
      </header>
  )



export default Header;