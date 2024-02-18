function toast(message, {textColor = '#FFF', toastColor = '#888', toastProgressColor = '#999'} = {}) {
    // toast with style
    const toast = document.createElement('div');
    toast.style = `
        --translateLeft: -50%;
        --translateTop: 100%;
        left: 50%; bottom: 0;
        padding: 15px 10px;
        width: calc(100% - 20px);
        min-height: 40px;
        max-width: 350px;
        word-wrap: break-word;
        border-radius: 10px;
        position: fixed;
        color: ${textColor};
        background: ${toastColor};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        z-index: 10000;
        transform: translate(var(--translateLeft), var(--translateTop));
        transition: 0.6s cubic-bezier(0.42, 0, 0.49, 1.26);
        overflow: hidden;
    `;

    // toast content
    toast.innerHTML = `
        <p>${message}</p>
        <div id='toastProgress'></div>
    `;

    // toast progress with style
    const toastProgress = toast.querySelector('#toastProgress');
    toastProgress.style = `
        bottom:0; left: 0;
        position: absolute;
        height: 5px;
        width: 0%;
        background: ${toastProgressColor};
        transition: 3.6s cubic-bezier(0.42, 0, 0.49, 1.26);
    `;

    // append toast
    document.body.appendChild(toast);

    // display toast
    setTimeout(()=>{
        toast.style.setProperty('--translateTop', 'calc(0% - 20px)');
        toastProgress.style.width = '100%';
        setTimeout(()=>{
                toast.style.setProperty('--translateTop', '100%');
                setTimeout(()=>{
                            document.body.removeChild(toast);
                }, 600);
        }, 3000);
    }, 1);
};