// CalcHub 공통 함수 라이브러리
// 모든 계산기에서 재사용 가능한 함수들

// 한국어 단위 파싱 함수
function parseKoreanNumber(input) {
    if (!input || typeof input !== 'string') return 0;
    
    // 기본 정리
    input = input.replace(/[,\s]/g, '').toLowerCase();
    
    // 한국어 단위 변환
    const units = {
        '조': 1000000000000,
        '천억': 100000000000,
        '백억': 10000000000,
        '십억': 1000000000,
        '억': 100000000,
        '천만': 10000000,
        '백만': 1000000,
        '십만': 100000,
        '만': 10000,
        '천': 1000,
        '백': 100,
        '십': 10
    };
    
    let result = 0;
    let tempNumber = 0;
    let lastUnit = Infinity;
    
    // 복잡한 한국어 숫자 처리 (예: 3천5백만)
    for (let unit in units) {
        if (input.includes(unit)) {
            const regex = new RegExp('(\\d*\\.?\\d*)' + unit);
            const match = input.match(regex);
            if (match) {
                const num = parseFloat(match[1]) || 1;
                if (units[unit] < lastUnit) {
                    tempNumber += num * units[unit];
                } else {
                    result += tempNumber;
                    tempNumber = num * units[unit];
                    lastUnit = units[unit];
                }
                input = input.replace(match[0], '');
            }
        }
    }
    result += tempNumber;
    
    // 남은 숫자 처리
    if (input) {
        result += parseFloat(input) || 0;
    }
    
    return result || parseFloat(input) || 0;
}

// 숫자 포맷팅 함수
function formatNumber(num, decimals = 2) {
    if (isNaN(num)) return '0';
    
    // 큰 숫자를 한국어 단위로 변환
    const units = [
        { value: 1000000000000, name: '조' },
        { value: 100000000, name: '억' },
        { value: 10000, name: '만' }
    ];
    
    const absNum = Math.abs(num);
    
    // 1조 이상
    if (absNum >= 1000000000000) {
        const jo = num / 1000000000000;
        return jo.toFixed(decimals) + '조';
    }
    // 1억 이상
    else if (absNum >= 100000000) {
        const eok = num / 100000000;
        return eok.toFixed(decimals) + '억';
    }
    // 1만 이상
    else if (absNum >= 10000) {
        const man = num / 10000;
        return man.toFixed(decimals) + '만';
    }
    // 1만 미만
    else {
        return num.toLocaleString('ko-KR', { 
            minimumFractionDigits: 0,
            maximumFractionDigits: decimals 
        });
    }
}

// 숫자만 포맷팅 (단위 없이)
function formatNumberOnly(num, decimals = 2) {
    if (isNaN(num)) return '0';
    return num.toLocaleString('ko-KR', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals 
    });
}

// 입력값 검증
function validateInput(value, type = 'number', min = null, max = null) {
    if (type === 'number') {
        const num = parseFloat(value);
        if (isNaN(num)) return { valid: false, message: '올바른 숫자를 입력해주세요.' };
        if (min !== null && num < min) return { valid: false, message: `최소값은 ${min}입니다.` };
        if (max !== null && num > max) return { valid: false, message: `최대값은 ${max}입니다.` };
        return { valid: true, value: num };
    }
    
    if (type === 'positive') {
        const num = parseFloat(value);
        if (isNaN(num) || num <= 0) return { valid: false, message: '양수를 입력해주세요.' };
        return { valid: true, value: num };
    }
    
    if (type === 'percentage') {
        const num = parseFloat(value);
        if (isNaN(num) || num < 0 || num > 100) return { valid: false, message: '0~100 사이의 값을 입력해주세요.' };
        return { valid: true, value: num };
    }
    
    return { valid: true, value: value };
}

// 결과 표시 애니메이션
function showResult(elementId, fade = true) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    if (fade) {
        element.style.opacity = '0';
        element.style.display = 'block';
        setTimeout(() => {
            element.style.transition = 'opacity 0.3s';
            element.style.opacity = '1';
        }, 10);
    } else {
        element.style.display = 'block';
    }
}

// 결과 복사 기능
function copyToClipboard(text, buttonId = null) {
    navigator.clipboard.writeText(text).then(() => {
        if (buttonId) {
            const button = document.getElementById(buttonId);
            const originalText = button.textContent;
            button.textContent = '복사됨!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } else {
            alert('클립보드에 복사되었습니다!');
        }
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 엔터키 바인딩
function bindEnterKey(inputIds, calculateFunction) {
    inputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    calculateFunction();
                }
            });
        }
    });
}

// 입력 필드 초기화
function clearInputs(inputIds) {
    inputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });
}

// 에러 메시지 표시
function showError(message, elementId = 'errorMessage') {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
        element.style.color = '#ef4444';
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    } else {
        alert(message);
    }
}

// 로딩 표시
function showLoading(show = true, elementId = 'loadingIndicator') {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = show ? 'block' : 'none';
    }
}

// 디바운스 함수 (실시간 계산용)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 실시간 계산 바인딩
function bindRealtimeCalculation(inputIds, calculateFunction, delay = 300) {
    const debouncedCalculate = debounce(calculateFunction, delay);
    inputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', debouncedCalculate);
        }
    });
}

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseKoreanNumber,
        formatNumber,
        formatNumberOnly,
        validateInput,
        showResult,
        copyToClipboard,
        bindEnterKey,
        clearInputs,
        showError,
        showLoading,
        debounce,
        bindRealtimeCalculation
    };
}