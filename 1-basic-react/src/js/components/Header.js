import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
 
  handleChange(e){
    const title=e.target.value;
    this.props.changeTitlee(title);
  }

  render() {
    return (
      <div>
        <Title titlee={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
