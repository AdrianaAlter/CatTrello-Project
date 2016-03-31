Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:index, :new, :create, :show]
    resources :boards, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  end
end