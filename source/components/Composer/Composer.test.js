//Core
import React from 'react';
import { mount } from 'enzyme';
import { Composer } from './';

const props = {
    _createPost:          jest.fn(),
    avatar:               'jest.String',
    currentUserFirstName: 'jest.String',
};

const comment = 'Merry christmass';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer { ...props } />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');

describe('Composer component:', () => {
    test('shoud have 1 <<section>> element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('fshoud have 1 <<form>> element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('shoud have 1 <<textarea>> element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('shoud have 1 <<input>> element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('shoud have 1 <<img>> element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('shoud have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea value should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should respond to state change properly', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });

        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea <<change>> event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });
        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('should handle form <<submit>> event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });
    test('_createPost prop should be invoked once after form submission', () => {
        //expect(props._createPost.mock.calls.length).toBe(1);
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });
    test('_submitComment and _handleFormSubmit class methods should be invoked once after form submitted', () => {

        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    test('should handle form <<submit>> on presskey Enter event', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);
        result.find('textarea').simulate('keypress', { key: 'Enter' });
        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('_updateComment class methods should be invoked once after form submitted', () => {
        expect(_updateCommentSpy).toHaveBeenCalledTimes(1);
    });
});
