import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Persona, PersonaSize } from 'office-ui-fabric-react';

import { getFriends } from '../actions';

class Friends extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return(
            <div>
                {this.props.friends.map(friend => (
                    <div className="personas" key={friend.id}>
                        <Persona 
                            className="person"
                            text={friend.name} 
                            secondaryText={friend.age}
                            tertiaryText={friend.email}
                            key={friend.id} 
                            coinSize={75}
                            size={PersonaSize.size100}
                        >                    
                        </Persona>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        dataFetching: state.dataFetching,
        friends: state.friends
    }
};

export default withRouter(connect(mapStatetoProps, { getFriends })(Friends));