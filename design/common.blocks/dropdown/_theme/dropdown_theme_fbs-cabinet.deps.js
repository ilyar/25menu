({
    shouldDeps : [
        { block : 'popup', mods : { theme : 'fbs-cabinet' } },
        {
            include : false,
            mods : { switcher : 'link' },
            shouldDeps : { block : 'link', mod : 'theme', val : 'fbs-cabinet' }
        },
        {
            include : false,
            mods : { switcher : 'button' },
            shouldDeps : { block : 'button', mod : 'theme', val : 'fbs-cabinet' }
        }
    ]
})
