$(document).ready(function(){

    //모바일 토글 메뉴
    $("#toggleMenu_btn").click(function(){
        $("#toggleMenu_wrap").slideToggle("fast");
    });

    $(".toggleMenu_gnb").click(function(){
        $(this).next().slideToggle("fast");
    });

    // 슬라이드 쇼_PC
    $(".slideImg").not(".slideActive").hide();//화면 로딩 후 첫번째 슬라이드를 제외한 나머지 숨김
    setInterval(slideAutoChange,4000);    // 4초 후 다음 슬라이드 이동
    // 슬라이드 쇼_Mobile
    $(".slideImg_Mobile").not(".slideActive_Mobile").hide();//화면 로딩 후 첫번째 슬라이드를 제외한 나머지 숨김
    setInterval(slideAutoChange_Mobile,4000);    // 4초 후 다음 슬라이드 이동
    

    // 스크롤 따라 움직이는 메뉴
    var currentPosition = parseInt($("#gnb_nav_bar").css("top"));
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        $("#gnb_nav_bar").stop().animate({top:position+currentPosition+"px"},400);
    });

    
    
});

// ----------------------- 토글메뉴 바 x 표로 변환 ------------------------
$(function(){
    $("#toggleMenu_btn").on("click",function(){
        var togglebar = $(this);
        if(togglebar.hasClass("is-open")){
            togglebar.removeClass("is-open").addClass("is-closed");
        }else{
            togglebar.removeClass("is-closed").addClass("is-open");
        }
    });
});



//  ------------------------- 슬라이드 수동 변환 함수 정의 ---------------------
function changeSlides(slideindex){
    $(".slideImg").hide(); //모든 슬라이드 숨기기
    var allSlide = $(".slideImg");
    var currentSlideIndex = 0; // 현재 슬라이드 번호

    //반복문으로 slideActive클래스를 가진 Silde를 찾아 index에 저장
    $(".slideImg").each(function(index,item){
        if($(this).hasClass("slideActive")){
            currentSlideIndex = index;
        }
    });
    var newSlideIndex = 0; //새로운 Slide의 index;
  
    if(slideindex == 0){ // prev 버튼 눌렀을 때
        if(currentSlideIndex > allSlide.length-1){
            // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
            newSlideIndex = allSlide.length - 1;
        }
        else{
            newSlideIndex = currentSlideIndex - 1; // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
        }
    }
    else if(slideindex == 100){        
        if(currentSlideIndex >= allSlide.length-1){
            newSlideIndex = 0; // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
        }
        else{
            // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
            newSlideIndex = currentSlideIndex + 1;
        }
    }
    else{ // slideDotButton 눌렀을때
        newSlideIndex = slideindex -1;
    }

    // 모든 slideImg에서 slideActive 클래스 제거
    $(".slideImg").removeClass("slideActive");
    $(".slideDotButton").removeClass("slideDotActive");
    // 새롭게 지정한 index번째 슬라이드에 slideActive클래스 부여
    $(".slideImg").eq(newSlideIndex).addClass("slideActive");
	$(".slideImg").eq(newSlideIndex).show();
    $(".slideDotButton").eq(newSlideIndex).addClass("slideDotActive");

}


//  ------------------------- 다음 슬라이드 변환 함수 정의 ---------------------
function slideAutoChange(){
    $(".slideImg").hide(); //모든 슬라이드 숨기기
    var allSlide = $(".slideImg");
    var currentSlideIndex = 0; // 현재 슬라이드 번호

    //반복문으로 slideActive클래스를 가진 Silde를 찾아 index에 저장
    $(".slideImg").each(function(index,item){
        if($(this).hasClass("slideActive")){
            currentSlideIndex = index;
        }
    });
    //새로운 Slide의 index;
    var newSlideIndex = 0;
    if(currentSlideIndex >= allSlide.length-1){
        // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
        newSlideIndex = 0;
    }
    else{
        // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
        newSlideIndex = currentSlideIndex + 1;
    }
    // 모든 slideImg에서 slideActive 클래스 제거
    $(".slideImg").removeClass("slideActive");
    $(".slideDotButton").removeClass("slideDotActive");
    // 새롭게 지정한 index번째 슬라이드에 slideActive클래스 부여
    $(".slideImg").eq(newSlideIndex).addClass("slideActive");
	$(".slideImg").eq(newSlideIndex).show();
    $(".slideDotButton").eq(newSlideIndex).addClass("slideDotActive");

}


