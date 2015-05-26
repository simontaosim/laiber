class Helpers::PostsHelper
	CACHE_SIZE = 100

	def initialize
		init
	end

	def init
		@posts = []
		Post.desc(:created_at).limit(CACHE_SIZE).each_with_index do |f,index|
			@posts[index] = JSON.parse(f.to_json)
		end
		# @posts = Post.desc(:created_at).limit(CACHE_SIZE)
	end

	def get_posts(get_posts_params)
		if is_need_to_init
			init
		end
		return get_posts_by_limit_and_offset(@posts, get_posts_params[:num].to_i, 0)
	end

	def get_posts_for_top(get_posts_params, get_posts_for_top_params)
		old_top_oid = Utils::DbUtil.GetObjectIdFromJson(get_posts_for_top_params)
		if old_top_oid == nil
			return []
		end
		if is_need_to_init
			init
			old_top_index = @posts.index{|x| Utils::DbUtil.GetObjectIdFromHash(x) == old_top_oid}
			if old_top_index != nil
				return get_posts_by_limit_and_offset(@posts, [get_posts_params[:num].to_i, old_top_index].min, 0)
			else
				return "TODO"
			end
		else
			return []
		end
	end

	def get_posts_for_bottom(get_posts_params, get_posts_for_bottom_params)
		old_bottom_oid = Utils::DbUtil.GetObjectIdFromJson(get_posts_for_bottom_params)
		if old_bottom_oid == nil
			return []
		end
		if is_need_to_init
			init
		end
		old_bottom_index = @posts.index{|x| Utils::DbUtil.GetObjectIdFromHash(x) == old_bottom_oid}
		if old_bottom_index != nil
			return get_posts_by_limit_and_offset(@posts, get_posts_params[:num].to_i, old_bottom_index + 1)
		else
			return "TODO"
		end
	end

	private
	def is_need_to_init
		return true
	end

	def get_posts_by_limit_and_offset(posts, limit, offset)
		return posts.values_at(offset..(offset+limit-1))
	end
end