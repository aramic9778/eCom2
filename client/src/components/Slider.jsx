import React from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from '../data';
import { useState } from 'react';
import { mobile, tablet } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position:relative;
    overflow: hidden;
    border-bottom: 5px dashed black;

    ${mobile({ display: "none" })}
    ${tablet({ display: "none" })}
`

const Arrow = styled.div`
    width:50px;
    color: white;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    
    left:${props => props.direction === "leftside" && "10px"};
    right:${props => props.direction === "rightside" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slide * -100}vw);
    
    
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
    color: ${props => props.fc};
    
`

const Img = styled.img`
    height: 80%;
`

const InContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const ImContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;

`
const Button = styled.button`
    padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
  }

`;

const Slider = () => {
    const [slide, setSlide] = useState(0);
    const handleClick = (direction) => {
        if (direction === "leftside") {
            setSlide(slide > 0 ? slide - 1 : 2)
        }
        else {
            setSlide(slide < 2 ? slide + 1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="leftside" onClick={() => handleClick("leftside")}>
                <KeyboardArrowLeftIcon />
            </Arrow>
            <Wrapper slide={slide}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} fc={item.fc} key={item.id}>
                        <ImContainer>
                            <Img src={item.img} />
                        </ImContainer>
                        <InContainer>
                            <Title> {item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to={`/product/${item.id}`}>

                                <Button>BUY IT</Button>
                            </Link>
                        </InContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="rightside" onClick={() => handleClick("rightside")} >
                <KeyboardArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
