import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Task4Compo3(){
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return(
        <>
            <div>
            <Slider {...settings}>
                <div>
                    <div className="Task4Compo3_Slide"><img  src={"https://www.shutterstock.com/image-photo/bangkok-thailand-july-62019-setting-600nw-1453294013.jpg"} /></div>
                </div>
                <div>
                    <div className="Task4Compo3_Slide"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucwWEoLzMZFlrFr2SXxbQ4BsZVORT6KxpWQ&s"} /></div>
                </div>
                <div>
                    <div className="Task4Compo3_Slide"><img src={"https://m.media-amazon.com/images/I/61MrxJfTWEL._AC_UF350,350_QL80_.jpg"} /></div>
                </div>
                <div>
                    <div className="Task4Compo3_Slide"><img src={"https://www.shutterstock.com/image-photo/bangkok-thailand-january-1-2021-260nw-1885589908.jpg"} /></div>
                </div>
                {/* <div>
                    <div className="Task4Compo3_Slide"><img src={""} /></div>
                </div> */}
              </Slider>
            </div>  
        </>
    )
} 