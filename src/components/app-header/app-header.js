import React from 'react';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({totalPrice}) => {

    return (
        <header className="header">
            <Link to ={'/'} className = "header__link">Platform</Link>
            <Link to = "/cart" className = "header__link">
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return{
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);