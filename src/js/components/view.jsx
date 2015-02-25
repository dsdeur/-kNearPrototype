var React = require('react');
var Group = require('./group.jsx');
var PointForm = require('./point_form.jsx');

module.exports = React.createClass({
    // called by models from outside.
    refresh() {
        this.forceUpdate();
    },

    render() {
        var groups = this.props.grouping.data.map((group, index) => <Group name={index} data={group} />);

        return (
            <div>
                <h1>kNear!</h1>
                <PointForm grouping={this.props.grouping}/>
                {groups}
            </div>
        );
    }
});
