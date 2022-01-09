import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 30px;
    background-color: white;
    color: black;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    ${mobile({ fontSize: "17px" })}
`

const Ads = () => {
    return (
        <Container>
            Free Shipping Within United States!
        </Container>
    )
}

export default Ads
