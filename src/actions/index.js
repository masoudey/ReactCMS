import { Schemas } from "../middleware/api";
import { userConstants, postConstants, CALL_API } from "../constants";

const fetchUser = (username, password) => ({
    username,
    [CALL_API]: {
        types: [userConstants.LOGIN_REQUEST, userConstants.LOGIN_SUCCESS, userConstants.LOGIN_FAILURE],
        endpoint: '/login',
        schema: Schemas.USER,
        method: 'POST',
        bodyReq: {username,password}
    }
})
export const loginSuccess = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    response: {entities:{users:{[user.id]:user}}, result: user.id},
})
export const logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('headers')
    return {type: userConstants.LOGOUT}
}
export const loginUser = (username, password) => (dispatch, getState) => {
    const user = getState().entities.users[username]
    if (user) {
        return null
    }
    return dispatch(fetchUser(username, password))
}
const postUser = (user) => ({
    [CALL_API]: {
        types: [userConstants.REGISTER_REQUEST, userConstants.REGISTER_SUCCESS, userConstants.REGISTER_FAILURE],
        endpoint: '/register',
        schema: Schemas.USER,
        method: 'post',
        bodyReq: user
    }
})

export const registerUser = (user) => (dispatch, getState) => {
    // dispatch(fetchUser(user.username, user.password))
    const usr = getState().entities.users[user.username]
    if (usr) return null
    return dispatch(postUser(user))
}

const fetchPosts = () => ({
    [CALL_API]: {
        types: [postConstants.POSTS_REQUEST,postConstants.POSTS_SUCCESS,postConstants.POSTS_FAILURE],
        endpoint: '/api/post',
        schema: Schemas.POST_ARRAY,
        method: 'get',
        bodyReq: {},
    }
})

export const loadPosts = () => (dispatch, getState) => {
    const posts = getState().entities.posts
    console.log("posts in action===========", getState());
    if (Object.keys(posts).length > 1) {
        
        return null
    }
    return dispatch(fetchPosts())
}

const fetchPostById = (id) => ({
    id,
    [CALL_API]: {
        types: [postConstants.POST_REQUEST, postConstants.POST_SUCCESS, postConstants.POST_FAILURE],
        endpoint: `/api/post/${id}`,
        schema: Schemas.POST,
        method: 'get',
        bodyReq: {},
    }
})

export const loadPostById = (id) => (dispatch, getState) => {
   
    const post = getState().entities.posts[id]
    console.log("postbyid", post)

    if (post) {
        return null
    }
    return dispatch(fetchPostById(id));
}

const sendPost = (post) => ({
    [CALL_API]: {
        types: [postConstants.ADD_POST_REQUEST, postConstants.ADD_POST_SUCCESS, postConstants.ADD_POST_FAILURE],
        endpoint: `/api/post`,
        schema: Schemas.POST,
        method: 'post',
        bodyReq: post,
    }
})

export const addPost = (post) => (dispatch, getState) => {
    return dispatch(sendPost(post));
}