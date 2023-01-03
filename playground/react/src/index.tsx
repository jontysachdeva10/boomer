import React from "react";
import ReactDOM from "react-dom";

import { Color, Margin, Text } from "@boomer/react";
// import { ButtCon } from '@boomer/react';
// import '@boomer/scss/lib/Button.css';
import "@boomer/scss/lib/Utilities.css";
import "@boomer/scss/lib/Margin.css";
import "@boomer/scss/lib/Text.css";

ReactDOM.render(
  // <Button className='bmr-button-container' label='Example Button' />,
  <div>
    <Margin left space='lg'>
      <Text content={'Hi there!'}/>
    </Margin>
  </div>,
  // <Color hexCode='#000' />,
  document.querySelector("#root")
);
