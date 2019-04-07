import React, { Component } from 'react' 
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as portfolioActions from '../../store/actions/portfolio';
import * as sharesActions from '../../store/actions/shares';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Share from '../../components/Share/Share';

import './Portfolio.css';

class Portfolio extends Component {

    componentDidMount() {
        this.props.fetchBalance();

    }

    handleSharePurchase = (data) => {
        this.props.setBalance(data.balance);
        this.props.setShares(data.shares);
    }

    render() {
        let shares = this.props.currentShares.map(share => {
            return <Share key={share.symbol} fetchShareValue={this.props.fetchShareValue} {...share} onSell={this.handleSharePurchase} currentBalance={this.props.currentBalance}/>
        });

        return (
            <div className="portfolio">
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant='h2' component='h2'>My Portfolio</Typography>
                        <Typography gutterBottom variant='h5' component='h2'>Current Balance ${this.props.currentBalance}</Typography>
                    </CardContent>
                    <CardContent classes={{ root: 'portfolio__shares-container' }}>
                        <Typography classes={{ root: 'portfolio__shares-container__title' }} gutterBottom variant='h5' component='h2'>Current Shares</Typography>
                        {shares}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentBalance: selectors.getBalance(state),
        currentShares: selectors.getCurrentShares(state)
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        fetchShareValue: (symbol) => dispatch(sharesActions.fetchShareValue(symbol)),
        fetchBalance: () => dispatch(portfolioActions.fetchBalance()),
        fetchShares: () => dispatch(portfolioActions.fetchShares()),
        setBalance: (balance) => dispatch(portfolioActions.setBalance(balance)),
        setShares: (shares) => dispatch(portfolioActions.setPortfolioShares(shares)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Portfolio);