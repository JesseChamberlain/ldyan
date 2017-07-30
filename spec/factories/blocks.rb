FactoryGirl.define do
  factory :block do
    sequence(:name) {|n| "A#{n}"}
    name "I"
    color "green"
    repetitions "4"
    measures "8"
    time_signature_over "6"
    time_signature_under "8"
    musical_key "C Arabic"
  end
end
