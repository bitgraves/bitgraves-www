import React, { Component } from 'react';
import './App.css';

const PRESENCE_LINKS = [
  { name: 'Bandcamp', url: 'https://bitgraves.bandcamp.com/' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/bitgraves' },
  { name: 'Instagram', url: 'https://www.instagram.com/bitgraves/' },
  { name: 'GitHub', url: 'http://github.com/bitgraves' },
  { name: 'Twitch', url: 'http://twitch.tv/bitgraves', details: 'Live March 31', isHighlight: true },
];

const RELEASES_LINKS = [
  { name: 'LP', details: 'Forthcoming in 2020' },
  { name: 'Frames 1-3', url: 'https://bitgraves.bandcamp.com/album/frames-1-3', details: 'Dec 2018' },
  { name: 'Entropic Stare', url: 'https://bitgraves.bandcamp.com/album/entropic-stare', details: 'May 2018' },
  { name: 'Recovery Sequence', url: 'https://bitgraves.bandcamp.com/album/recovery-sequence', details: 'Oct 2017' },
];

// can use isHighlight: true
const LIVE_LINKS = [
  { name: 'Bit Graves / Housekeys / Leash', url: 'https://www.facebook.com/events/2501976026515799/', details: 'Aug 22, 2019 at Vermillion, Seattle' },
  { name: 'Wayward Music Series', url: 'http://www.waywardmusic.org/event/you-died-tree-cathedral-bit-graves/', details: 'Apr 12, 2019 at The Chapel, Seattle, with YOU DIED! and Tree Cathedral' },
  { name: 'Modular Nights', url: 'https://www.facebook.com/events/244738663059273/', details: 'Nov 17, 2018 at Substation, Seattle' },
  { name: 'Wayward Music Series', url: 'http://www.waywardmusic.org/event/bit-graves-jordan-rundle-marcus-price/', details: 'Jun 15, 2018 at The Chapel, Seattle, with Jordan Rundle and Marcus Price' },
  { name: 'Harmony Korine Rétrospective', url: 'https://www.centrepompidou.fr/cpv/agenda/event.action?param.id=FR_R-c0df2f56ea7a6fce6a17a459145ac63f&param.idSource=FR_E-c0df2f56ea7a6fce6a17a459145ac63f', details: 'Oct 6 - Nov 15, 2017, installation with video at Centre Pompidou, Paris' },
];

const WRITING_LINKS = [
  { name: 'Recording Bit Graves at Nels Motel', url: 'https://reading.supply/@ben/recording-bit-graves-at-nels-motel-VTNQcq', details: 'Jan 2020' },
  { name: 'Implementing a Pitch Shifter in SuperCollider', url: 'https://reading.supply/@ben/implementing-a-pitch-shifter-in-supercollider-Z0fcAX', details: 'May 2019' },
];

const VIDEO_LINKS = [
  { name: 'Live @ Wayward Music Series', url: 'https://www.youtube.com/watch?v=gt75p-YhP8M', details: 'full performance, Jun 15, 2018' },
  { name: 'Processing Chamber', url: 'https://www.youtube.com/watch?v=WAK9QDFg2so', details: 'in the living room, Aug 28, 2017' },
];

const SOCIAL_PREVIEW = {
  title: 'Recording Bit Graves at Nels Motel',
  caption: 'We wrote a short blog documenting our experience and process as we tracked a record.',
  category: 'Writing and process, January 2020',
  url: 'https://reading.supply/@ben/recording-bit-graves-at-nels-motel-VTNQcq',
};

class App extends Component {
  _renderLinks = (links) => {
    return (
      <ul>
        {links.map(link => {
          const detailsClass = (link.isHighlight) ? "highlight" : "details";
          return (
            <li className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              {link.details ? (<span className={detailsClass}>{link.details}</span>) : null}
            </li>
          );
        })}
      </ul>
    );
  };

  _renderSection = (name, links) => {
    return (
      <div className="section">
        <p>{name}</p>
        {this._renderLinks(links)}
      </div>
    );
  };

  _maybeRenderSocialPreview = () => {
    if (!SOCIAL_PREVIEW || !SOCIAL_PREVIEW.title) return null;
    const { title, url, caption, category } = SOCIAL_PREVIEW;
    return (
      <div id="SocialCTA">
	<a href={url}><div className="previewImg" /></a>
	<div className="previewDetails">
	  <a href={url} className="previewTitle">{title}</a>
	  <p className="previewCaption">{caption}</p>
	  <p className="previewCategory">{category}</p>
	</div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
	{this._maybeRenderSocialPreview()}
        {this._renderSection('bit graves', PRESENCE_LINKS)}
        {this._renderSection('releases', RELEASES_LINKS)}
        {this._renderSection('performances and installations', LIVE_LINKS)}
        {this._renderSection('writing and process', WRITING_LINKS)}
        {this._renderSection('video', VIDEO_LINKS)}
      </div>
    );
  }
}

export default App;
