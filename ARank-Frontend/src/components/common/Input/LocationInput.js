import React from 'react';

const LocationInput = ({value, onChange, onInsert}) => {

    // Allow "Enter" to create an event
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    }

    return (
        <div>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div onClick={onInsert}>Insert</div>
        </div>
    )
}

export default LocationInput;