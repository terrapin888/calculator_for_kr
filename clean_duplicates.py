#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re
from pathlib import Path

def clean_html_file(filepath):
    """HTML 파일을 정리하여 중복 제거 및 구조 수정"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # 결과 섹션 </div> 태그가 제대로 닫혀있는지 확인
        # result-section의 닫는 태그가 누락된 경우 수정
        pattern = r'(<div id="resultSection".*?>.*?)(<div class="result-grid">.*?</div>)\s*(<!-- 교육 콘텐츠)'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            # result-grid 뒤에 </div>가 하나 더 필요
            content = re.sub(pattern, r'\1\2\n                    </div>\n                </div>\n\n                \3', content, flags=re.DOTALL)

        # </script> 다음에 오는 추가 container와 정보 섹션 제거
        pattern2 = r'(</script>\s*\n\s*)(<!-- 정보 섹션 -->.*?</div>\s*</div>\s*)(</body>)'
        if re.search(pattern2, content, re.DOTALL):
            content = re.sub(pattern2, r'\1\3', content, flags=re.DOTALL)

        # </script> 다음에 오는 중복 container div 제거
        pattern3 = r'(</script>\s*\n\s*)(<div class="container">.*?</div>\s*</div>\s*)(</body>)'
        if re.search(pattern3, content, re.DOTALL):
            content = re.sub(pattern3, r'\1\3', content, flags=re.DOTALL)

        # 교육 콘텐츠가 잘못된 위치에 있는 경우 수정
        # 결과 섹션 안에 들어간 교육 콘텐츠를 밖으로 이동
        pattern4 = r'(<div class="result-item">.*?</div>\s*)(<!-- 교육 콘텐츠 섹션.*?</div>\s*</div>\s*</div>\s*</div>)'
        match4 = re.search(pattern4, content, re.DOTALL)
        if match4:
            education_content = match4.group(2)
            # 교육 콘텐츠를 result-item 밖으로 이동
            content = content.replace(match4.group(0), match4.group(1) + '\n                    </div>\n                </div>\n\n                ' + education_content)

        # calculator-card가 제대로 닫히지 않은 경우 수정
        if '교육 콘텐츠 섹션' in content:
            # 교육 콘텐츠 뒤에 calculator-card와 container를 제대로 닫기
            pattern5 = r'(<!-- 4\. 관련 용어.*?</div>\s*</div>\s*</div>)\s*(</div>)?\s*(</div>)?\s*</body>'
            match5 = re.search(pattern5, content, re.DOTALL)
            if match5:
                # 교육 콘텐츠 후 태그 정리
                content = re.sub(pattern5, r'\1\n        </div>\n    </div>\n</body>', content, flags=re.DOTALL)

        # 변경사항이 있으면 파일 저장
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[CLEANED] {filepath}")
            return True
        else:
            return False

    except Exception as e:
        print(f"[ERROR] {filepath}: {e}")
        return False

def main():
    """메인 실행 함수"""
    base_dir = Path(r'C:\Users\csw21\calculator_for_kr')

    folders = [
        'finance', 'health', 'math', 'business', 'lifestyle',
        'datetime', 'converter', 'pregnancy', 'science',
        'utility', 'education'
    ]

    total_files = 0
    cleaned_files = 0

    print("Cleaning duplicate sections and fixing structure...")
    print("=" * 50)

    for folder in folders:
        folder_path = base_dir / folder
        if not folder_path.exists():
            continue

        html_files = list(folder_path.glob('*.html'))
        for html_file in html_files:
            total_files += 1
            if clean_html_file(html_file):
                cleaned_files += 1

    print("\n" + "=" * 50)
    print(f"[COMPLETE] Cleaning finished!")
    print(f"   Total files: {total_files}")
    print(f"   Cleaned: {cleaned_files}")

if __name__ == "__main__":
    main()