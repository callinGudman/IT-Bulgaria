'use strict'


//Video
const head = document.querySelectorAll('.videoCv');
const stopVideo = document.querySelector('.overlay');
const testing = document.querySelector('.testing');
const openVideo = function (){
    testing.classList.remove('hidden');
    stopVideo.classList.remove('hidden');
}
const closeVideo = function (){
    testing.classList.add('hidden');
    stopVideo.classList.add('hidden');
}
for(let i = 0; i < head.length;i++){
    head[i].addEventListener('click',openVideo)
}
stopVideo.addEventListener('click', closeVideo);
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape' && !testing.classList.contains('hidden')){
        closeVideo();
    }
})
//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}
//go to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Comment

function showComment(){
    let commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply

function showReply(){
    let replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}
//hide comments
function hideComment(){
    let replyArea = document.getElementById("reply-area");
    let commentArea = document.getElementById("comment-area");
    commentArea.classList.add("hide");
    replyArea.classList.add("hide");
}