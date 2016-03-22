/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var  Header = React.createClass({
    render : function(){
        return (
            <div id="dmHeader">
                <h3>招聘职位</h3>
                <button id="dmClearAll">清空</button>
            </div>
        )
    }
})

module.exports = Header;