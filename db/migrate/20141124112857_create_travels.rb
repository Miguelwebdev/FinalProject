class CreateTravels < ActiveRecord::Migration
  def change
    create_table :travels do |t|

      t.string :travel

      t.timestamps
    end
  end
end
