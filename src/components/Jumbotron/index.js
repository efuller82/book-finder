import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            className="jumbotron"
        >
            <h1 className='display-4'>(React) Google Books Search</h1>
            <p className='lead'>Search for and save books of interest</p>
            {children}
        </div>
    );
}

export default Jumbotron;
