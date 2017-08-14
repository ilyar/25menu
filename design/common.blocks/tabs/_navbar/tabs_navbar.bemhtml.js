block('tabs').mod('navbar', true).match( function() { return typeof this.ctx.tabs === 'undefined' } )(
  extend()({ 'ctx.tabs': [
    {
      checked: true,
      icon: {
        block: 'icon',
        mods: {
          symbol: 'gamepad',
          size: 'l',
          theme: 'fbs-cabinet'
        }
      },
      title: 'Trader area',
      content: [
        {
          block: 'content',
          mods: {
            size: 'm',
            theme: 'fbs-cabinet'
          },
          content: [
            {
              block: 'button',
              mods: {
                // type: 'link',
                inverse: true,
                block: true,
                size: 'm',
                theme: 'fbs-cabinet'
              },
              text: 'Deposit founds'
            }
          ]
        },
        {
          block: 'menu',
          mods: {
            navbar: true,
            size: 'm',
            theme: 'fbs-cabinet'
          },
          content: [
            {
              elem: 'item',
              elemMods: { type: 'link' },
              val: 1,
              content: [
                {
                  block: 'link',
                  url: '/',
                  content: 'Dashboard'
                }
              ]
            },
            {
              elem : 'group',
              title: 'Financials',
              content: [
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 2,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Deposit'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 3,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Withdrowal'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 4,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Internal transfer'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 5,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Open account'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 6,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Transaction history'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 7,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Accounts archive'
                    }
                  ]
                }
              ]
            },
            {
              elem : 'group',
              title: 'Promotions',
              content: [
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 8,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: [
                        '$ 123 bonus',
                        {
                          block: 'text',
                          mods: {
                            positive: true,
                            script: 'sup',
                            caps: true,
                            theme: 'fbs-cabinet'
                          },
                          content: 'new!'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 9,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Spread refound'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 10,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Bonus 100 % on deposit'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 11,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Promo-cards'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 12,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'A lot of Apples'
                    }
                  ]
                }
              ]
            },
            {
              elem : 'group',
              title: 'Trading platforms',
              content: [
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 13,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Download MT4 for Windows'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 14,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'Download MT5 for Windows'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 15,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'MT4 WebTrader'
                    }
                  ]
                },
                {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: 16,
                  content: [
                    {
                      block: 'link',
                      url: '/',
                      content: 'MT5 WebTrader'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      icon: {
        block: 'icon',
        mods: {
          symbol: 'cup',
          size: 'l',
          theme: 'fbs-cabinet'
        }
      },
      title: 'Partner area',
      url: '/'
    },
    {
      icon: {
        block: 'icon',
        mods: {
          symbol: 'earth',
          size: 'l',
          theme: 'fbs-cabinet'
        }
      },
      title: 'Visit FBS site',
      url: '/'
    },
    {
      icon: {
        block: 'icon',
        mods: {
          symbol: 'search',
          size: 'xl',
          theme: 'fbs-cabinet'
        }
      },
      content: [
        {
          block: 'form',
          mods: {
            inverse: true,
            size: 'm',
            theme: 'fbs-cabinet'
          },
          action: '//192.168.0.81:3004/error',
          method: 'get',
          content: [
            {
              elem: 'content',
              mix: { block: 'content', mods: { size: 'm', theme: 'fbs-cabinet' } },
              content: [
                {
                  block: 'form-field',
                  mods: {
                    type: 'input',
                    theme: 'fbs-cabinet'
                  },
                  name: 'search',
                  id: 'search',
                  content: [
                    {
                      block: 'input',
                      mods: {
                        width: 'available',
                        'has-clear': true,
                        size: 'm',
                        theme: 'fbs-cabinet'
                      },
                      placeholder: 'Search'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      icon: {
        block: 'icon',
        mods: {
          flag: 'ru',
          size: 'xl',
          theme: 'fbs-cabinet'
        }
      },
      content: [
        {
          block: 'menu',
          mods: {
            navbar: true,
            size: 'm',
            theme: 'fbs-cabinet'
          },
          val: 'Русский',
          content: [ 'Арабский', 'Бенгальский', 'Английский', 'Испанский', 'Индонезийский', 'Японский', 'Корейский', 'Лаосский', 'Литовский', 'Малайский', 'Бирманский', 'Португальский', 'Русский', 'Тайский', 'Урду', 'Вьетнамский', 'Китайский' ].map( function ( lang ) {
            return {
              elem: 'item',
              elemMods: { type: 'link' },
              val: lang,
              content: [
                {
                  block: 'link',
                  url: '/',
                  content: [
                    {
                      block: 'icon',
                      mods: {
                        flag: 'ru',
                        size: 'm',
                        theme: 'fbs-cabinet'
                      }
                    },
                    lang
                  ]
                }
              ]
            }
          } )
        }
      ]
    }
  ]})
)
