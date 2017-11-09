import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
	it('Renders without crashing', () => {
		shallow(<InfoModal />);
	});
	//it should render the info modal and close the info modal when the "got it" button is clicked.
});