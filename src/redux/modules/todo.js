import {useDispacth} from "react-redux"
// 초기 값
const initialState = {
    loading: false,
    list: []
};

// 액션
const ADD = "TODO/ADD";
const MODIFY = "TODO/MODIFY";
const DELETE = "TODO/DELETE";
const LOADING = "TODO/LOADING";

// 액션 생성자
export const addTodo = (todo) => {return {type : ADD, todo}};
export const modifyTodo = (modifyId) => {return {type : MODIFY, modifyId}};
export const deleteTodo = (deleteId) => {return {type : DELETE, deleteId}};
export const loadingTodo = () => {return {type : LOADING}};

// loading용 thunk사용 => 하지만.....순식간에 되버리네......비동기 서버통신에만 되나보다..
export const loadingCheck = (callBack, value) => {
    return async function (dispatch) {
        dispatch(loadingTodo())
        dispatch(callBack(value))
    }
}

// 리덕스
export default function todoReducer(state = initialState, action) {
    switch(action.type){
        case ADD:
            return {...state, loading: !state.loading, list: [...state.list, action.todo]}
        case MODIFY:
			const modifyTodoIndex = state.list.findIndex(todo => todo.id === action.modifyId)
			const modiTodo = state.list[modifyTodoIndex]
			modiTodo.isDone = !modiTodo.isDone
			state.list.splice(modifyTodoIndex, 1)
            state.list = [...state.list, modiTodo]
            return {...state, loading: !state.loading}
        case DELETE:
            return {loading: !state.loading, list: state.list.filter(todo => todo.id !== action.deleteId)}
        case LOADING:
            return {...state, loading: true}
        default:
            return state
    }
};