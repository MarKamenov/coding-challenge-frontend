import * as React from 'react';
import { shallow } from 'enzyme';
import  StyledCheckbox  from '../components/CheckBoxFields';


describe('Test checkbox', () => {

	const wrapper = shallow(<StyledCheckbox />);

	it('Checks if checkbox is checked', () => {
		expect(wrapper.find('input[type="checkbox"][checked="checked"]')).toBeTruthy();
	});

});
