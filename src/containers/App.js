import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchSpotify from '../utils/SearchSpotify';
import SongItem from '../components/SongItem/SongItem';
import SongList from '../components/SongList/SongList';
import Title from '../components/Title/Title';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    SearchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks, songPosition } = this.state;

    return(
      <div className="container">
        <Title
          id="spotifyTitle"
          name="Spotify Music Search"
        />
        <SearchBar
          updateText={(song) => this.setState({ song })}
          fetchSongs={this.fetchSongs}
          buttonName='Search Songs'
        />
      {tracks.items && <SongItem
        songData={tracks.items[songPosition]}/>
      }
        {/* The && above safeguards the info on the right side by checking for that information's existence.
            the 'tracks.items && 'line is a little JS trickery/safeguard. If the tracks exist, we can display that info.
            If the info is present, then return the right hand side */}
      {tracks.items && <SongList
        listOfSongs={tracks.items}
        selectSong={(songPosition) =>
          this.setState({ songPosition })} />
      }
      </div>
    );
  }
}
