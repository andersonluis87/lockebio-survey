import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Options } from '../types/Survey';

const initialState: Array<Options> = [];

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Options>) => {
      state.push(action.payload);
    },
    saveSurvey: (state, action: PayloadAction<Array<Options>>) => {
      console.log('payload: ', action.payload);
    }
  },
});

export const { save, saveSurvey } = surveySlice.actions;

export const Survey = (state: RootState) => state.survey;

export default surveySlice.reducer;