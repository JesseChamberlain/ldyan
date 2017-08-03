# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SONGS = [
  {
    name: "Asha",
    description: "The Astronomer"
  },
  {
    name: "Ashoka",
    description: "The Historian"
  },
  {
    name: "Nergui",
    description: "The Scout"
  },
  {
    name: "Seraphina",
    description: "The Leader"
  },
  {
    name: "Svejtlana",
    description: "The Horticulturist"
  },
  {
    name: "Dionisio",
    description: "The Builder"
  },
  {
    name: "Gorgias",
    description: "The Hacker"
  }
].freeze

SONGS.each do |s|
  song = Song.find_or_initialize_by(name: s[:name])
  song.assign_attributes(s)
  song.save!
end

BLOCKS = [
  {
    name: "I",
    color: "green",
    repetitions: "4",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "1",
    tempo: "68"
  },
  {
    name: "A1",
    color: "red",
    repetitions: "4",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "2",
    tempo: "68"
  },
  {
    name: "A2",
    color: "red",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "3",
    tempo: "68"
  },
  {
    name: "A3",
    color: "red",
    repetitions: "1",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "4",
    tempo: "68"
  },
  {
    name: "B1",
    color: "pink",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "5",
    tempo: "68"
  },
  {
    name: "B2",
    color: "pink",
    repetitions: "5",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "6",
    tempo: "68"
  },
  {
    name: "BB",
    color: "pink",
    repetitions: "1",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "7",
    tempo: "68"
  },
  {
    name: "C",
    color: "green",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "8",
    tempo: "68"
  },
  {
    name: "A4",
    color: "red",
    repetitions: "3",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id,
    location: "9",
    tempo: "68"
  }
].freeze

BLOCKS.each do |b|
  block = Block.new(
    name: b[:name],
    color: b[:color],
    repetitions: b[:repetitions],
    measures: b[:measures],
    time_signature_over: b[:time_signature_over],
    time_signature_under: b[:time_signature_under],
    musical_key: b[:musical_key],
    song_id: b[:song_id],
    location: b[:location],
    tempo: b[:tempo]
  )
  block.assign_attributes(b)
  block.save!
end
