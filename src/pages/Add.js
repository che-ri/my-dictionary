import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Add = () => {
    return (
        <Layout title="단어 추가하기">
            <Link to="/">뒤로가기</Link>
        </Layout>
    );
};

export default Add;
