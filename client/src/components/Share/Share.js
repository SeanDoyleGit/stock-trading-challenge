import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Share.css';

export const StyledHeader = withStyles({
    root: {
        height: '60px',
        alignItems: 'initial'
    },
})(CardHeader);

class Share extends Component {

    state = {
        cost: 0,
        amountOfShares: 0,
        preventTransaction: true
    }
    
    componentDidMount() {
        this.props.fetchShareValue(this.props);
    }

    handleAmountChange = (event) => {
        const amountOfShares = parseInt(event.target.value);
        const cost = amountOfShares * this.props.value;
        const preventTransaction = (
            !Number.isInteger(amountOfShares) || 
            amountOfShares < 0 ||
            amountOfShares > this.props.amount ||
            isNaN(cost) || 
            cost > this.props.currentBalance
        );

        this.setState({ amountOfShares, cost, preventTransaction });
    }

    purchaseShare = () => {
        this.setState({
            cost: 0,
            amountOfShares: 0,
        })

        const params = {
            name: this.props.name,
            databaseCode: this.props.databaseCode,
            symbol: this.props.symbol,
            amount: this.state.amountOfShares
        };

        axios.post('/purchaseShare', params).then(response => {
            this.props.onPurchase(response.data);
        });
    }

    sellShare = () => {
        this.setState({
            cost: 0,
            amountOfShares: 0,
        })

        const params = {
            name: this.props.name,
            databaseCode: this.props.databaseCode,
            symbol: this.props.symbol,
            amount: this.state.amountOfShares
        };

        axios.post('/sellShare', params).then(response => {
            this.props.onSell(response.data);
        });
    }

    render() {
        let { name, symbol, value, amount, currentBalance, onPurchase } = this.props;

        return (
            <div className="share">
                <Card className='share-container'>
                    <StyledHeader 
                        title={name}
                        subheader={symbol}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6'>
                            value: {value ? <span style={{color: green[500]}}>${value}</span> : '...Loading'}
                        </Typography>
                        <FormControl>
                            <InputLabel>Amount</InputLabel>
                            <Input
                                id='amount'
                                type="number"
                                value={this.state.amountOfShares}
                                onChange={this.handleAmountChange}
                                endAdornment={ onPurchase ? null : <InputAdornment position='end'>/{amount}</InputAdornment>}
                            />
                        </FormControl>
                        <Button 
                            classes={{ root: `${onPurchase ? 'share__buy-button' : 'share__sell-button'}` }}
                            onClick={onPurchase ? this.purchaseShare : this.sellShare}
                            variant="contained"
                            color="secondary"
                            disabled={this.state.preventTransaction}
                        >
                            {onPurchase ? 'Buy' : 'Sell'}
                        </Button>
                        <div className='share__balance-container'>
                            <Typography classes={{ root: 'share__balance-container__balance' }} gutterBottom variant='h6'>Balance: ${currentBalance}</Typography>
                            <Typography classes={{ root: 'share__balance-container__cost' }} gutterBottom variant='h6'>{onPurchase ? 'Cost' : 'Profit'}: ${this.state.cost}</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>  
        );
    }
}

export default Share;