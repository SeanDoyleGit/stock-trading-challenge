import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './NavItem.css';

export const StyledButton = withStyles({
    root: {
        marginLeft: '20px',
        padding: '0'
    },
})(Button);

const navItem = (props) => (
    <StyledButton classes={{ root: "nav-item" }} color="inherit">
        <NavLink 
            className="nav-item__link"
            to={props.link}
            exact={props.exact}
        >
            {props.children}
        </NavLink>
    </StyledButton>
);

export default navItem;

