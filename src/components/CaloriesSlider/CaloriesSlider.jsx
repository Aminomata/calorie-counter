import { Add, Remove } from '@mui/icons-material'
import { Button, ButtonGroup, Stack, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setCalories } from '../../store/reducer'
import './caloriesSlider.scss'

const CaloriesSlider = () => {
  const calories = useSelector((state) => state.macro.calories)
  const dispatch = useDispatch()

  const handleSetCalories = (value) => dispatch(setCalories(value))

  return <div className="calories-container">
    <Stack direction="row" spacing={2}>
      <TextField className="calories-textfield" label="Calories" variant="outlined" value={calories} onChange={(event) => handleSetCalories(event.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
      <ButtonGroup disableElevation orientation="vertical" variant="contained">
        <Button onClick={() => handleSetCalories(calories + 5)}><Add /></Button>
        <Button onClick={() => handleSetCalories(calories - 5)}><Remove /></Button>
      </ButtonGroup>
    </Stack>
  </div >
}

export default CaloriesSlider