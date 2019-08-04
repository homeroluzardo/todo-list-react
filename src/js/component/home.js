import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				"Make the bed",
				"Wash my hands",
				"Walk the dog",
				"Eat",
				"Go shopping"
			]
		};
	}

	addItem(event) {
		if (event.key === "Enter") {
			this.setState({
				tasks: this.state.tasks.concat(event.target.value)
			});
		}
	}

	removeItem(erase) {
		let temporal = this.state.tasks.filter(item => item !== erase);
		this.setState({ tasks: temporal });
		//console.log(temporal);
	}

	render() {
		return (
			<div id="lista">
				<h1>todos</h1>
				<input
					onKeyPress={event => this.addItem(event)}
					className="newTask"
					type="text"
					placeholder="What needs to be done?"
				/>
				<ul className="list-group">
					{this.state.tasks.map((item, index) => {
						return (
							<li className="list-group-item" key={index}>
								{item}{" "}
								<span onClick={() => this.removeItem(item)}>
									&#10005;
								</span>
							</li>
						);
					})}
					<li className="list-group-item" id="itemsLeft">
						{this.state.tasks.length + " items left"}
					</li>
				</ul>
			</div>
		);
	}
}
