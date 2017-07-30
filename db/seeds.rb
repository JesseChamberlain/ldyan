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
    repetitions: "4",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "A",
    repetitions: "4",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "A",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "A",
    repetitions: "1",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "B",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "B",
    repetitions: "5",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "BB",
    repetitions: "1",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "A",
    repetitions: "2",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  },
  {
    name: "C",
    repetitions: "3",
    measures: "8",
    time_signature_over: "6",
    time_signature_under: "8",
    musical_key: "C Arabic",
    song_id: Song.find_by(name: "Seraphina").id
  }
].freeze

BLOCKS.each do |b|
  block = Block.find_or_initialize_by(song_id: Song.find_by(id: b[:song_id]).id)
  block.assign_attributes(b)
  block.save!
end
