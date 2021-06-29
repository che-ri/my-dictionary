import { firestore } from "../../firebase";

const bucket_db = firestore.collection("my-dictonary");

//파이어스토어데이터 => 리듀서 연결

// Actions
const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";
// const DELETE = "bucket/DELETE";
// const COMPLETE = "bucket/COMPLETE";

// Action Creators
export const loadDict = dict => {
    return { type: LOAD, dict };
};

export const createDict = dict => {
    return { type: CREATE, dict };
};

// export const deleteBucket = index => {
//     return { type: DELETE, index };
// };

// export const completeBucket = index => {
//     return { type: COMPLETE, index };
//     //이 bucket 데이터에는 bucketlist의 idx가 올 것입니다.
// };

//state 기본값 설정
const initialState = {
    list: [
        {
            word: "ㅎ1ㅎ1",
            desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다",
            exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
        {
            word: "ㅎ1ㅎ1",
            desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다",
            exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
        {
            word: "ㅎ1ㅎ1",
            desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다",
            exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
    ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "dict/LOAD":
            //action.dict이 없다면 그냥 state를 반환한다.
            if (action.dict.length > 0) {
                return { list: action.dict, is_loaded: true };
            }
            return state;

        case "dict/CREATE":
            const new_dict_list = [...state.list, action.dict];
            return { list: new_dict_list };

        // case "bucket/DELETE":
        //     const bucket_list = state.list.filter((l, idx) => {
        //         if (idx !== action.index) {
        //             return l;
        //         }
        //     });
        //     return { list: bucket_list };

        // case "bucket/COMPLETE":
        //     //기존 state에서 완료로 바뀐 state를 return 해주어야 한다!
        //     const buckit_list = state.list.map((l, idx) => {
        //         if (idx === action.index) {
        //             return { ...l, complete: true };
        //         } else return l;
        //     });
        //     return { list: buckit_list };

        default:
            return state;
    }
}
