import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile, tablet } from '../responsive';




const Container = styled.div`
    height: 70px;
    background-color: black;
    ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
    padding-top: 13px;
    padding-right: 15px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: whitesmoke;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    padding-top: 2px;
    display:flex;
    text-align: center;
    justify-content: flex-start;
    
    
`
const Right = styled.div`
    flex:1;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    
`
const Center = styled.div`
    flex:1;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
`

const Logo = styled.h1`
    font-family: 'Luckiest Guy';
    font-weight: 100;
    font-size: 40px;
    ${mobile({ fontSize: "25px", alignItems: "center" })}
`

const Logo2 = styled.h1`
    color: red;
    font-family: 'Luckiest Guy';
    font-weight: 100;
    font-size: 40px;
    margin-left: 1px;
    margin-right: 5px;
    ${mobile({ fontSize: "20px" })}
`


const Menu = styled.div`
    font-size: 30px;
    cursor: pointer;
    margin-left: 30px;
    
    ${mobile({ fontSize: "15px", marginLeft: "15px", marginRight: "8px" })}
    ${tablet({ fontSize: "15px", marginLeft: "15px", marginRight: "5px" })}

`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const favs_q = useSelector(state => state.fav.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/favs">
                        <Menu>
                            <Badge badgeContent={favs_q} color="primary"></Badge>
                            <FavoriteBorderIcon fontSize="large" />
                        </Menu>

                    </Link>
                </Left>
                <Link style={{ color: "white", textDecoration: "none" }} to='/'>
                    <Center>
                        <Logo>crazy</Logo>
                        <Logo2>.</Logo2>
                        <Logo>fingers</Logo>
                    </Center>
                </Link>
                <Right>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
                        <Menu>
                            <Badge badgeContent={quantity} color="primary"></Badge>
                            <ShoppingCartOutlined fontSize="large" />
                        </Menu>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar
