#!/usr/bin/env python3
"""Check inclusive/leap-year arithmetic, date precision and persisted calendar integrity."""
import copy
import unittest
from final_war_calendar import posting_window, war_date, day_number, calendar_errors

class CalendarTests(unittest.TestCase):
    def parse(self, meta, **fields):
        return posting_window(dict(meta=meta, **fields))
    def test_inclusive_and_leap_year(self):
        self.assertEqual(day_number('2024-03-04'), 1)
        self.assertEqual(day_number('2024-03-06'), 3)
        self.assertEqual(day_number('2025-03-04'), 366)
        self.assertEqual(day_number('2024-02-29'), -3)
        self.assertEqual(day_number('2026-10-18'), 959)
    def test_precision(self):
        self.assertEqual(war_date(self.parse('1–2 April 2025 · source posts')), dict(start=394,end=395,precision='range',qualifier='on'))
        month=self.parse('Feb 2024')
        self.assertEqual((month['start'], month['end']), ('2024-02-01','2024-02-29'))
        self.assertEqual(month['precision'], 'month')
        self.assertEqual(self.parse('18 Oct 2026 New York / 19 Oct UTC')['end'], '2026-10-19')
        self.assertEqual(self.parse('Sep 6, 2024')['start'], '2024-09-06')
        self.assertEqual(self.parse('Before 30 Sep 2026')['qualifier'], 'before')
        self.assertEqual(self.parse('By 19 Sep 2026')['qualifier'], 'by')
    def test_no_placeholder_or_ancient_dates(self):
        for meta in ['2025 · exact date unresolved','Early 2024','Late 2025','By Feb 2025 · exact day unknown','Before Jul 2024 · exact date unresolved','Jun 2024 / ~7½ months later','New Year retrospective · exact year unresolved']:
            self.assertIsNone(self.parse(meta,sort='2025-01-01'),meta)
        self.assertIsNone(self.parse('30 Dec 2024',era='Ancient world'))
    def test_adjustments_preserve_posting_window(self):
        window=self.parse('26–27 Sep 2026')
        effective=self.parse('19 Sep 2026')
        dating=dict(postingWindow=window,finalWar=war_date(effective),calendarAdjustment=dict(date='2026-09-19',reason='Narrator resumes the same battle.',sources=['https://discord.com/channels/1/2/3']))
        self.assertEqual(calendar_errors(dating), [])
        self.assertEqual(dating['postingWindow']['start'], '2026-09-26')
        for field,value in [('date','2026-09-00'),('reason',''),('sources',[])]:
            broken=copy.deepcopy(dating);broken['calendarAdjustment'][field]=value
            self.assertTrue(calendar_errors(broken))
        broken=copy.deepcopy(dating);broken['finalWar']['start']+=1
        self.assertTrue(calendar_errors(broken))
        self.assertTrue(calendar_errors(dict(finalWar=war_date(window))))
    def test_window_validation(self):
        dating=dict(postingWindow=self.parse('Feb 2024'))
        dating['finalWar']=war_date(dating['postingWindow'])
        self.assertEqual(calendar_errors(dating), [])
        dating['postingWindow']['end']='2024-02-28'
        dating['finalWar']=war_date(dating['postingWindow'])
        self.assertTrue(calendar_errors(dating), 'a month range includes leap day')

if __name__=='__main__': unittest.main()
