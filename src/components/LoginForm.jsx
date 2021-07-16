import React from 'react';
import Input from "./Input/Input";
import styles from './LoginForm.module.css'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className={`${styles.formBackground}`}>
                <div className={`${styles.formStyle}`}>
                    <h2>Now { this.state.date.toLocaleTimeString() }</h2>
                    <Input type="text" inputName="Name" onChange='asd' />
                    <Input type="text" inputName="Surname" onChange='asd' />
                    <Input type="password" inputName="Password" onChange='asd' />
                </div>
            </div>
        )
    }

        // <Input type="number" inputName="Name" onChange='asd' />

}