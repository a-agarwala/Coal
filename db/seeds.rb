# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do

user1 = User.create(
    username: 'DemoUser', 
    email_address: 'DemoUser@gmail.com',
    password: "demopassword",
    wallet: 10000

)
user2 = User.create(
    username: "toastoftheundead",
    email_address: "toastoftheundead@gmail.com",
    password: "password",
    wallet: 10000

)
user3 = User.create(
    username: "lethalbacon",
    email_address: "lethalbacon@gmail.com",
   password: "password",
    wallet: 10000

)
user4 = User.create(
    username: "Cthuluhoop",
    email_address: "Cthuluhoop@gmail.com",
   password: "password",
    wallet: 10000

)
user5 = User.create(
    username: "HPDeskjet",
    email_address: "HPDeskjet@gmail.com",
   password: "password",
    wallet: 10000

)
user6 = User.create(
    username: "ProgressTracker",
    email_address: "ProgressTracker@aa.io",
   password: "password",
    wallet: 10000

)
user7 = User.create(
    username: "Pandabear",
    email_address: "Pandabear@gmail.com",
   password: "password",
    wallet: 10000

)
user8 = User.create(
    username: "grandma",
    email_address: "grandma@gmail.com",
   password: "password",
    wallet: 10000

)
user9 = User.create(
    username: "BadBaneCat",
    email_address: "BadBaneCat@gmail.com",
   password: "password",
    wallet: 10000

)
user10 = User.create(
    username: "UpsetSleepybear",
    email_address: "UpsetSleepybear@gmail.com",
   password: "password",
    wallet: 10000

)


tod = Game.create(
    title: "The Typing of the Dead: Overkill",
    price: 1999,
    release_date: "Oct 29, 2013",
    developer: "Modern Dream",
    publisher: "SEGA",
    side_text: "Typing of the dead: Overkill fuses the horror and comedy of the legendary House of the Dead series with unique typing mechanics in order to deliver a truly original gaming experience! This gruesome shooter puts you in the middle of a mutant outbreak in Bayou county."
)

tod1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod1.jpg")
tod2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod2.jpg")
tod3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod3.jpg")
tod4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod4.jpg")
tod5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod5.jpg")
tod6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod6.jpg")
tod7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod7.jpg")
tod8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod8.jpg")
tod9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/tod/tod9.jpg")

tod.photos.attach(io: tod1, filename: 'tod1.jpg')
tod.photos.attach(io: tod2, filename: 'tod2.jpg')
tod.photos.attach(io: tod3, filename: 'tod3.jpg')
tod.photos.attach(io: tod4, filename: 'tod4.jpg')
tod.photos.attach(io: tod5, filename: 'tod5.jpg')
tod.photos.attach(io: tod6, filename: 'tod6.jpg')
tod.photos.attach(io: tod7, filename: 'tod7.jpg')
tod.photos.attach(io: tod8, filename: 'tod8.jpg')
tod.photos.attach(io: tod9, filename: 'tod9.jpg')

Review.create(
    author_id: 2,
    game_id: 1,
    recommended: true,
    body: "Absolutely great game. It's got a great sense of humor, and awesome gameplay. It also has the original The House of The Dead: Overkill on it, which is cool if you suck at typing. But let's hope you don't!"
)
Review.create(
    author_id: 3,
    game_id: 1,
    recommended: true,
    body: "My type of game."
)
Review.create(
    author_id: 8,
    game_id: 1,
    recommended: false,
    body: "It is with heavy heart that I don't recommend Overkill. I love the first Typing of the Dead, its campy humor and the gameplay. While Overkill for the most part brings back that gameplay, it replaces the campy charm of a bad zombie movie played dead-pan with a mean spirited version of camp."
)
Review.create(
    author_id: 10,
    game_id: 1,
    recommended: true,
    body: "It's low-effort review season again! Don't you just love sales?"
)
Review.create(
    author_id: 6,
    game_id: 1,
    recommended: false,
    body: "Game used to start, now it won't start at all. Other users are having this problem as well."
)
Review.create(
    author_id: 4,
    game_id: 1,
    recommended: true,
    body: "Simply amazing"
)


