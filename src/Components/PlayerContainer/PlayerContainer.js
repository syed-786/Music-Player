import React, { Component } from "react";
import "./PlayerContainer.css";
import loveStory from "../../Assets/loveStory.mp3";
import fairyTale from "../../Assets/Fairytale.mp3";
import BackToDecember from "../../Assets/BackToDecember.mp3";
import Belong from "../../Assets/YouBelongWithMe.mp3";
import { connect } from "react-redux";
import * as actionCreator from "../../Action/Action";

let songListFirst = [
  {
    id: 1,
    songName: "A Love Story",
    songPath: loveStory
  },
  {
    id: 2,
    songName: "Today was a Fairy Tale",
    songPath: fairyTale
  }
];

let songListSec = [
  {
    id: 3,
    songName: "You Belong With Me",
    songPath: Belong
  },
  {
    id: 4,
    songName: "Back To December",
    songPath: BackToDecember
  }
];

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlaying: "",
      songPath: null,
      isPlaying: false,
      songId: "",
      autoPlay: false
    };
  }

  setSong = item => {
    this.props.changeSong(item.songName);
    this.setState({
      nowPlaying: item.songName,
      songPath: item.songPath,
      isPlaying: true,
      songId: item.id
    });
  };

  stopSong = item => {
    const el = document.getElementById("audiOne");
    el.pause();
    this.props.resetSong();
    this.setState({
      nowPlaying: "",
      songPath: null,
      isPlaying: false,
      songId: ""
    });
  };

  handlePause = () => {
    this.props.resetSong();
    this.setState({
      nowPlaying: "",
      songPath: null,
      isPlaying: false,
      songId: ""
    });
  };

  // handlePlay = () => {
  //   this.setState({
  //     nowPlaying: this.state.songName,
  //     songPath: this.state.songPath,
  //     isPlaying: true,
  //     songId: this.state.songId
  //   });
  // };

  render() {
    let songs = this.props.listen
      ? songListFirst.map(item => (
          <>
            {this.state.isPlaying && this.state.songId === item.id ? (
              <i
                className="fa fa-pause fa-lg playButton"
                onClick={() => this.stopSong(item)}
              ></i>
            ) : (
              <i
                className="fa fa-play fa-lg playButton"
                onClick={() => this.setSong(item)}
              ></i>
            )}
            <span key={item.id} className="songStyle">
              {item.songName}
            </span>
            <br />
            <br />
          </>
        ))
      : songListSec.map(item => (
          <>
            {this.state.isPlaying && this.state.songId === item.id ? (
              <i
                className="fa fa-pause fa-lg playButton"
                onClick={() => this.stopSong(item)}
              ></i>
            ) : (
              <i
                className="fa fa-play fa-lg playButton"
                onClick={() => this.setSong(item)}
              ></i>
            )}
            <span key={item.id} className="songStyle">
              {item.songName}
            </span>{" "}
            <br />
            <br />
          </>
        ));

    return (
      <div className="mainC">
        <h1 className="headingPlay">Now Playing : </h1>
        <h1 className="headingTwo">
          Song Name :-{" "}
          <span className="songTitle"> {this.state.nowPlaying}</span>
        </h1>

        <div className="player">
          <audio
            id="audiOne"
            src={this.state.songPath}
            controls
            autoPlay
            onPause={this.handlePause}
            onPlay={this.handlePlay}
          />
        </div>

        <br />
        <br />

        <h1 style={{ marginLeft: "5vh" }}>{this.props.albumName}</h1>

        <div className="songList">
          {this.props.isToggle && <h2> {songs} </h2>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listen: state.listen,
    albumName: state.albumName,
    isToggle: state.isToggle
  };
};

const mapDispachToProps = dispach => {
  return {
    changeSong: name => dispach(actionCreator.changeSong(name)),
    resetSong: () => dispach(actionCreator.resetSong())
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(PlayerContainer);
