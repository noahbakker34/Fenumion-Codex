"""Inclusive Final War day numbers from recorded calendar labels, preserving their precision."""
import calendar
import datetime as dt
import re

ORIGIN = dt.date(2024, 3, 4)
MONTHS = {name.lower(): n for n in range(1,13) for name in (calendar.month_name[n], calendar.month_abbr[n])}
MONTHS['sept'] = 9
MONTH = r'(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)'

def day_number(date):
    return (dt.date.fromisoformat(date) - ORIGIN).days + 1

def posting_window(event):
    """Only parse stated days/months; never use artificial sort keys as calendar dates."""
    meta = event.get('meta', '')
    low = meta.lower()
    if event.get('era') == 'Ancient world' or any(word in low for word in ['before becoming', 'retrospective', 'exact year', '7½', '~', 'early ', 'late ', 'post-aria']):
        return None
    years = re.findall(r'\b(20\d{2})\b',meta)
    if not years:
        return None
    year = int(years[0]); dates=[]
    for match in re.finditer(r'\b(20\d{2}-\d{2}-\d{2})\b',meta):
        dates.append(dt.date.fromisoformat(match[1]))
    # Day-first labels, including explicit ranges and alternate timezone dates without a repeated year.
    for match in re.finditer(r'(?<![\d-])(\d{1,2})(?:[–-](\d{1,2}))?\s+('+MONTH+r')\b(?:\s+(20\d{2}))?',meta,re.I):
        month = MONTHS.get(match[3].lower())
        used_year = int(match[4]) if match[4] else year
        dates.extend([dt.date(used_year,month,int(match[1])),dt.date(used_year,month,int(match[2] or match[1]))])
    # US-style dates such as Sep 6, 2024.
    for match in re.finditer(r'\b('+MONTH+r')\s+(\d{1,2}),?\s+(20\d{2})\b',meta,re.I):
        dates.append(dt.date(int(match[3]),MONTHS.get(match[1].lower()),int(match[2])))
    qualifier = 'by' if re.match(r'^by\s|.*\bactive by\s',low) else 'before' if low.startswith('before ') else 'after' if low.startswith('after ') else 'on'
    if dates:
        start,end=min(dates),max(dates)
        return {'start':start.isoformat(),'end':end.isoformat(),'precision':'day' if start==end else 'range','qualifier':qualifier}
    # Month-only periods produce full-month ranges, never an invented first-of-month event.
    if qualifier != 'on':
        return None
    match=re.search(r'\b('+MONTH+r')\s+(20\d{2})\b',meta,re.I)
    if match:
        month=MONTHS.get(match[1].lower());year=int(match[2])
        return {'start':dt.date(year,month,1).isoformat(),'end':dt.date(year,month,calendar.monthrange(year,month)[1]).isoformat(),'precision':'month','qualifier':'around'}
    return None

def war_date(window):
    if not window:
        return None
    assert dt.date.fromisoformat(window['start']) <= dt.date.fromisoformat(window['end'])
    return {'start':day_number(window['start']),'end':day_number(window['end']),'precision':window['precision'],'qualifier':window['qualifier']}

def calendar_errors(dating):
    """Validate persisted dates against the origin; never trust a precomputed ordinal."""
    errors = []
    window = dating.get('postingWindow')
    adjustment = dating.get('calendarAdjustment')
    final = dating.get('finalWar')
    if not window:
        return ['Final War date has no recorded posting window'] if final or adjustment else []
    try:
        start, end = dt.date.fromisoformat(window['start']), dt.date.fromisoformat(window['end'])
        assert start <= end
        assert window['precision'] in {'day', 'range', 'month'}
        assert window['qualifier'] in {'on', 'by', 'before', 'after', 'around'}
        assert window['precision'] != 'day' or start == end
        assert window['precision'] != 'range' or start < end
        if window['precision'] == 'month':
            assert start.day == 1 and start.year == end.year and start.month == end.month
            assert end.day == calendar.monthrange(end.year, end.month)[1]
        effective = window
        if adjustment:
            date = dt.date.fromisoformat(adjustment['date']).isoformat()
            assert isinstance(adjustment['reason'], str) and adjustment['reason'].strip()
            assert adjustment['sources'] and all(re.fullmatch(r'https://discord\.com/channels/\d+/\d+/\d+', ref) for ref in adjustment['sources'])
            effective = {'start':date, 'end':date, 'precision':'day', 'qualifier':'on'}
        assert final == war_date(effective)
        assert all(type(final[k]) is int for k in ['start','end'])
        if dating.get('finalWarDay') is not None:
            assert final['start'] == final['end'] == dating['finalWarDay']
    except (KeyError, TypeError, ValueError, AssertionError):
        errors.append('Invalid posting window, calendar adjustment or Final War arithmetic')
    return errors
