Rails.application.routes.draw do

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  resources :interviews
  resources :interviewers
  resources :interviewees
  

  root 'interviews#react'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
