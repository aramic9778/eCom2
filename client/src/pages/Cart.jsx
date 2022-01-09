import React from 'react'
import Ads from '../components/ads'
import Intouch from '../components/Intouch'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive';
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { userRequest } from '../requestMethods'
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProductMinus, updateProductPlus } from '../redux/cartRedux';
import { Link } from 'react-router-dom';


const KEY = "pk_test_51KBq1SJE8KnsfrYPVbJSELFvbB70pP3fvNwGSu8TMO5WPRqFeE7bvUz3A6MnVGaSqpUzUHOro0DqFfhdi0T5fr2v00lp4MBSxu";
const Container = styled.div`

`;


const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;


const Top = styled.div`
    display:flex;
    align-items: center; 
    justify-content: space-between;
    padding: 30px;
    ${mobile({ padding: "0px", flexDirection: "column", marginBottom: "20px" })}
`;



const Bottom = styled.div`
    display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;



const Details = styled.div`
    flex: 2;
  display: flex; 
  ${mobile({ flexDirection: "column" })}
`;


const ID = styled.span`
    ${mobile({ marginBottom: "15px" })}
`;


const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`;




const Description = styled.span`
    ${mobile({ marginBottom: "15px" })}
`;


const Title = styled.h1`
    margin: 20px;
    font-size: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
    ${mobile({ fontSize: "40px" })}
`;

const Button = styled.button`
    padding:20px;
    width: 200px;
    cursor:pointer;
    background-color: transparent;
    border-width: 1px;
    &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    }
    ${mobile({ margin: "10px" })}
    
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
    
    
`;
const Image = styled.img`
    
    width: 250px;
    margin:5px;
    ${mobile({ height: "180px", width: "180px", margin: "10px" })}

    
`;

const Name = styled.span`
    ${mobile({ marginBottom: "15px" })}
    
    
`;

const AmountC = styled.div`
    
    
    display: flex;
    align-items: center;
    
    
`;
const Amount = styled.div`
    margin:5px;
    font-size: 24px;
    
`;

const Horizontal = styled.hr`
    margin: 40px;
`;

const Price = styled.div`
    font-size: 40px;
`;

const Info = styled.div`
  flex: 3;
  
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 35vh;
`;

const STitle = styled.div`
  font-size: 30px;
`;

const SItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SText = styled.div`
  
`;
const SPrice = styled.div`
  
`;

const SButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }
`;


const DetailsList = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  ${mobile({ paddingLeft: "10px" })}
`;
const Hr3 = styled.div`
  display:flex;
  flex-direction: column;
  
`;
const Hr = styled.div`
  
`;
const Hr2 = styled.div`
  
`;
const Empty = styled.h2`
    
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 100px;
    color: red;
    
`;

const ButtonDelete = styled.button`
    padding:10px;
    width:100px;
    cursor:pointer;
    background-color: transparent;
    border-width: 1px;
    &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
  }
  
`;

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const cartLength = cart.products.length;
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
    const dispatch = useDispatch();
    function DeleteProduct(id) {
        const myItem = cart.products.filter((product) => product._id === id)
        dispatch(
            deleteProduct({ ...myItem[0] }))
    }
    const onToken = (token) => {
        setStripeToken(token);
    };


    function handleQuantity(type, id) {
        const myIteminCart = cart.products.filter((product) => product._id === id);
        if (type === "dec") {


            if (myIteminCart[0].quantity > 1) {
                dispatch(
                    updateProductMinus({ ...myIteminCart[0] }))
            }
        }
        else {
            dispatch(
                updateProductPlus({ ...myIteminCart[0] }))
        }
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,

                });
                history("/success", { data: res.data });
            }
            catch {

            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history])


    if (cartLength) {
        return (
            <Container>
                <Ads />
                <Navbar />
                <Wrapper>
                    <Title>
                        YOUR CART
                    </Title>
                    <Top>
                        <Link to='/'>
                            <Button>GO BACK TO SHOPPING</Button>
                        </Link>
                        <Link to='/favs'>
                            <Button>FAVORITES</Button>
                        </Link>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(product => (<Hr3><Hr><Product>
                                <Details>
                                    <Image src={product.img} />
                                    <DetailsList>
                                        <ID>
                                            <b>ID:</b> {product._id}
                                        </ID>
                                        <Name>
                                            <b>Product:</b> {product.title}
                                        </Name>

                                        <Description>
                                            <b>Description:</b> {product.desc}
                                        </Description>
                                    </DetailsList>
                                </Details>
                                <PriceContainer>
                                    <AmountC>
                                        <Remove onClick={() => handleQuantity("dec", product._id)} />
                                        <Amount>{product.quantity}</Amount>
                                        <Add onClick={() => handleQuantity("inc", product._id)} />
                                    </AmountC>
                                    <Price>
                                        ${product.price * product.quantity}
                                    </Price>
                                    <ButtonDelete onClick={() => DeleteProduct(product._id)}>
                                        DELETE
                                    </ButtonDelete>
                                </PriceContainer>

                            </Product>
                            </Hr>
                                <Hr2>
                                    <Horizontal />
                                </Hr2>
                            </Hr3>))}


                        </Info>
                        <Summary>
                            <STitle>
                                ORDER SUMMARY
                            </STitle>
                            <SItem>
                                <SText>
                                    Subtotal
                                </SText>
                                <SPrice>
                                    ${cart.total}
                                </SPrice>
                            </SItem>
                            <SItem>
                                <SText>
                                    Estimated Shipping
                                </SText>
                                <SPrice>
                                    $5.90
                                </SPrice>
                            </SItem>
                            <SItem>
                                <SText>
                                    Shipping Discount
                                </SText>
                                <SPrice>
                                    - $5.90
                                </SPrice>
                            </SItem>
                            <SItem type="total">
                                <SText>
                                    Total
                                </SText>
                                <SPrice>
                                    ${cart.total}
                                </SPrice>
                            </SItem>
                            <StripeCheckout
                                name="Crazy Fingers Shop"
                                billingAddress
                                shippingAddress
                                description={`Your total is ${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <SButton>CHECKOUT NOW</SButton>
                            </StripeCheckout>
                        </Summary>

                    </Bottom>
                </Wrapper>
                <Intouch />
                <Footer />
            </Container >
        )
    }
    else {
        return (<Container>
            <Ads />
            <Navbar />
            <Title>
                YOUR CART
            </Title>
            <Empty>
                Your cart is empty...
            </Empty>
            <Intouch />
            <Footer />
        </Container >)

    }

}

export default Cart
