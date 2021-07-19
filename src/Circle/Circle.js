import React from "react";
import './Circle.css';

class Circle extends React.Component {
    render() {
        return (
            <div className="circle">
                <p>{this.props.number}</p>
            </div>
        );
    }
};

export default Circle;