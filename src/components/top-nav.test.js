import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});
	// it('Opens the modal when "what" is clicked', () => {

	// });
	// it('Starts a new game when "new game" is clicked', () => {

	// })
});