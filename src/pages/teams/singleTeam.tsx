import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionns from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import IconButtom from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Tyography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton, Collapse } from '@material-ui/core';

interface IPlayerProps{

    PlayerId : Number;
    FirstName : string;
    LastName: string;
    PictureLink : string;
    Avatar: string;
    Position: string;
    JerseyNumber: Number;
    Height: string;
    Hobbies: string;
    Ambitions: string;

}

class singleTeam extends React.Component<IPlayerProps>{
   expanded : boolean;
    state ={
        isExpanded : false
    };

  constructor(props:IPlayerProps){
      super(props);
      this.expanded = false;
  }

  componentDidMount(){
      this.setState({isExpanded : this.expanded})
  }

  handleExpandedClick = () => {

 const y = this.expanded;
    if(this.expanded === true){
        this.expanded = false;
    }
    else{
        this.expanded = true
    }
    this.setState({isExpanded : this.expanded})
  }

  render() {
      return (
          <div>
              { this.props.FirstName ? (
                <Card>
                    <CardHeader 
                        avatar={<Avatar aria-label="player">{this.props.Avatar}</Avatar>}
                        title={this.props.FirstName+" "+this.props.LastName} 
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        subheader={this.props.Position +" ("+this.props.Height+"m)"} />
                    <CardMedia title={this.props.FirstName+" "+ this.props.LastName}
                        style={{paddingTop:'56.25%'}}
                        image={this.props.PictureLink}>

                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="inherit" component="h2">
                        {this.props.FirstName} {this.props.LastName}
                        </Typography>
        
                    </CardContent>
                    <CardActionns disableSpacing>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton style={{marginLeft: 100}} 
                                    onClick={this.handleExpandedClick}
                                    aria-label="show more"
                                    aria-expanded={this.expanded} >
                            <ExpandMoreIcon />
                        </IconButton>
                        
                    </CardActionns>
                    <Collapse in={this.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Hobbies
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.props.Hobbies}
                            </Typography>
                            <Typography variant="h5" component="h2">
                               Ambitions
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.props.Ambitions}
                            </Typography>
                        </CardContent>

                    </Collapse>
                </Card>
              ) : "No players"}
          </div>

      )      
  }

  getFilter() {
      let arr : [] =  []
      arr.filter(item => {
          return item ;
      })
  }


}

export default singleTeam;

