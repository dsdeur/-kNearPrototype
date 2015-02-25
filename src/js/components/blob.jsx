var React = require('react');
require('./blob.scss');

module.exports = React.createClass({
    render() {
        var data = this.props.data.map((dataPoint) => <span className="datapoint">{dataPoint}. &nbsp;</span>);
        var dataPoint = this.props.data;

        return (
            <div className="blob" style={{background: 'rgb(' + dataPoint[0] + ', ' + dataPoint[1] + ', ' + dataPoint[2] + ')'}}>
                {data}
            </div>
        );
    }
});
