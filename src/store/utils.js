import { macrosEnum, macrosMap } from "../components/MacroSlider/constants"

const roundPercentage = (value) => Math.round(value / 100)

const calculateCalories = ({ calories, carbohydratesPercentage, proteinsPercentage, fatsPercentage }) => {
  return roundPercentage(
    carbohydratesPercentage * calories * macrosMap.get(macrosEnum.CARBOHYDRATES) +
    proteinsPercentage * calories * macrosEnum.map(macrosEnum.PROTEINS) +
    fatsPercentage * calories * macrosEnum.map(macrosEnum.FATS)
  )
}

const calculateMacros = ({ calories, carbohydratesPercentage, proteinsPercentage, fatsPercentage }) => {
  return {
    carbohydrates: roundPercentage(calories * carbohydratesPercentage * macrosMap.get(macrosEnum.CARBOHYDRATES)),
    proteins: roundPercentage(calories * proteinsPercentage * macrosMap.get(macrosEnum.PROTEINS)),
    fats: roundPercentage(calories * fatsPercentage * macrosMap.get(macrosEnum.FATS))
  }
}

export {
  roundPercentage,
  calculateCalories,
  calculateMacros
}