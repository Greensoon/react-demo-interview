/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");
var Header = require("./Header.react");
var List   = require("./List.react");

var Main = React.createClass({
    render : function(){
        var users = this.props.datas;

        return (
            <div id="dmContainer">
                <Header></Header>
                <List users={users}></List>
            </div>
        )
    }
})


module.exports = Main;