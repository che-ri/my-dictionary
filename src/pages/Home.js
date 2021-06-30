import React, { useEffect } from "react";
import styled from "styled-components";

//리덕스
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { loadDictFB, deleteDictFB } from "../redux/modules/dictionary";

//아이콘
import { AiOutlineDelete } from "react-icons/ai";

//컴포넌트
import Layout from "../components/Layout";

const mapStateToProps = state => ({
    list: state.dict.list,
    is_loaded: state.dict.is_loaded,
});

const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(loadDictFB());
    },
    delete: idx => {
        dispatch(deleteDictFB(idx));
    },
});

const Home = props => {
    const dict_list = props.list;

    useEffect(() => props.load(), []);

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
                        <Controls>
                            <button onClick={() => props.delete(idx)}>
                                <AiOutlineDelete />
                            </button>
                        </Controls>
                    </Card>
                );
            })}
        </Layout>
    );
};

const Card = styled.div`
    position: relative;
    width: 100%;
    background: white;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
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

const Controls = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    width: 30px;
    height: 30px;
    & button {
        background: inherit;
        width: 100%;
        font-size: 1rem;
        border-radius: 50%;
        & * {
            color: #189ab4;
        }
        &:hover {
            background: #189ab4;
            & * {
                color: #fff;
            }
        }
    }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
