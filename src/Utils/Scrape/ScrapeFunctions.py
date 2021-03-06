from contextlib import closing
from requests import get
from requests.exceptions import RequestException



def simple_get(url):
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None
    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None


def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 
            and content_type is not None 
            and content_type.find('html') > -1)


def log_error(e):
    print(e)


def pullImages(country, html):
    dataDict[country] = []
    for span in html.select('img.lazy'):
        dataDict[country].append(span.get('data-lazy-src'))
    dataDict[country].reverse()

def pullAttractions(country, html):
    dataDict[country] = []
    for span in html.select('span.toptitle'):
        span = span.text
        if 'Where to Stay' in span:
            cutIndex = span.index(' (Where')
            span = span[:cutIndex]
        if 'Plan your Visit' in span:
            cutIndex = span.index(' (Plan')
            span = span[:cutIndex]
        dataDict[country].append(span)
    dataDict[country].reverse() 




