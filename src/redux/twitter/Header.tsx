import * as React from "react";
import { ListGroup, Card, Badge, Col,Nav,Navbar,Form, FormControl, Button } from "react-bootstrap";
// import FontAwesome from "react-fontawesome";

export interface Props {
  onPostSearching: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  onLogoutClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

 export function Header(props: Props){
  // const { details } = props;
  return (
    <Navbar fixed="top" expand={false} bg="primary" variant="dark">
      <Navbar.Brand href="">
        <Button variant="outline-light" className="align-left" onClick={props.onLogoutClick}><span className="glyphicon glyphicon-log-out">Logout</span></Button>
        </Navbar.Brand>
    <Form inline className="align-right">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.onPostSearching}/>
      {/* <Button variant="outline-light">Search</Button> */}
    </Form>
  </Navbar>
  );
}
export default Header;
