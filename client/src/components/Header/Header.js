import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

const header = (props) => (
    <header className="header">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">Stock Trading</Typography>
                {props.children}
                <Typography classes={{ root: "header__balance" }}variant="h6" color="inherit">Balance: ${props.balance}</Typography>
            </Toolbar>
        </AppBar>
    </header>
);

export default header;

