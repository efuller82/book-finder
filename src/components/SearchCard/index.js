import React from 'react';
import './style.css';

function SearchCard() {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>Search for a Book</div>
                <form>
                    <input type='text' className='form-control' id='bookSearch'></input>
                    <button type="button" class="btn btn-dark">Search</button>
                </form>
            </div>
        </div>
    )
}


export default SearchCard;