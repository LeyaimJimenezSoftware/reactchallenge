import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardComponent from '../components/Card/index'

const img = require('../assets/egipto2.jpg')

it('<CardComponent/> can render in a div element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardComponent key={1} images={img} name={'Mexico'} description={'Mexico is a county'}/>, div);
 });

describe('<CardComponent />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardComponent key={img} images={'image'} name={'Japan'} description={'Japan is a county'} />);
    expect(wrapper)
  });

  it('the App have 1 Cardcomponent', () => {
    const wrapper = shallow(<CardComponent key={img} images={'image'} name={'Usa'} description={'Usa is a county'} />);
    expect(wrapper.find('div.card')).toHaveLength(1);
  })
})