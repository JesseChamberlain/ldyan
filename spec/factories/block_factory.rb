FactoryGirl.define do
  factory :block do
    sequence(:name) {|n| "A#{n}"}
    repetitions "4"
    measures "8"
    time_signature_over "6"
    time_signature_under "8"
    musical_key "C Arabic"
    song_id "4"
    color "green"
    sequence(:location) {|n| "#{n}"}
    tempo "75"
  end
end
