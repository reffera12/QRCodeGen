const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url');
    const size = document.getElementById('size');

    console.log(url, size);

    if (url==='') {
        alert('Please enter a URL');
    } else{
        showSpinner();

        setTimeout(() => {
            hideSpinner();
        },1000);
    }
};

const showSpinner = () =>{
    document.getElementById('spinner').style.display='block';
};

const hideSpinner = () =>{
    document.getElementById('spinner').style.display='none';
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);