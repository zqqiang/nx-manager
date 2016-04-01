var React = require('react');
var Header = require('./header.react');

var UserBlock = React.createClass({
    render: function() {
        return (
            <div className="user-block">
                <img className="img-circle" src="http://placehold.it/100x100/39CCCC/ffffff" alt="User Image" />
                <span className="username">
                    <a href="#">
                    </a>
                </span>
                <span className="description">Shared publicly - 7:30 PM Today</span>
            </div>
        );
    }
});

var BoxTools = React.createClass({
    render: function() {
        return (
            <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="fa fa-circle-o"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        );
    }
});

var BoxHeader = React.createClass({
    render: function() {
        return (
            <div className="box-header with-border">
                <UserBlock />
                <BoxTools />
            </div>
        );
    }
});

var BoxBody = React.createClass({
    render: function() {
        return (
            <div className="box-body">
                <img className="img-responsive pad" src="http://placehold.it/2000x600/DD4B39/ffffff" alt="Photo" />
                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                <span className="pull-right text-muted">127 likes - 3 comments</span>
            </div>
        );
    }
});

var BoxWidget = React.createClass({
    render: function() {
        return (
            <div className="box box-widget">
                <BoxHeader />
                <BoxBody />
            </div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                    <BoxWidget />
                </div>
            </section>
        );
    }
});

var Salon = React.createClass({
    render: function() {
        return (
            <div>
                <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' />
                <Content />
            </div>
        );
    }
});

module.exports = Salon;
