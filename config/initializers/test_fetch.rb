require 'rest-client'

# get 100 game ids

    #for each game, check:
        #in appdetails:
            #response[string of game id]["success"] = must be true
            #response[string of game id]["data"]["required_age"] = must be less than 17
            #response[string of game id]["data"]["price_overview"] = must exist
            #response[string of game id]["data"]["release_date"]["coming_soon"] = must be false

# get game data from api

# save game data to SQL database

# save images to S3

# get reviews from api

# save reviews to SQL database




require 'open-uri'
# data = JSON.parse(RestClient.get("https://store.steampowered.com/api/appdetails/?appids=9050"))

# print data

# url = "https://store.steampowered.com/api/appdetails/?appids=206210"
# url2 = "http://store.steampowered.com/appreviews/1172380?json=1"
# url3 = "http://store.steampowered.com/api/featured/"
# url4 = "http://store.steampowered.com/api/featuredcategories/"
# data = JSON.parse(open(url4).read)

# puts data["large_capsules"][0]["name"]

# featured_arr = ["featured_win", "featured_mac", "featured_linux"]
# game_count = 1
# featured_arr.each do |featured|
#     data[featured].each do |game|
#         puts game["name"]
#         game_count += 1
#     end
# end

# puts game_count

# puts data["1172380"]["data"].keys

# puts JSON.pretty_generate(data)

# puts data
