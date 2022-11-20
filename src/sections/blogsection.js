/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from 'theme-ui';
import React from "react";

const blogsection = () => {
  return (
    <>
      <div sx={{marginTop:'33px'}} >this is a blog</div>
     
      <iframe  width="600" sx={{marginRight:'33px'}}  height="405" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/sek3FhByr6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    </>
  );
};

export default blogsection;

const styles = {
 thumbnail:{
    width: '600px',
    height: '400px',
    display: 'flex',
    // flexDirection: 'column',
    textAlign: 'left',
    marginRight:'333px',
    borderStyles: 'solid',
    borderRadius: '5%',
 }

};
