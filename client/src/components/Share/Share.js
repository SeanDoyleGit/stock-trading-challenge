import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Share.css';

export const StyledHeader = withStyles({
    root: {
        height: '120px',
        alignItems: 'initial'
    },
})(CardHeader);

class Share extends Component {

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
                        <Typography gutterBottom variant='h6'>value: {this.props.value ? `$${this.props.value}` : '...Loading'}</Typography>
                    </CardContent>
                </Card>
            </div>  
        );
    }
}

export default Share;