import * as React from 'react';

const aboutParagraphs = [
  'An example website written in TypeScript & React.',
  'To demonstrate various testing techniques',
  'such as unit testing with jest',
  'cross-browser compatability testing.',
  'ui testing with cypress.'
];

export class About extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='about-page-container' id='paragraphs'>
        {aboutParagraphs.map((p, i) => {
          return (
            <p
              key={i}
              className='fade-out fade-in'
              style={{ animationDelay: i * 0.75 + 's' }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          );
        })}
      </div>
    );
  }
}
