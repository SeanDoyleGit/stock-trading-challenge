
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ManageBalance } from './ManageBalance';
import Typography from '@material-ui/core/Typography';
import UpdateBalanceForm from '../../components/UpdateBalanceForm/UpdateBalanceForm';

configure({ adapter: new Adapter() });

describe('<ManageBalance />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            currentBalance: 120,
            fetchBalance: jest.fn(),
            setBalance: jest.fn()
        };
    });

    it('should dispatch fetchBalance on componentDidMount', () => {
        underTest = shallow(<ManageBalance {...props} />);

        expect(props.fetchBalance.mock.calls.length).toEqual(1);
    });

    it('should render the current balance of the user', () => {
        underTest = shallow(<ManageBalance {...props} />);

        expect(underTest.find(Typography)).toHaveLength(1);
        expect(underTest.find(Typography).dive().dive().text()).toEqual(`Current Balance $${props.currentBalance}`);
    });

    it('should render UpdateBalanceForm', () => {
        underTest = shallow(<ManageBalance {...props} />);

        expect(underTest.find(UpdateBalanceForm)).toHaveLength(1);
    });

    it('should pass setBalance function as onSubmit prop to UpdateBalanceForm', () => {
        underTest = shallow(<ManageBalance {...props} />);

        expect(underTest.find(UpdateBalanceForm).props().onSubmit).toEqual(props.setBalance);
    });
});