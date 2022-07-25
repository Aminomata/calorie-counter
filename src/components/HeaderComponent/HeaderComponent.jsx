import { AppBar, Toolbar, Typography } from "@mui/material"

const HeaderComponent = () => {
  return <AppBar position="static">
    <Toolbar >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Calorie counter
      </Typography>
    </Toolbar>
  </AppBar>
}

export default HeaderComponent