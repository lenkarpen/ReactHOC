// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Catcher from 'components/Catcher';
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import StatusBar from 'components/StatusBar';
import Login from 'components/Login';
import { Provider } from 'components/HOC/withProfile';

//Instruments
import avatar from 'theme/assets/lisa';

@hot(module)
export default class App extends Component {

    constructor () {
        super();

        this.state = {
            avatar,
            currentUserFirstName: 'Сергей',
            currentUserLastName:  'Мельник',
            isAuthenticated:      false,
            _logOut:              this._logOut,
        };
        console.log('App -------> constructor');
    }

    componentDidMount () {
        if (localStorage.getItem('switch') !== null) {
            this._ls();
        }
        console.log('App -------> componentDidMount');
    }

     _ls = () => {

         this.setState({
             isAuthenticated: localStorage.getItem('switch') !== 'false',
         });
     };

    _logIn = () => {
        this.setState({
            isAuthenticated: true,
        });
        localStorage.setItem('switch', true);
    }

    _logOut = () => {
        this.setState({
            isAuthenticated: false,
        });
        localStorage.setItem('switch', false);
    }

    render () {
        const { isAuthenticated } = this.state;

        console.log('App -------> render', isAuthenticated);

        return (
            <Catcher>
                <Provider value = { this.state }>
                    <StatusBar />
                    <Switch>
                        <Route
                            path = '/login' render = { (props) => (
                                <Login _logIn = { this._logIn } { ...props } />
                            ) }
                        />
                        { !isAuthenticated && <Redirect to = '/login' />}
                        <Route component = { Feed } path = '/feed' />
                        <Route component = { Profile } path = '/profile' />
                        <Redirect to = '/profile' />
                    </Switch>
                </Provider>
            </Catcher>
        );
    }
}
