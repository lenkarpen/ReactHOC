//React
import React, { Component } from 'react';
import { getDisplayName } from '../helpers';

export const withState = ({ stateName, stateValue, stateUpdater, stateUpdaterName }) => (WrappedComponent) => {
    class WithState extends Component {

        state = {
            [stateName]: stateValue, //computed properties
        };

        [stateUpdaterName] = () => {
            this.setState(stateUpdater);
        };

        render () {
            const updatersToForward = {
                [stateUpdaterName]: this[stateUpdaterName],
            };

            return (
                <WrappedComponent
                    { ...this.props }
                    { ...this.state }
                    { ...updatersToForward }
                />
            );
        }
    }
    WithState.displayName = `WithState( ${getDisplayName(WrappedComponent)} )`;

    return WithState;
};
