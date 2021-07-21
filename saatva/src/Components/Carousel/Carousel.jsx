import React from 'react';
import './Carousel.scss';
import mattresses from 'assets/mattresses.json';
import star from 'assets/star.svg';
import { bounceIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const BounceInAnimation = keyframes`${bounceIn}`;

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.mattresses = mattresses.mattresses;
        this.state = {
            selectedMattress: this.mattresses[Object.keys(this.mattresses)[0]]
        };
        this.BounceInDiv = styled.div`animation: 2s ${BounceInAnimation}`;
        this.setCurrentMattress = this.setCurrentMattress.bind(this);
    }

    setCurrentMattress(mattress) {
        this.setState({
            selectedMattress: mattress
        });
    }

    renderMattressList() {
        let mattressNames = [];
        for (const mattress in this.mattresses) {
            mattressNames.push(this.mattresses[mattress].name);
        }
        return(
            <div className="mattress-options">
                {
                    mattressNames.map(name => {
                        return (
                            <button className={this.state.selectedMattress.name === name ? "selected" : ""} onClick={() => {
                                let selectedMattress = null;
                                for(const mattress in this.mattresses) {
                                    if(this.mattresses[mattress].name === name) selectedMattress = this.mattresses[mattress];
                                }
                                if(selectedMattress) this.setState({selectedMattress: selectedMattress});
                                this.BounceInDiv = styled.div`animation: 2s ${BounceInAnimation}`;
                            }}>
                                {name}
                            </button>
                        );
                    })
                }
            </div>
        );
    }

    formatCurrency(num) {
        return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    render() {
        const pathToImages = "../../public/assets/";
        const { addToCart } = this.props;
        return (
            <div className="mattress-carousel">
                <div className="mattress-image">
                    <this.BounceInDiv>
                        <img src={pathToImages + this.state.selectedMattress.imageFileName} />
                    </this.BounceInDiv>
                    <div className="star-rating">
                        <span>{this.state.selectedMattress.reviewRating}</span>
                        <img src={star}/>
                    </div>
                </div>
                <div className="mattress-selection">
                    <h1>Choose Your Mattress</h1>
                    <div className="mattress-list">
                        <h3>SELECT MATTRESS TYPE</h3>
                        {
                            this.renderMattressList()
                        }
                        <div className="mattress-description">
                            <div className="mattress-name">{this.state.selectedMattress.name}</div>
                            <div className="mattress-price">{this.formatCurrency(this.state.selectedMattress.price)}</div>
                        </div>
                        <div className="add-to-cart">
                            <button onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;