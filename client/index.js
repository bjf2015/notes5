var React = require("react");
import { render } from 'react-dom';
require("../css/main.css");
var routes = require ('./components/routes');
// import Main from './components/app';


render(routes, document.getElementById('app'));