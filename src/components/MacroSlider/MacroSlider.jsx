import { Slider, TextField } from "@mui/material"
import { useState } from "react"
import { macrosMap } from "./constants"

const MacroSlider = ({ macroType }) => {
  const [macroValue, setMacroValue] = useState(100)

  const handleSetMacro = (event) => {
    setMacroValue(event.target.value)
  }

  const macroCalories = macrosMap.get(macroType)

  return <div>
    <span>{`${macroType} calories are ${macroCalories}`}</span>
    <Slider className="macroValue-slider" aria-label="macroValue" value={macroValue} onChange={handleSetMacro}
      min={500}
      max={4000}
      step={20}
    />
    <TextField className="macroValue-textfield" label="Outlined" variant="outlined" value={macroValue} onChange={handleSetMacro} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
  </div>
}

export default MacroSlider