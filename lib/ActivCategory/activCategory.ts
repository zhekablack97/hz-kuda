import { createSlice } from "@reduxjs/toolkit";
import { IActivCategory, TypeActivCategory } from "@type/type";
import { RootState } from "../../store/store";



const initialState: IActivCategory = {
  category: "food"
}

export const activCategory = createSlice({
    name: 'activCategory',
    initialState: initialState,
    reducers: {
        food: state => {
            state.category = "food"
        },
        entertainment: state => {
            state.category = "entertainment"
        },
        nature: state => {
            state.category = "nature"
        }

    }
})

export const { food, entertainment, nature} = activCategory.actions

export const selectCategory = (state: RootState): TypeActivCategory => state.activCategory.category

const activCategoryReducer = activCategory.reducer

export default activCategoryReducer