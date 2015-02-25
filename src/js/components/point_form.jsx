var React = require('react');
require('./point_form.scss');

module.exports = React.createClass({
    timer: null,

    getInitialState() {
        return {
            autoPlay: false
        };
    },

    componentDidUpdate() {
        clearInterval(this.timer);

        if (this.state.autoPlay) {
            this.timer = window.setInterval(this.handleAddButtonClick, 1);
            return;
        }
    },

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        });
    },

    randomizeIt() {
        return Math.floor((Math.random() * 254) + 1);
    },

    handleAddButtonClick() {
        // Get the point data
        var point = [
            parseInt(this.refs.first.getDOMNode().value),
            parseInt(this.refs.second.getDOMNode().value),
            parseInt(this.refs.third.getDOMNode().value)
        ];

        // Add the point
        this.props.grouping.newPoint(point);

        // Rerandomise the inputs
        this.refs.first.getDOMNode().value = this.randomizeIt();
        this.refs.second.getDOMNode().value = this.randomizeIt();
        this.refs.third.getDOMNode().value = this.randomizeIt();
    },

    render() {
        return (
            <div className="input-form">
                <input ref="first" type="text" defaultValue={this.randomizeIt()} />
                <input ref="second" type="text" defaultValue={this.randomizeIt()} />
                <input ref="third" type="text" defaultValue={this.randomizeIt()} />
                <button onClick={this.handleAddButtonClick}>Add</button>
                <button onClick={this.toggleAutoPlay}>Autoplay</button>
            </div>
        )
    }
});
