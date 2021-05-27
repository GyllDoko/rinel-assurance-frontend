import React from 'react'


export default function Banner() {
    
   
    return (

        // <Carousel  indicators={false} controls={false} intervalle={3000}>
        //     {carrouselTab.map((item) => (<Carousel.Item >
        //         <div style={{ backgroundImage: "url("+item.img+ ")", backgroundRepeat: 'no-repeat', width: '100%', height: '50vh',backgroundSize: '100% auto'}}>

        //         </div>

        //     </Carousel.Item>))}

        // </Carousel>
     
        
        // <div style={{ backgroundImage: "url(assets/images/carousel/cnsr.png)", backgroundRepeat: 'no-repeat', width: '100%', height: '50vh', backgroundSize: '100% auto' }}>
        <div style={{width: '100%', height: '50vh', display: 'flex'}} >
            
            <img className="img-fluid" src="assets/images/carousel/assurance.jpg" width= '100%' height= '50%'  alt=""/>
        </div>
        // </div>
        

    )
}
