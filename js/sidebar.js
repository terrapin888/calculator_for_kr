// 사이드바 HTML 생성 함수
function createSidebar() {
    return `
    <aside class="sidebar">
        <div class="sidebar-title">
            🧮 계산기 목록
        </div>

        <!-- 금융 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                💰 금융 계산기
            </div>
            <div class="sidebar-links">
                <a href="../finance/percent-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📊</span>퍼센트 계산기
                </a>
                <a href="../finance/discount-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏷️</span>할인 계산기
                </a>
                <a href="../finance/interest-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>이자 계산기
                </a>
                <a href="../finance/loan-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏦</span>대출 계산기
                </a>
                <a href="../finance/savings-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💰</span>적금 계산기
                </a>
                <a href="../finance/stock-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>주식 수익률 계산기
                </a>
                <a href="../finance/exchange-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💱</span>환율 계산기
                </a>
                <a href="../finance/installment-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💳</span>할부 계산기
                </a>
                <a href="../finance/average-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔢</span>평균 계산기
                </a>
                <a href="../finance/compound-interest-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💹</span>복리 계산기
                </a>
                <a href="../finance/hourly-wage-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">⏰</span>시급 계산기
                </a>
                <a href="../finance/salary-raise-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>연봉 인상 계산기
                </a>
                <a href="../finance/tax-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🧾</span>소득세 계산기
                </a>
                <a href="../finance/margin-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📊</span>마진 계산기
                </a>
                <a href="../finance/roi-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>ROI 계산기
                </a>
                <a href="../finance/investment-return-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💰</span>투자 수익 계산기
                </a>
                <a href="../finance/loan-payment-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏦</span>대출 상환 계산기
                </a>
                <a href="../finance/salary-increase-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💼</span>급여 증가 계산기
                </a>
            </div>
        </div>

        <!-- 비즈니스 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                💼 비즈니스 계산기
            </div>
            <div class="sidebar-links">
                <a href="../business/tip-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🍽️</span>팁 계산기
                </a>
                <a href="../business/fee-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💼</span>수수료 계산기
                </a>
                <a href="../business/tax-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🧾</span>세금 계산기
                </a>
            </div>
        </div>

        <!-- 건강 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                💪 건강 계산기
            </div>
            <div class="sidebar-links">
                <a href="../health/bmi-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">⚖️</span>BMI 계산기
                </a>
                <a href="../health/ideal-weight-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🎯</span>표준체중 계산기
                </a>
                <a href="../health/calorie-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔥</span>칼로리 계산기
                </a>
                <a href="../health/exercise-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏃</span>운동 계산기
                </a>
                <a href="../health/body-fat-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>체지방률 계산기
                </a>
                <a href="../health/running-pace-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏃‍♂️</span>러닝 페이스 계산기
                </a>
                <a href="../health/tdee-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔥</span>TDEE 계산기
                </a>
                <a href="../health/bmr-harris-benedict-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💪</span>BMR 계산기
                </a>
                <a href="../health/steps-to-calories-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">👟</span>걸음수 칼로리 계산기
                </a>
                <a href="../health/steps-to-kilometers-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>걸음수 거리 계산기
                </a>
                <a href="../health/enhanced-ideal-weight-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🎯</span>향상된 표준체중 계산기
                </a>
                <a href="../health/blood-pressure-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🩺</span>혈압 계산기
                </a>
                <a href="../health/heart-rate-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">❤️</span>심박수 계산기
                </a>
                <a href="../health/body-water-percentage-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💧</span>체수분율 계산기
                </a>
            </div>
        </div>

        <!-- 수학 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🔢 수학 계산기
            </div>
            <div class="sidebar-links">
                <a href="../math/vector-cross-product-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">✖️</span>벡터 외적 계산기
                </a>
                <a href="../math/30-60-90-triangle-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📐</span>30-60-90 삼각형
                </a>
                <a href="../math/expected-value-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🎯</span>기댓값 계산기
                </a>
                <a href="../math/45-45-90-triangle-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>45-45-90 삼각형
                </a>
                <a href="../math/standard-deviation-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📊</span>표준편차 계산기
                </a>
                <a href="../math/circle-circumference-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">⭕</span>원 둘레 계산기
                </a>
                <a href="../math/hexadecimal-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔢</span>16진수 계산기
                </a>
                <a href="../math/vector-dot-product-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">•</span>벡터 내적 계산기
                </a>
                <a href="../math/triangle-area-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📐</span>삼각형 넓이 계산기
                </a>
                <a href="../math/pythagorean-theorem-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>피타고라스 정리
                </a>
                <a href="../math/trigonometry-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📐</span>삼각함수 계산기
                </a>
                <a href="../math/matrix-multiplication-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔢</span>행렬 곱셈 계산기
                </a>
                <a href="../math/quadratic-formula-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>이차방정식 계산기
                </a>
                <a href="../math/factorial-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">!</span>팩토리얼 계산기
                </a>
                <a href="../math/gcd-lcm-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔢</span>최대공약수/최소공배수
                </a>
                <a href="../math/fibonacci-sequence-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">🌀</span>피보나치 수열 생성기
                </a>
                <a href="../math/prime-number-checker.html" class="sidebar-link">
                    <span class="sidebar-icon">🔍</span>소수 판별기
                </a>
                <a href="../math/matrix-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📊</span>행렬 계산기
                </a>
                <a href="../math/statistics-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>통계 계산기
                </a>
                <a href="../math/special-right-triangle-30-60-90.html" class="sidebar-link">
                    <span class="sidebar-icon">📐</span>특수직각삼각형 30-60-90
                </a>
                <a href="../math/special-right-triangle-45-45-90.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>특수직각삼각형 45-45-90
                </a>
                <a href="../math/dot-product-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">•</span>내적 계산기
                </a>
                <a href="../math/arc-length-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🌙</span>호의 길이 계산기
                </a>
                <a href="../math/triangle-hypotenuse-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>빗변 계산기
                </a>
                <a href="../math/nth-root-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">√</span>n제곱근 계산기
                </a>
                <a href="../math/percentage-increase-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📈</span>백분율 증가 계산기
                </a>
                <a href="../math/logarithm-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">log</span>로그 계산기
                </a>
            </div>
        </div>

        <!-- 변환 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🔄 변환 계산기
            </div>
            <div class="sidebar-links">
                <a href="../converter/kb-to-mb-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">💾</span>KB-MB 변환기
                </a>
                <a href="../converter/bytes-to-mb-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">💽</span>바이트-MB 변환기
                </a>
                <a href="../converter/temperature-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🌡️</span>온도 변환기
                </a>
                <a href="../converter/speed-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🚗</span>속도 변환기
                </a>
                <a href="../converter/time-zone-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🌍</span>시간대 변환기
                </a>
                <a href="../converter/binary-decimal-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">0️⃣</span>2진수-10진수 변환기
                </a>
                <a href="../converter/cc-to-hp-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🏎️</span>CC-마력 계산기
                </a>
                <a href="../converter/gram-to-spoon-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🥄</span>그램-스푼 변환기
                </a>
                <a href="../converter/length-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">📏</span>길이 변환기
                </a>
            </div>
        </div>

        <!-- 유틸리티 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🛠️ 유틸리티 계산기
            </div>
            <div class="sidebar-links">
                <a href="../utility/unit-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🔄</span>단위 변환 계산기
                </a>
                <a href="../utility/file-download-time-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">⬇️</span>파일 다운로드 시간
                </a>
                <a href="../utility/random-number-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">🎲</span>난수 생성기
                </a>
                <a href="../utility/random-string-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔤</span>랜덤 문자열 생성기
                </a>
                <a href="../utility/password-strength-checker.html" class="sidebar-link">
                    <span class="sidebar-icon">🔐</span>비밀번호 강도 검사기
                </a>
                <a href="../utility/color-code-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🎨</span>색상 코드 변환기
                </a>
                <a href="../utility/qr-code-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">📱</span>QR코드 생성기
                </a>
                <a href="../utility/hash-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔗</span>해시 생성기
                </a>
                <a href="../utility/unit-converter-advanced.html" class="sidebar-link">
                    <span class="sidebar-icon">🔄</span>고급 단위 변환기
                </a>
                <a href="../utility/base64-encoder-decoder.html" class="sidebar-link">
                    <span class="sidebar-icon">🔤</span>Base64 인코더/디코더
                </a>
                <a href="../utility/password-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">🔑</span>비밀번호 생성기
                </a>
            </div>
        </div>

        <!-- 라이프스타일 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🌟 라이프스타일 계산기
            </div>
            <div class="sidebar-links">
                <a href="../lifestyle/love-compatibility-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💕</span>궁합 계산기
                </a>
                <a href="../lifestyle/password-strength-checker.html" class="sidebar-link">
                    <span class="sidebar-icon">🔐</span>비밀번호 안전도 검사
                </a>
                <a href="../lifestyle/qr-code-generator.html" class="sidebar-link">
                    <span class="sidebar-icon">📱</span>QR코드 만들기
                </a>
                <a href="../lifestyle/color-picker-converter.html" class="sidebar-link">
                    <span class="sidebar-icon">🎨</span>색상 선택기
                </a>
                <a href="../lifestyle/wedding-budget-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💒</span>결혼 예산 계산기
                </a>
                <a href="../lifestyle/tip-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🍽️</span>라이프스타일 팁 계산기
                </a>
                <a href="../lifestyle/biorhythm-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🌙</span>바이오리듬 계산기
                </a>
            </div>
        </div>

        <!-- 날짜/시간 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                ⏰ 날짜/시간 계산기
            </div>
            <div class="sidebar-links">
                <a href="../datetime/date-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📅</span>날짜 계산기
                </a>
                <a href="../datetime/age-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🎂</span>나이 계산기
                </a>
                <a href="../datetime/timer-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">⏱️</span>타이머 계산기
                </a>
                <a href="../datetime/time-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🕐</span>시간 계산기
                </a>
            </div>
        </div>

        <!-- 임신/출산 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🤱 임신/출산 계산기
            </div>
            <div class="sidebar-links">
                <a href="../pregnancy/pregnancy-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🤰</span>임신 계산기
                </a>
                <a href="../pregnancy/ovulation-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">💝</span>배란일 계산기
                </a>
                <a href="../pregnancy/due-date-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">👶</span>출산예정일 계산기
                </a>
            </div>
        </div>

        <!-- 교육 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🎓 교육 계산기
            </div>
            <div class="sidebar-links">
                <a href="../education/gpa-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">📊</span>GPA 계산기
                </a>
            </div>
        </div>

        <!-- 과학 계산기 -->
        <div class="sidebar-category">
            <div class="sidebar-category-title">
                🔬 과학 계산기
            </div>
            <div class="sidebar-links">
                <a href="../science/scientific-calculator.html" class="sidebar-link">
                    <span class="sidebar-icon">🧮</span>공학용 계산기
                </a>
            </div>
        </div>
    </aside>
    `;
}

// 현재 페이지 URL을 기반으로 활성 링크 표시
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    sidebarLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath.replace('../', '').replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// 사이드바 로드 함수
function loadSidebar() {
    // 기존 container를 main-wrapper로 감쌈
    const existingContainer = document.querySelector('.container');
    if (existingContainer && !document.querySelector('.main-wrapper')) {
        const mainWrapper = document.createElement('div');
        mainWrapper.className = 'main-wrapper';
        
        // 사이드바 HTML 삽입
        mainWrapper.innerHTML = createSidebar();
        
        // 기존 container를 main-wrapper 안으로 이동
        existingContainer.parentNode.insertBefore(mainWrapper, existingContainer);
        mainWrapper.appendChild(existingContainer);
        
        // 활성 링크 표시
        highlightActiveLink();
    }
}

// DOM 로드 후 자동 실행
document.addEventListener('DOMContentLoaded', function() {
    loadSidebar();
});