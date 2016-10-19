var React = require('react');
var actions = require("../redux/action");
var connect = require("react-redux").connect;
var store = require("../redux/store");


var FormInput = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var primary = this.refs.Primary.value;
		this.props.dispatch(actions.saveDataSuccess(primary));
			primary = "";
		// var SecondarySource = this.refs.SecondarySource.value;
		// this.props.dispatch(actions.saveDataSuccess(SecondarySource));

		// var Source = this.refs.Source.value;
		// this.props.dispatch(actions.saveDataSuccess(Source));

		// var Concept = this.refs.Concept.value;
		// this.props.dispatch(actions.saveDataSuccess(Concept));

		// var Effectiveness = this.refs.Effectiveness.value;
		// this.props.dispatch(actions.saveDataSuccess(Effectiveness));
	},

	render: function() {
		return (
			<div className="form-wrapper">
			<form onSubmit={this.onFormSubmit} className='input-group'>
				Primary: <input placeholder='Enter a new Task' 
				className="form-control" ref="Primary" />

				Secondary: <input placeholder='Enter a new Task' 
				className="form-control" ref="Secondary" />

				Source: <input placeholder='Enter a new Task' 
				className="form-control" ref="Source" />

				Concept: <input placeholder='Enter a new Task' 
				className="form-control" ref="Concept" />

				Effectiveness: <input placeholder='Enter a new Task' 
				className="form-control" ref="Effectiveness" />	

				<span className="input-group-btn">
					<button type='submit' className="btn btn-secondary">Submit</button>
				</span>
				</form>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		data: state.list
	}
};

var Container = connect(mapStateToProps)(FormInput);

module.exports = Container;

