import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { ApplicationState } from '../../store';
import { Team } from '../../store/teams/types';
import { fetchRequest } from '../../store/teams/actions';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: Team[]
    errors?: string
  }

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchTeams: typeof fetchRequest
  }
  
  // Combine both state + dispatch props - as well as any props we want to pass - in a union type.
  type AllProps = PropsFromState & PropsFromDispatch

class teamgrid extends React.Component<AllProps>{

    public componentDidMount() {
        const { data, fetchTeams } = this.props
    
        if (data.length === 0) {
          fetchTeams()
        }
      }

render(){
    const { data } = this.props;
    return(
        
        <div>
            <TextField id="searchPlayer" 
                    margin="normal"  
                    placeholder="Search a player" />
                <Grid container style={{padding: 24}}>
                    { data ? (data.map((currentPlayer:Team) => (
                        <Grid item xs={12} sm={6} lg={4} xl={3} >
                        
                            
                            />
                        </Grid>
                    ))) : "No players found"
                        
                    }
                    </Grid>
        </div>
    );
}
}

export default teamgrid;