hltwo = Game.create(
    title: "Half-Life 2",
    price: 999,
    release_date: "Nov 16, 2004",
    developer: "Valve",
    publisher: "Valve",
    side_text: "By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around him, from the physical environment to the behaviors even the emotions of both friends and enemies."
)

hltwo1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo1.jpg")
hltwo2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo2.jpg")
hltwo3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo3.jpg")
hltwo4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo4.jpg")
hltwo5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo5.jpg")
hltwo6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo6.jpg")
hltwo7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo7.jpg")
hltwo8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo8.jpg")
hltwo9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo9.jpg")
hltwo10 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/hltwo/hltwo10.jpg")

hltwo.photos.attach(io: hltwo1, filename: 'hltwo1.jpg')
hltwo.photos.attach(io: hltwo2, filename: 'hltwo2.jpg')
hltwo.photos.attach(io: hltwo3, filename: 'hltwo3.jpg')
hltwo.photos.attach(io: hltwo4, filename: 'hltwo4.jpg')
hltwo.photos.attach(io: hltwo5, filename: 'hltwo5.jpg')
hltwo.photos.attach(io: hltwo6, filename: 'hltwo6.jpg')
hltwo.photos.attach(io: hltwo7, filename: 'hltwo7.jpg')
hltwo.photos.attach(io: hltwo8, filename: 'hltwo8.jpg')
hltwo.photos.attach(io: hltwo9, filename: 'hltwo9.jpg')
hltwo.photos.attach(io: hltwo10, filename: 'hltwo10.jpg')

Review.create(
    author_id: 3,
    game_id: 2,
    recommended: true,
    body: "Plz Half-Life 3 GabeN"
)
Review.create(
    author_id: 9,
    game_id: 2,
    recommended: true,
    body: "If you haven't played this game yet, you're doing life wrong."
)
Review.create(
    author_id: 7,
    game_id: 2,
    recommended: true,
    body: "This is the best video game in my whole life!"
)
Review.create(
    author_id: 10,
    game_id: 2,
    recommended: true,
    body: "how do i get off the train at the start"
)
Review.create(
    author_id: 2,
    game_id: 2,
    recommended: false,
    body: "It's overrated, a rather mediocre shooter compared to the first game which is a classic. I highly recommend Half Life 1 but this game is just a big disappointment in comparison. Completely different design philosophy. Not bad but just not good either."
)
Review.create(
    author_id: 5,
    game_id: 2,
    recommended: false,
    body: "got stuck in an infinite death loop boring and buggy 10/10"
)
Review.create(
    author_id: 8,
    game_id: 2,
    recommended: true,
    body: "never played half life this is the first time/one ive enjoyed it so far tho i feel ima be let down because of no half life 3.....cliff hanger i have been abel to avoid spoilers atleast all these years.. the physics in this game are awsome exp for this age of it"
)

terr = Game.create(
    title: "Terraria",
    price: 999,
    release_date: "May 16, 2011",
    developer: "Re-Logic",
    publisher: "Re-Logic",
    side_text: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!"
)

terr1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr1.jpg")
terr2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr2.jpg")
terr3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr3.jpg")
terr4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr4.jpg")
terr5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr5.jpg")
terr6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr6.jpg")
terr7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr7.jpg")
terr8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr8.jpg")
terr9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr9.jpg")
terr10 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/terr/terr10.jpg")

terr.photos.attach(io: terr1, filename: 'terr1.jpg')
terr.photos.attach(io: terr2, filename: 'terr2.jpg')
terr.photos.attach(io: terr3, filename: 'terr3.jpg')
terr.photos.attach(io: terr4, filename: 'terr4.jpg')
terr.photos.attach(io: terr5, filename: 'terr5.jpg')
terr.photos.attach(io: terr6, filename: 'terr6.jpg')
terr.photos.attach(io: terr7, filename: 'terr7.jpg')
terr.photos.attach(io: terr8, filename: 'terr8.jpg')
terr.photos.attach(io: terr9, filename: 'terr9.jpg')
terr.photos.attach(io: terr10, filename: 'terr10.jpg')

