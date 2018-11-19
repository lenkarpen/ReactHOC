import React from 'react';
import Counter from './';
import renderer from 'react-test-renderer';

const renderTree = renderer.create(<Counter count = { 3 } />).toJSON();

test('getUniqueID function should throw, when called with non-number type argument', () => {
    expect(renderTree).toMatchSnapshot();
});
