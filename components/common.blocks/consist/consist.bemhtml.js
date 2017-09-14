block('consist').js()( true )


block('consist').content()(function() {
  return;
});


block('consist').mod('type', 'product').content()(function() {
  return [
  {
    block: 'ingridients',
    content: [
    {
      block: 'ingridient',
      elem: 'text',
      content: [
      this.ctx.ingridients
      ]
    }
    ]
  },
  {
    elem: 'changer',
    content: [
    {
      block: 'select',
      mix: { block: 'product', elem: 'size' },
      mods: {
        mode: 'radio',
        theme: '25menu',
        size: 's'
      },
      name: 'select2',
      val: 2,
      options: [
      {
        val: 1,
        text: 'Ø 35 см'
      },
      {
        val: 2,
        text: 'Ø 25 см'
      }
      ]
    },
    {
      block: 'select',
      mix: { block: 'product', elem: 'base' },
      mods: {
        mode: 'radio',
        theme: '25menu',
        size: 'm'
      },
      name: 'select2',
      val: 2,
      options: [
      {
        val: 1,
        text: 'На тонком тесте'
      },
      {
        val: 2,
        text: 'На толстом тесте'
      }
      ]
    },
    this.ctx.modifiers && this.ctx.modifiers.length ? {
      elem: 'add_button',
      mix: { block: 'consist', elem: 'adder' },
      content: [
        {
          block: 'select',
          val: [],
          mods: {
              mode: 'check',
              theme: '25menu',
              type: 'topping',
              size: 'm'
          },
          name: 'modifiers',
          text: 'Добавить топпинг',
          options:[
            {
              title: 'Выберите добавки',
              group:
              this.ctx.modifiers && this.ctx.modifiers.map( (item, index) => {
                return {
                  val: index + 1,
                  text: item.name
                  // {
                  //   block: 'addon',
                  //   // val: index,
                  //   js: item,
                  //   mods: {
                  //     type: 'product'
                  //   },
                  //   mix: { block: 'consist', elem: 'adding' },
                  //   name: item.name,
                  //   price: item.price,
                  //   weight: item.weight
                  // }
                }
              })
          }
          ]
        }
      ]
    } : ''
    ]
  }
  ]
});


block('consist').mod('type', 'basket').content()(function() {
  return [
  {
    elem: 'add_button',
    content: [
    {
      block: 'dropdown',
      mods: {
        switcher: 'button',
        theme: '25menu',
        size: 'm'
      },
      switcher: {
        block: 'button',
        text: 'Добавить топпинг',
        icon: {
          block: 'icon',
          mods: {
            symbol: 'add'
          }
        }
      },
      popup: {
        block: 'menu',
        mods: {
          size: 'm',
          select: 'check',
          theme: '25menu'
        },
        content: [
        {
          elem: 'title',
          content: 'Выберите добавки'
        },
        {
          block: 'close-btn',
          mods: {
            type: 'popup'
          },
          mix: { block: 'popup', elem: 'close' }
        },
        {
          elem: 'inner',
          content: [
          {
            elem: 'menu-item',
            val: 1,
            content: [
            {
              block: 'addon',
              mods: {
                type: 'product'
              }
            }
            ]
          },
          {
            elem: 'menu-item',
            val: 2,
            content: [
            {
              block: 'addon',
              mods: {
                type: 'product'
              }
            }
            ]
          },
          {
            elem: 'menu-item',
            val: 3,
            content: [
            {
              block: 'addon',
              mods: {
                type: 'product'
              }
            }
            ]
          }
          ]
        }
        ]
      }
    }
    ]
  }
  ]
});

