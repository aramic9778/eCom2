import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';



const Container = styled.div`
    background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://www.mural-wallpaper.com/wp-content/uploads/2020/11/S-SP25.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


const Wrapper = styled.div`
    width: 30%;
    background-color: white;
    padding: 30px;
    ${mobile({ width: "70%" })}
`;

const Input = styled.input`
    margin:10px;
    padding:10px;
    width: 60%;
`;

const Title = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    margin:10px;
`;

const Button = styled.button`
    display: flex;
    margin-top:15px;
    padding:15px;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
    

`;

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Link = styled.a`
    margin-top: 15px;
    text-decoration: underline;
    cursor: pointer;
`;


const Error = styled.span`
    color:red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user); //doesn't work
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    return (
        <Container>
            <Wrapper>
                <Title>
                    SIGN IN
                </Title>
                <Form>
                    <Input placeholder="email" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>
                        LOGIN
                    </Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                    <Link></Link>

                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login
