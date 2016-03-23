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
            isAllChecked : false
        }
    },

    handleChecked : function(parentRef,checkedFlag){
        this.setState({
            currParent : parentRef,
            isAllChecked : checkedFlag
        })
    },

    render : function(){
        var users = this.props.datas;
        return (
            <div id="dmContainer">
                <Header handleChecked={this.handleChecked}></Header>
                <List users={users} handleChecked={this.handleChecked} currParent={this.state.currParent} isAllChecked={this.state.isAllChecked}></List>
            </div>
        )
    }
})


module.exports = Main;