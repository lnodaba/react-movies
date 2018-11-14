import React, { Component } from 'react';

class DetailPoster extends Component {

    render(props) {
        return (
            <div className="panel-body nopadding">
                <img src={"http://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.image}  width={283} alt="Poster"/>
            </div>
        );
    }
}

export default DetailPoster;