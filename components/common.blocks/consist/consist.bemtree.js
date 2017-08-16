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

