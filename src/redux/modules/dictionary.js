import { firestore } from "../../firebase";

const dict_db = firestore.collection("dict");

//파이어스토어데이터 => 리듀서 연결
export const loadDictFB = () => {
    return dispatch => {
        dict_db.get().then(docs => {
            let dict_data = [];
            docs.forEach(doc => {
                if (doc.exists) {
                    dict_data = [...dict_data, { id: doc.id, ...doc.data() }];
                }
            });
            dispatch(loadDict(dict_data));
        });
    };
};

export const addDictFB = new_item => {
    return dispatch => {
        let dict_data = {
            word: new_item.word,
            desc: new_item.desc,
            exam: new_item.exam,
        };
        dict_db.add(dict_data).then(docRef => {
            dict_data = { ...dict_data, id: docRef.id };
            dispatch(createDict(dict_data));
        });
    };
};

export const deleteDictFB = index => {
    return (dispatch, getState) => {
        const _dict_data = getState().dict.list[index];
        if (!_dict_data.id) return;
        dict_db
            .doc(_dict_data.id)
            .delete()
            .then(docRef => {
                dispatch(deleteDict(index));
            });
    };
};

// Actions
const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";
const DELETE = "dict/DELETE";

// Action Creators
export const loadDict = dict => {
    return { type: LOAD, dict };
};

export const createDict = dict => {
    return { type: CREATE, dict };
};

export const deleteDict = index => {
    return { type: DELETE, index };
};

//state 기본값 설정
const initialState = {
    list: [
        {
            word: "ㅎ1ㅎ1",
            desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다",
            exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
    ],
    is_loaded: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "dict/LOAD":
            // action.dict이 없다면 그냥 state를 반환한다.
            if (action.dict.length > 0) {
                return { list: action.dict, is_loaded: true };
            }
            return state;

        case "dict/CREATE":
            const new_dict_list = [...state.list, action.dict];
            return { list: new_dict_list };

        case "dict/DELETE":
            const dict_list = state.list.filter((l, idx) => {
                if (idx !== action.index) {
                    return l;
                }
            });
            return { list: dict_list };

        default:
            return state;
    }
}
