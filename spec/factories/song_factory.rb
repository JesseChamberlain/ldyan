FactoryGirl.define do
  factory :song do
    sequence(:name) {|n| "Name#{n}"}
    description "Details"
  end
end
