import React from 'react';
import './style.css';

const SearchCard = (props) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>Search for a Book</div>
                <form>
                    <input type='text'
                        name={props.name}
                        className='form-control'
                        id='bookSearch'
                        value={props.value}
                        onChange={props.handleInputChange}
                    />
                    <button onClick={props.handleFormSubmit} className="submitBtn btn btn-dark">Search</button>
                </form>
            </div>
        </div>
    );
}
export default SearchCard;