import React, { Component } from 'react';

class DetailHeader extends Component {

    render(props) {
        return (
            <div className="navbar navbar-default ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="\">{this.props.title}</a>
                </div>
                <div className="navbar-form navbar-right">
                    <button type="submit" className="btn btn-default" onClick={this.props.history.goBack}>Back</button>
                </div>
            </div>
        </div>
        );
    }
}

export default DetailHeader;