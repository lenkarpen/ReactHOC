//Core
import React, { Component } from 'react';

//Instruments
import Styles from './styles.m.css';
import { object } from 'prop-types';

export default class Catcher extends Component {
  static propTypes = {
      children: object.isRequired,
  };

  state = {
      error: false,
  };

  componentDidCatch (error, stack) {
      console.log('ERROR', error);
      console.log('STACKTRACE', stack.componentStack);

      this.setState({
          error: true,
      });

  }

  render () {

      if (this.state.error) {
          return (
              <section className = { Styles.catcher } >
                  <span> A misterious error ocured.</span>
                  <p> Our space engineer fixing this already </p>
              </section>
          );
      }

      return this.props.children;
  }
}
