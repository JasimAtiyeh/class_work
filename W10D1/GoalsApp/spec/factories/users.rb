FactoryBot.define do
  factory :user do
    username { Faker::Superhero.power }
    password { "hunter2" }
  end
end
