import React from "react";
import { InlineWidget } from "react-calendly";

const calendlly = () => {
  return (
    <div className="App" >
    <InlineWidget url="https://calendly.com/abhishblaze/25min?month=2022-11" styles={{height: '600px'}}/>
  </div>
  );
};

export default calendlly;