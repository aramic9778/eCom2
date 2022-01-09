import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


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
const Agreement = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px;
    
`;

const Button = styled.button`
    display: flex;
    margin-top:15px;
    padding:15px;
    font-size: 20px;
    cursor: pointer;
    background-color: #93f8fa;
    

`;

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the
                    </Agreement>
                    <b>PRIVACY POLICY</b>
                    <Button>
                        CREATE
                    </Button>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register
