import React, { Component } from 'react' 
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/transactionHistory';

class Portfolio extends Component {

    componentDidMount() {
        this.props.fetchTransactionHistory();
    }

    render() {
        let history = this.props.history.map((transaction, index) => {
            return (
                <div key={index} style={{margin: '10px', border: '1px solid black' }}>
                    <div style={{ textAlign: 'left', width: '400px', margin: 'auto' }}>
                        <h1>{transaction.name}</h1>
                        <p>{transaction.symbol}</p>
                        <p>amount: {transaction.amount}</p>
                        <p>price: ${transaction.price}</p>
                        <p>{transaction.timestamp}</p>
                        {
                            transaction.purchase ? <p>BUY</p> : <p>SELL</p>
                        }
                    </div>
                </div>
            );
        });


        return (
            <div>
                {history}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: selectors.getTransactionHistory(state)
    };    
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchTransactionHistory: () => dispatch(actions.fetchTransactionHistory())
    };
  };
  
  export default connect( mapStateToProps, mapDispatchToProps )(Portfolio);
  