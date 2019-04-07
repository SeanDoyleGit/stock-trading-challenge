
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import NavItem from '../NavItem/NavItem';
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    let underTest;

    it('should render typography with test Stock Trading', () => {
        underTest = shallow(<Header/>);

        expect(underTest.find(Typography)).toHaveLength(1);
        expect(underTest.find(Typography).props().children).toEqual('Stock Trading');
    });

    it('should render children inside the Header', () => {
        underTest = shallow(<Header><NavItem /><NavItem /></Header>);

        expect(underTest.find(NavItem)).toHaveLength(2);
    });
});