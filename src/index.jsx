import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  //  <ul key="ul">
  //   <li key="A" id="A">
  //     A
  //   </li>
  //   <li key="B" id="B">
  //     B
  //   </li>
  //   <li key="C" id="C">
  //     C
  //   </li>
  // </ul>
  render() {
    const { count } = this.state;
    return !count ? (
      <ul key="ul" onClick={this.handleClick}>
        <li key="A" id="A">
          A
        </li>
        <p key="B" id="B">
          B
        </p>
        <li key="C" id="C">
          C
        </li>
        <li key="D" id="D">
          D
        </li>
      </ul>
    ) : (
      <ul key="ul" onClick={this.handleClick}>
        <li key="A" id="A2">
          A
        </li>
        <li key="B" id="B2">
          B
        </li>
        <li key="C" id="C2">
          C
        </li>
      </ul>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
