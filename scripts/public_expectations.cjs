// Canonical totals keep browser coverage current when verified histories are added.
const fs=require('node:fs'),path=require('node:path');
const read=name=>JSON.parse(fs.readFileSync(path.join(__dirname,'../content/reference',name+'.json'),'utf8'));
const world=read('world');
const events=world.archiveIndex.timeline.filter(event=>!event.veiled&&!event.vaultOnly&&!world.restrictedArticleIds.includes(event.article));
module.exports={events:events.length,dated:events.filter(event=>event.dating?.finalWar).length,adjusted:events.filter(event=>event.dating?.calendarAdjustment).length,importance:[0,...[1,2,3,4,5].map(level=>events.filter(event=>event.importance===level).length)],claims:read('claim-review').length,questions:read('research-queue').length};
