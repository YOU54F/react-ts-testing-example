import * as React from 'react';

export interface GridDisplayProps {
    /** Array of images or text to be displayed */
    gridItems: string[];
}

export class GridDisplay extends React.Component<GridDisplayProps, {}> {
    public render() {
        return (
            <div className="grid-display-container">
            {
                this.props.gridItems.map((gridItem,i) => {
                    return(
                        <div key={i} className={`grid-item fade-out fade-in${gridItem.length < 1 ? " empty" : ""}`} style={{ animationDelay: (i*0.5 ) +"s", }}>
                            {
                                gridItem.includes("http") && <img src={gridItem} key={`0${i}`} alt="grid-item" className="grid-image"/>
                            }
                            {   
                                gridItem.includes("http") ||
                                <p key={`0${i}`} className="grid-text">{gridItem}</p>
                            }
                        </div>
                    )
                })
            }
            </div>
        )
    }
}