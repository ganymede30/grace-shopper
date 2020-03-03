const shoes = [
  {
    brand: 'Air Jordan',
    model: 'Air Jordan 1 Retro High OG "Red Green"',
    price: 230,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135278/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'Travis Scott x Dunk Low SB',
    price: 1450,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/168052/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "mauve"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805204/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "utility black gum bottom"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144281/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'kobe iv protro undftd pe "giannis antetokounmpo"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152596/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy 700 v3 "azael"',
    price: 580,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360'
  },
  {
    brand: 'Air Jordan',
    model: 'air jordan 11 retro "gamma blue"',
    price: 420,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/011834/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 350 v2 "citrin reflective"',
    price: 315,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152975/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "RED GREEN"',
    price: 230,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135278/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 5 SP \'MUSLIN\' "MUSLIN"',
    price: 725,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/151682/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "OBSIDIAN, UNC"',
    price: 200,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152035/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'WMNS AIR JORDAN 1 HIGH OG \'UNC TO CHICAGO\' "UNC TO CHICAGO"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149288/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 4 RETRO "BLACK CAT 2020 RELEASE"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149400/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 HIGH OG TS SP "TRAVIS SCOTT"',
    price: 895,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806920/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 3 RETRO \'UNC\' "UNC"',
    price: 325,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149377/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "SHATTERED BACKBOARD 3.0"',
    price: 180,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/147128/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 6 RETRO SP "TRAVIS SCOTT"',
    price: 570,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/148799/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 11 RETRO "BRED 2019 RELEASE"',
    price: 245,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152814/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 3 RETRO LE "CHICAGO ALL-STAR"',
    price: 200,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135615/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "SHADOW"',
    price: 175,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803598/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 6 RETRO "INFRARED 2019 RELEASE"',
    price: 175,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806841/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 X OFF-WHITE NRG "OFF WHITE UNC"',
    price: 1045,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804093/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 LOW OG SP-T "TRAVIS SCOTT"',
    price: 720,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/146236/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 4 RETRO "COOL GREY 2019 RELEASE"',
    price: 135,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/146425/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 4 RETRO "BRED 2019 RELEASE"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/139813/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 11 RETRO "CONCORD 2018 RELEASE"',
    price: 290,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805882/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "GAME ROYAL"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803480/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 X FRAGMENT "FRAGMENT"',
    price: 3500,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/012101/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 HIGH OG FEARLESS "FEARLESS"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149390/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "BLOODLINE"',
    price: 155,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/140229/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "TURBO GREEN"',
    price: 275,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806889/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "CHICAGO"',
    price: 330,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/012234/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 4 RETRO "CACTUS JACK"',
    price: 735,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803976/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "BRED TOE"',
    price: 370,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802799/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "PINE GREEN"',
    price: 245,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804911/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 HIGH 85 "CHICAGO 2020"',
    price: 555,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/159217/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'WMNS AIR JORDAN 1 RETRO HIGH OG "BLUE CHILL"',
    price: 390,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806667/1.jpg?w=360'
  },
  {
    brand: 'AIR JORDAN',
    model: 'AIR JORDAN 1 RETRO HIGH OG "BANNED 2016 RELEASE"',
    price: 275,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/012496/1.jpg?w=360'
  },
  {
    brand: 'Air Jordan',
    model: 'Air Jordan 1 Retro High OG "Red Green"',
    price: 230,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135278/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'Travis Scott x Dunk Low SB',
    price: 1450,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/168052/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "mauve"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805204/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "utility black gum bottom"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144281/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'kobe iv protro undftd pe "giannis antetokounmpo"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152596/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy 700 v3 "azael"',
    price: 580,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360'
  },
  {
    brand: 'Air Jordan',
    model: 'air jordan 11 retro "gamma blue"',
    price: 420,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/011834/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 350 v2 "citrin reflective"',
    price: 315,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152975/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'TRAVIS SCOTT X DUNK LOW SB',
    price: 1450,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/168052/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FEAR OF GOD RAID',
    price: 825,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/153047/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 \'07 VIRGIL "MCA"',
    price: 1420,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/145083/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: "AIR FORCE 1 '07",
    price: 85,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803315/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 \'07 VIRGIL X MOMA "OFF WHITE X MOMA"',
    price: 4220,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803168/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 LOW/CACTUS JACK "CACTUS JACK"',
    price: 450,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/160143/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE DUNK LOW LTHR/OW "OFF WHITE DUNK LOW"',
    price: 565,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152361/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE DUNK LOW LTHR/OW "OFF WHITE"',
    price: 445,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/153270/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE DUNK LOW LTHR/OW "OFF WHITE"',
    price: 400,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/155691/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'W WAFFLE RACER/OW "OFF WHITE"',
    price: 175,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144789/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR MAX 90 "OFF WHITE"',
    price: 540,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806237/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 LOW TRAVIS SCOTT "TRAVIS SCOTT"',
    price: 650,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804551/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR FORCE 1 "OFF WHITE"',
    price: 850,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806196/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE AIR MAX 97 "TRIPLE WHITE"',
    price: 140,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/801543/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE AIR/FEAR OF GOD MOC "BLACK"',
    price: 90,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/138424/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'NIKE LDWAFFLE/SACAI',
    price: 615,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135737/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'W WAFFLE RACER/OW "OFF WHITE"',
    price: 140,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144803/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR PRESTO "OFF WHITE"',
    price: 700,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803977/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'OFF-WHITE X WMNS VAPOR STREET "LASER FUCHSIA"',
    price: 165,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144796/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR FORCE 1 LOW "OFF WHITE"',
    price: 965,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806195/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR VAPORMAX FK "OFF WHITE"',
    price: 685,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803238/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 \'07/ SUPREME / CDG "EYES"',
    price: 1000,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/800918/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR MAX 1/97 VF SW "SEAN WOTHERSPOON"',
    price: 985,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803324/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR MAX 90 "OFF WHITE"',
    price: 575,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806511/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR VAPORMAX PLUS',
    price: 170,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/803151/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR PRESTO "OFF WHITE"',
    price: 505,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804113/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'THE 10: NIKE AIR VAPORMAX FK "OFF WHITE"',
    price: 800,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/801866/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'W WAFFLE RACER/OW "OFF WHITE"',
    price: 150,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144804/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'KD1',
    price: 70,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/806456/1.jpg?w=360'
  },
  {
    brand: 'NIKE',
    model: 'AIR FORCE 1 \'07 OFF WHITE "OFF WHITE"',
    price: 7000,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802566/1.jpg?w=360'
  },
  {
    brand: 'Air Jordan',
    model: 'Air Jordan 1 Retro High OG "Red Green"',
    price: 230,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135278/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'Travis Scott x Dunk Low SB',
    price: 1450,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/168052/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "mauve"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805204/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 700 "utility black gum bottom"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144281/1.jpg?w=360'
  },
  {
    brand: 'Nike',
    model: 'kobe iv protro undftd pe "giannis antetokounmpo"',
    price: 210,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152596/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy 700 v3 "azael"',
    price: 580,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360'
  },
  {
    brand: 'Air Jordan',
    model: 'air jordan 11 retro "gamma blue"',
    price: 420,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/011834/1.jpg?w=360'
  },
  {
    brand: 'adidas',
    model: 'yeezy boost 350 v2 "citrin reflective"',
    price: 315,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/152975/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BLACK NON-REFLECTIVE"',
    price: 350,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/143710/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BASKETBALL \'QUANTUM\' "QUANTUM"',
    price: 2190,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149779/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "ZEBRA"',
    price: 300,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/800502/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "YECHEIL"',
    price: 300,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/156799/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "CREAM"',
    price: 245,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/800801/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 "WAVE RUNNER"',
    price: 420,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802501/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 "UTILITY BLACK GUM BOTTOM"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144281/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "CLOUD WHITE NON-REFLECTIVE"',
    price: 285,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149298/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 "ANALOG"',
    price: 215,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/138422/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "CLAY"',
    price: 255,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/136354/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "SESAME"',
    price: 345,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805264/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 "MAUVE"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805204/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 V2 "GEODE"',
    price: 245,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/136913/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BLACK REFLECTIVE"',
    price: 750,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/143102/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BELUGA 2.0"',
    price: 575,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802389/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 V2 "TEPHRA"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/144646/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 700 "INERTIA"',
    price: 280,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/135739/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BLUE TINT"',
    price: 445,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802390/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "FROZEN YELLOW"',
    price: 265,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/802388/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "STATIC"',
    price: 390,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805220/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "TRUE FORM"',
    price: 310,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/136468/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BRED"',
    price: 810,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/800389/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "LUNDMARK NON-REFLECTIVE"',
    price: 260,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/143598/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY 700 V3 "AZAEL"',
    price: 580,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2',
    price: 845,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/201519/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "BUTTER"',
    price: 260,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804276/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY 500 "SALT"',
    price: 200,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805205/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "CITRIN NON-REFLECTIVE"',
    price: 250,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/149295/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY BOOST 350 V2 "STATIC REFLECTIVE"',
    price: 445,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/805221/1.jpg?w=360'
  },
  {
    brand: 'ADIDAS',
    model: 'YEEZY 500 "UTILITY BLACK"',
    price: 395,
    imageUrl: 'https://cdn.flightclub.com/750/TEMPLATE/804366/1.jpg?w=360'
  }
]

module.exports = shoes
