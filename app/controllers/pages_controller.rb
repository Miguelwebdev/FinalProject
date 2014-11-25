class PagesController < ApplicationController
  def front #por defecto, la vista se llama igual que su metodo del controlador
    
  end

  def grunge
    @travels = current_user.travels
    @travel = Travel.find_by(travel:"Grunge")
    render layout: 'grayscaleFather'
  end

  def rock
    @travels = current_user.travels
    @travel = Travel.find_by(travel:"Rock")
    render layout: 'grayscaleFather2'
  end


  def pop
    @travels = current_user.travels
    @travel = Travel.find_by(travel:"Pop")
    render layout: 'grayscaleFather3'
  end
  
  def jazz
     @travels = current_user.travels
     @travel = Travel.find_by(travel:"Jazz")
     render layout: 'grayscaleFather4'
  end
end
