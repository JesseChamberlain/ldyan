require 'rails_helper'

RSpec.describe Song, type: :model do
  it { should have_valid(:name).when("Unamed New Song") }
  it { should_not have_valid(:name).when(nil, "")}
end
