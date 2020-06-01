import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './twitter/PostLists';
import { BrowserRouter as Router,
  Switch,
  Route, Redirect, RouteComponentProps , RouteProps} from 'react-router-dom';
import PostDetails from './twitter/PostDetails';
import SignIn from './twitter/login';

export interface MatchParams {
  name: string;
  id: string
}

export interface MatchProps extends RouteComponentProps<MatchParams> {
}
const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: localStorage.getItem('sampleTwitter') ? true:false,
  authenticationPath: '/login',
};


function App() {
  return (
    <Router>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Switch>
       {/* <ProtectedRoute
  {...defaultProtectedRouteProps}
  exact={true}
  path='/login'
  component={SignIn}
/>
<ProtectedRoute
  {...defaultProtectedRouteProps}
  exact={true}
  path='/posts'
  component={Posts}
/>
<ProtectedRoute
  {...defaultProtectedRouteProps}
  exact={true}
  path='/posts/:id'
  // component={Posts}
  render={( {match}: MatchProps) => (
    <PostDetails name={match.params.id} /> )} 
/>
<ProtectedRoute
  {...defaultProtectedRouteProps}
  exact={true}
  path='/'
  component={PostDetails}
  // render={( {match}: MatchProps) => (
  //   <PostDetails name={match.params.id} /> )} 
/> */}
        <Route path="/login"> <SignIn /></Route>
       <Route exact path="/posts">  <Posts /> </Route>
       <Route path="/posts/:id" render={( {match}: MatchProps) => (
    <PostDetails name={match.params.id} /> )} /> 
       <Redirect exact to="/posts" ></Redirect>
       
       </Switch>
    </div>
    </Router>
  );
}

export default App;


export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

export class ProtectedRoute extends Route<ProtectedRouteProps> {
    public render() {
        let redirectPath: string = '';
        if (!this.props.isAuthenticated) {
            redirectPath = this.props.authenticationPath;
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{pathname: redirectPath}}/>);
            return <Route {...this.props} component={renderComponent} render={undefined}/>;
        } else {
            return <Route {...this.props}/>;
        }
    }
}
