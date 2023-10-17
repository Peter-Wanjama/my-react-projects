import {Badge, Col, Row} from 'react-bootstrap'
import './style.css'
function Logo() {
    return ( 
        <Row className='logo bg-secondary'>
            <Col md={2}><Badge className='py-2' bg='dark'>Kigooco Hub</Badge></Col>
            <Col md={10} className='descr text-light'>Your repository for all kigooco sources</Col>
        </Row>
        );
}

export default Logo;