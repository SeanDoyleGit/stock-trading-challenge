
import React from 'react';
import * as axios from "axios";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UpdateBalanceForm, StyledButton } from './UpdateBalanceForm';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

configure({ adapter: new Adapter() });

jest.mock("axios");

describe('<UpdateBalanceForm />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            onSubmit: jest.fn()
        };
    });

    it('should render form with the preventSubmit function', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        expect(underTest.find('form')).toHaveLength(1);

        let event = { preventDefault: jest.fn() };
        underTest.find('form').props().onSubmit(event);
        expect(event.preventDefault.mock.calls.length).toEqual(1);
    });

    it('should render Select with deposit and withdraw options', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        expect(underTest.find(Select)).toHaveLength(1);
        expect(underTest.find(Select).find(MenuItem).get(0).props.value).toEqual('deposit');
        expect(underTest.find(Select).find(MenuItem).get(1).props.value).toEqual('withdraw');
    });

    it('should update the balanceMethod in state when a new value is selected', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        underTest.find(Select).props().onChange({ target: { value: 'withdraw' }});
        expect(underTest.state('balanceMethod')).toEqual('withdraw');
    });

    it('should render the input for entering the amount', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        expect(underTest.find(Input)).toHaveLength(1);
    });

    it('should update the amount in state when a new value is entered', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        underTest.find(Input).props().onChange({ target: { value: 200 }});
        expect(underTest.state('amount')).toEqual(200);
    });

    it('should render the styled submit button', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        expect(underTest.find(StyledButton)).toHaveLength(1);
    });

    it('should call post from axios on click', () => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        axios.post.mockImplementation(() => Promise.resolve({ data: { balance: 1 }}));

        underTest.find(StyledButton).props().onClick();
        expect(axios.post.mock.calls.length).toEqual(1);
    });

    it('should call onSubmit on click', (done) => {
        underTest = shallow(<UpdateBalanceForm {...props} />);

        axios.post.mockImplementation(() => Promise.resolve({ data: { balance: 11 }}));

        underTest.find(StyledButton).props().onClick();

        setTimeout(() => {
            expect(props.onSubmit.mock.calls.length).toEqual(1);
            expect(props.onSubmit.mock.calls[0][0]).toEqual(11);
            done();
        });
    });
});