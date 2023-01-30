/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'You Are A 10x Brand',
    title: 'You Are A 10x Brand',
    text:
      'Unlock Your True Potential and Become a 10x Brand with Our Expert Assistance We believe in quality over quantity and strive to deliver outstanding results that exceed your expectations.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Social Media Management',
    text:
      `Transform Your Brand: Get 20X More Reach in Just 120 Days with Our Expert Social Media Management Services

       \nDevelop and implement a tailored social media strategy that aligns with your brand's goals and target audience.
`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Marketing',
    text:
      'Unlocking the Secrets of First Page Ranking - Boosting Your Website`s Visibility',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Website Building',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Discover the Wide Range of Services We Offer to Help Your Business Succeed"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
