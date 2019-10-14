import React, { Component } from 'react';
import SearchCard from '../components/SearchCard';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Results from '../components/Results';
import API from '../utils/API';


class Search extends Component {
    state = {
        result: {},
        search: ''
    }

    SearchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    //! working on this
    handleFormSubmit = event => {
        event.preventDefault();
        this.SearchBooks(this.state.search);
        console.log('yay a click has been registered');
        // this.searchBooks(this.state.search);
    };


    render() {
        return (
            <Wrapper>
                <Nav></Nav>
                <Jumbotron></Jumbotron>
                <SearchCard
                    handleFormSubmit={this.handleFormSubmit}
                >

                </SearchCard>
                <Results></Results>
            </Wrapper>
        )
    }
}

export default Search;