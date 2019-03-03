import { string } from 'prop-types';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { GridDisplay } from './GridDisplay';

describe('Grid Display', () => {
  
  it('can render a grid with a no strings in the array', () => {
    const tree = renderer.create(<GridDisplay gridItems={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can render a grid with a single string in the array', () => {
    const tree = renderer.create(<GridDisplay gridItems={['foo']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('can render a grid with a 2 strings in the array', () => {
    const tree = renderer.create(<GridDisplay gridItems={["foo","bar"]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can render a grid with a collection or urls in the array', () => {
    const tree = renderer.create(<GridDisplay
          gridItems={[
            "https://loremflickr.com/100/150",
            "An",
            "https://loremflickr.com/100/150",
            " ",
            "https://loremflickr.com/100/150",
            " ",
            "https://loremflickr.com/100/150",
            "Example",
            "https://loremflickr.com/100/150",
            " ",
            "https://loremflickr.com/100/150",
            " ",
            "https://loremflickr.com/100/150",
            "Website",
            "https://loremflickr.com/100/150"
          ]}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
