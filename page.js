function toast(msg, data = {}) {
          //-> you can apply your own styles here, you may just keep the first five lines
          var style = `
          bottom: -315px; right: 15px;
          transition: .8s  cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          z-index: 10000;
          position: fixed;

          font-family: sans-serif;
          width: 300px; max-width: 40%;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 90px;
          padding: 0.4rem 0.8rem;
          border: 1px solid #111;
          background: #2d2d2d;
          `;
          if (document.getElementById('toast')) {
                    document.getElementById('toast').remove();
          }
          var toast = Object.assign(document.createElement('div'), {
                    id: 'toast',
                    style: style,
                    innerText: msg,
                    onclick: () => {
                              if(data['callback']) {data['callback']()};
                              document.getElementById('toast').remove();
                    }
          });
          document.body.appendChild(toast);
          setTimeout(() => {
                    toast.style.bottom = '20px';
                    setTimeout(() => {
                              toast.style.bottom = '-315px';
                              setTimeout(() => {
                                        toast.parentNode.removeChild(toast);
                              }, 1000)
                    }, 2000)
          }, 100);
}