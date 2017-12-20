import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';

const styles = {
  paper: {
    width: '70%',
    height: '500px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px'
  }
};

export default class Login extends React.Component {4
  constructor() {
    super();
    this.state={
          username:'',
          password:''
     }
  }

  componentWillMount() {
    console.log('inside componentWillMount');
  }

  render() {
    console.log('inside render');
    return (
      <Paper style={styles.paper}>
        <h1>Welcome to My Application</h1>
        <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
        <Link to="/app1"><RaisedButton label="Login" primary={true} /></Link>{'        '}
        <Link to="/app"><RaisedButton label="signup" primary={true} /></Link>
      </Paper>
    );
  }

  componentDidMount() {
    console.log('inside componentDidMount');
  }
}
