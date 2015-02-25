var generator = require('knear');

var k = 3;

var Grouping = {
    data: [],
    machine: new generator.kNear(k),
    nextgroup: 0,

    // init does the initial learning
    init(view) {
        // Init the machine with two groups
        this.newGroup([[0, 12, 254], [12, 13, 145], [34, 31, 230]]);
        this.newGroup([[0, 245, 254], [12, 231, 145], [34, 200, 230]]);
        this.newGroup([[250, 2, 3], [254, 12, 20], [240, 12, 31]]);
        this.newGroup([[13, 235, 3], [21, 214, 20], [41, 254, 31]]);
        this.newGroup([[234, 235, 3], [222, 214, 20], [213, 254, 31]]);
        this.newGroup([[234, 2, 213], [222, 3, 254], [213, 12, 234]]);
        this.newGroup([[0, 21, 10], [8, 2, 0], [4, 6, 2]]);
        this.newGroup([[254, 243, 231], [214, 231, 254], [213, 222, 230]]);
    },

    // newGroup creates a new group from an array of points
    newGroup(points) {
        // Learn the points for this group
        for (var i = 0; i < (points.length || 3); i++) {
            this.machine.learn(points[i], this.nextgroup);
        }

        // Add the points to the data array
        this.data.push(points);
        this.nextgroup++;
    },

    // newPoint adds a new point to the best classified group
    newPoint(point) {
        // Classify the group for the point and learn it
        var group = parseInt(this.machine.classify(point));
        //this.machine.learn(point, group);

        // Add point to group
        this.data[group].push(point);

        // Check if group needs splitting
        if (this.data[group].length >= 20) {
            this.splitGroup(this.data[group]);
        }

        // Refresh view
        window.view.refresh();
    },

    // Split a group into two groups
    splitGroup(group) {
        // Remove X number of items from the group and unlearn them
        var newGroupArray = group.splice(0, Math.floor((Math.random() * 15) + 3));

        // Create a new group out of the extracted items
        this.newGroup(newGroupArray);

        // Refresh view
        window.view.refresh();
    }
}

module.exports = Grouping;
