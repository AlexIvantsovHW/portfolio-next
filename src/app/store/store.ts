import { contactApi } from "@/src/shared/api/requests/contact";
import { contactSlice } from "@/src/shared/api/requests/contact/slice";
import { feedbacksApi } from "@/src/shared/api/requests/feedbacks";
import { feedbacksSlice } from "@/src/shared/api/requests/feedbacks/slice";
import { jobsApi } from "@/src/shared/api/requests/jobs/jobs.api";
import { jobsSlice } from "@/src/shared/api/requests/jobs/slice";
import { personalApi } from "@/src/shared/api/requests/personal";
import { personalSlice } from "@/src/shared/api/requests/personal/slice";
import { projectsApi } from "@/src/shared/api/requests/projects/projects.api";
import { projectsSlice } from "@/src/shared/api/requests/projects/slice";
import { universitiesSlice } from "@/src/shared/api/requests/universities/slice";
import { universitiesApi } from "@/src/shared/api/requests/universities/universities.api";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "actualCategorySlice"],
};

const rootReducer = combineReducers({
  [jobsApi.reducerPath]: jobsApi.reducer,
  jobsSlice: jobsSlice.reducer,
  [universitiesApi.reducerPath]: universitiesApi.reducer,
  universitiesSlice: universitiesSlice.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  projectsSlice: projectsSlice.reducer,
  [feedbacksApi.reducerPath]: feedbacksApi.reducer,
  feedbacksSlice: feedbacksSlice.reducer,
  [personalApi.reducerPath]: personalApi.reducer,
  personalSlice: personalSlice.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  contactSlice: contactSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      jobsApi.middleware,
      universitiesApi.middleware,
      projectsApi.middleware,
      feedbacksApi.middleware,
      personalApi.middleware,
      contactApi.middleware
    ),
});

export const persistor = persistStore(store);
