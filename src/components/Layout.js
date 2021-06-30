import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

//리덕스
import { connect } from "react-redux";

//아이콘
import { TiPlusOutline } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";

const mapStateToProps = state => ({
    dict_list: state.dict.list,
});

const Layout = props => {
    let dict_list = props.dict_list;

    const { title, children } = props;
    const moveLink = () => {
        props.match.url === "/"
            ? props.history.push("/add")
            : props.history.push("/");
    };
    return (
        <Container>
            <Inner>
                <Header>
                    <h5>{title}</h5>
                    <Btn onClick={moveLink}>
                        {props.match.url === "/" ? (
                            <TiPlusOutline />
                        ) : (
                            <IoMdArrowRoundBack />
                        )}
                    </Btn>
                </Header>
                <Main link={props.match.url}>{children}</Main>
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
    position: relative;
    width: 350px;
    height: 90%;
    padding: 20px;
    background: #d4f1f4;
    border-radius: 20px;
`;

const Header = styled.header`
    position: fixed;
    width: inherit;
    margin: -20px 0 0 -20px;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    background: rgba(24, 154, 180, 0.5);
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
`;

const Btn = styled.button`
    cursor: pointer;
    all: unset;
    &:hover > svg > path {
        color: white;
        transition: color 0.2s ease;
    }
`;

const Main = styled.main`
    margin-top: 60px;
    overflow-y: ${props => (props.link === "/" ? "scroll" : "initial")};
    height: 90%;
`;

export default connect(mapStateToProps)(withRouter(Layout));
