class Block < ApplicationRecord
  validates :name, presence: true
  validates :color, presence: true
  validates_numericality_of :repetitions,
    presence: true,
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 50
  validates_numericality_of :measures,
    presence: true,
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 50
  validates_numericality_of :time_signature_over,
    allow_nil: true,
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 16
  validates_numericality_of :time_signature_under,
    even: true,
    allow_nil: true,
    only_integer: true,
    greater_than_or_equal_to: 2,
    less_than_or_equal_to: 16
  validates_numericality_of :location,
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 250
  validates_numericality_of :tempo,
    allow_nil: true,
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 250

  belongs_to :song
end
