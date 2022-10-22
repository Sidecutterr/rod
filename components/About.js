import Link from "next/link";
import React from 'react'

const About = () => {
  return (
    <div id="aboutus">
      <div className='max-h-full py-10 w-full bg-navy-bluerr bg-cover flex flex-col justify-between'>
                <h5 className='text-center pt-5 font-Aldrich font-semibold text-6xl text-white pb-10'>About Us</h5>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto justify-items-center'>

      <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>


         
          <div className='mt-2 text-left mb-12 font-normal text-1xl leading-7 font-Aldrich text-white'>
            <h6 className='font-bold text-5xl'>Who Iam?</h6>
          <p className='mt-10 leading-8 text-2xl'>Two brothers aiming to build a supportive community in the NFT space. We started ROD to support you and NFT artists on this journey and support other charities. We invite you to be a part of this community.</p>

                <div className='mt-5 rounded-3xl bg-blue-500 flex pr-4 text-black mr-2 h-16 border-4 border-blue-200 w-60 hover:bg-teal-600 hover:border-hidden'>
                <button className='m-auto'>VIEW IN TWITTER</button>

            </div>
          </div>
          </div>

           {/*IMAGE*/} 
          <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>           
                <img className='m-auto mt-10 w-96 h-96 object-cover rounded-3xl lg:w-96 lg:h-96 lg:bg-cover'  src="/assets/RoD WP 4.png" />   
          </div>  



          {/*sidecutterr*/}
        <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>
          <div className='bg-rose-color w-72 h-[480px] rounded-lg lg:w-96 lg:h-[550px] relative left-4 sm:left-12'>
          <img className='m-auto mt-10 w-60 h-60 object-cover rounded-full lg:w-72 lg:h-72' src="/assets/rod1.jpg" />
          <h5 className='text-white mt-5 text-center text-3xl font-bold mr-4 lg:text-4xl font-Aldrich'>Sidecutterr</h5>
          <h5 className='text-center justify-between mt-7 text-2xl font-semibold mr-4 lg:text-3xl font-Aldrich'>CO-FOUNDER AND ARTIST</h5>
          </div>
          <div className='mt-5 text-left justify-between font-normal text-1xl leading-7 font-Aldrich text-white'>
          <p>Gamer and art lover, someone who likes to play computer games and also likes to draw.
              <br></br>
               We all love the NFT field and we are here to serve ourselves and the community in this field.
               <br></br>
                We want to support the NFT community for new projects and new artists.
                <br></br>
                 We want to see you in this project and we look forward to seeing you!</p>
          </div>
        </div>



          {/*hakael*/}


          <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>

                <div className='bg-rose-color w-72 h-[480px] rounded-lg lg:w-96 lg:h-[550px] relative left-4 sm:left-12'>
                <img className='m-auto mt-10 w-60 h-60 object-cover rounded-full lg:w-72 lg:h-72' src="/assets/RoD WP 3.png" />
                <h5 className='text-white mt-5 text-center text-3xl font-bold mr-4 lg:text-4xl font-Aldrich'>Hakael</h5>
                <h5 className='text-center justify-between mt-7 text-2xl font-semibold mr-4 lg:text-3xl font-Aldrich'>CO-FOUNDER AND DEVELOPER</h5>            
                </div>

                <div className='mt-5 text-left justify-between font-normal text-1xl leading-7 font-Aldrich text-white'>
            <p>Gamer and art lover, someone who likes to play computer games and also likes to draw.
              <br></br>
               We all love the NFT field and we are here to serve ourselves and the community in this field.
               <br></br>
                We want to support the NFT community for new projects and new artists.
                <br></br>
                 We want to see you in this project and we look forward to seeing you!</p>
          </div>
          </div>  
        </div>  
      </div>
    </div>
  );
};

export default About;
