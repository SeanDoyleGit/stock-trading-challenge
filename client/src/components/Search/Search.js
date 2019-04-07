import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import './Search.css';

const search = (props) => (
    <div className="search">
        <div className="search__search-icon">
            <SearchIcon />
        </div>
        <InputBase
            value={props.value}
            onChange={props.onChange}
            placeholder="Search…"
            classes={{
                root: "search__input-root",
                input: "search__input",
            }}
        />
    </div>
)

export default search;