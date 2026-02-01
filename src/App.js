import React, { Component } from 'react';
import './App.css';

const PRESS_LINKS = [
  {
    name: "Bit Graves' Cosmos-Friendly Synth Excursion",
    url: 'https://www.thestranger.com/music/2023/05/05/78978970/irreversible-entanglements-explosive-sun-ra-cover-and-bit-graves-cosmos-friendly-synth-excursion',
    details: 'Dave Segal for The Stranger, May 2023',
  },
];

const LISTEN_LINKS = [
  { name: 'Bandcamp', url: 'https://bitgraves.bandcamp.com/' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/bitgraves' },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/album/23IjKruZu0RnRqUUqOUy6V?si=ERsVz-8PR6Ccyzt8Uetofg',
  },
  { name: 'Apple Music', url: 'https://itunes.apple.com/us/artist/1519835767' },
  // { name: 'Tidal', url: 'https://store.tidal.com/us/album/146096838' },
];
const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/bitgraves/' },
  // { name: 'Twitch', url: 'http://twitch.tv/bitgraves', details: 'Live March 31' },
];
const CODE_LINKS = [{ name: 'GitHub', url: 'http://github.com/bitgraves' }];

const RELEASES_LINKS = [
  {
    name: 'Murmur',
    url: 'https://bitgraves.bandcamp.com/album/murmur',
    details: 'Digital / streaming, June 2, 2023',
  },
  {
    name: 'Bit Graves',
    url: 'https://bitgraves.bandcamp.com/album/bit-graves',
    details: 'Cassette / digital / streaming, June 2020',
  },
  {
    name: 'Older stuff',
    url: 'https://bitgraves.bandcamp.com/music',
    details: '2017-2018',
  },
];

// can use isHighlight: true
const LIVE_LINKS = [
  {
    name: 'Georgetown Steam Plant Science Fair',
    details: 'Sep 20, 2025',
    url: 'https://www.georgetownsteamplant.org/2025',
  },
  {
    name: 'V. Vecker / Bit Graves / Archival Image / Dion-Egg',
    details: 'Dec 12, 2024 at Casa del Xolo, Seattle',
  },
  {
    name: 'Daughters of Cacophony / Bit Graves / Peopling / SPLASTEEN',
    details: 'Apr 28, 2024 at Bad Bar, Seattle',
  },
  {
    name: 'Bit Graves / An Anomalous Wave / NV Electronica',
    url: 'https://everout.com/seattle/events/bit-graves-an-anomalous-wave-and-nv-electronica/e169254/',
    details: 'Feb 22, 2024 at Vermillion, Seattle',
  },
  {
    name: 'Bit Graves / Benjamin Marx / Mason Lynass',
    url: 'https://www.waywardmusic.org/?p=7685',
    details: 'Sep 15, 2023 at The Chapel, Seattle',
  },
  {
    name: 'Unity Garnish / Bit Graves / EAMS',
    url: 'https://soundcloud.com/bitgraves/march-4-2022-at-the-chapel-performance-space',
    details: 'Mar 4, 2022 at The Chapel, Seattle',
  },
  {
    name: 'Wayward in Limbo Podcast #80',
    url: 'https://www.waywardmusic.org/?p=5880',
    details: 'Jan 8, 2021',
  },
  {
    name: 'Bit Graves / Housekeys / Leash',
    url: 'https://www.facebook.com/events/2501976026515799/',
    details: 'Aug 22, 2019 at Vermillion, Seattle',
  },
  {
    name: 'Wayward Music Series',
    url: 'http://www.waywardmusic.org/event/you-died-tree-cathedral-bit-graves/',
    details: 'Apr 12, 2019 at The Chapel, Seattle, with YOU DIED! and Tree Cathedral',
  },
  /* {
    name: 'Modular Nights',
    url: 'https://www.facebook.com/events/244738663059273/',
    details: 'Nov 17, 2018 at Substation, Seattle',
  }, */
  {
    name: 'Wayward Music Series',
    url: 'http://www.waywardmusic.org/event/bit-graves-jordan-rundle-marcus-price/',
    details: 'Jun 15, 2018 at The Chapel, Seattle, with Jordan Rundle and Marcus Price',
  },
  {
    name: 'Harmony Korine Rétrospective',
    url: 'https://www.centrepompidou.fr/en/program/calendar/event/cMgReqj',
    details:
      'Oct 6 - Nov 15, 2017, music for short film installation "Drum Ass" at Centre Pompidou, Paris',
  },
];

