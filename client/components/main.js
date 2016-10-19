var React = require("react");
var FormInput = require("./formInput");

var Main = React.createClass({
		render: function() {
		return (
			<div>
			{this.props.children}

			</div>

		)
	}
});


module.exports = Main;
