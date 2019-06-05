import React from 'react';
import { CenteredColumn } from '../layout/centered_column';

export class BioEditor extends React.Component{

    constructor (props) {
        super(props);
        this.state = { 
            bioIsEditing: false,
            bioExists: props.bio,
        };
        this.editClicked = this.editClicked.bind(this);
        this.addClicked = this.addClicked.bind(this);
    }

    render(){
        if (this.state.bioIsEditing){
            return (
                <CenteredColumn padding={'20px'}>
                    <p>{this.props.bio}</p>
                    <button onClick={this.props.setBio}>Save</button>
                </CenteredColumn>
            );
        } else {
            if (this.state.bioExists) {
                return (
                    <CenteredColumn padding={'20px'}>
                        <p>{this.props.bio}</p>
                        <button onClick={this.editClicked}>Edit</button>
                    </CenteredColumn>
                );
            } else {
                return (
                    <button onClick={this.editClicked}>Add</button>
                );
            }
        }
    }

    editClicked(){
        console.log('Edit clicked in the bio Editor');
    }

    addClicked(){
        console.log('Add clicked in the bio Editor');
    }
}