const WRITING_LINKS = [
  {
    name: 'Creating an audiovisual set: Performing with hydra, while also performing music',
    url: 'https://reading.supply/@ben/creating-an-audiovisual-set-performing-with-hydra-while-also-performing-music-v5Enf1',
    details: 'Sep 2023',
  },
  {
    name: 'Creating cover art and hydra videos for Murmur',
    url: 'https://reading.supply/@ben/bit-graves-creating-cover-art-and-hydra-videos-for-murmur-p5hQ3D',
    details: 'May 2023',
  },
  {
    name: 'Recording, and re-recording, the next Bit Graves album',
    url: 'https://reading.supply/@ben/recording-and-re-recording-the-next-bit-graves-album-Gq59OU',
    details: 'Nov 2022',
  },
  {
    name: 'Controlling a drum machine with SuperCollider, MIDI, and Monome Norns',
    url: 'https://reading.supply/@ben/controlling-a-drum-machine-with-supercollider-midi-and-monome-norns-DiQUAW',
    details: 'Feb 2021',
  },
  {
    name: 'Assembling a Bit Graves Record: Mixing, Packaging, and More',
    url: 'https://reading.supply/@ben/assembling-a-bit-graves-record-mixing-packaging-and-more-bXWIMc',
    details: 'Apr 2020',
  },
  {
    name: 'Recording Bit Graves at Nels Motel',
    url: 'https://reading.supply/@ben/recording-bit-graves-at-nels-motel-VTNQcq',
    details: 'Jan 2020',
  },
  {
    name: 'Implementing a Pitch Shifter in SuperCollider',
    url: 'https://reading.supply/@ben/implementing-a-pitch-shifter-in-supercollider-Z0fcAX',
    details: 'May 2019',
  },
];

const VIDEO_LINKS = [
  {
    name: 'Live at the Wayward Music Series',
    url: 'https://www.youtube.com/watch?v=VzJbEyBwEbE',
    details: 'September 15, 2023',
  },
  {
    name: 'baikal',
    url: 'https://youtu.be/HjcY6ooLjvM',
    details: 'Hydra visualizer, June 2023',
  },
  {
    name: 'bigfish',
    url: 'https://youtu.be/E-kVV_5_Th4',
    details: 'Hydra visualizer, May 2023',
  },
  {
    name: 'pluck2',
    url: 'https://youtu.be/UTMJtcyKYT0',
    details: 'Hydra visualizer, May 2023',
  },
  {
    name: 'Modular Nights',
    url: 'https://youtu.be/JS4A9E98I-A?t=1451',
    details: 'Live set, Dec 11, 2022',
  },
  /* {
    name: 'Modular Nights',
    url: 'https://www.youtube.com/watch?t=1926&v=41I7iniHjI0&feature=youtu.be',
    details: 'Live set, Feb 6, 2021',
  }, */
  {
    name: 'Strict Tempo - Mercury at Machinewerks Benefit',
    url: 'https://youtu.be/OXb8RemJH8c',
    details: 'Live set, Jan 10, 2021',
  },
  {
    name: 'Byax',
    url: 'https://youtu.be/SCnM5eTCtdc',
    details: 'from our rehearsal space, July 27, 2020',
  },
  {
    name: 'Hexians',
    url: 'https://www.youtube.com/watch?v=OEYKgQQewc0',
    details: 'from our rehearsal space, June 30, 2020',
  },
  {
    name: 'Processing Chamber',
    url: 'https://www.youtube.com/watch?v=WAK9QDFg2so',
    details: 'in the living room, Aug 28, 2017',
  },
];

const SOCIAL_PREVIEW = {
  title: 'Bit Graves - Live at the Wayward Music Series',
  caption: 'Live video / Sep 15, 2023',
  category: '',
  url: 'https://www.youtube.com/watch?v=VzJbEyBwEbE',
};

class App extends Component {
  _renderLinks = (links) => {
    return (
      <ul>
        {links.map((link) => {
          const detailsClass = link.isHighlight ? 'highlight' : 'details';
          return (
            <li className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
              {link.details ? <span className={detailsClass}>{link.details}</span> : null}
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
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
            {ii < links.length - 1 ? ', ' : null}
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
    const { title, url, caption } = SOCIAL_PREVIEW;
    return (
      <div id="SocialCTA">
        <a href={url}>
          <div className="previewImg" />
        </a>
        <div className="previewDetails">
          <a href={url} className="previewTitle">
            {title}
          </a>
          <p className="previewCaption">{caption}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this._maybeRenderSocialPreview()}
        <div className="section" id="bio">
          <p>
            <span>Bit Graves</span> is an electronic music collaboration in Seattle.
          </p>
          <p>
            <span>Listen</span> on {this._renderLinksList(LISTEN_LINKS)}. Follow updates on{' '}
            {this._renderLinksList(SOCIAL_LINKS)}. Explore source code on{' '}
            {this._renderLinksList(CODE_LINKS)}.
          </p>
          <p>
            <a href="mailto:'contact.bitgraves at gmail'">Contact</a>.
          </p>
        </div>
        {this._renderSection('releases', RELEASES_LINKS)}
        {this._renderSection('press', PRESS_LINKS)}
        {this._renderSection('writing and process', WRITING_LINKS)}
        {this._renderSection('video', VIDEO_LINKS)}
        {this._renderSection('appearances', LIVE_LINKS)}
      </div>
    );
  }
}

export default App;
