/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var ItemTitle = React.createClass({
    handleCheckbox : function(){
        this.props.handleChecked(this.props.name,!this.props.checked)
    },
    render : function(){

        return (
                <li className="dmDeptTitle"><input type="checkbox" onClick={this.handleCheckbox} checked={this.props.checked}/><span >{this.props.name}</span><span className="dmNupos">{this.props.totalCount}</span></li>
            )

    }
})

module.exports = ItemTitle;