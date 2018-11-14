import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import Utils  from '../../utils/Utils';

class Creator extends Component {

    constructor(props){
        super(props);

        this.utils = new Utils();
    }

    renderACreator(value){
        return (
            <Thumbnail key={value.credit_id} src={`http://image.tmdb.org/t/p/w150_and_h225_bestv2/${value.profile_path}`} alt="242x200">
                <h3>{value.name}</h3>
            </Thumbnail>
        );
    }

    render() {
        if (this.props.creators === undefined) {
            return null;
        }

        return (
            <div className="panel-body">
                {this.utils.renderList(this.props.creators,this.renderACreator)}
            </div>
        );
    }
}

export default Creator;