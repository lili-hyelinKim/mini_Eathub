
// 모달창 가져오기
var modal = document.getElementById("myModal");

// 모달창 트리거 버튼 가져오기
var btn = document.querySelector(".btn-sort");

// 모달창 닫기 버튼 가져오기
var span = document.getElementsByClassName("close")[0];

// 버튼 클릭 시 모달창 열기
btn.onclick = function() {
    modal.style.display = "block";
}

// 모달창 바깥 영역 클릭 시 모달창 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}