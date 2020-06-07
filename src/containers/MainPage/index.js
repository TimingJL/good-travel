import React from "react";
import styled from "styled-components/macro";
import SearchBar from "components/SearchBar";
import GoogleMap from "components/GoogleMap";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const StyledSearchBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin: 12px 0px;
  width: 100%;
`;

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <GoogleMap />
      <Container maxWidth="sm" disableGutters className={classes.container}>
        <StyledSearchBar>
          <SearchBar />
        </StyledSearchBar>
      </Container>
    </>
  );
};

export default MainPage;
