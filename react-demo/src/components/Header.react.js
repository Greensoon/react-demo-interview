/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var  Header = React.createClass({
    clearChecked : function(){
        this.props.handleChecked(null,false);
    },
    render : function(){
        return (
            <div id="dmHeader">
                <h3>招聘职位</h3>
                <button id="dmClearAll" onClick={this.clearChecked}>清空</button>
            </div>
        )
    }
})

module.exports = Header;