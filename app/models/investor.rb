class Investor < User
	field :role, type: String
	field :wechat, type: String
	field :company, type: String
	field :position, type: String
	field :used_be_part_in, type: String
	field :plan_to_pay, type: String
end