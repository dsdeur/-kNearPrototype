var React = require('react');
var Blob = require('./blob.jsx');
require('./group.scss');

module.exports = React.createClass({
    render() {
        var points = this.props.data.map((point) => {
            return <Blob data={point}/>;
        });

        return (
            <div className="group">
                <h1>{this.props.name}</h1>
                {points}
            </div>
        );
    }
});
