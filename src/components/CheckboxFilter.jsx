import React, { Component } from 'react';

class CheckboxFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showColors: {
                Red: false,
                Blue: false,
                Green: false,
                Black: false,
                Purple: false,
                Yellow: false
            }
        };
    }

    handleColorFilter = (color) => {
        const { showColors } = this.state;
        const updatedColors = { ...showColors, [color]: !showColors[color] };
        this.setState({ showColors: updatedColors });
        this.filterCards(updatedColors);
    };

    filterCards = (colors) => {
        const { Cards, setFilteredCards } = this.props;
        const filtered = Cards.filter(card => {
            return (Object.keys(colors).some(color => colors[color] && card["Primary color"] === color) ||
                Object.keys(colors).some(color => colors[color] && card["Secondary color"] === color))
        });
        setFilteredCards(filtered);
        console.log(filtered)
    };

    render() {
        const { showColors } = this.state;
        return (
            <div className='checkbox-container'>
                {Object.keys(showColors).map((color, index) => (
                    <button
                        key={index}
                        style={{ background: color.toLowerCase(), color: `grey`, fontSize: `16px` }}
                        className='checkbox'
                        onClick={() => this.handleColorFilter(color)}
                    >
                        {color}
                    </button>
                ))}
            </div>
        );
    }
}

export default CheckboxFilter;
