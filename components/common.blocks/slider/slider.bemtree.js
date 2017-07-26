block('slider').content()(function() {
    this.ctx.items = [
      { title: 'hello 1' },
      { title: 'hello 2' },
      { title: 'hello 3' },
      { title: 'hello 4' }
    ]

    return [
    {
      elem: 'control',
      content:[
      {
        block: 'pagination',
        content: [
        {
          elem: 'element'
        },
        {
          elem: 'element'
        },
        {
          elem: 'element'
        }
        ]
      },
      {
        elem: 'left',
      },
      {
        elem: 'right'
      },
    ]},
    {
      elem: 'content',
      content: this.ctx.items.map( item => {
        return {
          elem: 'item',
          content: [
            {
              block: 'card',
              mods: {
                type: 'special'
              },
              content: item
            }
          ]
        }
      })
    }
  ]
});

