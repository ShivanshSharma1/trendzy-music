import React, { useState } from 'react';
import { PlayFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const CarouselVideoButton = styled.div`
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: white;
  font-size: 95px;
  opacity:0.5;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`

const VideoTitle = styled.div`
  position:absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: white;
  opacity:;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
`

const MoreSongs = styled.button`
  position:absolute;
  top: 86%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: black;
  padding: 10px 12px;
  color:white;
  border: 3px solid rgb(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color:transparent;
`
const Top4 = ({videoData}) => {
    let items = []
    items = videoData.map((v, i) => items[i] = {src : v.snippet.thumbnails.maxres.url,
                                               id : v.id,
                                               caption : v.snippet.title
                                                })
    console.log(items)                                            
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} 
        class="img-fluid w-100" style={{height:'50vw'}}/>
        <VideoTitle className='songtitle2'><p style={{width:'90vw', textAlign:'center', marginBottom:'30px'}}>{item.caption}</p></VideoTitle>
        <Link to={`/${item.id}`} target='_blank' ><CarouselVideoButton ><PlayFill className="carouselbutton" /></CarouselVideoButton></Link>
        <Scrollchor to='moresongs'><MoreSongs className="moresongs">MoreTrendingSongs</MoreSongs></Scrollchor>
      </CarouselItem>
    );
  });

  return (
  <div class="position-relative" style={{top:'56px'}}>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
    <div><CarouselIndicators style={{}} items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /></div>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  </div>
  );
}

export default Top4