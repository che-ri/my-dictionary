import React, { createRef, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";

const Add = () => {
    const word = useRef(null);
    const desc = useRef(null);
    const exam = useRef(null);

    const handleOnClick = () => {
        const new_word = word.current.value;
        const new_desc = desc.current.value;
        const new_exam = exam.current.value;
        const new_item = { word: new_word, desc: new_desc, exam: new_exam };
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
                <BackBtn>
                    <Link to="/">
                        <IoMdArrowRoundBack />
                    </Link>
                </BackBtn>
                <AddBtn onClick={handleOnClick}>추가하기</AddBtn>
            </div>
        </Layout>
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    margin: 20px 0;
    padding: 10px;
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
const BackBtn = styled.div`
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

export default Add;
