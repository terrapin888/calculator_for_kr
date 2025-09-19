#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re
from pathlib import Path

def get_calculator_info(filename):
    """파일명에서 계산기 정보 추출"""
    calculator_types = {
        'bmi-calculator': ('BMI 계산기', '체질량지수', 'BMI 계산'),
        'calorie-calculator': ('칼로리 계산기', '칼로리', '다이어트'),
        'ideal-weight-calculator': ('이상체중 계산기', '이상체중', '적정체중'),
        'loan-calculator': ('대출 계산기', '대출', '융자'),
        'interest-calculator': ('이자 계산기', '이자', '수익'),
        'percent-calculator': ('퍼센트 계산기', '퍼센트', '백분율'),
        'discount-calculator': ('할인 계산기', '할인', '세일'),
        'average-calculator': ('평균 계산기', '평균', '평균값'),
        'stock-calculator': ('주식 계산기', '주식', '투자'),
        'exchange-calculator': ('환율 계산기', '환율', '환전'),
        'tax-calculator': ('세금 계산기', '세금', '세액'),
        'salary-calculator': ('급여 계산기', '급여', '연봉'),
        'age-calculator': ('나이 계산기', '나이', '연령'),
        'date-calculator': ('날짜 계산기', '날짜', '기간'),
        'time-calculator': ('시간 계산기', '시간', '시각'),
        'gpa-calculator': ('학점 계산기', '학점', 'GPA'),
        'matrix-calculator': ('행렬 계산기', '행렬', '매트릭스'),
        'factorial-calculator': ('팩토리얼 계산기', '팩토리얼', '계승'),
        'logarithm-calculator': ('로그 계산기', '로그', '로그함수'),
        'scientific-calculator': ('공학용 계산기', '공학용', '과학'),
        'pregnancy-calculator': ('임신 계산기', '임신', '출산'),
        'ovulation-calculator': ('배란일 계산기', '배란일', '가임기'),
        'due-date-calculator': ('출산예정일 계산기', '출산예정일', '분만'),
        'tip-calculator': ('팁 계산기', '팁', '서비스료'),
        'fee-calculator': ('수수료 계산기', '수수료', '요금'),
        'love-compatibility-calculator': ('궁합 계산기', '궁합', '연애'),
        'wedding-budget-calculator': ('결혼예산 계산기', '결혼예산', '웨딩'),
        'biorhythm-calculator': ('바이오리듬 계산기', '바이오리듬', '생체리듬'),
        'temperature-converter': ('온도 변환기', '온도', '섭씨/화씨'),
        'length-converter': ('길이 변환기', '길이', '미터/피트'),
        'speed-converter': ('속도 변환기', '속도', 'km/mph'),
        'binary-decimal-converter': ('진법 변환기', '진법', '이진수'),
        'password-generator': ('비밀번호 생성기', '비밀번호', '패스워드'),
        'qr-code-generator': ('QR코드 생성기', 'QR코드', '큐알'),
        'color-picker': ('색상 선택기', '색상', '컬러'),
        'unit-converter': ('단위 변환기', '단위', '변환'),
        'random-number-generator': ('난수 생성기', '난수', '랜덤'),
        'hash-generator': ('해시 생성기', '해시', '암호화'),
        'base64-encoder': ('Base64 인코더', 'Base64', '인코딩'),
    }

    for key, value in calculator_types.items():
        if key in filename:
            return value

    # 기본값 반환
    name = filename.replace('.html', '').replace('-', ' ').title()
    return (name, name.split()[0], name.split()[0])

