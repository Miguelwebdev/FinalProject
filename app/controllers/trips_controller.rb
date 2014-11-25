class TripsController < ApplicationController
  before_action :authenticate_user!

  def create    
    current_user.trips.create(travel_id:params[:id])

    redirect_to :back     
  end



end