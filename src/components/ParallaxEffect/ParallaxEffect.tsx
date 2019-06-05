import * as React from 'react';

export interface ParallaxEffectProps {
  parallaxBackgroundImage?: string;
  parallaxText?: string;
  parallaxTextBackground?: string;
}

const handleParallaxTextScroll = () => {
  const x = window.scrollY;
  const parallaxText = document.getElementById('parallax-text');
  if (parallaxText) {
    parallaxText.style.backgroundPosition = `100%  + -${x} / 1 + px + , 0%  0%, center top`;
  }
};

window.onscroll = () => {
  handleParallaxTextScroll();
};

export class ParallaxEffect extends React.Component<ParallaxEffectProps, {}> {
  public render() {
    return (
      <div className='parallax-effect-container'>
        {this.props.parallaxBackgroundImage && (
          <div
            className='parallax-image'
            style={{
              backgroundImage: 'url(' + this.props.parallaxBackgroundImage + ')'
            }}
          />
        )}
        {this.props.parallaxText && (
          <div className='parallax-text-container'>
            <span
              className='parallax-text'
              id='parallax-text'
              style={{
                backgroundImage:
                  'url(' + this.props.parallaxTextBackground + ')'
              }}>
              {this.props.parallaxText}
            </span>
          </div>
        )}
      </div>
    );
  }
}