//  ------------------------- 갤러리 이미지바꾸는 함수 정의 ---------------------
function galleryChange(imgs){

    var gallery_background = document.getElementById("gallery_backgroundImg");
    gallery_backgroundImg.src = imgs.src

}














// -------------------------  모바일 버전
//  ------------------------- 슬라이드 수동 변환 함수 정의 ---------------------
function changeSlides_Mobile(slideindex){
    $(".slideImg_Mobile").hide(); //모든 슬라이드 숨기기
    var allSlide = $(".slideImg_Mobile");
    var currentSlideIndex = 0; // 현재 슬라이드 번호

    //반복문으로 slideActive클래스를 가진 Silde를 찾아 index에 저장
    $(".slideImg_Mobile").each(function(index,item){
        if($(this).hasClass("slideActive_Mobile")){
            currentSlideIndex = index;
        }
    });
    var newSlideIndex = 0; //새로운 Slide의 index;
  
    if(slideindex == 0){ // prev 버튼 눌렀을 때
        if(currentSlideIndex > allSlide.length-1){
            // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
            newSlideIndex = allSlide.length - 1;
        }
        else{
            newSlideIndex = currentSlideIndex - 1; // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
        }
    }
    else if(slideindex == 100){        
        if(currentSlideIndex >= allSlide.length-1){
            newSlideIndex = 0; // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
        }
        else{
            // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
            newSlideIndex = currentSlideIndex + 1;
        }
    }
    else{ // slideDotButton 눌렀을때
        newSlideIndex = slideindex -1;
    }

    // 모든 slideImg에서 slideActive 클래스 제거
    $(".slideImg_Mobile").removeClass("slideActive_Mobile");
    $(".slideDotButton_Mobile").removeClass("slideDotActive_Mobile");
    // 새롭게 지정한 index번째 슬라이드에 slideActive클래스 부여
    $(".slideImg_Mobile").eq(newSlideIndex).addClass("slideActive_Mobile");
	$(".slideImg_Mobile").eq(newSlideIndex).show();
    $(".slideDotButton_Mobile").eq(newSlideIndex).addClass("slideDotActive_Mobile");

}


//  ------------------------- 다음 슬라이드 변환 함수 정의 ---------------------
function slideAutoChange_Mobile(){
    $(".slideImg_Mobile").hide(); //모든 슬라이드 숨기기
    var allSlide = $(".slideImg_Mobile");
    var currentSlideIndex = 0; // 현재 슬라이드 번호

    //반복문으로 slideActive클래스를 가진 Silde를 찾아 index에 저장
    $(".slideImg_Mobile").each(function(index,item){
        if($(this).hasClass("slideActive_Mobile")){
            currentSlideIndex = index;
        }
    });
    //새로운 Slide의 index;
    var newSlideIndex = 0;
    if(currentSlideIndex >= allSlide.length-1){
        // 현재 슬라이드의 index가 마지막인 경우 처음 슬라이드로 보냄(무한반복)
        newSlideIndex = 0;
    }
    else{
        // 현재 슬라이드의 index에서 한 칸 만큼 앞으로로 간 index 지정
        newSlideIndex = currentSlideIndex + 1;
    }
    // 모든 slideImg에서 slideActive 클래스 제거
    $(".slideImg_Mobile").removeClass("slideActive_Mobile");
    $(".slideDotButton_Mobile").removeClass("slideDotActive_Mobile");
    // 새롭게 지정한 index번째 슬라이드에 slideActive클래스 부여
    $(".slideImg_Mobile").eq(newSlideIndex).addClass("slideActive_Mobile");
	$(".slideImg_Mobile").eq(newSlideIndex).show();
    $(".slideDotButton_Mobile").eq(newSlideIndex).addClass("slideDotActive_Mobile");

}
