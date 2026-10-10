/* Shared organization for substantial character histories. */
window.organizeCharacterPage = function(root, eligible, connections=[]) {
  document.body.classList.remove('character-dossier-view');
  if(!eligible) return;
  const body=root.querySelector('.article-body');
  if(!body || body.querySelectorAll(':scope > h2').length<6) return;
  document.body.classList.add('character-dossier-view');
  const hero=root.querySelector(':scope > .article-hero');
  const facts=root.querySelector('.lead-grid > .infobox');
  const overview=document.createElement('section');
  overview.className='character-overview';
  overview.setAttribute('aria-label','Character overview');
  const introduction=document.createElement('div');
  introduction.className='character-introduction';
  while(body.firstElementChild && !body.firstElementChild.matches('h2')) introduction.append(body.firstElementChild);
  const visualRail=document.createElement('aside');
  visualRail.className='character-visual-rail';
  visualRail.setAttribute('aria-label','Artwork and connected stories');
  if(hero) visualRail.append(hero);
  const overviewCopy=document.createElement('div');
  overviewCopy.className='character-overview-copy';
  const summaryCard=document.createElement('section');
  summaryCard.className='character-summary';
  summaryCard.append(introduction);
  if(facts?.querySelector('.fact')) summaryCard.append(facts);
  else facts?.remove();
  overviewCopy.append(summaryCard);
  overview.append(visualRail,overviewCopy);
  root.querySelector('.lead-grid').before(overview);

  // Keep alternate artwork, but do not repeat the main portrait.
  const heroImage=hero?.querySelector('img')?.getAttribute('src') || hero?.querySelector('video')?.getAttribute('poster');
  const collection=body.querySelector('.character-collection');
  collection?.querySelectorAll('.character-art-grid figure').forEach(figure=>{
    if(figure.querySelector('img')?.getAttribute('src')===heroImage) figure.remove();
  });
  const artGrid=collection?.querySelector('.character-art-grid');
  if(artGrid && !artGrid.children.length) {
    artGrid.remove();
    const heading=collection.querySelector('h2');
    if(heading) heading.textContent='Remembered words';
  }
  if(artGrid?.children.length) {
    const artwork=document.createElement('section');
    artwork.className='character-rail-art';
    const label=document.createElement('h2');
    label.textContent='Character artwork';
    artwork.append(label,artGrid);
    const credit=collection.querySelector('.collection-credit');
    if(credit) artwork.append(credit);
    visualRail.append(artwork);
    collection.querySelector('h2').textContent='Remembered words';
  }
  if(collection && !collection.querySelector('.character-art-grid,.character-quote-grid')) collection.remove();

  if(connections.length) {
    const connectedStories=document.createElement('details');
    connectedStories.className='character-visual-links';
    connectedStories.open=matchMedia('(min-width: 1201px)').matches;
    const heading=document.createElement('summary');
    heading.textContent='Connected stories';
    const links=document.createElement('nav');
    links.setAttribute('aria-label','Connected stories');
    connectedStories.append(heading,links);
    connections.forEach(record=>{
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
    visualRail.append(connectedStories);
  }
  if(!visualRail.children.length)visualRail.remove();
  overviewCopy.append(root.querySelector('.lead-grid'));

  const chapters=[];
  let current;
  const wrap=(heading)=>{
    const chapter=document.createElement('details');
    chapter.className='character-chapter';
    const summary=document.createElement('summary');
    summary.append(heading);
    chapter.append(summary);
    body.append(chapter);
    chapters.push(chapter);
    return chapter;
  };
  const nodes=[...body.children];
  nodes.forEach(node=>{
    if(node.matches('h2')) current=wrap(node);
    else if(node.matches('.character-collection,.character-words,[data-relationship-map]')) {
      const heading=node.querySelector('h2');
      if(heading) {current=wrap(heading);current.append(node);current=null;}
    } else if(node.matches('.subchannels,.related')) {body.append(node);current=null;}
    else if(current) current.append(node);
  });
  if(chapters[0]) chapters[0].open=true;
  const toolbar=document.createElement('div');
  toolbar.className='character-reading-controls';
  const count=document.createElement('span');
  count.textContent=chapters.length+' sections';
  const button=document.createElement('button');
  button.type='button';
  button.textContent='Expand all sections';
  button.addEventListener('click',()=>{
    const open=!chapters.every(chapter=>chapter.open);
    chapters.forEach(chapter=>chapter.open=open);
  });
  const sync=()=>button.textContent=chapters.every(chapter=>chapter.open)?'Collapse all sections':'Expand all sections';
  chapters.forEach(chapter=>chapter.addEventListener('toggle',sync));
  toolbar.append(count,button);
  body.prepend(toolbar);
};
window.revealCharacterSection = function(target) {
  if(!target) return;
  let parent=target.parentElement;
  while(parent){if(parent.matches('details'))parent.open=true;parent=parent.parentElement;}
};
