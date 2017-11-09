import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
	it('Should render the modal when requested', => {
		const wrapper = shallow(<Header />);
		const
	})
	//it should render the navbar, the modal if requested, and the header.
});