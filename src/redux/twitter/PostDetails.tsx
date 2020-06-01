import * as React from "react";
import Post from "./Post";
import axios from "axios";
import { Container, Row , Col,Alert,Badge, Card, Button} from "react-bootstrap";
import Header from './Header';
import {RouteComponentProps, withRouter} from 'react-router';


interface Props extends RouteComponentProps<any> {
  name:string
}

interface State {
  post: {
    id?: number,
    userId?: number,
    title?: string,
    body?: string
  };
  isDataLoading:boolean;
};

interface IExampleComponentProps {
  name?: string;
}

class PostList extends React.Component<Props, State>  {
  state: State = {
    post: {},
    isDataLoading: false
  };
  
  
  componentDidMount() {
    
    this.getDataFromServer();
   
  }

  // componentDidUpdate(PrevProps: IExampleComponentProps, prevState: State): void{
  //     if(PrevProps.name != this.props.name){
  //       this.getDataFromServer();
  //     }
  // }

  getDataFromServer =()=>{
    this.setState({isDataLoading:true})
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.name}`)
    .then(res => {
      const post = res.data;
      this.setState({ post ,isDataLoading:false});
      console.log(post)
    }).catch((err) =>{
      this.setState({isDataLoading:false})
        alert(err);
        console.log(err);
    })
  }
  onBackClick = (e: React.FormEvent) => {
    // history.push("/login");
    this.props.history.push("/posts")
  }

  
  render() {
    // const { err = "", Posts = [] } = this.props;
    const randomNames1 = ["","Vinay","Ram","Amar","Anil","Surekha","Asvin","Shyny","Deepika","Lasya","Priya",
                      "Random Name1","Random Name2","Random Name3","Random Name4","Random Name5"]

    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}  >
            <Card  bg="light">
                <Card.Body className="text-align-left">
                <Card.Title>
                <Button variant="outline-dark" className="align-left" onClick={this.onBackClick}>Back</Button>
                {/* {props.details.userId+"  -  "+props.details.userId} */}
                <h2 className="text-center">Details</h2>
                </Card.Title>
                <Card.Text>   
                  {
                    !this.state.isDataLoading ? <div>
                    {/* <p>User Name: {this.state.post !={} ? randomNames1[this.state.post.userId]:''}</p> */}
                    <p>User ID: {this.state.post !={} ? this.state.post.userId:''}</p>
                    {/* {this.state.post !={} ? this.state.post.userId} */}
                    {/* <br /> */}
                    <p>ID: {this.state.post !={} ? this.state.post.id:''}</p>
                    {/* // {this.state.post !={} ? this.state.post.id} */}
                    {/* <br /> */}
                    <p>Title: {this.state.post !={} ? this.state.post.title:''}</p>
                    {/* {this.state.post !={} ? this.state.post.title} */}
                        {/* <br /> */}
                    <p>body: {this.state.post !={} ? this.state.post.body:''}</p>
                    {/* // {this.state.post !={} ? this.state.post.body} */}
                </div> :
                  <div className="spinner-border text-primary center mx-auto mt-50" role="status">
                  <span className="sr-only"></span>
                </div>
                  }            
                
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  
    );
  }
}
export default withRouter(PostList);