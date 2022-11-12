import Chat from 'assets/widget/instagram.png';
import Community from 'assets/widget/twitter.png';
import Github from 'assets/widget/youtube.png';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Instagram',
      description:
        '@blazemediaaa',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Twitter',
      description:
        '@Blazemediaa',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Youtube',
      description:
        'Blaze Media',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    // {
    //   path: '/',
    //   label: 'Adversite',
    // },
    {
      path: '/',
      label: 'Supports',
    },
    // {
    //   path: '/',
    //   label: 'Marketing',
    // },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
