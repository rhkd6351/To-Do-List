import {Row, Col} from "reactstrap";

function Header_(props){
    return (
        <div>
            <Row className = "title-box">
                    <Col className = "col2">{props.title}</Col>
            </Row>
        </div>
    );
};

export default Header_;