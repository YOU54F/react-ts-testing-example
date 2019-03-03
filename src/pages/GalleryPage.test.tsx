import { shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { Gallery } from './GalleryPage';

describe('Gallery Page', () => {
  it('renders the gallery grid', () => {
    expect(shallow(<Gallery />).find('#gallery_grid').length).toEqual(1);
  });

  it('can render the Gallery page', () => {
    const tree = renderer.create(<Gallery />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
