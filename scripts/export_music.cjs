// Export only the trusted repository's public music definitions, before any DOM code.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'site/music.js'),'utf8');
const boundary=source.indexOf('const musicPlayer =');
assert(boundary>0,'music definitions must precede the DOM player');
const definitions=vm.runInNewContext(source.slice(0,boundary)+`;JSON.stringify({
 styles:musicStyles,
 tracks:fenumionSoundtrack,
 playlists:musicStyles.map(playlist=>({...playlist,files:fenumionSoundtrack.filter(track=>musicPlaylistIncludes(track,playlist.id)).map(track=>track.file)}))
})`,{}, {timeout:1000});
const data=JSON.parse(definitions);
const tracks=data.tracks.map(track=>{
 const url=new URL(track.src);
 const id=url.pathname.split('/assets/music/')[1]?.replace(/\.mp3$/,'');
 assert(url.origin==='https://raw.githubusercontent.com'&&/^\/(noahbakker34)\/Fenumion-Codex\//.test(url.pathname)&&/^(fenumion|action-drama)\/[a-z0-9-]+$/.test(id),'public music URL');
 return {id,title:track.title,style:track.style,url:track.src};
});
assert.equal(new Set(tracks.map(track=>track.id)).size,tracks.length,'unique track IDs');
const byFile=new Map(data.tracks.map((track,index)=>[track.file,tracks[index]]));
const styles=Object.fromEntries(data.styles.filter(style=>style.id==='all'||tracks.some(track=>track.style===style.id)).map(style=>[style.id,style.label]));
const playlists=data.playlists.sort((a,b)=>(a.collection==='custom'?0:1)-(b.collection==='custom'?0:1)).map(playlist=>{
 assert(playlist.files.length>0,'empty playlist '+playlist.id);
 const selected=playlist.files.map(file=>byFile.get(file));
 assert(selected.every(track=>(track.style==='fenumion')===(playlist.collection==='custom')),'mixed playlist '+playlist.id);
 return {id:playlist.id,name:playlist.label,collection:playlist.collection,description:(playlist.collection==='custom'?'Custom Fenumion · Suno':'Background soundtrack')+' · '+selected.length+' tracks.',track_ids:selected.map(track=>track.id),shuffle:false};
});
const bundle={schema_version:1,source:'https://fenumion.com/music.js',styles,tracks,playlists};
const output=JSON.stringify(bundle,null,2)+'\n';
const target=path.join(root,'site/music-library.json');
if(process.argv.includes('--check')){
 assert.equal(fs.readFileSync(target,'utf8'),output,'music-library.json is stale; run node scripts/export_music.cjs');
 console.log('PASS shared music catalogue: '+tracks.length+' tracks; '+playlists.length+' source-separated playlists');
}else{fs.writeFileSync(target,output);console.log('Exported '+tracks.length+' tracks and '+playlists.length+' playlists.');}
