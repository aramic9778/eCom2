import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Ads from '../components/ads';
import Footer from '../components/Footer';
import Intouch from '../components/Intouch';
import { mobile, tablet } from '../responsive';
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import '../components/Product.css';


const Container = styled.div`
    
`;

const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 10px;
    ${mobile({ marginLeft: "0px", marginTop: "15px", justifyContent: "space-between" })}
`;

const PContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
    ${mobile({ fontSize: "25px", marginBottom: "15px", marginTop: "15px" })}
`;

const Desc = styled.div`
    margin-bottom: 20px;
    font-size: 20px;;
`;


const Button = styled.button`
    padding:20px;
    width: 130px;
    cursor:pointer;
    margin-left: 70px;
    background-color: transparent;
    border-width: 1px;
    &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    }
`;



const Image = styled.img`
    height:70vh;
    ${mobile({ height: "30vh" })}
    ${tablet({ height: "30vh" })}
    
`;



const AmountC = styled.div`
    
    flex-direction: row;
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const IContainer = styled.div`
    flex:1;
`;

const InfoContainer = styled.div`
    padding: 20px;
    width: 65%;
    ${mobile({ width: "90%", padding: "0px" })}
`;


const Price = styled.span`
  color: red;
  font-weight: 900;
  font-size: 40px;
`;



const Wrapper = styled.div`
    display:flex;
    padding:50px;
    ${mobile({ flexDirection: "column" })}

`;

const ProductPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();



    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);
    const handleQuantity = (type) => {
        if (type === "dec") {
            if (quantity > 1)
                setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }
    const handleClick = (type) => {
        dispatch(
            addProduct({ ...product, quantity }))
        swal("Success. Added to Cart.", {
            buttons: false,
            timer: 1000,
        });
    }
    return (
        <Container>
            <Ads />
            <Navbar />

            <Wrapper>
                <IContainer>
                    <Image src={product.img} />
                </IContainer>
                <PContainer>
                    <InfoContainer>
                        <Title>
                            {product.title}
                        </Title>
                        <Desc>
                            {product.desc}
                        </Desc>
                        <Price>
                            ${product.price}
                        </Price>
                    </InfoContainer>

                    <CartContainer>
                        <AmountC>
                            <Remove style={{ cursor: "pointer" }} onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add style={{ cursor: "pointer" }} onClick={() => handleQuantity("inc")} />
                        </AmountC>
                        <Button onClick={handleClick}>
                            ADD TO CART
                        </Button>
                    </CartContainer>
                </PContainer>
            </Wrapper>
            <Intouch />
            <Footer />
        </Container>
    )
}

export default ProductPage
