block('auth').content()(function() {
    return [
    {
      block: 'dropdown',
      mods: {
          switcher: 'button',
          theme: '25menu',
          size: 'm'
      },
      switcher: {
        block: 'button',
        mix: { block: 'button', elem: 'auth' },
        text: 'Войти',
        icon: {
          block: 'icon',
          mods: {
            symbol: 'account'
          }
        }
      },
      popup:[
      {
        block: 'close-btn',
        mods: {
          type: 'popup'
        },
        mix: { block: 'popup', elem: 'close' }
      },
      {
        block: 'form',
        mix: { block: 'auth', elem: 'step-one' },
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
          block: 'link',
          mix: { block: 'auth', elem: 'resend_password' },
          url: '#',
          content: 'Забыли пароль?'
        },
        {
            block: 'button',
            mix: { block: 'auth', elem: 'enter' },
            mods: {
                size: 'm',
                type: 'submit'
            },
            text: 'Войти'
        },
        {
          elem: 'text',
          mix: { block: 'auth', elem: 'text' },
          content: 'Войдите, чтобы оставлять отзывы и добавлять блюда в корзину ещё быстрее'
        }
        ]
      }
      ]
    }
    ]
});
