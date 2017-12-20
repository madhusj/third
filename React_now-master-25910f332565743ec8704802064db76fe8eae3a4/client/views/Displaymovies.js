import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {Card,MuiThemeProvider,CardMedia,CardHeader,CardActions,Dialog,CardText,FlatButton} from 'material-ui';
import {Row,Col} from 'react-flexbox-grid';

export default class displaymovies extends React.Component{
    
    constructor(props) {
    super(props);
    this.state = {showTitle:false};
    this.state={expanded: false};
    this.state={showRaisedButton:false};
  }
    
    onHover(){
        this.setState({showTitle: !this.state.showTitle});
    }
    onmouseout()
    {
        this.setState({showTitle : false});
    }
    mouseOver() {
        this.setState({showRaisedButton: true});
    }

    mouseOut() {
        this.setState({CardActions: false});
    }
    
   viewDetails()
   {
       let newValue = !this.state.details
       console.log("enter details")
       this.setState({details: newValue});     
    }  
     
     handleClose()
     {
           this.setState({details:false});    
     
     }
     
      
 render(){
     var styles={
         imgsize:{
            position:'relative',
         margin:'auto',
         top:'250px',
        
       },
       imgalign:{
           paddingTop:'10px'
       }
     }
         
     return(
        <div>
            <MuiThemeProvider>
            <Row center = 'xs'>
            <Col xs = {6}>
                <Card style = {styles.imgsize} onMouseOver={this.onHover.bind(this)} onMouseOut = {this.onmouseout.bind(this)} >
                    {this.state.showTitle ? <CardHeader open={this.state.showTitle}  title={this.props.movie.title}/> : ''}
                    <CardMedia style={styles.imgalign}>
                      <img height ={300} width = {200} src={'http://image.tmdb.org/t/p/w185/'+this.props.movie.poster_path} alt="" />
                    </CardMedia>
                    <CardActions>
                      <RaisedButton label="AddFavourites" primary={true} />
                      <RaisedButton label="Details"  onTouchTap={this.viewDetails.bind(this)} primary={true} /> 
                    </CardActions>
                    <Card >
                     {this.state.details ? <CardText open = {this.state.details} >
                     Movie Name : {this.props.movie.title}<br />
                    Release Date : {this.props.movie.release_date}<br/>
                    Popularity : {this.props.movie.popularity}<br/>
                    Overview : {this.props.movie.overview}
                   
                   
                    </CardText> : " "}
                    </Card>
                </Card>
            </Col>
                </Row>
            </MuiThemeProvider>
        </div>
     );
 }   
}