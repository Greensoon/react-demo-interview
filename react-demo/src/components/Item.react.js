/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var Item = React.createClass({
    render : function(){
        return (
            <li><input type="checkbox" /><span>{this.props.user.name}</span><span className="dmNupos">{this.props.user.count}</span></li>
        )
    }
})

module.exports = Item;