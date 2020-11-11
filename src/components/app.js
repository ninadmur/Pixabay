import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './imageList';

class App extends React.Component {

    state = {
        images: []
    }


     onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: { Authorization: 'Client-ID eWquuvyzFArwTxBfD4lDPsV0e7Wfb5VorgkCpMnJslM' }
        });
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList image={this.state.images} />
            </div>
        );
    }

}

export default App;