Review.create(
    author_id: 2,
    game_id: 3,
    recommended: true,
    body: "hasnt gotten old after 4000+ hrs of gameplay"
)
Review.create(
    author_id: 4,
    game_id: 3,
    recommended: true,
    body: "It's amazing how Terraria supports Minecraft, and Minecraft supports Terraria, making the Terraria vs Minecraft war useless. :)"
)
Review.create(
    author_id: 3,
    game_id: 3,
    recommended: true,
    body: "Yes."
)
Review.create(
    author_id: 8,
    game_id: 3,
    recommended: true,
    body: "I don't know if it's possible for someone to not know what Terraria is at this point.
However the more positive reviews this game has the better so I'm adding one."
)
Review.create(
    author_id: 9,
    game_id: 3,
    recommended: false,
    body: "game is easy when you get all the good stuff"
)


empires = Game.create(
    title: "Age of Empires II HD",
    price: 1999,
    release_date: "Apr 9, 2013",
    developer: "Skybox Labs",
    publisher: "Xbox Game Studios",
    side_text: "Age of Empires II has been re-imagined in high definition with new features, trading cards, improved AI, workshop support, multiplayer, Steamworks integration and more!"
)

empires1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires1.jpg")
empires2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires2.jpg")
empires3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires3.jpg")
empires4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires4.jpg")
empires5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires5.jpg")
empires6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires6.jpg")
empires7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/empires/empires7.jpg")

empires.photos.attach(io: empires1, filename: 'empires1.jpg')
empires.photos.attach(io: empires2, filename: 'empires2.jpg')
empires.photos.attach(io: empires3, filename: 'empires3.jpg')
empires.photos.attach(io: empires4, filename: 'empires4.jpg')
empires.photos.attach(io: empires5, filename: 'empires5.jpg')
empires.photos.attach(io: empires6, filename: 'empires6.jpg')
empires.photos.attach(io: empires7, filename: 'empires7.jpg')


Review.create(
    author_id: 3,
    game_id: 4,
    recommended: true,
    body: "good game if you like crusading against anyone"
)
Review.create(
    author_id: 8,
    game_id: 4,
    recommended: true,
    body: "What can I say, this game is a classic. Call your friends, or play random people, maybe even just play the computer. Not many games stand the test of time, But Age of Empires II certainly does. Countless hours of fun, and no two games are the same. This is a must for any serious gamer.."
)
Review.create(
    author_id: 9,
    game_id: 4,
    recommended: false,
    body: "Don't get this game, the ultimate edition is coming out...get that instead.
I don't understand why they would do this, don't get me wrong i love this game to death."
)


nier = Game.create(
    title: "NieR:Automata",
    price: 3999,
    release_date: "Mar 17, 2017",
    developer: "Square Enix, PlatinumGames Inc.",
    publisher: "Square Enix",
    side_text: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines."
)

nier1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier1.jpg")
nier2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier2.jpg")
nier3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier3.jpg")
nier4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier4.jpg")
nier5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier5.jpg")
nier6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier6.jpg")
nier7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier7.jpg")
nier8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/nier/nier8.jpg")

nier.photos.attach(io: nier1, filename: 'nier1.jpg')
nier.photos.attach(io: nier2, filename: 'nier2.jpg')
nier.photos.attach(io: nier3, filename: 'nier3.jpg')
nier.photos.attach(io: nier4, filename: 'nier4.jpg')
nier.photos.attach(io: nier5, filename: 'nier5.jpg')
nier.photos.attach(io: nier6, filename: 'nier6.jpg')
nier.photos.attach(io: nier7, filename: 'nier7.jpg')
nier.photos.attach(io: nier8, filename: 'nier8.jpg')

Review.create(
    author_id: 9,
    game_id: 5,
    recommended: true,
    body: "
had some trouble with the game being really stuttery, but other than that, it is still a really great game.
 "
)
Review.create(
    author_id: 4,
    game_id: 5,
    recommended: true,
    body: "This is why I play games. The Art, the stories, the emotions they make you feel. This is 1 of those games that will change you, or at least make you question things in the future. It's a huge surprise after the 1st game sold a whooping 3 copies. This is a MUST play."
)
Review.create(
    author_id: 6,
    game_id: 5,
    recommended: true,
    body: "Bought it just to listen pascal's village theme."
)
Review.create(
    author_id: 7,
    game_id: 5,
    recommended: false,
    body: "This game has received the worst possible PC treatment. I won't cover the lack of bug patches because plenty of others have, but the release of a GOTY edition with no upgrade path is just salt in the wounds. "
)

