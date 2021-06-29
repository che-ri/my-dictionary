//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

// firebase SDK 개인정보입니다.
const firebaseConfig = {
    apiKey: "AIzaSyBjJsbtHTNGTDSBuuvmcFOyHR7KWxFw3rY",
    authDomain: "my-dictionary-bd92c.firebaseapp.com",
    projectId: "my-dictionary-bd92c",
    storageBucket: "my-dictionary-bd92c.appspot.com",
    messagingSenderId: "481474469019",
    appId: "1:481474469019:web:9143bb9b642f4e53d93a3e",
    measurementId: "G-WE4PKGMPQ0",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
