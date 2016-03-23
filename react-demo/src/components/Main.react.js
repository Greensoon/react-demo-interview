/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");
var Header = require("./Header.react");
var List   = require("./List.react");

var Main = React.createClass({
    getInitialState : function(){
        return {
            currParent : null,
            isAllSelected : false
        }
    },

    handleChecked : function(parentRef,selectFlag){
        this.setState({
            currParent : parentRef,
            isAllSelected : selectFlag
        })
    },

    render : function(){
        var users = this.props.datas;

        return (
            <div id="dmContainer">
                <Header handleChecked={this.handleChecked}></Header>
                <List users={users} handleChecked={this.handleChecked}></List>
            </div>
        )
    }
})


module.exports = Main;