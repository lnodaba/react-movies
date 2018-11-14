import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchShow, fetchShowsIfNeeded } from '../actions/actions';

class HomeSearch extends Component {

    render() {
        return (
            <div className="navbar-form navbar-right">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"
                        value={this.props.searchTerm}
                        onChange={evt => { this.props.onSearchTermChange(evt); }}
                        onKeyUp={(evt) => { this.props.onEnter(evt, this.props.searchTerm); }}
                    />
                </div>
                <button type="submit" className="btn btn-default" onClick={() => this.props.onSearch(this.props.searchTerm)}>Search</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTermChange: (evt) => {
            const searchTerm = evt.target.value;
            dispatch(searchShow(searchTerm));
        },
        onEnter: (evt, searchTerm) => {
            if (evt.key === 'Enter') {
                console.log("I'm here wtf?");
                dispatch(fetchShowsIfNeeded(searchTerm));
            }
        },
        onSearch: (searchTerm) => {
            dispatch(fetchShowsIfNeeded(searchTerm));
        }
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.tvShows.searchTerm
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSearch)
