var React = require('react');
var actions = require("../redux/action");
var connect = require("react-redux").connect;
var store = require("../redux/store");

// var obj = {};
var FormInput = React.createClass({
	onListSubmit: function(e) {
		e.preventDefault();

		var pValue = this.refs.Primary.value;
		// this.props.dispatch(actions.saveList(pValue));

		var secValue = this.refs.Secondary.value;
		// this.props.dispatch(actions.saveList(secValue));

		var souValue = this.refs.Source.value;
		// this.props.dispatch(actions.saveList(souValue));

		var conValue = this.refs.Concept.value;
		// this.props.dispatch(actions.saveList(conValue));

		var effValue = this.refs.Effectiveness.value;
		// obj = Object.assign({}, pValue, secValue, souValue, conValue, effValue);
		// console.log(obj)
		this.props.dispatch(actions.saveList(pValue, secValue, souValue, conValue, effValue));
	},

	render: function() {
		return (
			<div className="form-wrapper">
			<form onSubmit={this.onListSubmit} className='input-group'>
				<input placeholder='Enter a new Task' 
				className="form-control" ref="Primary" />

				<input placeholder='Enter a new Task' 
				className="form-control" ref="Secondary" />

				<input placeholder='Enter a new Task' 
				className="form-control" ref="Source" />

				<input placeholder='Enter a new Task' 
				className="form-control" ref="Concept" />

				<input placeholder='Enter a new Task' 
				className="form-control" ref="Effectiveness" />	

				<span className="input-group-btn">
					<button type='submit' className="btn btn-secondary">Submit</button>
				</span>
				</form>
			</div>
		);
	}
});

// var mapStateToProps = function(state, props) {
// 	return {
// 		data: state.list
// 	}
// };

var Container = connect()(FormInput);

module.exports = Container;

