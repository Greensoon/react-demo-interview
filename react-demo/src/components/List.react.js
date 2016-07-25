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
        var totalList = [];
        var handleChecked = this.props.handleChecked;
        var parentRef = this.props.currParent;
        var isAllChecked = this.props.isAllChecked;

        this.props.users.forEach(function(user){            //处理和相对的条目总和
            var totalObj={count:0};

            if(lastDept!=user.dept){
                totalObj.dept=user.dept;
                totalList.push(totalObj);
            }
            var len = totalList.length;

            if(lastDept!=user.dept && totalObj.count!=0){
                totalObj = {count:0};
            }

            if(len>0){
                (totalList[len-1]).count += user.count-0;   //
            }else{
                totalObj.count += user.count-0;             //刚加载标题头 list 为空
            }

            lastDept = user.dept;
        });
        this.props.users.forEach(function(user){

            var flag =false;
            if(user.dept==parentRef){
                flag=isAllChecked;
            }

            if(lastDept!=user.dept){
                var totalCount = getCountByDept(user.dept,totalList);
                ItemList.push(<ItemTitle name={user.dept} key={user.dept} totalCount={totalCount} handleChecked={handleChecked} checkFlag={flag}></ItemTitle>);
            }


            ItemList.push(<Item user={user} key={user.name} checkFlag={flag} handleChecked={handleChecked}></Item>)

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

function getCountByDept(dept,list){
//    for(var i=0,arrObj;arrObj=list[i++];){
//        if(dept==arrObj.dept){
//            return arrObj.count;
//        }
//    }
    
    return list.filter(l=> dept=l.dept)[0].count;
}

module.exports = List;
