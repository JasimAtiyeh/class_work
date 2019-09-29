json.set! 'pokemon' do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
  json.image_url asset_path(@poke.image_url)
end

@poke.items.each do |item|
  json.set! "items" do
    json.set! "#{item.id}" do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
