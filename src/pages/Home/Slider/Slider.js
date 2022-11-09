import React from 'react';
import img1 from '../../../assets/banner_img/colin-lloyd-LOh-9PgdPZw-unsplash.jpg';
import img2 from '../../../assets/banner_img/craig-stevenson-Hsef5B_pHgE-unsplash.jpg';
import img3 from '../../../assets/banner_img/alok-verma-80l2FftMuBI-unsplash.jpg';
import SliderItem from './SliderItem';


const Slider = () => {
    const sliderData = [

        {
            img: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            img: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            img: img3,
            prev: 2,
            id: 3,
            next: 1
        }

    ]
    return (
        <div className=' carousel mx-6'>
            {
                sliderData.map(slider => <SliderItem
                    key={slider.id}
                    slider={slider}
                ></SliderItem>)
            }
        </div>
    );
};

export default Slider;