jest.dontMock('../GoogleAd')

var React = require('react/addons')
var GoogleAd = require('../GoogleAd')

var TestUtils = React.addons.TestUtils

describe ('GoogleAd', function(){
	describe ('with all props', function() {
		beforeEach (function() {
			this.componentDocument = TestUtils.renderIntoDocument(
				<GoogleAd display="inline" height="20px" width="30px" client="foo" slot="bar" format="baz" />
			)
			this.component = TestUtils.findRenderedDOMComponentWithTag( this.componentDocument, 'ins' )
		})

		it ('renders the styles', function() {
			expect(this.component.getDOMNode().getAttribute('style')).toBe('display:block;height:20px;width:30px;')
		})

		it('renders the data-ad-client', function() {
			expect(this.component.getDOMNode().getAttribute('data-ad-client')).toBe('foo')
		})

		it('renders the data-ad-slot', function() {
			expect(this.component.getDOMNode().getAttribute('data-ad-slot')).toBe('bar')
		})

		it('renders the data-ad-format', function() {
			expect(this.component.getDOMNode().getAttribute('data-ad-format')).toBe('baz')
		})
	})

	describe ('with defaults', function() {
		beforeEach (function() {
			this.componentDocument = TestUtils.renderIntoDocument(
				<GoogleAd client="foo" slot="bar" format="baz" />
			)
			this.component = TestUtils.findRenderedDOMComponentWithTag( this.componentDocument, 'ins' )
		})

		it ('renders the styles', function() {
			expect(this.component.getDOMNode().getAttribute('style')).toBe('display:block;height:100%;width:100%;')
		})
	})

})