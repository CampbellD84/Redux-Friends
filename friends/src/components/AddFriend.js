import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TextField, PrimaryButton } from 'office-ui-fabric-react';

import { addFriend } from '../actions';

class AddFriend extends Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    };

    handleChange = evt => {
        this.setState({
            friend: {
                ...this.state.friend,
                [evt.target.name]: evt.target.value
            }
        });
    };

    handleAddFriend = evt => {
        evt.preventDefault();
        this.props
        .addFriend(this.state.friend);
    }

    render() {
        return (
            <div className="add-form">
                <h2>Add Friend Form</h2>
                <form onSubmit={this.handleAddFriend}>
                    <TextField                         
                        type="text" 
                        name="name" 
                        value={this.state.friend.name} 
                        onChange={this.handleChange} 
                        label="Name" 
                    />
                    <TextField 
                        type="number" 
                        name="age" 
                        value={this.state.friend.age} 
                        onChange={this.handleChange} 
                        label="Age" 
                    />
                    <TextField 
                        type="email" 
                        name="email" 
                        value={this.state.friend.email} 
                        onChange={this.handleChange} 
                        label="Email" 
                    />
                    <div className="btn">
                        <PrimaryButton onClick={this.handleAddFriend}>
                            Add Friend
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addFriend })(AddFriend);