# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Band.destroy_all
Album.destroy_all

u1 = User.create!(email: "j@j.com", password: "password")
u2 = User.create!(email: "a@a.com", password: "password")
u3 = User.create!(email: "s@s.com", password: "password")
u4 = User.create!(email: "d@d.com", password: "password")
u5 = User.create!(email: "f@f.com", password: "password")

b1 = Band.create!(name: "Sublime")
b2 = Band.create!(name: "The Doors")
b3 = Band.create!(name: "G. Love")
b4 = Band.create!(name: "Citizen Cope")
b5 = Band.create!(name: "J. Cole")

a1 = Album.create!(title: "asdkjf", year: 1990, live: true, band_id: b2.id)
a2 = Album.create!(title: "asdkjf", year: 1990, live: true, band_id: b5.id)
a3 = Album.create!(title: "asdkjf", year: 1990, live: false, band_id: b1.id)
a4 = Album.create!(title: "asdkjf", year: 1990, live: true, band_id: b4.id)
a5 = Album.create!(title: "asdkjf", year: 1990, live: false, band_id: b3.id)
