import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';

const styles = {
  paper: {
    width: '70%',
    height: '700px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px'
  }
};

export default class Signup extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h1>Registeration</h1>
         <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Email"
               floatingLabelText="email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
               <br/>
               <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
               <br/>
               <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="ConformPassword"
               onChange = {(event,newValue) => this.setState({conformpassword:newValue})}
               />
             <br/>
        <Link to="/"><RaisedButton label="signup" primary={true} /></Link>
      </Paper>
    );
  }
}
