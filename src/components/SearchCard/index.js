import React from 'react';
import './style.css';
// import { PromiseProvider } from 'mongoose';


function SearchCard(props) {

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>Search for a Book</div>
                <form>
                    <input type='text' className='form-control' id='bookSearch'></input>
                    {/* //! working on this */}
                    <button type='submit' onClick={props.handleFormSubmit} className="submitBtn btn btn-dark">Search</button>
                </form>
            </div>
        </div>
    )
}


export default SearchCard;