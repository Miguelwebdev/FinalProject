class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|

      t.integer :user_id
      t.integer :travel_id
      t.date    :date
     

      t.timestamps
    end
  end
end
