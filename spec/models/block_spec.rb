require 'rails_helper'

RSpec.describe Block, type: :model do
  it { should have_valid(:name).when("A1") }
  it { should_not have_valid(:name).when(nil, "")}

  it { should have_valid(:repetitions).when(1, 50) }
  it { should_not have_valid(:repetitions).when(5.6) }
  it { should_not have_valid(:repetitions).when(nil) }
  it { should_not have_valid(:repetitions).when(-1, 0, 51) }

  it { should have_valid(:measures).when(1, 50) }
  it { should_not have_valid(:measures).when(5.6) }
  it { should_not have_valid(:measures).when(nil) }
  it { should_not have_valid(:measures).when(-1, 0, 51) }

  it { should have_valid(:time_signature_over).when(nil) }
  it { should have_valid(:time_signature_over).when(1, 16) }
  it { should_not have_valid(:time_signature_over).when(5.6) }
  it { should_not have_valid(:time_signature_over).when(-1, 0, 17) }

  it { should have_valid(:time_signature_under).when(nil) }
  it { should have_valid(:time_signature_under).when(2, 4, 16) }
  it { should_not have_valid(:time_signature_under).when(3, 7) }
  it { should_not have_valid(:time_signature_under).when(5.6) }
  it { should_not have_valid(:time_signature_under).when(-1, 0, 17) }
end
