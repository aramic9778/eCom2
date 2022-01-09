
import styled from 'styled-components'
import Product from './Product'
import { mobile } from '../responsive';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Container = styled.div`
   margin-top: 60px;
   margin-right: 70px;
   margin-left: 120px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   ${mobile({ margin: "0px" })}

`;

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [FilteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products');

                setProducts(res.data);
            } catch (err) {

            }
        };
        getProducts();
    }, [cat])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        }

        if (sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price)
            );
        }

        if (sort === "desc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price)
            );
        }

    }, [sort]);

    return (
        <Container>
            {cat
                ? FilteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 18)
                    .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    )
}

export default Products