witcher = Game.create(
    title: "The Witcher 3: Wild Hunt",
    price: 3999,
    release_date: "May 18, 2015",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    side_text: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world."
)

witcher1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher1.jpg")
witcher2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher2.jpg")
witcher3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher3.jpg")
witcher4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher4.jpg")
witcher5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher5.jpg")
witcher6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher6.jpg")
witcher7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher7.jpg")
witcher8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher8.jpg")
witcher9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher9.jpg")
witcher10 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/witcher/witcher10.jpg")

witcher.photos.attach(io: witcher1, filename: 'witcher1.jpg')
witcher.photos.attach(io: witcher2, filename: 'witcher2.jpg')
witcher.photos.attach(io: witcher3, filename: 'witcher3.jpg')
witcher.photos.attach(io: witcher4, filename: 'witcher4.jpg')
witcher.photos.attach(io: witcher5, filename: 'witcher5.jpg')
witcher.photos.attach(io: witcher6, filename: 'witcher6.jpg')
witcher.photos.attach(io: witcher7, filename: 'witcher7.jpg')
witcher.photos.attach(io: witcher8, filename: 'witcher8.jpg')
witcher.photos.attach(io: witcher9, filename: 'witcher9.jpg')
witcher.photos.attach(io: witcher10, filename: 'witcher10.jpg')

Review.create(
    author_id: 10,
    game_id: 6,
    recommended: true,
    body: "
Witcher 3 is the best game I've ever played, a truly legendary experience. Can't wait for cyberpunk 2077"
)
Review.create(
    author_id: 9,
    game_id: 6,
    recommended: true,
    body: "Really epic RPG! If you like Gothic, Risen, Skyrim or the first two Witcher games, you definetly have to play this game, trust me! :)"
)
Review.create(
    author_id: 8,
    game_id: 6,
    recommended: true,
    body: "What can I say about the witcher that has not already been said. just buy the game and thank me later"
)
Review.create(
    author_id: 7,
    game_id: 6,
    recommended: true,
    body: "A Masterpiece, maybe this is the best games I've ever played. I spent almost 500 hours for this game only on single playthrough. Witcher 3 is the third installment of The Witcher Trilogy, so if you want the complete story I suggest you to play all of the trilogy. I can say that all of them have a really good story. "
)

Review.create(
    author_id: 6,
    game_id: 6,
    recommended: true,
    body: "had some trouble with the game being really stuttery, but other than that, it is still a really great game."
)

Review.create(
    author_id: 5,
    game_id: 6,
    recommended: false,
    body: "This game has cats in it. "
)

blade = Game.create(
    title: "Blade and Sorcery",
    price: 1999,
    release_date: "Dec 11, 2018",
    developer: "WarpFrog",
    publisher: "WarpFrog",
    side_text: "Blade & Sorcery is a built-for-VR medieval fantasy sandbox with full physics driven melee, ranged and magic combat. Become a powerful warrior, ranger or sorcerer and devastate your enemies."
)

blade1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade1.jpg")
blade2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade2.jpg")
blade3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade3.jpg")
blade4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade4.jpg")
blade5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade5.jpg")
blade6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade6.jpg")
blade7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade7.jpg")
blade8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade8.jpg")
blade9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/blade/blade9.jpg")

blade.photos.attach(io: blade1, filename: 'blade1.jpg')
blade.photos.attach(io: blade2, filename: 'blade2.jpg')
blade.photos.attach(io: blade3, filename: 'blade3.jpg')
blade.photos.attach(io: blade4, filename: 'blade4.jpg')
blade.photos.attach(io: blade5, filename: 'blade5.jpg')
blade.photos.attach(io: blade6, filename: 'blade6.jpg')
blade.photos.attach(io: blade7, filename: 'blade7.jpg')
blade.photos.attach(io: blade8, filename: 'blade8.jpg')
blade.photos.attach(io: blade9, filename: 'blade9.jpg')

Review.create(
    author_id: 2,
    game_id: 7,
    recommended: true,
    body: "Very cool game for make stab on people"
)
Review.create(
    author_id: 3,
    game_id: 7,
    recommended: true,
    body: "very VR game trying to do melee combat needs to research this game."
)

