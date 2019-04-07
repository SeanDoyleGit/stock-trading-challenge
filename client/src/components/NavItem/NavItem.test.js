
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItem from './NavItem';
import { StyledButton } from './NavItem';
import { NavLink } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<NavItem />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            link: '/balance',
            exact: true
        };
    });

    it('should render a styled button', () => {
        underTest = shallow(<NavItem {...props} />);

        expect(underTest.find(StyledButton)).toHaveLength(1);
    });

    it('should render a nav link with link and exact props', () => {
        underTest = shallow(<NavItem {...props} />);

        expect(underTest.find(NavLink)).toHaveLength(1);
        expect(underTest.find(NavLink).props().to).toEqual(props.link);
        expect(underTest.find(NavLink).props().exact).toBeTruthy();
    });

    it('should render children inside the NavLink', () => {
        underTest = shallow(<NavItem {...props} >Test</NavItem>);

        expect(underTest.find(NavLink).props().children).toEqual('Test');
    });
});