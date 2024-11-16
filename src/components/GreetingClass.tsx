import React from "react";


interface GreeetingClassProps{
    name:string;
}
class GreetingClass extends React.Component<GreeetingClassProps>{
    render() {
        return <h2>Hello {this.props.name}</h2>
    }
}
export default GreetingClass;