import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state={
      title:'123'
    }
  }

  changeTitle(title)
  {
    this.setState({title});
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} changeTitlee={this.changeTitle.bind(this)}></Header>
        <Footer title={this.state.title}></Footer>
      </div>
    );
  }
}
