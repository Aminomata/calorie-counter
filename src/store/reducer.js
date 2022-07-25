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
    setCalories: (state, action) => void(state.calories = action.payload),
    setCarbohydratesPercentage: (state, action) => void(state.macroPercentage.carbohydrates = action.payload),
    setProteinsPercentage: (state, action) => void(state.macroPercentage.proteins = action.payload),
    setFatsPercentage: (state, action) => void(state.macroPercentage.fats = action.payload),
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