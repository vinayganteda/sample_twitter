import React,{FC, ChangeEvent, FormEvent, useState } from "react";
import {  Alert, Container, Row, Col, FormControl, Form, Button,Navbar, Card } from "react-bootstrap";
// import FontAwesome from "react-fontawesome";
import {useHistory } from 'react-router-dom';

export interface Props {
  
}


 export function Login(props: Props){
  // const { details } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

     const clearFields = (e:React.MouseEvent<HTMLButtonElement>) => {
         e.preventDefault();
         setUsername("");
         setPassword("");
     }
     const signInDetails = (e:React.MouseEvent<HTMLButtonElement>) => {
         e.preventDefault();
         let passwordRegExp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";
         if(username.trim().length < 5 || password.length<8){
             alert("Please Enter Correct Details");
            }else{
                localStorage.setItem('sampleTwitter', username);
                history.push("/posts");      
            }
         
     }

     const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
         // TODO - set first name state
         // TODO - validate that first name has been populated
         setUsername(e.target.value);
     };

     const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
         // TODO - set email address state
         // TODO - validate that email address is a valid format
         setPassword(e.target.value)
     };


  return (
    <Container fluid>
        <Row className="mt-auto">
            <Col xs lg={{ span: 4, offset: 4 }}>
                <Card bg="light" >
                <Card.Title className="text-center">
                            Sign In
                </Card.Title>

                <Card.Body className="post-card-body h-auto">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  className="text-align-left">UserName</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={username} onChange={handleUserNameChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="content-center">
                        <Row>
                            <Col>
                            <Button className="max-width" type="submit" variant="danger" onClick={clearFields}>Cancel</Button>    
                            </Col>
                            
                            <Col>
                            <Button className="max-width" type="submit" variant="success" onClick={signInDetails}>Sign In</Button>    
                            </Col>
                        </Row>
                        
                        
                    </Form.Group>
                </Form>
                </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>
  );
}
export default Login;
