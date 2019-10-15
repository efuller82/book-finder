import React, { Component } from 'react';
import SearchCard from '../components/SearchCard';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Results from '../components/Results';
import axios from 'axios';
import API from '../utils/API';


class Search extends Component {
    state = {
        result: {},
        search: '',
        books: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const input = this.state.search;
        console.log(input);
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + input)
            .then(res => {
                if (res.data.items === 'error') {
                    this.resetState();
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items;

                    // Render books in dom by updating state.books
                    console.log(results);
                    this.setState({ books: results, error: '' });
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert('book saved') }))
            .catch(err => console.log(err))
    }

    resetState = () => {
        this.setState({
            result: {},
            search: '',
            books: []
        });
    }



    render() {
        return (
            <Wrapper>
                <Nav></Nav>
                <Jumbotron></Jumbotron>
                <SearchCard
                    name='search'
                    handleFormSubmit={this.handleFormSubmit}
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                >

                </SearchCard>
                {this.state.books.map(book => {
                    return (
                        <Results
                            key={book.id}
                            textSnippet={book.searchInfo.textSnippet}
                            authors={book.volumeInfo.authors}
                            title={book.volumeInfo.title}
                            link={book.volumeInfo.previewLink}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            handleSavedButton={this.handleSavedButton}
                        />
                    )
                })}
            </Wrapper>
        )
    }
}

export default Search;