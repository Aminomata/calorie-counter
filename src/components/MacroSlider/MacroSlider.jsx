import { Slider, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { macroTypeToAction } from "../../store/reducer"
import { roundPercentage } from "../../store/utils"
import { macrosMap } from "./constants"

const MacroSlider = ({ macroType }) => {
  const macroPercentage = useSelector((state) => state.macro.macroPercentage[macroType.toLowerCase()])
  const calories = useSelector((state) => state.macro.calories)
  const dispatch = useDispatch()

  const [localMacroPercentage, setLocalMacroPercentage] = useState(macroPercentage)

  const handleSetLocalMacro = (event) => setLocalMacroPercentage(event.target.value)

  const handleSetMacro = (_, value) => dispatch(macroTypeToAction[macroType](value))

  const macroCalories = macrosMap.get(macroType)
  const calculatedCalories = roundPercentage(calories * localMacroPercentage)
  const calculatedGrams = roundPercentage(calories * localMacroPercentage / macroCalories) 

  return <div>
    <span>{`${macroType} (1g = ${macroCalories} calories)`}</span>
    <Slider className="macroPercentage-slider" aria-label="macroPercentage" value={localMacroPercentage} onChange={handleSetLocalMacro} onChangeCommitted={handleSetMacro}
      min={0}
      max={100}
      step={1}
    />
    <Stack direction="row" spacing={2}>
      <span>{`Grams ${calculatedGrams}g`}</span>
      <span>{`Calories ${calculatedCalories}`}</span>
      {/* <TextField className="macroPercentage-textfield" label={`${macroType} calories`} variant="outlined" value={localMacroPercentage} onChange={handleSetLocalMacro} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /> */}
      <TextField className="macroPercentage-textfield" label={`${macroType} %`} variant="outlined" value={localMacroPercentage} onChange={handleSetLocalMacro} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    </Stack>
  </div>
}

export default MacroSlider