Review.create(
    author_id: 4,
    game_id: 7,
    recommended: true,
    body: "Less complete and polished as other VR games but its got the most potential as a fun sandbox and as it stands it is great fun."
)

Review.create(
    author_id: 5,
    game_id: 7,
    recommended: false,
    body: "I don't understand how this game has so many great reviews? The game is still incredibly buggy and the hit detection is awful! I understand this is an Early Acces Game but it's been that way for years. Pick it up during a sale if you're still curious. "
)

treesim = Game.create(
    title: "Tree Simulator 2020",
    price: 199,
    release_date: "Mar 25, 2019",
    developer: "Revmatek",
    publisher: "Revmatek",
    side_text: "It's exactly what it sounds like. You are the tree! You are equaled by no other. Relax and be the best tree you can be."
)

treesim1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim1.jpg")
treesim2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim2.jpg")
treesim3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim3.jpg")
treesim4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim4.jpg")
treesim5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim5.jpg")
treesim6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/treesim/treesim6.jpg")


treesim.photos.attach(io: treesim1, filename: 'treesim1.jpg')
treesim.photos.attach(io: treesim2, filename: 'treesim2.jpg')
treesim.photos.attach(io: treesim3, filename: 'treesim3.jpg')
treesim.photos.attach(io: treesim4, filename: 'treesim4.jpg')
treesim.photos.attach(io: treesim5, filename: 'treesim5.jpg')
treesim.photos.attach(io: treesim6, filename: 'treesim6.jpg')

Review.create(
    author_id: 8,
    game_id: 8,
    recommended: true,
    body: "Best 79 cents I have ever spent."
)
Review.create(
    author_id: 3,
    game_id: 8,
    recommended: true,
    body: "I Am Tree. When the morning sun rays hit my rugged bark, I am the happiest. My bark entangles the wind of the meadow. Oh wont you come play?"
)

Review.create(
    author_id: 2,
    game_id: 8,
    recommended: true,
    body: "had some trouble with the game being really stuttery, but other than that, it is still a really great game."
)

Review.create(
    author_id: 9,
    game_id: 8,
    recommended: false,
    body: "This game has trees in it. "
)

eurotruck = Game.create(
    title: "Euro Truck Simulator 2",
    price: 1999,
    release_date: "Oct 12, 2012",
    developer: "SCS Software",
    publisher: "SCS Software",
    side_text: "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore from the UK, Belgium, Germany, Italy, the Netherlands, Poland, and many more, your endurance, skill and speed will all be pushed to their limits."
)

eurotruck1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck1.jpg")
eurotruck2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck2.jpg")
eurotruck3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck3.jpg")
eurotruck4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck4.jpg")
eurotruck5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck5.jpg")
eurotruck6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck6.jpg")
eurotruck7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck7.jpg")
eurotruck8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck8.jpg")
eurotruck9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck9.jpg")
eurotruck10 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/eurotruck/eurotruck10.jpg")

eurotruck.photos.attach(io: eurotruck1, filename: 'eurotruck1.jpg')
eurotruck.photos.attach(io: eurotruck2, filename: 'eurotruck2.jpg')
eurotruck.photos.attach(io: eurotruck3, filename: 'eurotruck3.jpg')
eurotruck.photos.attach(io: eurotruck4, filename: 'eurotruck4.jpg')
eurotruck.photos.attach(io: eurotruck5, filename: 'eurotruck5.jpg')
eurotruck.photos.attach(io: eurotruck6, filename: 'eurotruck6.jpg')
eurotruck.photos.attach(io: eurotruck7, filename: 'eurotruck7.jpg')
eurotruck.photos.attach(io: eurotruck8, filename: 'eurotruck8.jpg')
eurotruck.photos.attach(io: eurotruck9, filename: 'eurotruck9.jpg')
eurotruck.photos.attach(io: eurotruck10, filename: 'eurotruck10.jpg')

Review.create(
    author_id: 4,
    game_id: 9,
    recommended: true,
    body: "A game that I really enjoy and would recommend to anyone who enjoys realistic driving sims. The craftsmanship really shows from the developers, it's really top notch stuff..."
)
Review.create(
    author_id: 10,
     game_id: 9,
    recommended: true,
    body: "Add better weather system."
)

