class User < ActiveRecord::Base
	validates :session_token, :password_digest, :username, presence: true
	validates :username, :password_digest, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}
	after_initialize :ensure_session_token
	attr_accessor :password

	def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def self.find_by_credential(username, password)
		user = User.find_by_username(username)
		return nil if user.nil?
		return user if user.is_password?(password)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password);
	end

	def reset_session_token
		self.session_token = self.class.generate_session_token
		self.save!
		sefl.session_token
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	private
	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
