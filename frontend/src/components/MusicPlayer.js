import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const moodLibrary = {
    Happy: [
      { title: "Zen Flute", file: "/music/flute.mp3" },
      { title: "Ocean Waves", file: "/music/ocean.mp3" }
    ],

    Relaxed: [
      { title: "Forest Calm", file: "/music/forest.mp3" },
      { title: "Soft Rain", file: "/music/rain.mp3" }
    ],

    Stressed: [
      { title: "Healing Frequency", file: "/music/healing.mp3" },
      { title: "Deep Meditation", file: "/music/deep.mp3" }
    ],

    Angry: [
      { title: "Slow Calm", file: "/music/calm.mp3" },
      { title: "Zen Tone", file: "/music/zen.mp3" }
    ]
  };

  const moods = Object.keys(moodLibrary);

  const [mood, setMood] = useState("Relaxed");
  const [playlist, setPlaylist] = useState(moodLibrary["Relaxed"]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(true);

  /* Update Playlist When Mood Changes */
  useEffect(() => {
    setPlaylist(moodLibrary[mood]);
    setIndex(0);
    setPlaying(false);
  }, [mood]);

  /* Update Volume */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  /* Play / Pause */
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  /* Next Song */
  const nextSong = () => {
    setIndex((prev) => (prev + 1) % playlist.length);
  };

  /* Previous Song */
  const prevSong = () => {
    setIndex((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
  };

  /* Auto play when song changes */
  useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [index]);

  return (
    <div>

      <h3 style={{ marginBottom: 15 }}>🎵 Mood Music Player</h3>

      {/* Mood Select */}
      <select
        className="input"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        {moods.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>

      {/* Playlist Select */}
      <select
        className="input"
        value={index}
        onChange={(e) => {
          setIndex(Number(e.target.value));
        }}
      >
        {playlist.map((song, i) => (
          <option key={i} value={i}>
            {song.title}
          </option>
        ))}
      </select>

      {/* 🎧 MUSIC CONTROLS */}
      <div className="player-controls">

        <button className="player-btn" onClick={prevSong}>
          ⏮
        </button>

        <button
          className="player-btn play-btn"
          onClick={togglePlay}
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button className="player-btn" onClick={nextSong}>
          ⏭
        </button>

      </div>

      {/* Volume */}
      <div style={{ marginTop: 20 }}>
        <label>Volume</label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Loop */}
      <div style={{ marginTop: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={loop}
            onChange={() => setLoop(!loop)}
          />
          Loop Music
        </label>
      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        src={playlist[index].file}
        loop={loop}
      />

    </div>
  );
}