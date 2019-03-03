import { shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { About } from './AboutPage';

describe('About Page', () => {
  it('renders an about paragraph', () => {
    expect(shallow(<About />).find('#paragraphs').length).toEqual(1);
  });
  it('can render the About page', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
