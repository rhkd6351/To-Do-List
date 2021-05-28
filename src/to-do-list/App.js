import React, { Component } from 'react';
import {Button} from "reactstrap";

class App extends Component {
    render() {
        return (
            <div className = "page-wrapper">
                <div className="row">
                    <header className="col">
                        <div className="header-title h2 font-weight-normal">
                            To-Do List
                        </div>
                    </header>
                </div>

                <div className="row">
                    <section>
                        <section className="add">
                            <input type="text" placeholder="To-Do"></input> &nbsp;
                            <Button color="success">success</Button>
                        </section>
                        <section className="list"></section>
                    </section>
                </div>
            
            </div>
        );
    }
}

export default App;