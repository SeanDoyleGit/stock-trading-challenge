import React, { Component } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './UpdateBalanceForm.css';

export const StyledButton = withStyles({
    root: {
      marginTop: '20px'
    },
})(Button);

const StyledFormControl = withStyles({
    root: {
      marginTop: '20px'
    },
})(FormControl);

export class UpdateBalanceForm extends Component {

    state = {
        balanceMethod: 'deposit',
        amount: undefined
    };

    handleBalanceMethodChange = (event) => {
        this.setState({balanceMethod: event.target.value});
    }

    handleAmountChange = (event) => {
        this.setState({ amount: event.target.value });
    }

    preventSubmit = (event) => {
        event.preventDefault();
    }

    handleSubmit = () => { 
        axios.post(`/${this.state.balanceMethod}`, { amount: this.state.amount }).then(response => {
            this.props.onSubmit(response.data.balance);
        });

        this.setState({
            amount: undefined
        });
    }

    render() {
        return (
            <form onSubmit={this.preventSubmit}>
                <FormGroup classes={{ root: 'manage-balance__form'}}>
                    <FormControl>
                        <Select
                            classes={{ root: 'manage-balance__form__method'}}
                            value={this.state.balanceMethod}
                            onChange={this.handleBalanceMethodChange}
                            inputProps={{
                                name: 'balanceMethod',
                                id: 'balance-method',
                            }}
                        >
                            <MenuItem value='deposit'>Deposit</MenuItem>
                            <MenuItem value='withdraw'>Withdraw</MenuItem>
                        </Select>
                        <FormHelperText>Select the method to update your balance</FormHelperText>
                    </FormControl> 
                    <StyledFormControl>
                        <InputLabel>Amount</InputLabel>
                        <Input
                            id='amount'
                            value={this.amount}
                            onChange={this.handleAmountChange}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                        />
                    </StyledFormControl>
                    <StyledButton color="primary" margin='dense' onClick={this.handleSubmit} variant='contained'>
                        {this.state.balanceMethod}
                    </StyledButton>
                </FormGroup>
            </form>
        )
    }
}

export default UpdateBalanceForm;