Review.create(
    author_id: 6,
     game_id: 9,
    recommended: true,
    body: "I highly recommend this game. It is one of the best driving simulator games out there."
)

Review.create(
    author_id: 5,
     game_id: 9,
    recommended: false,
    body: "This game has trucks in it."
)

heart = Game.create(
    title: "Else Heart.Break()",
    price: 2499,
    release_date: "Sep 24, 2015",
    developer: "Erik Svedang",
    publisher: "Erik Svedang AB",
    side_text: "A game about friendship, love and technology in a place where bits have replaced atoms."
)

heart1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart1.jpg")
heart2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart2.jpg")
heart3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart3.jpg")
heart4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart4.jpg")
heart5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart5.jpg")
heart6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart6.jpg")
heart7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart7.jpg")
heart8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart8.jpg")
heart9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/heart/heart9.jpg")

heart.photos.attach(io: heart1, filename: 'heart1.jpg')
heart.photos.attach(io: heart2, filename: 'heart2.jpg')
heart.photos.attach(io: heart3, filename: 'heart3.jpg')
heart.photos.attach(io: heart4, filename: 'heart4.jpg')
heart.photos.attach(io: heart5, filename: 'heart5.jpg')
heart.photos.attach(io: heart6, filename: 'heart6.jpg')
heart.photos.attach(io: heart7, filename: 'heart7.jpg')
heart.photos.attach(io: heart8, filename: 'heart8.jpg')
heart.photos.attach(io: heart9, filename: 'heart9.jpg')

Review.create(
    author_id: 7,
    game_id: 10,
    recommended: true,
    body: "I've never played another game quite like it."
)
Review.create(
    author_id: 6,
    game_id: 10,
    recommended: true,
    body: "Personal Score: 9/10"
)

Review.create(
    author_id: 5,
    game_id: 10,
    recommended: true,
    body: "An interesting and fun game, but extremely hard to get into if you struggle with concepts like programming as a whole"
)

Review.create(
    author_id: 4,
    game_id: 10,
    recommended: false,
    body: "This game has computers in it."
)

miami = Game.create(
    title: "Hotline: Miami",
    price: 999,
    release_date: "Oct 23, 2012",
    developer: "Dennaton Games",
    publisher: "Devolver Digital",
    side_text: "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat."
)

miami1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami1.jpg")
miami2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami2.jpg")
miami3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami3.jpg")
miami4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami4.jpg")
miami5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami5.jpg")
miami6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami6.jpg")
miami7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami7.jpg")
miami8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/miami/miami8.jpg")

miami.photos.attach(io: miami1, filename: 'miami1.jpg')
miami.photos.attach(io: miami2, filename: 'miami2.jpg')
miami.photos.attach(io: miami3, filename: 'miami3.jpg')
miami.photos.attach(io: miami4, filename: 'miami4.jpg')
miami.photos.attach(io: miami5, filename: 'miami5.jpg')
miami.photos.attach(io: miami6, filename: 'miami6.jpg')
miami.photos.attach(io: miami7, filename: 'miami7.jpg')
miami.photos.attach(io: miami8, filename: 'miami8.jpg')

Review.create(
    author_id: 2,
    game_id: 11,
    recommended: true,
    body: "How do I inject Hotline Miami’s soundtrack directly into my veins"
)
Review.create(
    author_id: 4,
    game_id: 11,
    recommended: true,
    body: "TIP : Confess to the police"
)

Review.create(
    author_id: 6,
    game_id: 11,
    recommended: true,
    body: "Amazing ambience of this game fuelled by its unique visual style and its epic soundtrack. Definitely a must play even if you are not a regular gamer!"
)

Review.create(
    author_id: 8,
    game_id: 11,
    recommended: false,
    body: "This game has music in it. "
)

fallout = Game.create(
    title: "Fallout 3",
    price: 999,
    release_date: "Oct 28, 2008",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    side_text: "Vault-Tec engineers have worked around the clock on an interactive reproduction of Wasteland life for you to enjoy from the comfort of your own vault. Included is an expansive world, unique combat, shockingly realistic visuals, tons of player choice, and an incredible cast of dynamic characters."
)

