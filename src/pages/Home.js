import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TiPlusOutline } from "react-icons/ti";

const Home = props => {
    const dict_list = useSelector(state => state.dict.list);
    return (
        <Layout title="사전">
            {dict_list.map((list, idx) => {
                return (
                    <Card key={idx}>
                        <Word>
                            <Title>{idx + 1}.단어</Title>
                            <Content>{list.word}</Content>
                        </Word>
                        <Descript>
                            <Title>설명</Title>
                            <Content>{list.desc}</Content>
                        </Descript>
                        <Example>
                            <Title>예시</Title>
                            <Content color="blue">{list.exam}</Content>
                        </Example>
                    </Card>
                );
            })}
            <Control>
                <Link to="/add">
                    <TiPlusOutline />
                </Link>
            </Control>
        </Layout>
    );
};

const Card = styled.div`
    width: 100%;
    background: white;
    margin: 20px 0;
    padding: 20px;
    border-radius: 20px;
    & div {
        margin-bottom: 10px;
    }
`;

const Word = styled.div``;
const Descript = styled.div``;
const Example = styled.div``;
const Title = styled.span`
    text-decoration: underline;
`;
const Content = styled.p`
    color: ${props => (props.color === "blue" ? "#189AB4" : "inherit")};
`;

const Control = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    a > svg > path {
        transition: color 0.3s ease;
    }
    a:hover > svg > path {
        color: white;
    }
`;
export default Home;
