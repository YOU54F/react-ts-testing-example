import * as React from 'react';
import { GridDisplay } from '../components/GridDisplay/GridDisplay';

export class Gallery extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='gallery-page-container' id='gallery_grid'>
        <GridDisplay
          gridItems={[
            'https://picsum.photos/100/150',
            'An',
            'https://picsum.photos/100/150',
            ' ',
            'https://picsum.photos/100/150',
            ' ',
            'https://picsum.photos/100/150',
            'Example',
            'https://picsum.photos/100/150',
            ' ',
            'https://picsum.photos/100/150',
            ' ',
            'https://picsum.photos/100/150',
            'Website',
            'https://picsum.photos/100/150'
          ]}
        />
      </div>
    );
  }
}
