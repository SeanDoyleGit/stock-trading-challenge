import React, { Component } from 'react' 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Search from '../../components/Search/Search';

import './ManageShares.css';

class ManageShares extends Component {

    render() {
        return (
            <div className="manage-shares">
                <Card className='manage-shares__search-container'>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>Look up shares</Typography>
                        <Search />
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>Results</Typography>
                    </CardContent>
                </Card>
            </div>  
        );
    }
}

export default ManageShares;