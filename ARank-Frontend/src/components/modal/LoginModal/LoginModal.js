import React from 'react';
import ModalWrapper from '../ModalWrapper';

const LoginModal = ({
    visible, password, error, onCancel, onLogin, onChange, onKeyPress
}) => (
    <ModalWrapper visible={visible}>
        <div>
            <div onClick={onCancel}>&times;</div>
            <div>Login</div>
            <div>Please enter the password</div>
            <input autoFocus type="password" placeholder="Enter the password" value={password} onChange={onChange} onKeyPress={onKeyPress}/>
            { error && <div>Login Fail</div>}
            <div onClick={onLogin}>Login</div>
        </div>
    </ModalWrapper>
)

export default LoginModal;