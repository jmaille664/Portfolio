import React from 'react'
import Photography from '../image/Photography.JPG'
import Baking from '../image/Baking.jpg'
import Skiing from '../image/Skiing.jpg'
import Hiking from '../image/Hiking.JPG'
import Kayaking from '../image/Kayaking.jpg'
import Cooking from '../image/Cooking.jpg'
import Knitting from '../image/Knitting.jpg'
import Painting from '../image/Painting.jpg'
import Family from '../image/Family.jpg'


export default function Hobbies(){

    return(
        <>
        <h1 className="hobbies-page-h1">Hobbies and Interest</h1>
        <ul className="hobbies-list-page-h1">
            {/* Hobbies List */}
        <li>Photography</li>
        <li>Baking</li>
        <li>Cross Country Skiing</li>
        <li>Hiking</li>
        <li>Kayaking</li>
        <li>Cooking</li>
         <li>Knitting</li>
        <li>Snowboarding</li>
        <li>Painting</li>
        </ul>
        {/* Images Grid */}
        <section id="main-grid" class="main-grid" role="main">
        <img class="hobbies-image" src={Photography} alt="Sunset over mountains"/>
        <img class="hobbies-image" src={Baking} alt="Chocolate Chip Cookies"/>
        <img class="hobbies-image" src={Skiing} alt="Winter Cross Country Skiing"/>
        <img class="hobbies-image" src={Hiking} alt="Women in Pink shirt on a mountain top"/>
        <img class="hobbies-image" src={Kayaking} alt="Women in Pink shirt on a mountain top"/>
        <img class="hobbies-image" src={Cooking} alt="Pad Thai on a plate"/>
        <img class="hobbies-image" src={Knitting} alt="Purple knitted blanket"/>
        <img class="hobbies-image" src={Painting} alt="Watercolor paining of taurus"/>
        <img class="hobbies-image" src={Family} alt="Watercolor paining of taurus"/>

        </section>
        </>
    )
    
}

