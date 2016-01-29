var React = require('react')
var GoogleAd = require('../src/GoogleAd')
var { mount, describeWithDOM } = require('enzyme')

var expect = require('chai').expect

describe ('GoogleAd', function(){
	describeWithDOM ('with all props', function() {
		it ('renders the ad', function() {
			const wrapper = mount(
				<GoogleAd display="inline" 
					height="20px" 
					width="30px" 
					client="foo" 
					slot="bar" 
					format="baz" />
			)

			expect(wrapper.html()).to.equal('<ins class="adsbygoogle" style="display:block;height:20px;width:30px;" data-ad-client="foo" data-ad-slot="bar" data-ad-format="baz"></ins>')
		})
	})
})