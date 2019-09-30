import React from "react";
import "./AlbumContainer.css";
import cd from "../../Assets/cd.png";
import { connect } from "react-redux";
import * as actionCreator from "../../Action/Action";

function AlbumContainer(props) {

  const buyAlert = () => {
        alert('Thanks for Purchasing this Album!');
  }

  return (
    <div className="main">

      <img className="cdImg" src={cd} alt="null" />

      <div className="headContainer">
        <h1 className="heading">DiscoGraphy</h1>
      </div>

      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              <td>Some Night</td>
              <td id="year">= &emsp;13</td>
              <td>
                <button className="button" onClick={buyAlert}>buy</button>
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => props.listenFirst("Some Night :- ")}
                >
                  Listen
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>Love Yourself</td>
              <td id="year">= &emsp;17</td>
              <td>
                <button className="button" onClick={buyAlert}>buy</button>
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => props.listenSecond("Love Yourself :- ")}
                >
                  Listen
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapDispachToProps = dispach => {
  return {
    listenFirst: name => dispach(actionCreator.firstList(name)),
    listenSecond: name => dispach(actionCreator.secondList(name))
  };
};

export default connect(
  null,
  mapDispachToProps
)(AlbumContainer);
