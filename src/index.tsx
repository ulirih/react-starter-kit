import * as React from "react";
import * as ReactDOM from "react-dom";
import './scss/styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React App start kit</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));