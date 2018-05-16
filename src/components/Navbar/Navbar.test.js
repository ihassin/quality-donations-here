import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const navbar = shallow(<Navbar />);

it('renders correctly', () => {
    expect(navbar).toMatchSnapshot();
})
