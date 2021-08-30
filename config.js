const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://aligneer.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './src/images/icon.svg',
    logoLink: 'https://aligneer.com/learn/',
    title:
      "<a href='https://aligneer.com/learn/'><img class='img-responsive' src='./src/images/login-bg.png' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/nosox/aligneer-docs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/aligneer" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Aligneer', link: 'https://aligneer.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://aligneer.com/learn/'>graphql </a><div class='greenCircle'></div><a href='https://aligneer.com/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Aligneer',
    description: 'Documentation built with mdx. Powering aligneer.com/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/nosoxaligneer-docs/content',
    favicon: './src/images/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
