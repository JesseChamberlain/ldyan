class BlockSerializer < ActiveModel::Serializer
  attributes :id,
    :name,
    :repetitions,
    :measures,
    :time_signature_over,
    :time_signature_under,
    :musical_key,
    :song_id,
    :color,
    :location,
    :tempo
end