fallout1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout1.jpg")
fallout2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout2.jpg")
fallout3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout3.jpg")
fallout4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout4.jpg")
fallout5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout5.jpg")
fallout6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout6.jpg")
fallout7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout7.jpg")
fallout8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout8.jpg")
fallout9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout9.jpg")
fallout10 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout10.jpg")
fallout11 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout11.jpg")
fallout12 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout12.jpg")
fallout13 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/fallout/fallout13.jpg")

fallout.photos.attach(io: fallout1, filename: 'fallout1.jpg')
fallout.photos.attach(io: fallout2, filename: 'fallout2.jpg')
fallout.photos.attach(io: fallout3, filename: 'fallout3.jpg')
fallout.photos.attach(io: fallout4, filename: 'fallout4.jpg')
fallout.photos.attach(io: fallout5, filename: 'fallout5.jpg')
fallout.photos.attach(io: fallout6, filename: 'fallout6.jpg')
fallout.photos.attach(io: fallout7, filename: 'fallout7.jpg')
fallout.photos.attach(io: fallout8, filename: 'fallout8.jpg')
fallout.photos.attach(io: fallout9, filename: 'fallout9.jpg')
fallout.photos.attach(io: fallout10, filename: 'fallout10.jpg')
fallout.photos.attach(io: fallout11, filename: 'fallout11.jpg')
fallout.photos.attach(io: fallout12, filename: 'fallout12.jpg')
fallout.photos.attach(io: fallout13, filename: 'fallout13.jpg')

Review.create(
    author_id: 8,
    game_id: 12,
    recommended: true,
    body: "Yo! This game is bomb, Just get it and play."
)
Review.create(
    author_id: 7,
    game_id: 12,
    recommended: true,
    body: "A first-person rpg set in a post apocalyptic world, filled with mutated monsters, what more do you want ?"

)

Review.create(
    author_id: 6,
    game_id: 12,
    recommended: true,
    body: "Nuked Megaton in the first 30 minutes of the game. No Regrets. None..."
)

Review.create(
    author_id: 5,
    game_id: 12,
    recommended: false,
    body: "This game does not like to work with windows 10,Its about time they remaster it."
)

vox = Game.create(
    title: "Vox Machinae",
    price: 2499,
    release_date: "Sep 26, 2018",
    developer: "Space Bullet Dynamics Corporation",
    publisher: "Space Bullet Dynamics Corporation",
    side_text: "Strap yourself into the cockpit of a robot seven times taller than a Tyrannosaurus Rex and prepare to do battle in Vox Machinae: the ultimate giant robot combat action-simulator for both VR and standard screens."
)

vox1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox1.jpg")
vox2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox2.jpg")
vox3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox3.jpg")
vox4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox4.jpg")
vox5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox5.jpg")
vox6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox6.jpg")
vox7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox7.jpg")
vox8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox8.jpg")
vox9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/vox/vox9.jpg")

vox.photos.attach(io: vox1, filename: 'vox1.jpg')
vox.photos.attach(io: vox2, filename: 'vox2.jpg')
vox.photos.attach(io: vox3, filename: 'vox3.jpg')
vox.photos.attach(io: vox4, filename: 'vox4.jpg')
vox.photos.attach(io: vox5, filename: 'vox5.jpg')
vox.photos.attach(io: vox6, filename: 'vox6.jpg')
vox.photos.attach(io: vox7, filename: 'vox7.jpg')
vox.photos.attach(io: vox8, filename: 'vox8.jpg')
vox.photos.attach(io: vox9, filename: 'vox9.jpg')

Review.create(
    author_id: 9,
    game_id: 13,
    recommended: true,
    body: "One of the best VR games on the market. Great performance, actually fun gameplay and it isn't just a tech-demo. Supports desktop gaming, runs smoothly and looks pretty damn good."
)
Review.create(
    author_id: 8,
    game_id: 13,
    recommended: true,
    body: "Best mech game I've ever played. Really makes you feel like you're in the cockpit of a giant robot."
)

Review.create(
    author_id: 5,
    game_id: 13,
    recommended: true,
    body: "If you have VR, there's no reason why you should not own this."
)

