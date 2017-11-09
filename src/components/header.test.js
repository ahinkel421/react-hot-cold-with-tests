import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
	it('Should render the modal when requested', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal(true);
		wrapper.update();
		expect(wrapper.find('InfoModal').exists()).toEqual(true);
	});
});