def generate_education_content(calc_name, calc_type, keyword):
    """계산기별 맞춤 교육 콘텐츠 생성"""
    content = f'''
            <!-- 교육 콘텐츠 섹션 추가 -->
            <div class="content-section" style="margin-top: 40px; padding: 30px; background: #f8f9fa; border-radius: 12px;">

                <!-- 1. 메뉴얼 (사용법 가이드) -->
                <div class="manual-section" style="margin-bottom: 30px;">
                    <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">📖 {calc_name} 사용 가이드</h2>
                    <p style="line-height: 1.8; color: #666;">
                        {calc_name}는 {calc_type} 관련 계산을 빠르고 정확하게 수행하는 도구입니다.
                        필요한 값을 입력하면 즉시 결과를 확인할 수 있습니다.
                    </p>
                    <ul style="line-height: 1.8; color: #666; margin-left: 20px;">
                        <li><strong>간편한 입력:</strong> 다양한 형식의 입력을 지원합니다</li>
                        <li><strong>정확한 계산:</strong> 검증된 공식을 사용한 정확한 결과</li>
                        <li><strong>즉시 확인:</strong> 실시간으로 계산 결과를 확인</li>
                        <li><strong>한국형 최적화:</strong> 한국 실정에 맞는 계산 방식 적용</li>
                    </ul>
                </div>

                <!-- 2. 실제 예시 -->
                <div class="example-section" style="margin-bottom: 30px;">
                    <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">💡 실제 활용 예시</h2>

                    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                        <h3 style="color: #007bff; font-size: 18px; margin-bottom: 10px;">📊 일상생활 활용</h3>
                        <p style="line-height: 1.8; color: #666;">
                            • 일상에서 자주 필요한 {keyword} 계산<br>
                            • 빠른 의사결정을 위한 즉시 계산<br>
                            • 정확한 결과로 실수 방지
                        </p>
                    </div>

                    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                        <h3 style="color: #28a745; font-size: 18px; margin-bottom: 10px;">💼 업무 활용</h3>
                        <p style="line-height: 1.8; color: #666;">
                            • 업무에서 필요한 {calc_type} 관련 계산<br>
                            • 보고서 작성시 정확한 데이터 제공<br>
                            • 효율적인 업무 처리 지원
                        </p>
                    </div>

                    <div style="background: white; padding: 20px; border-radius: 8px;">
                        <h3 style="color: #dc3545; font-size: 18px; margin-bottom: 10px;">📱 모바일 활용</h3>
                        <p style="line-height: 1.8; color: #666;">
                            • 언제 어디서나 {keyword} 계산 가능<br>
                            • 모바일 최적화된 인터페이스<br>
                            • 오프라인에서도 사용 가능
                        </p>
                    </div>
                </div>

                <!-- 3. 생활 꿀팁 -->
                <div class="tips-section" style="margin-bottom: 30px;">
                    <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">🔥 알아두면 유용한 꿀팁</h2>
                    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
                        <ul style="line-height: 2; color: #666; margin-left: 20px;">
                            <li><strong>정확한 입력:</strong> 올바른 값을 입력해야 정확한 결과를 얻을 수 있습니다</li>
                            <li><strong>단위 확인:</strong> 입력하는 값의 단위를 확인하세요</li>
                            <li><strong>결과 검증:</strong> 중요한 계산은 한 번 더 확인하세요</li>
                            <li><strong>즐겨찾기 추가:</strong> 자주 사용한다면 북마크에 추가하세요</li>
                            <li><strong>공유 기능:</strong> 계산 결과를 다른 사람과 공유할 수 있습니다</li>
                            <li><strong>피드백 환영:</strong> 개선 사항이 있다면 알려주세요</li>
                        </ul>
                    </div>
                </div>

                <!-- 4. 관련 용어 정리 -->
                <div class="korean-special-section">
                    <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">📚 관련 용어 정리</h2>
                    <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
                        <p style="line-height: 1.8; color: #666; margin-bottom: 10px;">
                            <strong>✅ {calc_type}:</strong> {calc_name}의 핵심 계산 요소<br>
                            <strong>✅ 정확도:</strong> 소수점 이하 자리수까지 정밀 계산<br>
                            <strong>✅ 실시간 계산:</strong> 입력과 동시에 결과 확인<br>
                            <strong>✅ 한국형 최적화:</strong> 한국 실정에 맞는 계산 방식<br>
                            <strong>✅ 모바일 지원:</strong> 모든 기기에서 동일한 사용 경험
                        </p>
                    </div>
                </div>
            </div>'''

    return content

def update_html_file(filepath):
    """HTML 파일 업데이트"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # 이미 교육 콘텐츠가 있는지 확인
        if '교육 콘텐츠 섹션' in content or 'content-section' in content:
            print(f"  [SKIP] Already updated: {filepath}")
            return False

        # 파일명에서 계산기 정보 추출
        filename = os.path.basename(filepath)
        calc_name, calc_type, keyword = get_calculator_info(filename)

        # 교육 콘텐츠 생성
        education_content = generate_education_content(calc_name, calc_type, keyword)

        # </div>\n        </div>\n    </div> 패턴 찾기 (calculator-card 닫는 부분)
        pattern = r'(</div>\s*</div>\s*</div>\s*<script>)'

        if re.search(pattern, content):
            # calculator-card 안에 교육 콘텐츠 추가
            new_content = re.sub(
                pattern,
                education_content + r'\n        </div>\n    </div>\n\n    <script>',
                content,
                count=1
            )
        else:
            # 대체 패턴: calculator-body 닫는 부분 찾기
            pattern2 = r'(</div>\s*<!--.*?calculator-body.*?-->\s*</div>)'
            if re.search(pattern2, content):
                new_content = re.sub(
                    pattern2,
                    r'\1' + education_content,
                    content,
                    count=1
                )
            else:
                # 최후의 방법: </script> 앞에 추가
                pattern3 = r'(</script>\s*</body>)'
                new_content = re.sub(
                    pattern3,
                    '</script>\n' + education_content + '\n</body>',
                    content,
                    count=1
                )

        # 파일 저장
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"  [OK] Updated: {filepath}")
        return True

    except Exception as e:
        print(f"  [ERROR] Failed {filepath}: {e}")
        return False

def main():
    """메인 실행 함수"""
    base_dir = Path(r'C:\Users\csw21\calculator_for_kr')

    # 업데이트할 폴더들
    folders = [
        'finance', 'health', 'math', 'business', 'lifestyle',
        'datetime', 'converter', 'pregnancy', 'science',
        'utility', 'education'
    ]

    total_files = 0
    updated_files = 0

    print("[START] Calculator Update Process...")
    print("=" * 50)

    for folder in folders:
        folder_path = base_dir / folder
        if not folder_path.exists():
            continue

        html_files = list(folder_path.glob('*.html'))
        if html_files:
            print(f"\n[FOLDER] {folder} processing... ({len(html_files)} files)")

            for html_file in html_files:
                total_files += 1
                if update_html_file(html_file):
                    updated_files += 1

    print("\n" + "=" * 50)
    print("[COMPLETE] Update finished!")
    print(f"   Total files: {total_files}")
    print(f"   Updated: {updated_files}")
    print(f"   Skipped: {total_files - updated_files}")

if __name__ == "__main__":
    main()