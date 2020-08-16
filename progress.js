const upload = document.querySelector('.btn-up')
const bar = document.querySelector('.innerbar');
const status = document.querySelector('.status');


upload.addEventListener('click', progress)
function progress(e){
    if(e.target.classList.contains('ups')){
        let id = setInterval(timeframe, 150);
        let width = 1;
        function timeframe(){
           if(width >= 100){
               clearInterval(id);
            //    console.log(width)
           }else{
               width++;
               bar.style.width = width + '%'
               status.innerHTML = width + '%';
               bar.style.height = "100%"
           }
        }
    }
}
