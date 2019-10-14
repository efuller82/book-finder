import React from 'react';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-light'>
            {/* grid not working properly; */}

            <h1 className='title'>Google Books</h1>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                {/* inline list not working properly */}
                <ul className='list-inline'>
                    <li className='list-inline-item'><a href='/'>Search</a></li>
                    <li className='list-inline-item'><a href='/saved'>Saved</a></li>
                </ul>
            </div>

        </nav>

    );
}

export default Nav;