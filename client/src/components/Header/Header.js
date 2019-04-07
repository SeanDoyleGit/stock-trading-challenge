import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const header = (props) => (
    <header>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">Stock Trading</Typography>
                {props.children}
            </Toolbar>
        </AppBar>
    </header>
);

export default header;

