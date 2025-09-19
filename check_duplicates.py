#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from pathlib import Path

def check_duplicates():
    """중복된 교육 콘텐츠 섹션이 있는 파일 찾기"""
    base_dir = Path(r'C:\Users\csw21\calculator_for_kr')

    folders = [
        'finance', 'health', 'math', 'business', 'lifestyle',
        'datetime', 'converter', 'pregnancy', 'science',
        'utility', 'education'
    ]

    duplicates = []

    for folder in folders:
        folder_path = base_dir / folder
        if not folder_path.exists():
            continue

        for html_file in folder_path.glob('*.html'):
            try:
                with open(html_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 교육 콘텐츠 섹션 카운트
                count = content.count('교육 콘텐츠 섹션')

                if count > 1:
                    duplicates.append((html_file, count))
                    print(f"[DUPLICATE] {html_file}: {count} sections found")
                elif count == 1:
                    # content-section 클래스가 calculator-card 밖에 있는지 확인
                    if '</div>\n</body>' in content:
                        lines = content.split('\n')
                        card_closed = False
                        content_section_outside = False

                        for i, line in enumerate(lines):
                            if 'calculator-card' in line and '/div' in line:
                                card_closed = True
                            if card_closed and 'content-section' in line:
                                content_section_outside = True
                                break

                        if content_section_outside:
                            duplicates.append((html_file, 'outside'))
                            print(f"[OUTSIDE] {html_file}: Education content is outside calculator-card")

            except Exception as e:
                print(f"[ERROR] {html_file}: {e}")

    return duplicates

if __name__ == "__main__":
    print("Checking for duplicate education sections...")
    print("=" * 50)

    duplicates = check_duplicates()

    print("\n" + "=" * 50)
    print(f"Found {len(duplicates)} files with issues")