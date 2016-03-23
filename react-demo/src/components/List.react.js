/**
 * Created by greenicb on 16/3/22.
 */
var React = require("react");

var Item = require("./Item.react");
var ItemTitle = require("./ItemTitle.react")

var List = React.createClass({
    render : function(){
        var ItemList = [];
        var lastDept = null;
        var totalCount = 0;
        this.props.users.forEach(function(user){
            if(lastDept!=user.dept){
                ItemList.push(<ItemTitle name={user.dept} key={user.dept} totalCount={totalCount}></ItemTitle>);
                totalCount=0;
            }
            ItemList.push(<Item user={user} key={user.name}></Item>)
            totalCount += user.count-0;

            lastDept = user.dept;
        });
        return (
            <div id="dmListContainer">
                <ul>
                {ItemList}
                </ul>
            </div>
        )

    }
})

module.exports = List;