/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");
var Header = require("./Header.react");

var Main = React.createClass({
    render : function(){
        var users = this.props.datas;
        console.log(users)
        return (
            <div id="dmContainer">
                <Header></Header>
            </div>
        )
    }
})


module.exports = Main;