import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {

    // prop for parent to child
    //State for component internal record
    //only used with class based component not functional component
    state = { albums : [] };

    //Called automatically when rendered
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));    //always changed with setState and not 'this.state=123';
    }

    renderAlbums(){
        //mapping array to individual element
        return (this.state.albums.map(album =>
            <AlbumDetails key={album.title} album={album} />)  //No text to be shown so self-closing component
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;