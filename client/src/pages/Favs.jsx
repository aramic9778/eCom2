import React from 'react'
import Ads from '../components/ads'
import Intouch from '../components/Intouch'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { mobile, tablet } from '../responsive';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/cartRedux';
import { deleteProduct } from '../redux/favRedux';
import swal from 'sweetalert';
import '../components/Product.css';




const Container = styled.div`

`;



const Details = styled.div`
  margin: 30px;
  display: flex; 
  width: 600px;
  ${mobile({ flexDirection: "column", width: "300px", margin: "0px", alignItems: "center" })}
  ${tablet({ marginLeft: "80px" })}
`;




const Price = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: red;
    ${mobile({ textAlign: "center", margin: "10px" })}
`;


const Name = styled.span`
    
    font-size: 20px;
    ${mobile({ textAlign: "center" })}
    
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
    
    
`;
const Image = styled.img`
    
    width: 250px;
    margin:5px;
    ${mobile({ height: "150px", width: "150px" })}

    
`;

const DetailsList = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  ${mobile({ alignItems: "center" })}
  
`;



const MainTitle = styled.h1`
    margin: 20px;
    font-size: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
    ${mobile({ fontSize: "40px" })}
`;

const Wrapper = styled.div`
    
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

const Empty = styled.h2`
    
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 100px;
    color: red;
    
`;

const Button = styled.button`
    
    padding:10px;
    width:200px;
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

const Favs = () => {
    const favs = useSelector(state => state.fav);
    const quantity = 1;
    const dispatch = useDispatch();
    const item = useSelector(state => state.fav);
    const cart = useSelector(state => state.cart);
    const favLength = item.products.length;
    console.log(favLength);
    function AddtoCart(id) {
        const myItem = item.products.filter((product) => product._id === id);
        const myIteminCart = cart.products.filter((product) => product._id === id);
        if (myIteminCart.length === 0) {
            dispatch(
                addProduct({ ...myItem[0], quantity }))
        }
        else {
            dispatch(
                updateProduct({ ...myItem[0], quantity }))
        }
        swal("Success. Added to Cart.", {
            buttons: false,
            timer: 1000,
        });

    }
    function DeleteProduct(id) {
        const myItem = item.products.filter((product) => product._id === id)
        dispatch(
            deleteProduct({ ...myItem[0] }))
    }
    if (favLength) {
        return (

            <Container>
                <Ads />
                <Navbar />

                <MainTitle>
                    FAVORITES
                </MainTitle>


                <Wrapper>
                    {favs.products.map(product => (<Product>
                        <Details>
                            <Image src={product.img} />
                            <DetailsList>
                                <Name>
                                    <b>Product:</b> {product.title}
                                </Name>

                                <Price>
                                    <b>Price:</b> ${product.price}
                                </Price>
                                <Button onClick={() => AddtoCart(product._id)}>ADD TO CART</Button>
                                <Button onClick={() => DeleteProduct(product._id)}>DELETE</Button>

                            </DetailsList>

                        </Details>

                    </Product>))}
                </Wrapper>





                <Intouch />
                <Footer />
            </Container >

        )
    }
    else {
        return (

            <Container>
                <Ads />
                <Navbar />
                <MainTitle>
                    FAVORITES
                </MainTitle>
                <Empty>
                    Your favorites list is empty...
                </Empty>
                <Intouch />
                <Footer />
            </Container >

        )
    }

}

export default Favs