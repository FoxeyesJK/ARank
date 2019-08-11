import React from 'react';
import  { Link } from 'react-router-dom';
import LocationInput from 'components/common/Input/LocationInput';

const PostForm = ({city, state, onChange, onInsert }) => {
    
    // Execute onInsert when Enter is pressed
    const handleKeyPress = (e) => {
        if((e.key) === 'Enter') {
            onInsert();
        }
    }

    return (
    <div>
        city: <input onchange={onChange} value={this.state.city} onKeyPress={handleKeyPress} />
        state: <input onchange={onChange} value={this.state.state} onKeyPress={handleKeyPress} />
    </div>
    );
};

export default PostForm;