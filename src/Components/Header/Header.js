import React from "react";
import "./Header.css";
import boy from "../../Assets/boy.png";
import { connect } from "react-redux";


function Header(props) {
  return (
    <div className="header">
      <img className="boyImage" src={boy} alt="null" />
      <div class="songHeading">
        <h1>{props && props.songName }</h1>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
console.log("TCL: state", state)
  return {
   songName: state.songName,
    
  };
};


export default connect(
  mapStateToProps,
  null
)(Header);
