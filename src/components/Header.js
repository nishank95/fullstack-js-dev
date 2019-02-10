import React from 'react'

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({ message }) =>{
    return(
        <h1 style={{color}} className="Header text-center">
            {message}
        </h1>
    );
}


export default Header;