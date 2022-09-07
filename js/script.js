const startButton = document.querySelector('.start_button');
const modalButton = document.querySelector('.modal_button');
const shareButton = document.querySelector('.share_button');
const linkButton = document.querySelector('.link_button');

const loading = document.querySelector('.loading');
const result = document.querySelector('.result');

const fieldValue = document.querySelector('#field_value');
const fieldResult = document.querySelector('.field_result');

const timeValue = document.querySelector('#time_value');
const timeresult = document.querySelector('time_result');

const img_2022 = document.querySelector('.img_2022');
const img_2023 = document.querySelector('.img_2023');

const img_2024 = document.querySelector('.img_2024');


function after_click(){
    
    loading.style.display = 'none';
    result.style.display = 'flex';
    
     
    if (timeValue.value == 2022){
        img_2022.style.display = 'flex';
        return false;
    }else if (timeValue.value == 2023){
        img_2023.style.display = 'flex';
        return false;
    }else if (timeValue.value == 2024){
        img_2024.style.display = 'flex';
        return false;
    }
    
    
    
}

function click_start_button(){
     if (timeValue.value == ""){
        alert('년도를 입력해 주세요');
        timeValue.focus();
        return false;
    }else if (timeValue.value < 2022){
        alert('시간을 2022이상 값으로 입력해 주세요.');
        timeValue.focus();
        return false;
    }

    loading.style.display = 'flex';
    result.style.display = 'none';
    setTimeout(after_click, 1500);

}

function copy_url(){
    let url = window.location.href;
    let tmp = document.createElement('input');
    
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
    alert('URL이 복사되었습니다.');  
}

function open_modal(){
    modal.style.display = 'flex';
};

function close_modal(){
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal){
        close_modal();   
    }
}


function move_link(){
    var newWindow = window.open("about:blank");
    var link = 'https://github.com/donggale72';
    newWindow.location.href = link;
}

    

startButton.addEventListener("click", click_start_button);
shareButton.addEventListener("click", copy_url);
modalButton.addEventListener("click", open_modal);
linkButton.addEventListener("click", move_link);