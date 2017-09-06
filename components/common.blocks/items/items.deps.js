[{
    shouldDeps: [
      {
        block:'header'
      },
      {
        block: 'arrow'
      },
      {
        block: 'title'
      },
      {
        block: 'card',
        mods: {
          type: '*',
          checked: true,
          gradient: true,
          color: '*',
          full: true,
          new: true
        }
      },
      {
        block: 'product',
        mods: {
          type: 'item',
          special: true,
          info: true,
          color: '*'
        }
      },
      {
        block: 'logo',
        mods: {
          big: true
        }
      },
      {
        block: 'slider'
      },
      {
        block: 'footer'
      }
    ]
},
{
  tech: 'js',
  shouldDeps: [
    {
      block: 'product',
      tech: 'bemhtml',
      mods: {
        type: 'item',
        special: true,
        info: true,
        color: '*'
      }
    },
  ]
}
]
