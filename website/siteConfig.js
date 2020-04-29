// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const protocols = [
  {
    caption: 'Zigbee',
    image: '/docs/assets/all-devices/zigbee.png',
    infoLink: '/docs/zigbee-devices.html',
    options: {
      read: true,
      write: true,
    },
    pinned: true,
  },
  {
    caption: 'Modbus',
    image: '/docs/assets/all-devices/modbus.png',
    infoLink: '/docs/modbus-devices.html',
    options: {
      read: true,
      write: false,
    },
    pinned: true,
  },
  {
    caption: 'KNX',
    image: '/docs/assets/all-devices/knx.png',
    infoLink: 'https://www.knx.org/knx-en/for-professionals/get-started/certified-knx-products/index.php',
    externalLink: true,
    options: {
      read: true,
      write: false,
    },
    pinned: true,
  },
];

const siteConfig = {
  title: '',
  tagline: 'Connect any Zigbee device to the cloud',
  url: 'https://instathings.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'instathings',
  organizationName: 'instathings',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      doc: 'guides/introduction',
      label: 'Guides',
    },
    // {
    //   doc: 'get-started',
    //   label: 'Get Started',
    // },
    {
      href: "https://developers.instathings.io/",
      label: 'API Reference'
    },
    {
      href: '/en/protocols',
      label: 'Protocols',
    }
  ],

  // If you have users set above, you add it here:
  protocols,

  /* path to images for header/footer */
  headerIcon: 'img/new-logo-transparent.png',
  footerIcon: '#',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#DA4728',
    secondaryColor: '#6d3c5d',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Instathings Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: false,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
