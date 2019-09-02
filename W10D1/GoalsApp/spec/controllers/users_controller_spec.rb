require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { User.create(username: 'michaeljordan', password: 'hunter2') }

  describe "GET #index" do
    it 'renders the list of users' do 
   
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "GET #new" do
    it "renders a new user" do
      get :new
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    it "creates a new user" do
      post :create, params: {user: {username: 'michaeljordan', password: 'hunter2'}}
      expect(user.username).to eq(users.last.username)
    end
  end
end
