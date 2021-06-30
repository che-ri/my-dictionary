import React, { useRef } from "react";
import styled from "styled-components";

//리덕스
import { connect } from "react-redux";
import { addDictFB } from "../redux/modules/dictionary";

//페이지
import Layout from "../components/Layout";

//리덕스 액션생성함수 props로 받아오기
const mapDispatchToProps = dispatch => ({
    create: new_item => {
        dispatch(addDictFB(new_item));
    },
});

const Add = props => {
    const word = useRef(null);
    const desc = useRef(null);
    const exam = useRef(null);

    const addNewItem = () => {
        const new_word = word.current.value;
        const new_desc = desc.current.value;
        const new_exam = exam.current.value;
        const new_item = { word: new_word, desc: new_desc, exam: new_exam };
        props.create(new_item);

        //내용 지워주기
        word.current.value = "";
        desc.current.value = "";
        exam.current.value = "";
    };

    return (
        <Layout title="단어 추가하기">
            <Card>
                <Title>단어</Title>
                <input type="text" ref={word} />
            </Card>
            <Card>
                <Title>설명</Title>
                <input type="text" ref={desc} />
            </Card>{" "}
            <Card>
                <Title>예시</Title>
                <input type="text" ref={exam} />
            </Card>
            <div>
                <AddBtn onClick={addNewItem}>추가하기</AddBtn>
            </div>
        </Layout>
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    & input {
        padding: 5px;
        all: unset;
        border-bottom: 2px solid #e2e2e2;
        transition: border 0.3s ease;
        &:focus {
            border-bottom: 2px solid #189ab4;
        }
    }
`;
const Title = styled.span`
    margin-bottom: 5px;
`;
const AddBtn = styled.button`
    width: 100%;
    padding: 20px;
    background: #189ab4;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        transform: scale(0.99);
    }
`;

export default connect(null, mapDispatchToProps)(Add);
