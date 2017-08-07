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
        'Томатный соус, брынза, базилик, сладкий перец, томаты, грибы,шампиньоны, красный лук,',
        {
          elem: 'remove',
          content: [ {
            block: 'remove',
            elem: 'text',
            content: ' моцарелла'
          },
          {
            block: 'close-btn',
            mods: {
              type: 'ingridient'
            }
          }
          ]
        },
        {
          elem: 'remove',
          content: [
          {
            block: 'remove',
            elem: 'text',
            content: ' маслины'
          },
          {
            block: 'close-btn',
            mods: {
              type: 'ingridient'
            }
          }
          ]
        }
        ]
      }
      ]
    },
    {
      elem: 'ingridient_add_button',
      elemMods: {
        type: 'add'
      },
      content: [
        {
        block: 'icon',
        mods: {
            symbol: 'add'
        },
        mix: { block: 'product', elem: 'add_ingridient' }
        },
        {
            block: 'dropdown',
            mods: {
                switcher: 'button',
                theme: 'islands',
                size: 'xl'
            },
            switcher: 'Выпадающий список',
            popup: {
                block: 'menu',
                mods: {
                    theme: 'islands',
                    size: 'xl',
                    select: 'check'
                },
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
                    }
                ]
            }
        }
      ]
      }
     ]
    });


