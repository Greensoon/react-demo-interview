/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var Item = React.createClass({
    handleChecked : function(){
        this.props.handleChecked(this.props.user.dept);
    },
    render : function(){
        return (
            <li><input type="checkbox" checked={this.props.checkFlag} ref={this.props.user.name} onClick={this.handleChecked}/><span>{this.props.user.name}</span><span className="dmNupos">{this.props.user.count}</span></li>
        )
    }
})

module.exports = Item;