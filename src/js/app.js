var React = require('react');
var View = require('./components/view.jsx');
var grouping = require('./model/grouping.js');

grouping.init();
window.view = React.render(<View grouping={grouping} />, document.body);
