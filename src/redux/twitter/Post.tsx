import * as React from "react";
import { ListGroup, Card, Badge, Col } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom';
// import FontAwesome from "react-fontawesome";

export interface Props {
  details:{userId: number, id: number, title:string , body: string}
}

 const post: React.FunctionComponent<Props>=(props) =>{
  // const { details } = props;
  const randomNames = {
      1: "Vinay",
      2: "Ram",
      3: "Amar",
      4: "Anil",
      5: "Surekha",
      6: "Asvin",
      7: "Shyny",
      8: "Deepika",
      9: "Lasya",
      10: "Priya",
      11: "Priya",
      12: "Priya",
      13: "Priya"

  }

  const onPostClick = ()=>{
    // alert(props.details.id);
    // props.navigate('Details', {
    //   itemId: props.details.id
    // });
  }

  const randomNames1 = ["","Vinay","Ram","Amar","Anil","Surekha","Asvin","Shyny","Deepika","Lasya","Priya",
                      "Random Name1","Random Name2","Random Name3","Random Name4","Random Name5"]

  return (
    <Col xs={12} sm={6} md={6} lg={3} style={{marginBottom:"20px",height:"100%"}} >
      <a className="anchor" href={`/posts/${props.details.id}`}>      
          <Card className="text-center cursor-pointer" bg="light">
            <Card.Body className="post-card-body">
              <Card.Title>{randomNames1[props.details.userId]}
              {/* {props.details.userId+"  -  "+props.details.userId} */}
              </Card.Title>
              <Card.Text>
                {props.details.title}
              </Card.Text>
            </Card.Body>
          </Card>
      </a>
    </Col>
  );
}
export default post;
