import * as React from "react";
import Post from "./Post";
import axios from "axios";
import { Container, Row , Col,Alert,Badge} from "react-bootstrap";
import Header from './Header';
import {RouteComponentProps, withRouter} from 'react-router';

interface Props extends RouteComponentProps<any> {}

interface State {
  posts: [];
  postSearchWord: string;
  isDataLoading: boolean
};
interface post {
  userId: number; 
  id: number;
  title:string;
  body: string
}
// const history = useHistory();


class PostList extends React.Component<Props, State>  {
  state: State = {
    posts: [],
    postSearchWord: "",
    isDataLoading: false
  };


  
  componentDidMount() {
    this.setState({isDataLoading: true})
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts , isDataLoading: false});
        console.log(posts)
      })
  }

  onPostSearching = (e: React.FormEvent) =>{
      this.setState({postSearchWord: ((e.target) as any).value});
  }
  onLogoutClick = (e: React.FormEvent) => {
    // history.push("/login");
    localStorage.removeItem('sampleTwitter');
    this.props.history.push("/login");
  }

  
  render() {

    // const { err = "", Posts = [] } = this.props;
    
    let posts = [];
    if (this.state.postSearchWord.trim() == "" ){
      posts = this.state.posts 
    }
    else{
      posts = this.state.posts.filter((post: post) => {
        if(
          // randomNames1.length<= this.state.posts.length && randomNames1[post.id].includes(this.state.postSearchWord) || 
        // post.userId.toString().includes(this.state.postSearchWord)||
           post.title.toLocaleLowerCase().includes(this.state.postSearchWord.trim().toLocaleLowerCase())  ){
            // ||post.body.includes(this.state.postSearchWord)
          return true;
        }
      }) 
    }
    return (
      <Container fluid>
        <Row>
          <Col>
          <Header onPostSearching={this.onPostSearching} onLogoutClick={this.onLogoutClick}/>
          </Col>
        </Row>
        <Row className="margin-top">
        {this.state.isDataLoading && <div className="spinner-border text-primary mx-auto mt-50" role="status">
              <span className="sr-only"></span>
            </div>}
          {
            
              !this.state.isDataLoading  && posts.length !=0 ? posts.map((post, index) => <Post details={post} key={index + "a"} />) 
              : <div className="text-align-center"></div>
          }

        </Row>
      </Container>
  
    );
  }
}
export default withRouter(PostList);