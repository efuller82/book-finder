// import React, { Component } from 'react';
// import SavedBook from '../pages/SavedBook';
// import Search from '../pages/Search';
// import Nav from './Nav';

// class GoogleBook extends Component {
//     state = {
//         currentPage: 'Search'
//     };

//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };

//     renderPage = () => {
//         if (this.state.currentPage === 'Search') {
//             return <Search />;
//         } else if (this.state.currentPage === 'SavedBook')
//             return <SavedBook />;
//     }


//     render() {
//         return (
//             <div>
//                 <Nav
//                     currentPage={this.state.currentPage}
//                     handlePageChange={this.handlePageChange}
//                 />
//                 {this.renderPage()}
//             </div>
//         );
//     }
// }