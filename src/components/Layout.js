import React from "react";
import styled from "styled-components";

const Layout = ({ title, children }) => {
    return (
        <Container>
            <Inner>
                <Header>{title}</Header>
                <Main>{children}</Main>
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://static-cse.canva.com/image/5267/17Blue-Green.0d150b83.png")
        center / cover no-repeat;
`;

const Inner = styled.div`
    overflow-y: scroll;
    position: relative;
    width: 350px;
    height: 90%;
    padding: 20px;
    background: #d4f1f4;
    border-radius: 20px;
`;

const Header = styled.header`
    font-size: 1.5rem;
    font-weight: 600;
`;

const Main = styled.main``;

export default Layout;
