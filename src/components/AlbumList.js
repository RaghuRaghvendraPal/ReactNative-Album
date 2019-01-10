// Inport libraries

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';
// Create Component -: A Compon'ent ia javascript function that returns some amount of JSX
// class uses render to return JSX
class AlbumList extends Component {
  state = { albums: [] };
  // This method will automatically run whenever this class executed
  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
      return (
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      );
  }
}

// Make a Component to other parts of application
export default AlbumList;
//  other files of project will use this Component
