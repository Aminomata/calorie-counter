import { Container, Stack } from "@mui/material"
import CaloriesSlider from "../../components/CaloriesSlider/CaloriesSlider"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import { macrosEnum } from "../../components/MacroSlider/constants"
import MacroSlider from "../../components/MacroSlider/MacroSlider"
import CustomCard from "../../customComponents/CustomCard"
import './mainPageStyles.scss'

const MainPage = () => {
  return <>
    <HeaderComponent />
    <Container className='mainContainer' maxWidth="sm">
        <Stack spacing={5}>
          <CustomCard>
            <CaloriesSlider />
          </CustomCard>
          <Stack spacing={5}>
            <CustomCard>
              {Object.values(macrosEnum).map(v => <MacroSlider key={v} macroType={v} />)}
            </CustomCard>
          </Stack>
        </Stack>
    </Container>
  </>
}

export default MainPage