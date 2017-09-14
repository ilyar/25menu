block('slider').js()( true )

block('slider')(
  addJs()( ( node, ctx ) => {
    return {
      pageCount: ctx.content.length,
      currentPage: 0
    }
  } ),

  content()( ( node, ctx ) => {
    return [
      {
        elem: 'view',
        content: [
          { elem: 'control',
            content:
              [
                {
                  block: 'button',
                  mods: {
                    disabled: true
                  },
                  mix: { block: 'slider', elem: 'prev' }
                },
                {
                  block: 'button',
                  mix: { block: 'slider', elem: 'next' }
                }
              ]
          },
          ctx.content && {
            elem: 'content',
            content: ctx.content.map( (page, index) => {
              return {
                elem: 'page',
                elemMods: {
                  visible: !index
                },
                content: page
              }
            })
          }
        ]
      },
      ctx.content && {
         elem: 'pagination',
         content: ctx.content.map( (page, index) => {
           return {
             elem: 'page-item',
             elemMods: {
               active: !index
             },
             js: { index: index }
           }
         })
       }
    ]
  })
)



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

