# == Schema Information
#
# Table name: albums
#
#  id      :bigint           not null, primary key
#  title   :string           not null
#  year    :integer          not null
#  live    :boolean
#  band_id :integer          not null
#

class Album < ApplicationRecord

  belongs_to :band,
    class_name: :Band,
    foreign_key: :band_id
end
