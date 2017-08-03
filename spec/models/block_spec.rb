require 'rails_helper'

RSpec.describe Block, type: :model do
  it { should have_valid(:name).when("A1") }
  it { should_not have_valid(:name).when(nil, "")}

  it { should have_valid(:color).when("green", "pink") }
  it { should_not have_valid(:color).when(nil, "")}

  it { should have_valid(:repetitions).when(1, 50) }
  it { should_not have_valid(:repetitions).when(5.6) }
  it { should_not have_valid(:repetitions).when(nil, "") }
  it { should_not have_valid(:repetitions).when("twenty") }
  it { should_not have_valid(:repetitions).when(-1, 0, 51) }

  it { should have_valid(:measures).when(1, 50) }
  it { should_not have_valid(:measures).when(5.6) }
  it { should_not have_valid(:measures).when(nil, "") }
  it { should_not have_valid(:measures).when("twenty") }
  it { should_not have_valid(:measures).when(-1, 0, 51) }

  it { should have_valid(:time_signature_over).when(nil, "") }
  it { should have_valid(:time_signature_over).when(1, 16) }
  it { should_not have_valid(:time_signature_over).when(5.6) }
  it { should_not have_valid(:time_signature_over).when("twenty") }
  it { should_not have_valid(:time_signature_over).when(-1, 0, 17) }

  it { should have_valid(:time_signature_under).when(nil, "") }
  it { should have_valid(:time_signature_under).when(2, 4, 16) }
  it { should_not have_valid(:time_signature_under).when(3, 7) }
  it { should_not have_valid(:time_signature_under).when(5.6) }
  it { should_not have_valid(:time_signature_under).when("twenty") }
  it { should_not have_valid(:time_signature_under).when(-1, 0, 17) }

  it { should have_valid(:location).when(1, 4, 16) }
  it { should_not have_valid(:location).when(nil, "") }
  it { should_not have_valid(:location).when("twenty") }
  it { should_not have_valid(:location).when(-1, 0) }

  it { should have_valid(:tempo).when(nil, "") }
  it { should have_valid(:tempo).when(1, 75, 250) }
  it { should_not have_valid(:tempo).when(75.6) }
  it { should_not have_valid(:tempo).when("twenty") }
  it { should_not have_valid(:tempo).when(-1, 0, 251) }
end
