import React from "react";
import styled from "styled-components/macro";

const MockGoogleMap = styled.div`
  background: url("https://images.chinatimes.com/newsphoto/2019-10-27/900/B13A00_P_06_02.jpg");
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const GoogleMap = () => <MockGoogleMap />;

export default GoogleMap;
