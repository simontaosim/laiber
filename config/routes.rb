Rails.application.routes.draw do
  get 'user_active/cancel_collect_post'
  get 'idea_store/show_post'
  post 'user_active/collect_post'
  get 'user_active/login'
  get 'user_active/reg'
  get 'user_active/logout'
######idea_store
  get 'idea_store/post_a_post'
  get 'idea_store/get_posts'
  get 'idea_store/get_tags'
  get 'idea_store/get_session'
  get 'idea_store/get_one_post'
  get 'idea_store/get_comments'
  get 'idea_store/index'
  get 'idea_store/get_posts_from_topid'

  get 'invitation_admin/get_200_codes'
  get 'invitation_admin/index'

  mount Ckeditor::Engine => '/ckeditor'
  get 'home/index'
  get 'welcome/show_posts'
  get 'welcome/get_comments'
  get 'welcome/post_one_comment'
  get 'welcome/get_one_post'
  get 'welcome/get_tags'
  get 'get_test/index'
  post 'welcome/get_user_info'
  #get 'welcome/get_user_info'

  get 'personal_center/edit'

  post 'personal_center/upload'
  get 'personal_center/upload'
  patch 'personal_center/upload'

  devise_for :admins
  get 'personal_center/index'

  get 'user_mobile/is_name_exist'

  post 'user_mobile/create'
  post 'mobile_new_session/create'
  get 'mobile_new_session/create'

  get 'posts/all'

  post 'posts/all'

  get 'user_mobile/invite_judge'

  resources :posts

  get 'mobile_new_session/destory'

  get 'users/create_remote'

  get 'welcome/index'

  post 'user_sessions/user_exist'

  get 'user_sessions/success_info'

  post 'user_sessions/auth'

  resources :user_sessions


  resources :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  #mobileapp
  get 'mobile_app/posts/all'
  get 'mobile_app/posts/new'
  post 'mobile_app/posts/new'
  get 'mobile_app/posts/get'
  post 'mobile_app/posts/get'
  get 'mobile_app/posts/test'
  get 'mobile_app/posts/testName'

  get 'mobile_app/sign/signIn'
  post 'mobile_app/sign/signIn'
  get 'mobile_app/sign/autoSignIn'
  post 'mobile_app/sign/autoSignIn'
  get 'mobile_app/sign/signOut'
  post 'mobile_app/sign/signOut'

  get 'mobile_app/user/setPostFavor'
  post 'mobile_app/user/setPostFavor'
  get 'mobile_app/user/getFavorPosts'
  post 'mobile_app/user/getFavorPosts'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
