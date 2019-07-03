# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    attr_reader :password
    
    validates :username, :email_address, :password_digest, :session_token, presence: true
    validates :username, :email_address, uniqueness: true
    validates :password, length: { minimum: 8 }, allow_nil: true
    

    #associations!


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        return user if user.is_password?(password) 
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    after_initialize :ensure_session_token

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
