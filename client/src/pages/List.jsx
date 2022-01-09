
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Ads from '../components/ads';
import Footer from '../components/Footer';
import Intouch from '../components/Intouch';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
    
`;

const Title = styled.span`
    margin-bottom: 10px;
    font-size: 30px;
`;

const Option = styled.option`
    
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    width: 80%;
    margin-top: 10px;
    ${mobile({ padding: "8px", marginLeft: "15px" })}
`;

const FContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
     ${mobile({ justifyContent: "center" })}
   
`;

const Filter = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
    flex-direction: column;
    

`;

const MainTitle = styled.h1`
    margin: 20px;
    font-size: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const List = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    let name;
    if (cat === "anti-stress")
        name = "Anti-stress Toys"
    if (cat === "puzzles")
        name = "Puzzle Toys"
    if (cat === "office")
        name = "Office Toys"

    const filters = 0;
    const [sort, setSort] = useState("Newest");
    return (
        <Container>
            <Ads />
            <Navbar />
            <MainTitle>{name}</MainTitle>
            <FContainer>
                <Filter>

                    <Title>
                        Sort Products:
                    </Title>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="desc">
                            Price Descending
                        </Option>
                        <Option value="asc">
                            Price Ascending
                        </Option>
                    </Select>
                </Filter>
            </FContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Intouch />
            <Footer />
        </Container>
    )
}

export default List
