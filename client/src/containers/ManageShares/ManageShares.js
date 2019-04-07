import React, { Component } from 'react' 
import { connect } from 'react-redux';
import _ from 'lodash';
import * as portfolioActions from '../../store/actions/portfolio';
import * as sharesActions from '../../store/actions/shares';
import * as selectors from '../../store/selectors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Search from '../../components/Search/Search';
import Share from '../../components/Share/Share';

import './ManageShares.css';

class ManageShares extends Component {
    constructor(props) {
        super(props);
        this.fetchShares = _.debounce(this.props.fetchShares, 1000);
    }

    handleSearchValueChange = (event) => {
        this.props.setSearchValue(event.target.value);
        this.fetchShares(event.target.value);
    }

    handleSharePurchase = (data) => {
        this.props.setBalance(data.balance);
        this.props.setPortfolioShares(data.shares);
    }

    render() {
        let shares = this.props.shares.map(share => {
            return <Share key={share.symbol} fetchShareValue={this.props.fetchShareValue} {...share} onPurchase={this.handleSharePurchase} currentBalance={this.props.currentBalance}/>
        });

        return (
            <div className="manage-shares">
                <Card className='manage-shares__search-container'>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>Look up shares</Typography>
                        <Search value={this.props.searchValue} onChange={this.handleSearchValueChange}/>
                    </CardContent>
                    <CardContent classes={{ root: 'manage-shares__results-container' }}>
                        <Typography classes={{ root: 'manage-shares__results-container__title' }} gutterBottom variant='h5' component='h2'>Results</Typography>
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
        searchValue: selectors.getSearchValue(state),
        shares: selectors.getShares(state)
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        setSearchValue: (value) => dispatch(sharesActions.setSearchValue(value)),
        fetchShares: (searchValue) => dispatch(sharesActions.fetchShares(searchValue)),
        fetchShareValue: (symbol) => dispatch(sharesActions.fetchShareValue(symbol)),
        setBalance: (balance) => dispatch(portfolioActions.setBalance(balance)),
        setPortfolioShares: (shares) => dispatch(portfolioActions.setPortfolioShares(shares))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ManageShares);