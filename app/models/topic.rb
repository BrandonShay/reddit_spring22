class Topic < ApplicationRecord
  belongs_to :sub
  has_many :comments, dependant: :destroy

  validates :title, :body, presence: true
end
