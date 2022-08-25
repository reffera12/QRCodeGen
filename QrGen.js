const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearQrCode();
    hideSaveBtn();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);

    if (url==='') {
        alert('Please enter a URL');
    } else{
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url ,size);

            setTimeout(() => {
             const saveUrl = qr.querySelector('img').src;
             createSaveBtn(saveUrl);
            },50);   
        },1000);
    }
};

const showSpinner = () =>{
    document.getElementById('spinner').style.display='block';
};

const hideSpinner = () =>{
    document.getElementById('spinner').style.display='none';
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
      text: url,
      width: size,
      height: size,
    });
  };

  const clearQrCode = () => {
    qr.innerHTML ='';
  }


  const createSaveBtn = (saveUrl) => {   
        const link = document.createElement('a');
        link.id = 'save';
        link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
        link.href = saveUrl;
        link.download = 'qrcode';
        link.innerHTML = 'Save Image'
        document.getElementById('generated').appendChild(link);      
  }

  const hideSaveBtn= () => {
    if(document.getElementById('save')){
        document.getElementById('save').remove();
    }else{
        return;
    };
  };

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);