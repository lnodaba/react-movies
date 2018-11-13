import React, { Component } from 'react';
import Header from './Header';
import TVRepository from '../repositories/TVRepository';
import Poster from './Poster';
import ShowDetails from './ShowDetails';
import Creator from './Creator';
import Season from './Season';


/*Seems this doesn't really worth the efort for this exampl but I tried HOC (Higher Order Components)*/
let decorated = (WrappedComponent, settings) => {
    return class extends React.Component {
        render() {
            return (
                <div style={{maxHeight:800, overflow:"auto"}} className={settings.columnSetting}>
                    <div className="panel panel-success">
                        <div className="panel-heading">{settings.title}</div>
                        <WrappedComponent {...this.props} />
                    </div>
                </div>
            );
        };
    };
};

let itemSettings = (title, columnSetting) => {
    return {
        title: title,
        columnSetting: columnSetting
    };
};

const DecoratedPoster = decorated(Poster, itemSettings("Poster :", "col-md-3 nopadding"));
const DecoratedCreator = decorated(Creator, itemSettings("Created By :", "col-md-3 nopadding"));
const DecoratedShowDetails = decorated(ShowDetails, itemSettings("Movie Details :", "col-md-6"));


class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showId: parseInt(this.props.match.params.id),
            details: null,
            isLoading: false,
            router : this.props
        };
        this.repo = new TVRepository();
    }
    
    componentWillMount() {
        this.setTVShow();
    }

    setTVShow() {
        this.setState({ isLoading: true });
        this.repo.getTVShow(this.state.showId)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({
                    details: data,
                    isLoading: false
                });
            });
    };

    render() {
        const { details, isLoading } = this.state;

        if (isLoading) {
            return (
                <p>Is Loading...</p>
            );
        }

        return (
            <> {/* Some magic to have multiple childs for a component, if you dont wan't to return only one*/}
                <div className="container" >
                    <Header title={details.name} history={this.props.history} />
                    <DecoratedPoster image={details.poster_path}/>
                    <DecoratedShowDetails details={details}/>
                    <DecoratedCreator creators={details.created_by} />
                </div>
                <div className="container" >
                    {details.seasons.map((value) => {
                        return <Season  key={value.name} 
                                        tvId={details.id} 
                                        details={value}/>
                                })}
                </div>
            </>
        );
    }
}

export default Detail;