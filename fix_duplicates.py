#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from pathlib import Path

def fix_duplicate_sections():
    """중복된 container나 잘못 위치한 교육 콘텐츠 수정"""
    base_dir = Path(r'C:\Users\csw21\calculator_for_kr')

    folders = [
        'finance', 'health', 'math', 'business', 'lifestyle',
        'datetime', 'converter', 'pregnancy', 'science',
        'utility', 'education'
    ]

    fixed_count = 0

    for folder in folders:
        folder_path = base_dir / folder
        if not folder_path.exists():
            continue

        for html_file in folder_path.glob('*.html'):
            try:
                with open(html_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                original_content = content

                # 여러 container div가 있는 경우 확인
                container_count = content.count('class="container"')

                if container_count > 1:
                    print(f"[MULTIPLE CONTAINERS] {html_file}: {container_count} containers found")

                    # </script> 뒤에 나오는 추가 container와 내용 제거
                    # (이미 calculator-card 안에 교육 콘텐츠가 있다면)
                    if '교육 콘텐츠 섹션' in content:
                        # </script> 이후 </body> 사이의 불필요한 container 제거
                        import re
                        pattern = r'(</script>\s*\n\s*<!-- 정보 섹션 -->.*?)(</body>)'
                        if re.search(pattern, content, re.DOTALL):
                            content = re.sub(pattern, r'\1\2', content, flags=re.DOTALL)

                        # 또는 </script> 이후 두 번째 container 제거
                        pattern2 = r'(</script>\s*\n\s*<div class="container">.*?</div>\s*</div>\s*)(</body>)'
                        if re.search(pattern2, content, re.DOTALL):
                            content = re.sub(pattern2, r'\2', content, flags=re.DOTALL)

                # calculator-card 밖에 있는 교육 콘텐츠를 안으로 이동
                if '교육 콘텐츠 섹션' in content:
                    import re
                    # </div>\n    </div>\n\n    <!-- 교육 콘텐츠 패턴
                    pattern3 = r'(</div>\s*</div>\s*)(<!-- 교육 콘텐츠 섹션.*?</div>\s*)(</div>\s*</body>)'
                    match = re.search(pattern3, content, re.DOTALL)

                    if match:
                        # 교육 콘텐츠를 calculator-card 안으로 이동
                        education_content = match.group(2)
                        # calculator-card 닫기 전에 교육 콘텐츠 삽입
                        content = content.replace(match.group(0),
                                                education_content + '\n        </div>\n    </div>\n</body>')

                # 변경사항이 있으면 파일 저장
                if content != original_content:
                    with open(html_file, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"[FIXED] {html_file}")
                    fixed_count += 1

            except Exception as e:
                print(f"[ERROR] {html_file}: {e}")

    return fixed_count

if __name__ == "__main__":
    print("Fixing duplicate sections and misplaced education content...")
    print("=" * 50)

    fixed = fix_duplicate_sections()

    print("\n" + "=" * 50)
    print(f"Fixed {fixed} files")