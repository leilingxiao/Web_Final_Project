import React from 'react';




const styles = {
    transition: 'all 1s ease-out'
};

export class About extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            scale: 1,
            slide: false,
            flip: false
        };
    }

    onHide() {
        this.setState({
            opacity: 0
        });
    }

    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.5
        });
    }

    onSlide() {
        this.setState({
            slide: true,
            flip: false
        });
    }

    onFlip() {
        this.setState({
            flip: true,
            slide: false
        });
    }

    
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <div>Animations</div>
                            
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <div className="card deep-purple z-depth-2"
                                 style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
                                <div className="card-content white-text">
                                    <span className="card-title">Awesome Animations!</span>
                                    <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
                                </div>
                                <div className="card-action">
                                    <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>HIDE</a>
                                    <a onClick={this.onScale.bind(this)} style={{cursor: 'pointer'}}>SCALE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <div className={"card deep-purple z-depth-2 " + (this.state.slide ? 'slide' : '') + (this.state.flip ? 'flip' : '')}>
                                <div className="card-content white-text">
                                    <span className="card-title">Awesome Animations!</span>
                                    <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
                                </div>
                                <div className="card-action">
                                    <a onClick={this.onFlip.bind(this)} style={{cursor: 'pointer'}}>FLIP</a>
                                    <a onClick={this.onSlide.bind(this)} style={{cursor: 'pointer'}}>SLIDE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default About


