import { Card, CardContent } from "@mui/material"
import './customCardStyles.scss'

const CustomCard = ({children}) => {
  return <Card className='card'>
    <CardContent>
      {children}
    </CardContent>
  </Card>
}

export default CustomCard