import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
// import Api from '../../utils/API';

class SearchCard extends Component {
    state = {
        state: '',
        books: [],
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const input = this.state.value;
        console.log(input);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + input)
            .then(res => {
                const found = res.data;
                this.setState({ found });
                console.log(found);
                if (res.data.itmes === 'error') {
                    throw new Error(res.data.items);
                }
                else {
                    var results = res.data.items
                    results = {
                        key: results.id,
                        title: results.volumeInfo.title,
                        author: results.volumeInfo.authors,
                        link: results.volumeInfo.infoLink,
                        image: results.volumeInfo.imageLinks.thumbnail,
                        description: results.volumeInfo.description
                    }
                    return results;

                }
                this.setState({ books: results, error: '' })
            })
            .catch(err => this.setState({ error: err.items }));
    }

    render() {

        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>Search for a Book</div>
                    <form>
                        <input type='text'
                            name='input'
                            className='form-control'
                            id='bookSearch'
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        >
                        </input>
                        {/* //! working on this */}
                        <button onClick={this.handleFormSubmit} className="submitBtn btn btn-dark">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchCard;