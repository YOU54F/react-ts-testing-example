import * as React from 'react';
import { GridDisplay } from '../components/GridDisplay/GridDisplay';

export class Gallery extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='gallery-page-container' id='gallery_grid'>
        <GridDisplay
          gridItems={[
            'https://loremflickr.com/100/150',
            'An',
            'https://loremflickr.com/100/150',
            ' ',
            'https://loremflickr.com/100/150',
            ' ',
            'https://loremflickr.com/100/150',
            'Example',
            'https://loremflickr.com/100/150',
            ' ',
            'https://loremflickr.com/100/150',
            ' ',
            'https://loremflickr.com/100/150',
            'Website',
            'https://loremflickr.com/100/150'
          ]}
        />
      </div>
    );
  }
}
