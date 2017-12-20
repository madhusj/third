
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {AutoComplete,CardText} from 'material-ui';
import $ from 'jquery';

export default class search extends React.Component{
    constructor() {
    super();
    this.state = {
        dataSource: [],
        moviename:'',
        movie:''
        
    }
  }
    componentDidMount() {
     console.log('jayanthi');
  }

  handleUpdateInput(value)
  {
      var autosuggest=[];
      var moviesource=this;
    this.setState({moviename : value});
    $.ajax({
        url:'https://api.themoviedb.org/3/search/keyword?api_key=a8654b92df1d2ce3b89bb66a01da07ff&query='+value,
        type:'get',
        success:function(data){
            data.results.map(movie => {
                autosuggest.push(movie.name)
            });
            moviesource.setState({dataSource:autosuggest});
        }
    });
    
  };
   
  
  changeMovie(event) {
      this.setState ({
          moviename: event.target.value
      });
  }
  searchmovie(){
      this.props.displayMovie(this.state.moviename);
  }
    render(){
        var styles={
            align:{
                position:'relative',
                top:'200px',
                margin:'auto',
                width:'350px',
                height:'50px',
               // backgroundColor:'#BBDEFB'
            },
            margin:{
                marginTop:'10px'
            }
        }

        return(
        <div>
          <Paper style={styles.align}>
            <AutoComplete 
              hintText="Enter MovieName"
              onChange={this.changeMovie.bind(this)}
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput.bind(this)}
            />
            <RaisedButton style={styles.btncolor} label="Search" onTouchTap={this.searchmovie.bind(this)} primary={true}/>
          </Paper>
         
        </div>
        );
    }
}