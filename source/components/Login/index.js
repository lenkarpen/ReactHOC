//Core
import React, { Component } from 'react';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

@withProfile
export default class Login extends Component {

    _logIn = () => {
        const { _logIn } = this.props;

        _logIn();
    }

    render () {
        const { currentUserFirstName, currentUserLastName } = this.props;

        console.log('Login -------> this.props', this.props);

        return (
            <section className = { Styles.login }>
                <h1>Login page</h1>
                <a onClick = { this._logIn } >
                   Войти как : {currentUserFirstName} {currentUserLastName}
                </a>
            </section>
        );
    }
}
