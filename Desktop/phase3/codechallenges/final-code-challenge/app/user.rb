class User < ActiveRecord::Base
    has_many :reviews
    has_many :products, through: :reviews
    def favorite_product
        highest_review = reviews.maximum(:star_rating)
        favorite = reviews.find_by(star_rating: highest_review).product
        favorite
    end
    def remove_reviews(product)
        reviews.where(product: product).destroy_all
    end
end