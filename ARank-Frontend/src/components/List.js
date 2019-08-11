import React from "react";

class List extends React.Component {
    render() {
        return (
            <div>
                { this.props.date }
                <h3>hello</h3>
            </div>
        );
    }
};

export default List;