import React, { Component } from 'react';
import tinycolor from "tinycolor2";
import "../App.css"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#010101',
        },
        secondary: {
            main: '#010101',
        },
    },
});

class RelatedColors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayType: "",
        }
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    static propTypes = {
        color: PropTypes.any,
    }

    static defaultProps = {
        color: null,
    }

    changeDisplay(event) {
        this.setState({
            displayType: event.target.value,
        });
    }

    render() {
        let color0 = null;
        let color1 = null;
        let color2 = null;
        let color3 = null;
        let color4 = null;

        let complementColor = tinycolor(this.props.color).complement().toHexString().toUpperCase();
        let mono10 = tinycolor(this.props.color).lighten(10).toHexString().toUpperCase();
        let mono20 = tinycolor(this.props.color).lighten(20).toHexString().toUpperCase();
        let mono30 = tinycolor(this.props.color).lighten(30).toHexString().toUpperCase();
        let analogArray = tinycolor(this.props.color).analogous();
        let triadArray = tinycolor(this.props.color).triad();
        let tetradArray = tinycolor(this.props.color).tetrad();

        let current = tinycolor(this.props.color).toHexString().toUpperCase();
        let { displayType } = this.state;
        switch (displayType) {
            default:
                color0 = null;
                color1 = null;
                color2 = null;
                color3 = null;
                color4 = null;
                break;
            case 'Complementary Colors:':
                color0 = current;
                color1 = complementColor;
                color2 = null;
                color3 = null;
                color4 = null;
                break;
            case 'Monochromatic Colors:':
                color0 = current;
                color1 = mono10;
                color2 = mono20;
                color3 = mono30;
                color4 = null;
                break;
            case 'Analogous Colors:':
                color0 = current;
                color1 = analogArray[1].toHexString().toUpperCase();
                color2 = analogArray[2].toHexString().toUpperCase();
                color3 = analogArray[4].toHexString().toUpperCase();
                color4 = analogArray[5].toHexString().toUpperCase();
                break;
            case 'Triadic Colors:':
                color0 = current;
                color1 = triadArray[1].toHexString().toUpperCase();
                color2 = triadArray[2].toHexString().toUpperCase();
                color3 = null;
                color4 = null;
                break;
            case 'Tetradic Colors:':
                color0 = current;
                color2 = tetradArray[1].toHexString().toUpperCase();
                color3 = tetradArray[2].toHexString().toUpperCase();
                color4 = tetradArray[3].toHexString().toUpperCase();
                break;
        }

        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div>
                        <FormControl>
                            <div className='scheme-selector'>Color Scheme Type:</div>
                            {/*<div style={{marginBottom:'30px'}}/>*/}
                            <Select
                                // labelId="demo-simple-select-placeholder-label-label"
                                // id="demo-simple-select-placeholder-label"
                                value={ this.state.displayType }
                                onClick={ this.changeDisplay }
                                displayEmpty
                                // className={classes.selectEmpty}
                            >
                                <MenuItem value="" disabled><em className='scheme-selector'>Choose a Color Scheme!</em></MenuItem>
                                <MenuItem value={ 'Complementary Colors:' }><div className='scheme-selector'>Complementary Colors</div></MenuItem>
                                <MenuItem value={ 'Monochromatic Colors:' }><div className='scheme-selector'>Monochromatic Colors</div></MenuItem>
                                <MenuItem value={ 'Analogous Colors:' }><div className='scheme-selector'>Analogous Colors</div></MenuItem>
                                <MenuItem value={ 'Triadic Colors:' }><div className='scheme-selector'>Triadic Colors</div></MenuItem>
                                <MenuItem value={ 'Tetradic Colors:' }><div className='scheme-selector'>Tetradic Colors</div></MenuItem>
                            </Select>
                            {/*<FormHelperText>Select a Color Scheme</FormHelperText>*/}
                        </FormControl>
                    </div>

                    <div style={{height: '8vh'}}>
                        {/*<h4>{ displayType }</h4>*/}
                        {(color0 !== null) &&
                        <div className="colorSwatches" style={{ background: color0 }}>
                            {color0}
                            </div>
                        }
                        {(color1 !== null) &&
                        <div className="colorSwatches" style={{ background: color1 }}>
                            {color1}
                        </div>
                        }
                        {(color2 !== null) &&
                        <div className="colorSwatches" style={{ background: color2 }}>
                            {color2}
                        </div>
                        }
                        {(color3 !== null) &&
                        <div className="colorSwatches" style={{ background: color3 }}>
                            {color3}
                        </div>
                        }
                        {(color4 !== null) &&
                        <div className="colorSwatches" style={{ background: color4 }}>
                            {color4}
                        </div>
                        }
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default RelatedColors;
