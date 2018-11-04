import React from 'react';

/*Seems this doesn't really worth the efort for this exampl but I tried HOC (Higher Order Components)*/
export let decorated = (WrappedComponent, settings) => {
    return class extends React.Component {
        render() {
            return (<div style={{ maxHeight: 800, overflow: "auto" }} className={settings.columnSetting}>
                <div className="panel panel-success">
                    <div className="panel-heading">{settings.title}</div>
                    <WrappedComponent {...this.props} />
                </div>
            </div>);
        }
        ;
    };
};
export let itemSettings = (title, columnSetting) => {
    return {
        title: title,
        columnSetting: columnSetting
    };
};