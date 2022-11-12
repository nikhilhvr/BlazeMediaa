import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
// import BlogSection from '../sections/blog-section';
import ExcitingFeatures from 'sections/exciting-features';
import Subscribe from '../sections/subscribe';
import Calendlly from 'sections/Calendly';
// import Dashboard from 'sections/dashboard';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Blaze Media" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
         
          <Feature />
          <CoreFeature />
          <WorkFlow />
          {/* <Package /> */}
          <TeamSection />
          <TestimonialCard />
          {/* <Subscribe /> */}
          <Calendlly/>
        </Layout>
      {/* <Dashboard />  */}
      </StickyProvider>
    </ThemeProvider>
  );
}
