import React from 'react';
import PageWrap from 'components/PageWrap';
import modal from 'components/ModalRoot';
import Test from 'components/Test';

function App() {
  return (
    <PageWrap>
      <button
        onClick={() => {
          modal.open('toast', {
            title: 'aaa',
            onClose: () => {
              modal.close('toast');
            }
          });
        }}
      >
        按钮
      </button>
      <Test
        states={{ openId: '', userId: '' }}
        configs={[
          {
            type: 'input',
            title: '跳转到别的账号',
            tips: '输入openid，如：xxx',
            fn: ({ value, reloadFn }) => {
              // reloadFn({ openid: value });
              console.log(value);
            }
          },
          {
            multiple: [
              {
                type: 'checkbox',
                title: 'aa',
                key: 'is_aa'
              },
              {
                type: 'input',
                title: 'bb',
                key: 'is_bb'
              },
              {
                type: 'radio',
                title: '啊b 你阿红',
                key: 'type',
                radios: {
                  a: 1,
                  b: 2,
                  你阿红: 3
                }
              }
            ],
            title: '跳转到别的账号1',
            fn: ({ value }) => {
              console.log(value);
            }
          },
          {
            type: 'radio',
            radios: {
              a: 1,
              b: 2,
              你阿红: 3
            },
            title: '跳转到别的账号',
            fn: ({ value }) => {
              console.log(value);
            }
          }
        ]}
      />
    </PageWrap>
  );
}

export default App;
