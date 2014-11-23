class PagesController < ApplicationController
  def front #por defecto, la vista se llama igual que su metodo del controlador
    
  end

  def grunge
    render layout: 'grayscaleFather'
  end

  def rock
    render layout: 'grayscaleFather2'
  end


  def pop
    render layout: 'grayscaleFather3'
  end
  
  def jazz
     render layout: 'grayscaleFather4'
  end
end
