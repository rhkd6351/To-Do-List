import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from "./Header_";
import AddBox from "./AddBox";
import List from "./List";

class BootPrac extends Component {
    constructor(props){
        super(props);
        this.state = {
            maxId: 3,
            list: [
                {id: 1, desc: "설거지 하기"},
                {id: 2, desc: "청소기 돌리기"},
                {id: 3, desc: "공부 하기"}
            ]
        }
    }
    handleAdd = (_desc) => {
        let _list = Array.from(this.state.list);
        _list.push({
            id: this.state.maxId + 1,
            desc: _desc,
        })
        this.setState({
            maxId: this.state.maxId + 1,
            list: _list,
        });
    }
    handleDel = (_id) => {
        let _list = Array.from(this.state.list);
        for(let i = 0; i < _list.length; i++){
            if(_list[i].id === _id){
                _list.splice(i,1);
                break;
            }
        }
        this.setState({
            list: _list,
        })
    }

    render() {
        return (
            <Container className = "page-wrapper">
                <Header title="To-Do List"></Header>
                <AddBox onClick = {this.handleAdd}></AddBox>
                <List 
                    list = {this.state.list}
                    onClick = {this.handleDel}
                ></List>
            </Container>
        );
    }
}

export default BootPrac;