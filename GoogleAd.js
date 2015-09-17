var React = require('react')

module.exports = React.createClass({
	propTypes: {
		height: React.PropTypes.string,
		width: React.PropTypes.string,
		client: React.PropTypes.string.isRequired,
		slot: React.PropTypes.string.isRequired,
		format: React.PropTypes.string.isRequired
	},

	getDefaultProps: function() {
		return {
			height: "100%",
			width: "100%"
		}
	},

	render: function() {
		return (
			<ins className="adsbygoogle" 
				style={{
					display: "block", 
					height: this.props.height, 
					width: this.props.width
				}} 
				data-ad-client={this.props.client} 
				data-ad-slot={this.props.slot} 
				data-ad-format={this.props.format}></ins>
		)
	},

	componentDidMount: function() {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}
})