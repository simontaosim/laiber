Rails.application.routes.draw do
  get 'home/index'
  get 'welcome/show_posts'
  get 'welcome/get_comments'
  get 'welcome/post_one_comment'
  get 'welcome/get_one_post'
  get 'get_test/index'
  get 'welcome/get_user_info'

  get 'personal_center/edit'

  get 'personal_center/upload'

  devise_for :admins
  mount RailsAdmin::Engine => '/poo_poo_admin', as: 'rails_admin'
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

  get 'user_sessions/user_exist'

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
