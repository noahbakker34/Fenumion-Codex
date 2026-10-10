/* Shared reading layout for both world codices. */
window.organizeCodexPage = function(root, options={}) {
  document.body.classList.remove('record-layout-view');
  const body=root.querySelector('.article-body');
  const lead=root.querySelector('.lead-grid');
  if(options.home || !body || !lead) return;
  document.body.classList.add('record-layout-view');

  const overview=document.createElement('div');
  overview.className='record-overview';
  const visualRail=document.createElement('aside');
  visualRail.className='record-visual-rail';
  visualRail.setAttribute('aria-label','Artwork and connected stories');
  const copy=document.createElement('div');
  copy.className='record-overview-copy';
  overview.append(visualRail,copy);
  lead.before(overview);

  const heroes=[...root.querySelectorAll(':scope > .article-hero')];
  const heroImages=new Set(heroes.flatMap(hero=>[...hero.querySelectorAll('img,video')].map(media=>media.getAttribute('src') || media.getAttribute('poster'))).filter(Boolean));
  heroes.forEach(hero=>visualRail.append(hero));
  const gallery=root.querySelector(':scope > .article-gallery');
  if(gallery) visualRail.append(gallery);
  if(!heroes.length && options.image) {
    const figure=document.createElement('figure');
    figure.className='article-hero record-topic-art';
    const image=document.createElement('img');
    image.src=options.image;image.alt='';image.loading='lazy';
    figure.append(image);
    visualRail.append(figure);
  }

  const summary=document.createElement('section');
  summary.className='record-summary';
  summary.setAttribute('aria-label','At a glance');
  const introduction=document.createElement('div');
  introduction.className='record-introduction';
  while(body.firstElementChild?.matches('p,blockquote,.callout,.quote')) introduction.append(body.firstElementChild);
  if(introduction.children.length) summary.append(introduction);
  const facts=lead.querySelector(':scope > .infobox');
  if(facts?.querySelector('.fact')) {
    if(options.directory) {
      const supportingFacts=document.createElement('details');
      supportingFacts.className='record-visual-facts';
      supportingFacts.open=matchMedia('(min-width: 1201px)').matches;
      const heading=document.createElement('summary');
      heading.textContent='At a glance';
      facts.querySelector('.infobox-title')?.remove();
      supportingFacts.append(heading,facts);
      visualRail.append(supportingFacts);
    } else summary.append(facts);
  }
  else facts?.remove();
  if(summary.children.length) copy.append(summary);

  // Browsing tools stay visible beside the shared visual column.
  const switcher=root.querySelector(':scope > .hub-switcher');
  if(switcher) {
    const supportingFacts=visualRail.querySelector('.record-visual-facts');
    if(supportingFacts) supportingFacts.before(switcher);
    else visualRail.append(switcher);
  }
  root.querySelectorAll(':scope > .atlas-banner,:scope > .people-gallery-shell').forEach(section=>copy.append(section));
  copy.append(lead);

  const collection=body.querySelector('.character-collection');
  collection?.querySelectorAll('.character-art-grid figure').forEach(figure=>{
    if(heroImages.has(figure.querySelector('img')?.getAttribute('src'))) figure.remove();
  });
  const artGrid=collection?.querySelector('.character-art-grid');
  if(artGrid?.children.length) {
    const artwork=document.createElement('section');
    artwork.className='record-rail-art';
    const heading=document.createElement('h2');
    heading.textContent='Character artwork';
    artwork.append(heading,artGrid);
    const credit=collection.querySelector('.collection-credit');
    if(credit) artwork.append(credit);
    visualRail.append(artwork);
  } else artGrid?.remove();
  if(collection) {
    if(!collection.querySelector('.character-quote-grid')) collection.remove();
    else collection.querySelector('h2').textContent='Remembered words';
  }

  if(options.connections?.length) {
    const connected=document.createElement('details');
    connected.className='record-visual-links';
    connected.open=matchMedia('(min-width: 1201px)').matches;
    const heading=document.createElement('summary');
    heading.textContent=options.connectionsLabel || 'Connected stories';
    const links=document.createElement('nav');
    links.setAttribute('aria-label',heading.textContent);
    connected.append(heading,links);
    options.connections.forEach(record=>{
      const link=document.createElement('a');
      link.href='#'+record.id;
      if(record.image){
        const image=document.createElement('img');
        image.src=record.image;image.alt='';image.loading='lazy';
        link.append(image);
      }
      const label=document.createElement('span');
      const name=document.createElement('strong');
      name.textContent=record.title;
      label.append(name);
      if(record.subtitle){const subtitle=document.createElement('small');subtitle.textContent=record.subtitle;label.append(subtitle);}
      link.append(label);
      links.append(link);
    });
    visualRail.append(connected);
  }

  const chapters=[];
  if(!options.directory) {
    const content=document.createDocumentFragment();
    let current;
    const wrap=heading=>{
      const chapter=document.createElement('details');
      chapter.className='record-chapter';
      const summary=document.createElement('summary');
      if(!heading.id) heading.id='record-'+options.id+'-section-'+chapters.length;
      summary.append(heading);
      chapter.append(summary);
      content.append(chapter);
      chapters.push(chapter);
      return chapter;
    };
    [...body.childNodes].forEach(node=>{
      if(node.nodeType!==Node.ELEMENT_NODE) { (current || content).append(node);return; }
      if(node.matches('h2')) current=wrap(node);
      else if(node.matches('.subchannels,.related,.record-connections,.location-connections,.gedankin-map') || node.querySelector('input,select,[data-map-zoom],#interactive-atlas')) {content.append(node);current=null;}
      else if(node.matches('[data-relationship-map]') || (node.matches('section') && node.querySelector(':scope > h2'))) {
        const chapter=wrap(node.querySelector('h2'));
        chapter.append(node);
        current=null;
      } else (current || content).append(node);
    });
    body.append(content);
    if(chapters[0]) chapters[0].open=true;
    if(chapters.length>1) {
      const toolbar=document.createElement('div');
      toolbar.className='record-reading-controls';
      const count=document.createElement('span');
      count.textContent=chapters.length+' sections';
      const button=document.createElement('button');
      button.type='button';
      const sync=()=>button.textContent=chapters.every(chapter=>chapter.open)?'Collapse all sections':'Expand all sections';
      button.addEventListener('click',()=>{
        const open=!chapters.every(chapter=>chapter.open);
        chapters.forEach(chapter=>chapter.open=open);
        sync();
      });
      chapters.forEach(chapter=>chapter.addEventListener('toggle',sync));
      sync();
      toolbar.append(count,button);
      body.prepend(toolbar);
    }
  }

  if(!visualRail.children.length) {
    const headings=[...body.querySelectorAll('h2')];
    if(headings.length) {
      const navigation=document.createElement('nav');
      navigation.className='record-visual-links record-outline';
      navigation.setAttribute('aria-label','In this record');
      const label=document.createElement('h2');
      label.textContent='In this record';
      navigation.append(label);
      headings.forEach((heading,index)=>{
        if(!heading.id)heading.id='record-'+options.id+'-section-'+index;
        const button=document.createElement('button');
        button.type='button';button.dataset.section=heading.id;button.textContent=heading.textContent;
        navigation.append(button);
      });
      visualRail.append(navigation);
    } else visualRail.remove();
  }
};
window.revealCodexSection = function(target) {
  if(!target) return;
  let parent=target.parentElement;
  while(parent){if(parent.matches('details'))parent.open=true;parent=parent.parentElement;}
};
