json.array!(@users) do |user|
  json.extract! user, :id, :name, :screct_pass, :invite_code
  json.url user_url(user, format: :json)
end
