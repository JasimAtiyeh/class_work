require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  
  let!(:user) { User.create(username: 'michaeljordan', password: 'hunter2') }

  describe "presence of username, password_digest, and session_token" do 
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
   
   # it { should validate_presence_of(:session_token) }
  end

  describe "uniqueness of username and session_token" do
    # user = create(:user)
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:session_token) }
  end

  describe "length of password" do
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe "user #password=" do 
  end

end
