class PagesController < ApplicationController
  def front #por defecto, la vista se llama igual que su metodo del controlador
    
  end

  def grunge
    render layout: 'grayscaleFather'
  end

  def rock
   
  end

  def jazz
   
  end

  def pop

  end
end
