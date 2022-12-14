import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions ({
    getPostsRequest: undefined,
    getPostSuccess: (payLoad) => payLoad,
    getPostFailure: (err) => err,
})

export const showModal = createAction('SHOW_CREATE_POST_MODAL')
export const hideModal = createAction('HIDE_CREATE_POST_MODAL')