import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/cartRedux';
import { addProductFav } from '../redux/favRedux';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import './Product.css';
import { mobile, tablet } from '../responsive'

const Info = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  transition: all 0.5s ease;
  align-items: center; 
  justify-content: center;
  ${mobile({ opacity: "0.8" })}
  ${tablet({ opacity: "0.8" })}
`

const ImContainer = styled.div`
    flex: 1;
    
    max-width: 280px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    &:hover ${Info}{
    opacity: 1;
  }
  
    
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`


const Image = styled.img`
    height: 75%;
    z-index: 2; 

`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  transition: all 0.5s linear;
  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.2);
  }

`
const Title = styled.h3`
  display:flex;
  text-align: center;
  font-weight: 300;
  font-size: 20px;

  
`
const InfoContainer = styled.div`
    max-width: 280px;
    min-height: 100px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    

`

const Price = styled.div`
    text-align:center;
    font-weight: 700;
    color: red;
    font-size:25px;
    margin-top: 7px;

`



const Product = ({ item }) => {
    const dispatch = useDispatch();
    const quantity = 1;
    const favs = useSelector(state => state.fav);
    const cart = useSelector(state => state.cart);

    function AddtoCart(id) {
        const myIteminCart = cart.products.filter((product) => product._id === id);
        if (myIteminCart.length === 0) {
            dispatch(
                addProduct({ ...item, quantity }))
        }
        else {
            dispatch(
                updateProduct({ ...item, quantity }))
        }
        swal("Success. Added to Cart.", {
            buttons: false,
            timer: 1000,
        });

    }

    const AddtoFav = (id) => {
        const myItem = favs.products.filter((product) => product._id === id);
        if (myItem.length === 0) {
            dispatch(
                addProductFav({ ...item }))
            swal("Success. Added to Favorites.", {
                buttons: false,
                timer: 1000,
            });
        }
        else {
            swal("This item already in Favorites.", {
                buttons: false,
                timer: 1000,
            });
        }
    }


    return (
        <Container>
            <ImContainer>
                <Image src={item.img} />
                <Info>
                    <Icon style={{ cursor: "pointer" }} onClick={() => AddtoCart(item._id)}>
                        <AddShoppingCartIcon />
                    </Icon>

                    <Link to={`/product/${item._id}`}>
                        <Icon>
                            <SearchOutlinedIcon />
                        </Icon>
                    </Link>

                    <Icon style={{ cursor: "pointer" }} onClick={() => AddtoFav(item._id)}>
                        <FavoriteBorderIcon />
                    </Icon>
                </Info>

            </ImContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Price>${item.price * 1.00}</Price>
            </InfoContainer>
        </Container>
    )
}

export default Product
