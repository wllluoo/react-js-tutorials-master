import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
     const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query; 	
    console.info('params:',this.props);
  	const Articles=[
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More"
  	].map((title,i) => <Article title={title} key={i}/> );
  	
    return (
      <div>
      article: {article}, date: {date}, filter: {filter}
       <div class="row">{Articles}</div>
      </div>
    );
  }
}
