import urllib.request
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate verification if needed
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = {
    "Neil Tovey": "https://thespeakersfirm.co.za/neil-tovey/",
    "Doctor Khumalo": "https://thespeakersfirm.co.za/doctor-khumalo/",
    "Veli Ndaba": "https://thespeakersfirm.co.za/veli-ndaba/",
    "Nyimpini Mabunda": "https://thespeakersfirm.co.za/nyimpini-mabunda/",
    "Azania Mosaka": "https://thespeakersfirm.co.za/mc-and-facilitators/azania-mosaka/"
}

for name, url in urls.items():
    print(f"\n==================== {name} ====================")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read()
        
        soup = BeautifulSoup(html, 'html.parser')
        
        # Try to find Divi text elements
        content_divs = soup.find_all(class_='et_pb_text_inner')
        
        # Find headings or title
        h1 = soup.find('h1')
        if h1:
            print("H1:", h1.get_text().strip())
        
        # Extract text blocks
        paragraphs = []
        if content_divs:
            for div in content_divs:
                for p in div.find_all('p'):
                    text = p.get_text().strip()
                    if text and len(text) > 30 and not "document.addEventListener" in text:
                        if text not in paragraphs:
                            paragraphs.append(text)
                            
        # Fallback if no paragraphs inside Divi texts
        if not paragraphs:
            for p in soup.find_all('p'):
                text = p.get_text().strip()
                if text and len(text) > 30:
                    if text not in paragraphs:
                        paragraphs.append(text)
        
        print("FOUND", len(paragraphs), "PARAGRAPHS:")
        for idx, p in enumerate(paragraphs):
            print(f"[{idx}] {p}\n")
            
        # Try to extract links (e.g. news items)
        print("LINKS:")
        for a in soup.find_all('a', href=True):
            href = a['href']
            text = a.get_text().strip()
            if text and ("http" in href) and not ("thespeakersfirm.co.za" in href) and not ("whatsapp" in href) and not ("facebook" in href) and not ("twitter" in href) and not ("instagram" in href) and not ("youtube" in href):
                print(f"- {text}: {href}")
                
    except Exception as e:
        print(f"Error fetching {name}: {e}")
