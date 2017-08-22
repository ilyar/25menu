block('auth').content()(function() {
    return [
    {
      block: 'dropdown',
      mix: { block: 'auth', elem: 'process' },
      mods: {
          switcher: 'button',
          theme: '25menu',
          size: 'm'
      },
      switcher:
      {
        block: 'button',
        mix: { block: 'auth', elem: 'status' },
        text: 'Александр',
        icon: {
          block: 'icon',
          mods: {
            symbol: 'logged'
          }
        }
      },
      popup: [
        {
          block: 'close-btn',
          mods: {
            type: 'popup'
          },
          mix: { block: 'popup', elem: 'close' }
        },
        {
        elem: 'first-step',
        elemMods: {
          hide: false
        },
        content: [
        {
          block: 'form',
          mix: { block: 'auth', elem: 'phone-input' },
          mods: {
            'has-validation' : true
          },
          content: [
            {
              block: 'title',
              mix: { block: 'auth', elem: 'title' },
              content: 'Вход'
            },
            {
              block: 'form-field',
              mix: { block: 'auth', elem: 'input' },
              id: 'login',
              mods : {
                  type : 'input',
                  required : true,
                  message : 'text'
              },
              content: [
              {
                block: 'label',
                content: 'Телефон, на который оформляли доставку',
                for: 'login'
              },
              {
                block: 'input',
                mods: {
                  size: 'l',
                  width: 'available',
                  theme: '25menu'
                },
                name : 'login'
              }
              ]
            },
            {
                block: 'button',
                mix: { block: 'auth', elem: 'enter' },
                mods: {
                    size: 'm',
                    type: 'submit'
                },
                text: 'ПРОДОЛЖИТЬ'
            },
            {
              elem: 'text',
              mix: { block: 'auth', elem: 'text' },
              content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
            }
          ]
        }
        ]
        },
        {
        elem: 'second-step',
        elemMods: {
          hide: true
        },
        content: [
        {
          block: 'form',
          mix: { block: 'auth', elem: 'password-input' },
          mods: {
            'has-validation' : true
          },
          content: [
            {
              block: 'title',
              mix: { block: 'auth', elem: 'title' },
              content: 'Вход'
            },
            {
              block: 'login',
              content: 'Александр, 8 (980) 765-43-21',
              mix: { block: 'auth', elem: 'user' }
            },
            {
              block: 'form-field',
              mix: { block: 'auth', elem: 'input' },
              id: 'password',
              mods : {
                  type : 'input',
                  required : true,
                  message : 'text'
              },
              content: [
              {
                block: 'label',
                content: 'Пароль',
                for: 'password'
              },
              {
                block: 'input',
                mods: {
                  size: 'l',
                  width: 'available',
                  theme: '25menu',
                  type: 'password'
                },
                name : 'password'
              }
              ]
            },
            {
              block: 'button',
              mix: { block: 'auth', elem: 'resend_password' },
              content: 'Забыли пароль?'
            },
            {
                block: 'button',
                mix: { block: 'auth', elem: 'enter' },
                mods: {
                    size: 'm',
                    type: 'submit'
                },
                text: 'ВОЙТИ'
            },
            {
              elem: 'text',
              mix: { block: 'auth', elem: 'text' },
              content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
            }
          ]
        }
        ]
        },
        {
        elem: 'error-step',
        mix: { block: 'auth', elem: 'error' },
        elemMods: {
          hide: true
        },
        content: [
            {
              block: 'title',
              mix: { block: 'auth', elem: 'title' },
              content: 'Вход'
            },
            {
              block: 'login',
              content: 'Александр, 8 (980) 765-43-21',
              mix: { block: 'auth', elem: 'user' }
            },
            {
              block: 'error',
              content: 'Заказов на этот номер ещё не было',
              mix: { block: 'auth', elem: 'error' }
            },
            {
                block: 'button',
                mix: { block: 'auth', elem: 'enter' },
                mods: {
                    size: 'm',
                    type: 'submit',
                    disabled: true
                },
                text: 'ВОЙТИ'
            },
            {
              elem: 'text',
              mix: { block: 'auth', elem: 'text' },
              content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
            }
        ]
        },
        {
        elem: 'reset-step',
        mix: { block: 'auth', elem: 'reset-psw' },
        elemMods: {
          hide: true
        },
        content: [
        {
          block: 'form',
          mix: { block: 'auth', elem: 'password-input' },
          mods: {
            'has-validation' : true
          },
          content: [
            {
              block: 'title',
              mix: { block: 'auth', elem: 'title' },
              content: 'Вход'
            },
            {
              block: 'login',
              content: 'Александр, 8 (980) 765-43-21',
              mix: { block: 'auth', elem: 'user' }
            },
            {
              block: 'form-field',
              mix: { block: 'auth', elem: 'input' },
              id: 'code',
              mods : {
                  type : 'input',
                  required : true,
                  message : 'text'
              },
              content: [
              {
                block: 'label',
                mix: { block: 'popup', elem: 'label'  },
                content: 'Мы отправили для входа временый код в смс. Введите его',
                for: 'code'
              },
              {
                block: 'input',
                mods: {
                  size: 'l',
                  width: 'available',
                  theme: '25menu',
                  type: 'text'
                },
                name : 'code'
              }
              ]
            },
            {
                block: 'button',
                mix: { block: 'auth', elem: 'enter' },
                mods: {
                    size: 'm',
                    type: 'submit'
                },
                text: 'ВОЙТИ'
            },
            {
              elem: 'text',
              mix: { block: 'auth', elem: 'text' },
              content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
            }
          ]
        }
        ]
        },
        {
        elem: 'third-step',
        elemMods: {
          hide: true
        },
        content: [
        {
          block: 'form',
          mix: { block: 'auth', elem: 'password-input' },
          mods: {
            'has-validation' : true
          },
          content: [
            {
              block: 'title',
              mix: { block: 'auth', elem: 'title' },
              content: 'Вход'
            },
            {
              block: 'login',
              content: 'Александр, 8 (980) 765-43-21',
              mix: { block: 'auth', elem: 'user' }
            },
            {
              block: 'form-field',
              mix: { block: 'auth', elem: 'input' },
              id: 'password',
              mods : {
                  type : 'input',
                  required : true,
                  message : 'text'
              },
              content: [
              {
                block: 'label',
                mix: { block: 'popup', elem: 'label'  },
                content: 'Вы ещё не придумали пароль. Мы отправили временый код в смс. Введите его',
                for: 'code'
              },
              {
                block: 'input',
                mods: {
                  size: 'l',
                  width: 'available',
                  theme: '25menu',
                  type: 'text'
                },
                name : 'code'
              }
              ]
            },
            {
                block: 'button',
                mix: { block: 'auth', elem: 'enter' },
                mods: {
                    size: 'm',
                    type: 'submit'
                },
                text: 'ВОЙТИ'
            },
            {
              elem: 'text',
              mix: { block: 'auth', elem: 'text' },
              content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
            }
          ]
        }
        ]
        },
        {
          elem: 'fourth-step',
          elemMods: {
            hide: true
          },
          content: [

          ]
        }
      ]
    }
    ]
});
