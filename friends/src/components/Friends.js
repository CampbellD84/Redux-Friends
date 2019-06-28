import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Persona, PersonaSize, ProgressIndicator, ActionButton} from 'office-ui-fabric-react';

import { getFriends } from '../actions';

import AddFriend from './AddFriend';

class Friends extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return(
            <div>
                <div className="loading">
                    {this.props.dataFetching &&
                        <ProgressIndicator label="Loading..." description="Getting Friends List..." />
                    }
                </div>
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
                            <ActionButton>Delete Friend</ActionButton>                
                        </Persona>
                    </div>
                ))}
                <AddFriend />
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        dataFetching: state.root.dataFetching,
        friends: state.root.friends
    }
};

export default withRouter(connect(mapStatetoProps, { getFriends })(Friends));