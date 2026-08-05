import re
from bs4 import BeautifulSoup

files = {
    "Paul Nzimande": r"C:\Users\kat95\.gemini\antigravity-ide\brain\9d72fc1c-18d4-449e-be30-4fc1af7f3bed\.system_generated\steps\361\content.md",
    "Khaya Dlanga": r"C:\Users\kat95\.gemini\antigravity-ide\brain\9d72fc1c-18d4-449e-be30-4fc1af7f3bed\.system_generated\steps\377\content.md",
    "Zamo Mbele": r"C:\Users\kat95\.gemini\antigravity-ide\brain\9d72fc1c-18d4-449e-be30-4fc1af7f3bed\.system_generated\steps\379\content.md",
    "Timothy Maurice": r"C:\Users\kat95\.gemini\antigravity-ide\brain\9d72fc1c-18d4-449e-be30-4fc1af7f3bed\.system_generated\steps\381\content.md",
    "Victor Ramathesele": r"C:\Users\kat95\.gemini\antigravity-ide\brain\9d72fc1c-18d4-449e-be30-4fc1af7f3bed\.system_generated\steps\385\content.md"
}

for name, path in files.items():
    print(f"\n==================== {name} ====================")
    try:
        with open(path, 'r', encoding='utf-8') as f:
            html = f.read()
        
        soup = BeautifulSoup(html, 'html.parser')
        
        # Divi content is usually inside et_pb_text or entry-content
        content_divs = soup.find_all(class_='et_pb_text_inner')
        if not content_divs:
            content_divs = [soup.find(class_='entry-content')]
            
        paragraphs = []
        if content_divs and content_divs[0]:
            for div in content_divs:
                for p in div.find_all('p'):
                    text = p.get_text().strip()
                    if text and len(text) > 30 and not text.startswith("var ") and not "document.addEventListener" in text:
                        if text not in paragraphs:
                            paragraphs.append(text)
        
        if not paragraphs:
            for p in soup.find_all('p'):
                text = p.get_text().strip()
                if text and len(text) > 30:
                    if text not in paragraphs:
                        paragraphs.append(text)
                        
        for p in paragraphs:
            print(p)
            print()
    except Exception as e:
        print(f"Error reading {name}: {e}")
