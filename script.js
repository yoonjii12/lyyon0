// 함수: 1에서 45까지의 난수를 생성하여 반환
function getRandomNumber() {
    return Math.floor(Math.random() * 45) + 1;
}

// 함수: 중복되지 않는 로또 번호 배열 생성
function generateLottoNumbers() {
    let numbers = [];

    while (numbers.length < 6) {
        let randomNumber = getRandomNumber();
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}

// 이벤트 리스너: 번호 추첨 버튼 클릭 시 실행될 함수
document.getElementById('generate-btn').addEventListener('click', function() {
    let numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

// 함수: 추첨된 번호를 화면에 표시
function displayNumbers(numbers) {
    let numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = ''; // 이전 번호 초기화

    numbers.forEach(function(number) {
        let numberSpan = document.createElement('span');
        numberSpan.classList.add('text-xl', 'font-bold', 'mx-2', 'py-1', 'px-2', 'bg-blue-500', 'text-white', 'rounded-lg');
        numberSpan.textContent = number;
        numbersDiv.appendChild(numberSpan);
    });

    // SweetAlert2로 팝업 표시
    Swal.fire({
        title: '번호 추첨 완료!',
        html: '추첨된 번호는 위와 같습니다.',
        icon: 'success',
        confirmButtonText: '확인'
    });
}
