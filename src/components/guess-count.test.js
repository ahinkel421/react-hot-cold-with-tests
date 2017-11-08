import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});
	it('Renders the current guess count', () => {
		const val = 1;
		const wrapper = shallow(<GuessCount count={val} />);
		expect(wrapper.text()).toEqual(`Guess #${val}!`);
	});
});