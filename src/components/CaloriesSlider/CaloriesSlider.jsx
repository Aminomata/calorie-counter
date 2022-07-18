import { Slider, TextField } from '@mui/material'
import { useState } from 'react'
import './caloriesSlider.scss'

const CaloriesSlider = () => {
  const [calories, setCalories] = useState(2000)

  const handleSetCalories = (event) => {
    setCalories(event.target.value)
  }

  return <div className="calories-container">
    <Slider className="calories-slider" aria-label="calories" value={calories} onChange={handleSetCalories}
      min={500}
      max={4000}
      step={20}
    />
    <TextField className="calories-textfield" label="Outlined" variant="outlined" value={calories} onChange={handleSetCalories} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
  </div>
}

export default CaloriesSlider