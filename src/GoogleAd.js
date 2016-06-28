var React = require('react')

module.exports = React.createClass({
	propTypes: {
		/*
		 -> Use Style props instead.
		height: React.PropTypes.string,
		width: React.PropTypes.string,
		*/
		client: React.PropTypes.string.isRequired,
		slot: React.PropTypes.string.isRequired,
		format: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			format:''
		}
	},

	render: function() {
		return (
			<ins className="adsbygoogle"
				style={Object.assign({display:'inline-block'}, this.props.style)}
				data-ad-client={this.props.client}
				data-ad-slot={this.props.slot}
				data-ad-format={this.props.format}></ins>
		)
	},

	componentDidMount: function() {
		if(typeof window !== 'undefined') {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}
})
