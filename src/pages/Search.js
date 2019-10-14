import React, { Component } from 'react';
import SearchCard from '../components/SearchCard';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Results from '../components/Results';
// import axios from 'axios';


class Search extends Component {
    state = {
        result: {},
        search: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target);
    };



    // // //! working on this
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     // this.SearchBooks(this.state.search);
    //     console.log('yay a click has been registered');
    //     console.log(this.state.title);
    //     axios.get('/api/search/:searchTitle')
    // };



    render() {
        return (
            <Wrapper>
                <Nav></Nav>
                <Jumbotron></Jumbotron>
                <SearchCard
                    name='search'
                    handleFormSubmit={this.handleFormSubmit}
                    value={this.state.search}
                    onChange={this.handleInputChange}
                >

                </SearchCard>
                <Results></Results>
            </Wrapper>
        )
    }
}

export default Search;