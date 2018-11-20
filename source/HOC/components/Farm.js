//React
import React from 'react';
import { Container, Button, Heading, Message } from '../styled';
import { withState } from './withState';

//WithState
const Farm = (props) => {
    console.log('-> props', props);
    const applesJSX = Array(props.apples).fill('apples');

    return (<Container>
        <Heading>Фермаа</Heading>
        <div>
            <Message> Урожай:: </Message>
            <Message> {applesJSX} </Message>
        </div>
        <Button onClick = { props._yealdApples }> Собрать урожай! </Button>
    </Container>);
};

export default withState({
    stateName:    'apples',
    stateValue:   5,
    stateUpdater: (state) => ({
        apples: state.apples + 1,
    }),
    stateUpdaterName: '_yealdApples',
})(Farm);
