import { shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { Contact } from './ContactPage';

describe('Contact Page', () => {
  it('renders a name input', () => {
    expect(shallow(<Contact />).find('#Name').length).toEqual(1);
  });
  it('renders a email input', () => {
    expect(shallow(<Contact />).find('#Email').length).toEqual(1);
  });
  it('renders a message input', () => {
    expect(shallow(<Contact />).find('#Message').length).toEqual(1);
  });
  it('renders a submit button', () => {
    expect(shallow(<Contact />).find('#Submit').length).toEqual(1);
  });
  it('can render the Contact page', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
