import React from 'react';
import './style.css';

// class Search extends Component {
//     state = {
//         result: {},
//         search: ''
//     }


// handleChange(event) {
//     this.setState({ title: event.target.value })
// }

function SearchCard(props) {

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>Search for a Book</div>
                <form>
                    <input type='text'
                        name='title'
                        className='form-control'
                        id='bookSearch'
                    // value={this.state.title}
                    // onChange={this.handleChange.bind(this)}
                    >

                    </input>
                    {/* //! working on this */}
                    <button type='submit' onClick={props.handleFormSubmit} className="submitBtn btn btn-dark">Search</button>
                </form>
            </div>
        </div>
    )
}
// }

export default SearchCard;