/**
 * Created by greenicb on 16/3/22.
 */
    require("./less/style.less");
var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main.react");
var Data  = require("./data");


ReactDOM.render(
    (
        <Main datas={Data}>
        </Main>
    ),
    document.getElementById("container")

)