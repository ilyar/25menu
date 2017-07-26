block('items').content()(function() {
    return [
    {
      elem: 'header'
    },
    { elem: 'card-group',
      content: [
      {
        block: 'card',
        mods: {
          usual: true
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          chosen: true
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          info: true
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          pizza: true
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          special: true
        },
        mix: { block: 'items', elem: 'card'}
      },
      ]
    },
    {
      elem: 'footer'
    }
    ]
});
