import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import {InputGroup, Input, InputGroupAddon} from 'reactstrap';
import {Button} from 'reactstrap';
import {Row, Col} from 'reactstrap';

const AddBox = (props) => {
    return (
            <Fragment>
                <Row className = "add-box">
                        <Col className = "col2 add-box-col">
                        <form action = "/" method = "post" 
                        onSubmit = {function(e){
                            e.preventDefault();
                            if(e.target.desc.value === "")
                                alert("텍스트를 입력하세요!");    
                            else
                                props.onClick(e.target.desc.value);
                            e.target.desc.value = "";
                        }}
                        >
                            <InputGroup>
                                <Input type="text" name="desc"/>&nbsp;&nbsp;&nbsp;
                                <InputGroupAddon addonType="prepend"><Button color="secondary">추가</Button></InputGroupAddon>
                            </InputGroup>
                        </form>
                        </Col>
                </Row>
            </Fragment>
        
    );
};

export default AddBox;