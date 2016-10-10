import React from 'react';
import ReactDOM from 'react-dom';

var TestElement = React.createClass({
    render: function(){
        return (
            <div className="test">
             Hello,World!
            </div>
        )
    }
});

ReactDOM.render(<TestElement  />,document.getElementById('app'));