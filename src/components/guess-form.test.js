import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});
	it('Should run onGuess when the submit button is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const value = 'foobar';
		wrapper.find('input[type="text"]').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});
});