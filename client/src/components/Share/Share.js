import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
        preventPurchase: true
    }

    handleAmountChange = (event) => {
        const amountOfShares = event.target.value;
        const cost = event.target.value * this.props.value;
        const preventPurchase = (!Number.isInteger(amountOfShares) || isNaN(cost) || cost > this.props.currentBalance);

        this.setState({ amountOfShares, cost, preventPurchase });
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

    componentDidMount() {
        this.props.fetchShareValue(this.props);
    }

    render() {
        return (
            <div className="share">
                <Card className='share-container'>
                    <StyledHeader 
                        title={this.props.name}
                        subheader={this.props.symbol}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6'>
                            value: {this.props.value ? <span style={{color: green[500]}}>${this.props.value}</span> : '...Loading'}
                        </Typography>
                        <FormControl>
                            <InputLabel>Amount</InputLabel>
                            <Input
                                id='amount'
                                value={this.state.amountOfShares}
                                onChange={this.handleAmountChange}
                            />
                        </FormControl>
                        <Button classes={{ root: 'share__buy-button' }} onClick={this.purchaseShare} variant="contained" color="secondary" disabled={this.state.preventPurchase}>Buy</Button>
                        <div className='share__balance-container'>
                            <Typography classes={{ root: 'share__balance-container__balance' }} gutterBottom variant='h6'>Balance: ${this.props.currentBalance}</Typography>
                            <Typography classes={{ root: 'share__balance-container__cost' }} gutterBottom variant='h6'>Cost: ${this.state.cost}</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>  
        );
    }
}

export default Share;