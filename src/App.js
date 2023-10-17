import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';
import { Col, Form, Row } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Row className='p-2'>
        <Col md={6}><Logo /></Col>
        <Col md={4}><Form.Control size='sm' type='text' placeholder='Type here to search' title='This is a button' /></Col>
        <Col md={2}><ThemeSwitcher /></Col>
      </Row>
    </div>
  );
}

export default App;
