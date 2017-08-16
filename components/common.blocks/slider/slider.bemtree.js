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


block('slider').mod('type', 'order').content()(function(){
    this.ctx.items = [
      { title: 'hello 1' },
      { title: 'hello 2' },
      { title: 'hello 3' },
      { title: 'hello 4' },
      { title: 'hello 5' },
      { title: 'hello 6' },
      { title: 'hello 7' }
    ]

    return [
    {
      elem: 'control',
      content:[
      {
        elem: 'left',
      },
      {
        elem: 'right'
      },
      ]
    },
    {
      elem: 'content',
      content: this.ctx.items.map( item => {
        return {
          elem: 'item',
          content: [
            {
              block: 'card',
              mods: {
                type: 'small'
              },
              mix: { block: 'slider', elem: 'order-item' },
              content: item
            }
          ]
        }
      })
    }
  ]
});
