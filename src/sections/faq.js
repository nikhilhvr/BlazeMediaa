/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'सवालों1 ?',
    contents: (
      <div>
     जवाब 112
      </div>
    ),
  },
  {
    title: 'सवालों2?',
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much – when the mud dries
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: `सवालों 3?`,
    contents: (
      <div>
        Get your blood tests delivered at the home collect a sample from
        management news. Get your blood tests delivered at the home collect a
        sample from management news. Get your blood tests delivered at the home
        collect a sample from management news. Get your blood tests delivered at
        the home.
      </div>
    ),
  },
  {
    title: `सवालों 4`,
    contents: (
      <div>
        If you’re looking to hunt a unicorn, but don’t know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan. Since
        1971, the university has issued permits to unicorn questers.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="FAQ: यहाँ आपके सवालों के जवाब हैं"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}








