import { combineReducers } from "redux";
import { createHashHistory } from "history";
import { connectRouter } from "connected-react-router";
import { takeEvery } from 'redux-saga/effects';



import { menuReducer } from "./menu/reducers";

export const rootReducer = combineReducers({
  router: connectRouter(createHashHistory()),
  menu: menuReducer,
  // main: mainReducer,
  // dict: dictReducer,
  // person: personReducer,
  // upload: uploadReducer,
  // union: unionReducer,
  // contract: contractReducer,
  // attachment: attachmentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

// export function* watchMain() {
//   yield takeEvery(LOGIN, loginSaga);
//   yield takeEvery(SEND_EMAIL, sendEmailSaga);
// }

// export function* watchDict() {
//   yield takeEvery(GET_DICTS, getDictsSaga);
//   yield takeEvery(ADD_DICT, addDictSaga);
//   yield takeEvery(DELETE_DICT, deleteDictSaga);
//   yield takeEvery(UPDATE_DICT, updateDictSaga);
// }

// export function* watchPerson() {
//   yield takeEvery(GET_OA_PERSONS, getOAPersonsSaga);
// }

// export function* watchAttachment() {
//   yield takeEvery(GET_ATTACHMENTS, getAttachmentsSaga);
//   yield takeEvery(ADD_ATTACHMENT, addAttachmentSaga);
//   yield takeEvery(DELETE_ATTACHMENT, deleteAttachmentSaga);
// }

// export function* watchUnion() {
//   yield takeEvery(GET_UNIONS, getUnionsSaga);
//   yield takeEvery(GET_UNION_DETAIL, getUnionDetailSaga);
//   yield takeEvery(DELETE_UNION, deleteUnionSaga);
//   yield takeEvery(ADD_UNION, addUnionSaga);
//   yield takeEvery(UPDATE_UNION, updateUnionSaga);
//   yield takeEvery(COPY_UNION, copyUnionSaga);
// }

// export function* watchContract() {
//   yield takeEvery(GET_CONTRACTS, getContractsSaga);
//   yield takeEvery(GET_CONTRACT_DETAIL, getContractDetailSaga);
//   yield takeEvery(DELETE_CONTRACT, deleteContractSaga);
//   yield takeEvery(ADD_CONTRACT, addContractSaga);
//   yield takeEvery(UPDATE_CONTRACT, updateContractSaga);
// }

// export function* watchUpload() {
//   yield takeEvery(GET_UPLOAD_LIST, getUploadListSaga);
//   yield takeEvery(GET_UPLOAD_LIST_DETAIL, getUploadListDetailSaga);
//   yield takeEvery(ADD_UPLOAD_LIST, addUploadListSaga);
//   yield takeEvery(UPDATE_UPLOAD_LIST, updateUploadListSaga);
//   yield takeEvery(DELETE_UPLOAD_LIST, deleteUploadListSaga);
//   yield takeEvery(DELETE_UPLOAD, deleteUploadSaga);
//   yield takeEvery(SEND_NOTIFICATION, sendNotificationSaga);
//   yield takeEvery(REJECT_FILE, rejectFileSaga);
//   yield takeEvery(UPLOAD_FILES, uploadFilesSaga);
// }