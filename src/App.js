import React, { Component } from 'react';
import './App.css';

const LISTEN_LINKS = [
  { name: 'Bandcamp', url: 'https://bitgraves.bandcamp.com/' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/bitgraves' },
  { name: 'Spotify', url: 'https://open.spotify.com/album/23IjKruZu0RnRqUUqOUy6V?si=ERsVz-8PR6Ccyzt8Uetofg' },
  { name: 'Apple Music', url: 'https://itunes.apple.com/us/artist/1519835767' },
  // { name: 'Tidal', url: 'https://store.tidal.com/us/album/146096838' },
];
const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/bitgraves/' },
  // { name: 'Twitch', url: 'http://twitch.tv/bitgraves', details: 'Live March 31' },
];
const CODE_LINKS = [
  { name: 'GitHub', url: 'http://github.com/bitgraves' },
];

const RELEASES_LINKS = [
  { name: 'Bit Graves', url: 'https://bitgraves.bandcamp.com/', details: 'Cassette / digital / streaming, June 2020' },
  { name: 'Frames 1-3', url: 'https://bitgraves.bandcamp.com/album/frames-1-3', details: 'digital, Dec 2018' },
  { name: 'Entropic Stare', url: 'https://bitgraves.bandcamp.com/album/entropic-stare', details: 'digital, May 2018' },
  { name: 'Recovery Sequence', url: 'https://bitgraves.bandcamp.com/album/recovery-sequence', details: 'digital, Oct 2017' },
];

// can use isHighlight: true
const LIVE_LINKS = [
  { name: 'Wayward in Limbo Podcast #80', url: 'https://www.waywardmusic.org/?p=5880', details: 'Jan 8, 2021', isHighlight: true },
  { name: 'Bit Graves / Housekeys / Leash', url: 'https://www.facebook.com/events/2501976026515799/', details: 'Aug 22, 2019 at Vermillion, Seattle' },
  { name: 'Wayward Music Series', url: 'http://www.waywardmusic.org/event/you-died-tree-cathedral-bit-graves/', details: 'Apr 12, 2019 at The Chapel, Seattle, with YOU DIED! and Tree Cathedral' },
  { name: 'Modular Nights', url: 'https://www.facebook.com/events/244738663059273/', details: 'Nov 17, 2018 at Substation, Seattle' },
  { name: 'Wayward Music Series', url: 'http://www.waywardmusic.org/event/bit-graves-jordan-rundle-marcus-price/', details: 'Jun 15, 2018 at The Chapel, Seattle, with Jordan Rundle and Marcus Price' },
  { name: 'Harmony Korine Rétrospective', url: 'https://www.centrepompidou.fr/en/program/calendar/event/cMgReqj', details: 'Oct 6 - Nov 15, 2017, music for short film installation "Drum Ass" at Centre Pompidou, Paris' },
];

const WRITING_LINKS = [
  { name: 'Controlling a drum machine with SuperCollider, MIDI, and Monome Norns', url: 'https://reading.supply/@ben/controlling-a-drum-machine-with-supercollider-midi-and-monome-norns-DiQUAW', details: 'Feb 2021', isHighlight: true },
  { name: 'Assembling a Bit Graves Record: Mixing, Packaging, and More', url: 'https://reading.supply/@ben/assembling-a-bit-graves-record-mixing-packaging-and-more-bXWIMc', details: 'Apr 2020' },
  { name: 'Recording Bit Graves at Nels Motel', url: 'https://reading.supply/@ben/recording-bit-graves-at-nels-motel-VTNQcq', details: 'Jan 2020' },
  { name: 'Implementing a Pitch Shifter in SuperCollider', url: 'https://reading.supply/@ben/implementing-a-pitch-shifter-in-supercollider-Z0fcAX', details: 'May 2019' },
];

const VIDEO_LINKS = [
  { name: 'Modular Nights', url: 'https://www.youtube.com/watch?t=1926&v=41I7iniHjI0&feature=youtu.be', details: 'Live set, Feb 6, 2021', isHighlight: true },
  { name: 'Strict Tempo - Mercury at Machinewerks Benefit', url: 'https://youtu.be/OXb8RemJH8c', details: 'Live set, Jan 10, 2021' },
  { name: 'Byax', url: 'https://youtu.be/SCnM5eTCtdc', details: 'live from our rehearsal space, July 27, 2020' },
  { name: 'Hexians', url: 'https://www.youtube.com/watch?v=OEYKgQQewc0', details: 'live from our rehearsal space, June 30, 2020' },
  { name: 'Processing Chamber', url: 'https://www.youtube.com/watch?v=WAK9QDFg2so', details: 'in the living room, Aug 28, 2017' },
];

const SOCIAL_PREVIEW = null;
/* {
  title: 'Bit Graves: Self titled',
  caption: 'Cassette / digital / streaming',
  category: 'June 2020',
  url: 'https://bitgraves.bandcamp.com',
}; */

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

  _renderLinksList = (links) => {
    return (
      <span>
	{links.map(({ name, url }, ii) => (
	  <React.Fragment>
	    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
	    {(ii < links.length - 1) ? ', ' : null}
	  </React.Fragment>
	))}
      </span>
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
	<div className="section" id="bio">
	  <p><span>Bit Graves</span> is an electronic music collaboration in Seattle.</p>
	  <p><span>Listen</span> on {this._renderLinksList(LISTEN_LINKS)}. Follow updates on {this._renderLinksList(SOCIAL_LINKS)}. Explore source code on {this._renderLinksList(CODE_LINKS)}.</p>
	  <p><a href="mailto:'contact.bitgraves at gmail'">Contact</a>.</p>
	</div>
        {this._renderSection('selected appearances', LIVE_LINKS)}
        {this._renderSection('releases', RELEASES_LINKS)}
        {this._renderSection('writing and process', WRITING_LINKS)}
        {this._renderSection('video', VIDEO_LINKS)}
      </div>
    );
  }
}

export default App;