Review.create(
    author_id: 2,
    game_id: 13,
    recommended: false,
    body: "This game has robots in it. "
)

spiderman = Game.create(
    title: "Spider-Man: Far From Home Virtual Reality",
    price: 199,
    release_date: "Jun 25, 2019",
    developer: "CreateVR",
    publisher: "Sony Pictures Virtual Reality",
    side_text: "Based on the new film coming to theatres, the Spider-Man: Far From Home VR Experience is a fast-swinging, thrill ride through the eyes of your favorite neighborhood Spider-Man."
)

spiderman1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman1.jpg")
spiderman2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman2.jpg")
spiderman3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman3.jpg")
spiderman4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman4.jpg")
spiderman5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman5.jpg")
spiderman6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/spiderman/spiderman6.jpg")

spiderman.photos.attach(io: spiderman1, filename: 'spiderman1.jpg')
spiderman.photos.attach(io: spiderman2, filename: 'spiderman2.jpg')
spiderman.photos.attach(io: spiderman3, filename: 'spiderman3.jpg')
spiderman.photos.attach(io: spiderman4, filename: 'spiderman4.jpg')
spiderman.photos.attach(io: spiderman5, filename: 'spiderman5.jpg')
spiderman.photos.attach(io: spiderman6, filename: 'spiderman6.jpg')

Review.create(
    author_id: 3,
    game_id: 14,
    recommended: true,
    body: "Point and shoot some things; that's about it. Something to use to demonstrate VR to a friend but nothing more to come back to after that."
)
Review.create(
    author_id: 9,
    game_id: 14,
    recommended: true,
    body: "Get if you are a spiderman fan, but there isn't anything to come back to once it is over."
)

Review.create(
    author_id: 8,
    game_id: 14,
    recommended: false,
    body: "It looks very good but it is just a 3-5 minute tutorial."
)

Review.create(
    author_id: 4,
    game_id: 14,
    recommended: false,
    body: "Tt's just a petty tech demo that isn't worth anything, there are way better free vr experiences out there"
)

cuphead = Game.create(
    title: "Cuphead",
    price: 1999,
    release_date: "Sep 29, 2017",
    developer: "Studio MDHR Entertainment Inc.",
    publisher: "Studio MDHR Entertainment Inc.",
    side_text: "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings."
)

cuphead1 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead1.jpg")
cuphead2 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead2.jpg")
cuphead3 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead3.jpg")
cuphead4 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead4.jpg")
cuphead5 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead5.jpg")
cuphead6 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead6.jpg")
cuphead7 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead7.jpg")
cuphead8 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead8.jpg")
cuphead9 = open("https://steamclone-seeds.s3-us-west-1.amazonaws.com/steamphotos/cuphead/cuphead9.jpg")

cuphead.photos.attach(io: cuphead1, filename: 'cuphead1.jpg')
cuphead.photos.attach(io: cuphead2, filename: 'cuphead2.jpg')
cuphead.photos.attach(io: cuphead3, filename: 'cuphead3.jpg')
cuphead.photos.attach(io: cuphead4, filename: 'cuphead4.jpg')
cuphead.photos.attach(io: cuphead5, filename: 'cuphead5.jpg')
cuphead.photos.attach(io: cuphead6, filename: 'cuphead6.jpg')
cuphead.photos.attach(io: cuphead7, filename: 'cuphead7.jpg')
cuphead.photos.attach(io: cuphead8, filename: 'cuphead8.jpg')
cuphead.photos.attach(io: cuphead9, filename: 'cuphead9.jpg')

Review.create(
    author_id: 2,
    game_id: 15,
    recommended: true,
    body: "This is a really good game! i love it! i am also fricking PRO rn"
)
Review.create(
    author_id: 3,
     game_id: 15,
    recommended: false,
    body: "Superb but way too hard for me. Sadly had to request a refund, I just couldn't see myself trying any further."
)

Review.create(
    author_id: 4,
     game_id: 15,
    recommended: true,
    body: "There is so much creativity in this game such as character design, colors, level design and music, its hard af but still fun to play"
)

Review.create(
    author_id: 6,
     game_id: 15,
    recommended: true,
    body: "Such a pleasant game to play with my grandchildren."
)

end
