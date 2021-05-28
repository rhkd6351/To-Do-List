import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {Row, Col} from 'reactstrap';

class TodoList extends Component {
    render() {
        const list = this.props.list;
        const _list = [];
        list.forEach(element =>{
            _list.push(
                <li key={element.id}>
                    <Row>
                        <Col xa = "auto">
                            <div className="dsec" >{element.desc}</div>
                        </Col>
                        <Col xs = "1">
                            <Button outline color="secondary" className="del-button"
                            onClick = {function(e){
                                e.preventDefault();
                                this.props.onClick(element.id)}.bind(this)
                                }>x</Button>
                        </Col>
                    </Row>
                </li>);
        });
        if(_list.length === 0){
            _list.push(
                <li key="1">
                    <Row>
                        <Col xa = "auto">
                            <div style={{textAlign: "center"}} className="dsec" >해야할 일을 추가해보세요!</div>
                        </Col>
                    </Row>
                </li>
            )
        }
        
        return (
            <div>
                <Row>
                    <Col className = "col2 list-wrapper">
                        <ul className="list">
                            {_list.reverse()}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className = "footer">copyright &copy; by yekwang</Col>
                </Row>
            </div>
        );
    }
}

export default TodoList;