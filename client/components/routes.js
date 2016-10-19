var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
var Provider = require("react-redux").Provider;
var Main = require("./main");
var FormInput = require("./FormInput");
var store = require("../redux/store");


var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={FormInput} />
			</Route>
		</Router>
	</Provider>
);


module.exports = routes;