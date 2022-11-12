import React from 'react'
import BlogSection from '../sections/blogsection';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import Header from 'components/header/header';
import theme from 'theme';
import Layout from 'components/layout';

const blog = () => {
  return (
    // <ThemeProvider theme={theme}>

      <BlogSection/>
      

    // </ThemeProvider>

  )
}

export default blog