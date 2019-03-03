import * as React from 'react';
import renderer from 'react-test-renderer';
import { ParallaxEffect } from './ParallaxEffect';

describe('Parallax Effect', () => {
  it('can render the parallax effect', () => {
    const tree = renderer
      .create(
        <ParallaxEffect
          parallaxBackgroundImage='https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif'
          parallaxText='An example website'
          parallaxTextBackground='https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif'
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
