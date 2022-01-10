import React from "react";
import './ImageSlider.css';
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

class ImageSlider extends React.Component{

    constructor(props){
        super(props);
        this.counter = 1;
    }

    onNextClickHandler = () => {
        this.counter++;
        console.log("next clicked");
        this.imageSlider(this.counter);
    }

    onPrevClickHandler = () => {
        this.counter --;
        console.log("prev clicked");
        this.imageSlider(this.counter);
    }

    imageSlider = (counter) => {
        console.log("image slider");
        const imageSlide = document.querySelector('.image_slider');
        const images = document.querySelectorAll('.image_slider img');

        const size = images[0].clientWidth;
        imageSlide.style.transition = 'transform 0.4s ease-in-out';
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        imageSlide.addEventListener('transitionend', () => {
            if(images[counter].id === 'last_clone' ){
                console.log("Counter: " + images[counter].id)
                console.log("Conter: " + counter);
                imageSlide.style.transition = 'none';
                counter = images.length - 2;
                imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                this.counter = counter;
            }
            if(images[counter].id === 'first_clone' ){
                console.log("Counter: " + images[counter].id)
                console.log("Conter: " + counter);
                imageSlide.style.transition = 'none';
                counter = images.length - counter;
                imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                this.counter = counter;
            }
        })
    }

    componentDidMount(){
        this.imageSlider(this.counter);
    }

    render(){
        return (
            <div className="container">
                <div className="image_slider">
                    <img src={image4}  id="last_clone"/>
                    <img src={image1}  id=""/>
                    <img src={image2}  id=""/>
                    <img src={image3}  id=""/>
                    <img src={image4}  id=""/>
                    <img src={image1}  id="first_clone"/>
                </div>
                <div className="btn-div">
                    <button id="prevBtn" onClick={this.onPrevClickHandler}> prev </button>
                    <button id="nextBtn" onClick={this.onNextClickHandler}> next </button>
                </div>
            </div>
        );
    }
}

export default ImageSlider;