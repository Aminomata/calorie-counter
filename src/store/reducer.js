import { macrosEnum } from "../components/MacroSlider/constants";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  calories: 2000,
  macroPercentage: {
    carbohydrates: 45,
    proteins: 30,
    fats: 25
  }
};

const macroSlice = createSlice({
  name: 'macro',
  initialState,
  reducers: {
    setCalories: (state, action) => { state.calories = action.payload },
    setCarbohydratesPercentage: (state, action) => { state.macroPercentage.carbohydrates = action.payload },
    setProteinsPercentage: (state, action) => { state.macroPercentage.proteins = action.payload },
    setFatsPercentage: (state, action) => { state.macroPercentage.fats = action.payload },
  },
})

const { setCalories, setCarbohydratesPercentage, setProteinsPercentage, setFatsPercentage } = macroSlice.actions

const macroTypeToAction = {
  [macrosEnum.CARBOHYDRATES]: setCarbohydratesPercentage,
  [macrosEnum.PROTEINS]: setProteinsPercentage,
  [macrosEnum.FATS]: setFatsPercentage,
}

const macroReducer = macroSlice.reducer

export {
  macroTypeToAction,
  setCalories,
  setCarbohydratesPercentage,
  setProteinsPercentage,
  setFatsPercentage,
  macroReducer
}