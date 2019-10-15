import React from 'react';
import './style.css';
import books from '../../routes/api/books';

function Results(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h2 className='card-title'>
                    {props.title}
                </h2>
                <h4>{props.authors}</h4>
                <div className='card-content'>
                    <p id='snippet'>{props.textSnippet}</p>
                    <img src={props.image} alt='The cover of the book' id='bookCover' />
                </div>
                <div>
                    <a href={props.link} className='btn btn-success' role='button'>View</a>
                    <button className='btn btn-danger' id={books.id} onClick={(event) => props.handleSavedButton(event)}>Save</button>
                </div>
            </div>
        </div>

    );
}
export default Results;