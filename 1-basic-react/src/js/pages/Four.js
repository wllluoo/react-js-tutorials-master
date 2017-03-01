import React from "react";
import Content from './content';

export default class Four extends React.Component {
	constructor() {
		super();
		this.name = 'again!';
		this.state = { age: 111 };
	}
	showsomething(data) {
		return data+" world!";
	}
	navigate() {
		this.props.history.pushState(null,'/');
	}
	render(){
		// setTimeout(() => {
  //         this.setState({ age: 222 });
		// },2000);
		
		const key=[1,2,3];
		const list=[
			<Content key={key[0]} title = '雷猴'/>,
			<Content key={key[1]} title = '雷猴1'/>,
			<Content key={key[2]} title = {this.state.age}/>,
		];
		//获取url的参数,数据格式为：http://127.0.0.1:8081/#/four?_k=zc5zy3?data=1111&time=2222
		const { query } = this .props.location;
		const { data, time } = query;
		return(
			<div>
				{this.showsomething('hi')}
				{this.name};
				{list}
				{this.state.age}
				<button onClick={this.navigate.bind(this)}>回到主页</button>
				参数data:{data},time:{time},
			</div>

		)
	}
}
