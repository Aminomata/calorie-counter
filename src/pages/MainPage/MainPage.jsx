import { Container, Stack } from "@mui/material"
import CaloriesSlider from "../../components/CaloriesSlider/CaloriesSlider"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import { macrosEnum } from "../../components/MacroSlider/constants"
import MacroSlider from "../../components/MacroSlider/MacroSlider"

const MainPage = () => {
  return <>
    <HeaderComponent />
    <Container maxWidth="sm">
      <CaloriesSlider />
      <Stack spacing={5}>
        {Object.values(macrosEnum).map(v => <MacroSlider key={v} macroType={v} />)}
      </Stack>
    </Container>
  </>
}

export default MainPage