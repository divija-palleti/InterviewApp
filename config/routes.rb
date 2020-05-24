Rails.application.routes.draw do

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  resources :interviews

  root 'interviews#index'
  resources :interviewers
  resources :interviewees
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
