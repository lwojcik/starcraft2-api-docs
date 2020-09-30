module.exports = {
  title: 'StarCraft2-API',
  description: 'Flexible and feature-rich Node.js library for StarCraft II Community and Game Data APIs',
  displayAllHeaders: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'GitHub', link: 'https://github.com/lukemnet/starcraft2-api' },
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Getting started',
        collapsable: true,
        children: [
          '/docs/',
          '/docs/requirements.md',
          '/docs/install.md',
          '/docs/examples.md',
        ],
      },
      {
        title: 'Usage',
        collapsable: true,
        children: [
          '/docs/usage/initialization.md',
          '/docs/usage/custom-access-token.md',
        ]
      },
      {
        title: 'API methods',
        collapsable: true,
        children: [
          '/docs/methods/',
          '/docs/methods/queryStaticProfileData.md',
          '/docs/methods/queryProfileMetadata.md',
          '/docs/methods/queryProfile.md',
          '/docs/methods/queryLadderSummary.md',
          '/docs/methods/queryPlayerLadder.md',
          '/docs/methods/queryGrandmasterLeaderboard.md',
          '/docs/methods/queryLeagueData.md',
          '/docs/methods/querySeason.md',
          '/docs/methods/queryPlayerAccount.md',
          '/docs/methods/queryLegacyProfile.md',
          '/docs/methods/queryLegacyLadders.md',
          '/docs/methods/queryLegacyMatchHistory.md',
          '/docs/methods/queryLegacyLadder.md',
          '/docs/methods/queryLegacyAchievements.md',
          '/docs/methods/queryLegacyRewards.md',
        ]
      },
      {
        title: 'Utility methods',
        collapsable: true,
        children: [
          '/docs/utils/',
          '/docs/utils/getAllProfileUrlLocales.md',
          '/docs/utils/checkIfProfileUrlLocaleLooksValid.md',
          '/docs/utils/validateProfileUrlLocale.md',
          '/docs/utils/validateProfileUrl.md',
          '/docs/utils/validateProfileId.md',
          '/docs/utils/unpackProfileUrl.md',
          '/docs/utils/constructProfileUrl.md',
          '/docs/utils/profileUrlRegex.md',
        ],
      },
    ]
  }
}