import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive';
import { Link } from "react-router-dom"
const Container = styled.div`
   flex: 1;
   margin: 20px;
   height: 45vh;
   position: relative;
   ${mobile({ marginTop: "45px", marginBottom: "45px" })}
   ${tablet({ marginBottom: "80px" })}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
    ${tablet({ height: "30vh" })}
    
`


const Info = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
`

const Title = styled.div`
    color:black;
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 5px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
  }
    
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>BUY IT!</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
