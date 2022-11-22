/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import Iframe from './Iframe';
import TextFeature from 'components/text-feature';
import Linkk from 'next/link';

const data = {
  btnName: 'Speak To Our Team Today',
  btnURL: 'https://calendly.com/abhishblaze/25min?month=2022-11',
};

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
          You’ve got a business, we have got brilliant Minds.
          </Heading>
          
          <Text as="p" variant="heroSecondary">
          Let us build the bridge between your brand and customer. We have got minds in action 🚀
          </Text>
          {/* <Button variant="primary"><a href="https://calendly.com/abhishblaze/25min?month=2022-11"> Speak To Our Team Today </a> </Button>
          <p>Schedule Your FREE Call Now </p>  */}
         
         <Linkk href='https://calendly.com/abhishblaze/25min?month=2022-11'>
          <Button
          
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
            
            
          >
          Speak To Our Team Today 
          </Button>
          </Linkk>
          
        </Box>
        {/* <p> Schedule Your FREE Call Now</p> */}
     
    
        <div sx={styles.iframevideo}>
        <iframe  sx={styles.iframevideo.iframevideos} src="https://www.youtube.com/embed/gEQYWIeRgC0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['110px', '145px', '155px', '170px', null, null, '180px', '125px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  iframevideo:{
    justifyContent: 'center',
    display: 'inline-flex',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    iframevideos: {
      borderRadius:'2.5%',
     
      // display: 'inline-flex',
      width: ['80%', '100%', '1000px', null, '100%', '100%', '100%', '75%'],
      
      height:'550px',
      '@media screen and (max-width: 660px)': {
        height: '200px',
        width:'100%',

      },
   
   
    
     
    },

  },
  buttonn:{
    marginLeft:'260px',
    // textAlign:'center',
    // justifyContent: 'center',
   
    '@media screen and (max-width: 660px)': {
      marginLeft:'0px',

    }, // alignItems: 'center',
  }

};
