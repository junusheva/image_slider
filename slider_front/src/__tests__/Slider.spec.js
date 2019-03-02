import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Slider from '../components/Slider/Slider';
import RightArrow from "../components/Arrows/RightArrow";

describe('<Slider />', () => {

    it('creates a slider in an initial state', () => {

        let wrapper = renderer.create(<Slider/>).toJSON();
        expect(wrapper).toMatchSnapshot();

        const rightArrow = shallow(<RightArrow/>);
        rightArrow.simulate('click');

        wrapper = renderer.create(<Slider/>).toJSON();
        expect(wrapper).toMatchSnapshot();

    });

});