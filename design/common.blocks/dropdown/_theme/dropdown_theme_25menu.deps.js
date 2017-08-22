({
    shouldDeps : [
        { block : 'popup', mods : { theme : '25menu' } },
        {
            include : false,
            mods : { switcher : 'link' },
            shouldDeps : { block : 'link', mod : 'theme', val : '25menu' }
        },
        {
            include : false,
            mods : { switcher : 'button' },
            shouldDeps : { block : 'button', mod : 'theme', val : '25menu' }
        },
        {
          block: 'icon',
          mods: {
            symbol: '*'
          }
        }
    ]
})
