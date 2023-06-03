import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Zebronics Zeb-Bang PRO Headphone",
    company : "Zebronics",
    price: 999,
    discount_price : 699,
    type: "Wireless Headphones",
    image : require("../../Images/ProductsImg/headphone1.png"),
    starRating: 4.5,
    description: "Wireless bluetooth v5.0 headphone with built in microphone for call function.Foldable design with light weight structure, for easy portability.30H* approx. battery backup with the in built battery and Type C charging feature.40mm drivers for full range audio."
  },
  {
    _id: uuid(),
    title: "OnePlus Bullets Z2 Bluetooth Earphones",
    company : "OnePlus",
    price: 1799,
    discount_price : 1499,
    type: "Neckbands",
    image : require("../../Images/ProductsImg/neckband1.png"),
    starRating: 4.8,
    description: "A quick 10-minute charge delivers up to 20 hours of immersive audio playback.The flagship-level battery life delivers up to 30 hours of non-stop music on a single charge.A large 12.4 mm bass driver delivers uncompromisingly deep bass for powerful beats. Experience incredibly rich audio detail at every frequency with the titanium coating dome."
  }
  
  ,{
    _id: uuid(),
    title: "realme Buds Air 3 Neo True Wireless in-Ear Earbuds",
    company : "realme",
    price: 3499,
    discount_price : 1999,
    type: "True Wireless earbuds",
    image : require("../../Images/ProductsImg/wireless4.png"),
    starRating: 3.1,
    description: "A dynamic bass driver of 10 mm employed in the realme Air 3 Neo Bluetooth Headset delivers outstanding sound, sharp vocals, and reinforced bass. You can also experience exceptional sound quality with Dolby Atmos and hear your favourite song comes to life.The realme Buds Air 3 Neo, with its robust battery that can last up to 30 hours, keeps you connected."
  },
  {
    _id: uuid(),
    title: "Belkin SoundForm Wireless Bluetooth Headphones",
    company : "Belkin",
    price: 3999,
    discount_price : 3499,
    type: "Wireless Headphones",
    image : require("../../Images/ProductsImg/headphone4.png"),
    starRating: 4.2,
    description: "Playback- It provides a massive battery backup of upto 15 hours for a superior playback time.Drivers- Its 40mm dynamic drivers help pump out immersive HD audio all day long. Charging Time 3 hours.Earcushions- It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design."
  },
  {
    _id: uuid(),
    title: "Zebronics Zeb-Duke Wireless Bluetooth Headphones",
    company : "Zebronics",
    price: 2499,
    discount_price : 1299,
    type: "Wireless Headphones",
    image : require("../../Images/ProductsImg/headphone5.png"),
    starRating: 3.8,
    description: "Zeb-Duke is a wireless headphone with a mic that is an up on style with comfortable ear cushions, adjustable headband, and RGB lights.Speaker Impedance 32ΩFrequency Response 20Hz - 20kHz,Bluetooth works in range of 10 m only without obstacles.Charging time 2hrsPlayback time 30 hrs*Talk time 30 hrs."
  },{
    _id: uuid(),
    title: "Boult Audio Z40 True Wireless in Ear Earbuds",
    company : "Boult",
    price: 4999,
    discount_price : 1499,
    type: "True Wireless earbuds",
    image : require("../../Images/ProductsImg/wireless3.png"),
    starRating: 3.2,
    description: "60 hours of total playtime – Mammoth battery power makes the Z40 earbuds stop at nothing.Lightning Boult Type-C fast charging makes this possible, getting your buds ready in no time.he Environmental Noise Cancellation mode wards off unwanted noise, making your calls crystal clear.Have an uninterrupted gaming experience with no lags."
  },
  {
    _id: uuid(),
    title: "Beats Solo3 Wireless On-Ear Headphones",
    company : "Beats",
    price: 17900,
    discount_price : 14999,
    type: "Wireless Headphones",
    image : require("../../Images/ProductsImg/headphone2.png"),
    starRating: 4.7,
    description: "High-performance wireless Bluetooth headphones.Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity.With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone.Compatible with iOS and Android devices."
  },
  
  {
    _id: uuid(),
    title: "Amazon Basics in-Ear Bluetooth 5.0 Neckband ",
    company : "Amazon Basics",
    price: 1999,
    discount_price : 649,
    type: "Neckbands",
    image : require("../../Images/ProductsImg/neckband3.png"),
    starRating: 4.1,
    description: "The Amazon Basics neckband comes with a play time up to 30 hours.The neckband stays in place even during rigorous physical activities.The product comes with an IPX6-rated shield which certifies it as a water and sweat-resistant neckband."
  }
  ,{
    _id: uuid(),
    title: "boAt Rockerz 450 Bluetooth Headphones",
    company : "boAt",
    price: 3999,
    discount_price : 1999,
    type: "Wireless Headphones",
    image : require("../../Images/ProductsImg/headphone3.png"),
    starRating: 3.5,
    description: "Playback- It provides a massive battery backup of upto 15 hours for a superior playback time.Drivers- Its 40mm dynamic drivers help pump out immersive HD audio all day long. Charging Time 3 hours.Earcushions- It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design."
  },
  {
    _id: uuid(),
    title: "realme Buds Wireless 2S in Ear Earphone ",
    company : "realme",
    price: 2999,
    discount_price : 1499,
    type: "Neckbands",
    image : require("../../Images/ProductsImg/neckband4.png"),
    starRating: 4.6,
    description: "You no longer need to worry about being bothered by background noise because realme Buds Wireless 2S s AI algorithm intelligently reduces background noise. You can now enjoy free-flowing conversation and listen to music without being distracted by the surroundings.With just 20 minutes of charging, you can play immersive audio for seven hours. Take advantage of a longer listening time to your favourite music or podcasts."
  }
  ,
  {
    _id: uuid(),
    title: "boAt Rockerz 330ANC Bluetooth Neckband",
    company : "boAt",
    price: 1999,
    discount_price : 1699,
    type: "Neckbands",
    image : require("../../Images/ProductsImg/neckband2.png"),
    starRating: 3.9,
    description: "Playback- Leave all charging worries at bay as the Rockerz 255 Pro+ comes with a humongous battery back up of 40 Hours.With a few minutes of ASAP Charge you can get upto 10 hours of audio time by charging them for only 10 mins.The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers."
  },
  {
    _id: uuid(),
    title: "boAt Airdopes 141 Bluetooth Wireless Headphones",
    company : "boAt",
    price:1199,
    discount_price : 899,
    type: "True Wireless earbuds",
    image : require("../../Images/ProductsImg/wireless1.png"),
    starRating: 2.8,
    description: "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds. Frequency 20Hz-20KHz, Charging Time - 1hr earbuds, 2hr case hours.Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. Driver Size: 8mm x 2 Driver"
  }

  ,{
    _id: uuid(),
    title: "Mivi Collar Flash Pro Bluetooth Earphones ",
    company : "Mivi",
    price: 2999,
    discount_price : 1399,
    type: "Neckbands",
    image : require("../../Images/ProductsImg/neckband5.png"),
    starRating: 2.5,
    description: "With fast charging on the Collar Flash Pro bluetooth earphones,10 hours of playtime on a single charge of 10 mins don't let you wait any longer to be mesmarized with your favourite music. Operating range : Up to 10 metres / 30 Feet.The Collar Flash Pro wireless earphones has been custom tuned by our world-renowned engineers for amazing sound and a deep and powerful bass .The 13mm dynamic drivers elevate your experience to another level."
  }
  ,
  
  
{
    _id: uuid(),
    title: "OnePlus Nord Buds True Wireless in Ear Earbuds",
    company : "OnePlus",
    price: 2499,
    discount_price : 2000,
    type: "True Wireless earbuds",
    image : require("../../Images/ProductsImg/wireless2.png"),
    starRating: 3.7,
    description: "Nord Buds CE comes with gigantic titanium coated 13.4mm dynamic drivers for smooth sound and deep heavy bass.Nord Buds CE is a semi-in ear truly wireless earbuds with curved & rounded design.Get Up to 80 minutes of battery with fast charging in 10 minutes.Choose 1 of the 4 unique audio profiles to jazz up your listening experience."
  },
  
  {
    _id: uuid(),
    title: "Zebronics Zeb-Bro in Ear Wired Earphones",
    company : "Zebronics",
    price: 399,
    discount_price : 149,
    type: "Wired earphones",
    image : require("../../Images/ProductsImg/wiredear1.png"),
    starRating: 3.6,
    description: "The earphone comes with a snug fit providing utmost comfort while wearing them regularly. Connect the 3.5mm jack to the phone and wait for a few seconds for the product to get sync with the phone.The snug-fit also ensures a passive noise cancellation so that you can bask in the pure audio experience."
  }
  ,  
  {
    _id: uuid(),
    title: "Boult Audio BassBuds X1 in-Ear Wired Earphones",
    company : "Boult",
    price: 999,
    discount_price : 349,
    type: "Wired earphones",
    image : require("../../Images/ProductsImg/wiredear2.png"),
    starRating: 4.3,
    description: "In-line Controls: Answer/reject/ calls, play/pause, voice command.Ergonomically designed drivers: Aerospace grade AL alloy drivers give the best acoustics, 3D HD sound and a punchy bass.Ear fins for Sport Fit: Ear loop hold your buds in ear stably (colour of the ear loops may vary), perfectly fit for running, climbing, hiking, cycling etc."
  },{
    _id: uuid(),
    title: "Boult Audio Z96 True Wireless in Ear Earbuds ",
    company : "Boult",
    price: 4999,
    discount_price : 1499,
    type: "True Wireless earbuds",
    image : require("../../Images/ProductsImg/wireless5.png"),
    starRating: 4.4,
    description: "60 hours of total playtime – Mammoth battery power makes the Z40 earbuds stop at nothing.Lightning Boult Type-C fast charging makes this possible, getting your buds ready in no time.he Environmental Noise Cancellation mode wards off unwanted noise, making your calls crystal clear.Have an uninterrupted gaming experience with no lags."
  }
  ,
  
  {
    _id: uuid(),
    title: "Mivi Rock and Roll E5 Wired In Ear Earphones",
    company : "Mivi",
    price: 799,
    discount_price : 299,
    type: "Wired earphones",
    image : require("../../Images/ProductsImg/wiredear5.png"),
    starRating: 4.8, 
    description: "Optimized Music Experience: A high definition experience that keeps you wanting more. Fine-tuned by our engineers with a 10 mm neodymium driver, these ear phones provide immersive supreme audio.This ear phone is for those who like to roll with a solid bass. Spacing in the cavity between the front and the rear chambers is optimized for resonance of sound waves for heavy bass."

  }
  ,
  {
    _id: uuid(),
    title: "Philips Audio Upbeat Tauh201 Ear Headphones",
    company : "Philips",
    price: 1999,
    discount_price : 1348,
    type: "Wired Headphones",
    image : require("../../Images/ProductsImg/wiredhead1.png"),
    starRating: 4.5, 
    description: "DESIGN: Soft ear-cups with compact flat-folding design makes these headphones easy to carry. Can easily fit into your coat pocket, bag or office drawer.DRIVER: Powerful 32mm neodymium acoustic drivers give you clear and crisp sound and punchy bass.CONNECTIVITY: A 1.2m long cable that is ideal for outdoor use."
  } ,
  {
    _id: uuid(),
    title: "boAt BassHeads 900 On-Ear Wired Headphone",
    company : "boAt",
    price: 2490,
    discount_price : 849,
    type: "Wired Headphones",
    image : require("../../Images/ProductsImg/wiredhead2.png"),
    starRating: 1.8, 
    description: "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience.Its sleek, lightweight and compact design makes portability extremely convenient.The on-ear headphones with swivel earcups offers flexible wearing and a comfortable fit for everyone."
  } ,{
    _id: uuid(),
    title: "boAt Bassheads 102 Earphones with Mic",
    company : "boAt",
    price: 1299,
    discount_price : 399,
    type: "Wired earphones",
    image : require("../../Images/ProductsImg/wiredear4.png"),
    starRating: 3.3, 
    description: "Let go off all your troubles and sink into the sound that brings your soul back to life. Let the BassHeads 102 fix your head, and get your mind in the game. Live in the Vibe.Ease your way through the day with the classy superior look that emboldens the presence of the BassHeads 102. It’s available in multiple colours, which one matches your energy and style? Control the flow of your audio zone with just a tap. Take a call and end it with just a tap."
  },{
    _id: uuid(),
    title: "JBL C100SI Wired In Ear Headphones",
    company : "JBL",
    price: 1299,
    discount_price : 599,
    type: "Wired earphones",
    image : require("../../Images/ProductsImg/wiredear3.png"),
    starRating: 4.9,
    description: "Lightweight and Comfortable : The 3 sizes of ear tips (S,M,L) that are included allow you to choose a size that gives you the most comfortable listening experience even for longer listening periods.Kindly ensure 3.5mm port on Host device is clean and dust free and 3.5mm jack of the earphone is adequately inserted inside the input device port."
  },
  {
    _id: uuid(),
    title: "Sony Extra Bass On-Ear Wired Headphones",
    company : "Sony",
    price: 2490,
    discount_price : 1450,
    type: "Wired Headphones",
    image : require("../../Images/ProductsImg/wiredhead3.png"),
    starRating: 2.5, 
    description: "Beat Response Control for tight bass and swivel design makes travel easy.Neodymium dynamic drivers deliver precise sound.In-line remote and mic for hands-free calls.Aluminium fascia for punchy bass."
  }
   ,
  {
    _id: uuid(),
    title: "Sony MDR-ZX110AP Wired On-Ear Headphones ",
    company : "Sony",
    price: 1490,
    discount_price : 1250,
    type: "Wired Headphones",
    image : require("../../Images/ProductsImg/wiredhead4.png"),
    starRating: 3.0, 
    description: "Lightweight 30mm neodymium dynamic driver units enable the headphones to deliver a punchy, rhythmic response to even the most demanding track. Combined with a highly sensitive diaphragm, you’ll be able to turn the headphones up louder - without the need for an amp - and still enjoy clear, precise audio across the spectrum."
  }
  ,
  {
    _id: uuid(),
    title: "Sennheiser HD 400s Wired Over The Ear Headphone",
    company : "Sennheiser",
    price: 4990,
    discount_price : 4810,
    type: "Wired Headphones",
    image : require("../../Images/ProductsImg/wiredhead5.png"),
    starRating: 4.9, 
    description: "Premium, around-ear, open back headphones.Outstanding natural spatial performance, brought to you by high-end proprietary Sennheiser transducers.“Ergonomic acoustic refinement” (E.A.R.) design, which channels the audio signal directly into your ears.Padded headband and luxurious ear pads perfect for long listening sessions."
  }
];
