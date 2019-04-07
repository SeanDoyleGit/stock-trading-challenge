import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/portfolio';
import * as selectors from '../../store/selectors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UpdateBalanceForm from '../../components/UpdateBalanceForm/UpdateBalanceForm';


import './ManageBalance.css';

export class ManageBalance extends Component {

    componentDidMount() {
        this.props.fetchBalance();
    }
 
    render() {
        return (
            <div className='manage-balance'>
                <Card className='manage-balance__form-container'>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>Current Balance ${this.props.currentBalance}</Typography>
                        <UpdateBalanceForm onSubmit={this.props.setBalance}/>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentBalance: selectors.getBalance(state)
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBalance: () => dispatch(actions.fetchBalance()),
        setBalance: (balance) => dispatch(actions.setBalance(balance))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ManageBalance);