import { Box, Container, Typography, styled, Button } from "@mui/material";

const JumbotronContainer = styled(Box)(() => ({
  border: "1px solid black",
  backgroundColor: "yellow",
}));

const JumbotronContainer2 = styled(Box)(() => ({
  border: "2px solid black",
  backgroundColor: "yellow",
}));

function App() {
  return (
    <Container>
      <JumbotronContainer>
        <JumbotronContainer2>
          <Typography variant="h1">Ini Material UI</Typography>
          <Button size="small" variant="contained">
            Click Me!
          </Button>
        </JumbotronContainer2>
      </JumbotronContainer>
    </Container>
  );
}

export default App;
