const products = [
    {
      id: 1,
      title: "Sonic Youth - Goo",
      description: "Noise Rock",
      stock: 10,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/b8025cada88dd4809efe0e7444db763c.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/b8025cada88dd4809efe0e7444db763c.jpg",
      },
      price: 350,
    },
    {
      id: 2,
      title: "BJM - Their Satanic Requests 2",
      description: "Psych Rock",
      stock: 5,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/60a63d6715a54250c2825b4dffc891d7.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/60a63d6715a54250c2825b4dffc891d7.jpg",
      },
      price: 250,
      
    },
  
    {
      id: 3,
      title: "American Football - (LP1)",
      description: "Math Rock",
      stock: 5,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/920b81bcd6e23375d021e2544f4dd1c1.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/920b81bcd6e23375d021e2544f4dd1c1.jpg",
      },
      price: 250,
     },
  
    {
      id: 4,
      title: "Pixies - Bossanova",
      description: "Alternative Rock, Indie",
      stock: 9,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/1bf90967af1652891af13afb16300ab5.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/1bf90967af1652891af13afb16300ab5.jpg",
      },
      price: 150,
    },
  
    {
      id: 5,
      title: "Ramones - Rocket To Russia",
      description: "Punk Rock, Pop Punk",
      stock: 50,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/b4acf9086c7144edc46928022de21d92.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/b4acf9086c7144edc46928022de21d92.jpg",
      },
      price: 100,
    },
  
    {
      id: 6,
      title: "Smashing Pumpkins - Siamese Dream",
      description: "Alternative Rock, Indie",
      stock: 6,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/53131f63cde3d29e26930209b91fce57.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/53131f63cde3d29e26930209b91fce57.jpg",
      },
      price: 350,
    },
  
    {
      id: 7,
      title: "Dandy Warhols - Dandys Rule Ok",
      description: "Psych Rock, Indie",
      stock: 2,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://m.media-amazon.com/images/I/31+zpRU9CiL._UXNaN_FMjpg_QL85_.jpg",
        secondImage: "https://m.media-amazon.com/images/I/31+zpRU9CiL._UXNaN_FMjpg_QL85_.jpg",
      },
      price: 100,
    },
  
    {
      id: 8,
      title: "The Velvet Underground & Nico",
      description: "Alternative Rock",
      stock: 25,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://http2.mlstatic.com/D_NQ_NP_973117-MLA49036595277_022022-O.webp",
        secondImage: "https://http2.mlstatic.com/D_NQ_NP_973117-MLA49036595277_022022-O.webp",
      },
      price: 500,
    },
  
    {
      id: 9,
      title: "Interpol - Turn On The Bright Lights",
      description: "Alternative Rock",
      stock: 6,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://http2.mlstatic.com/D_NQ_NP_617827-MLA29007748989_122018-O.webp",
        secondImage: "https://http2.mlstatic.com/D_NQ_NP_617827-MLA29007748989_122018-O.webp",
      },
      price: 250,
    },
  
    {
      id: 10,
      title: "Sublime - Robbin' The Hood",
      description: "Punk Rock, Reggae, Ska",
      stock: 3,
      type: "Discos",
      imageProduct: {
        firtsImage: "https://lastfm.freetls.fastly.net/i/u/500x500/f7b7c63fa6214b6d93cc6842c5d9ce5a.jpg",
        secondImage: "https://lastfm.freetls.fastly.net/i/u/500x500/f7b7c63fa6214b6d93cc6842c5d9ce5a.jpg",
      },
      price: 300,
    },
  
    {
      id: 11,
      title: "The Stooges - T-Shirt",
      description: "T-Shirt, The Stooges",
      stock: 20,
      type: "Remeras",
      imageProduct: {
        firtsImage: "https://i.ebayimg.com/images/g/8-cAAOSwnGVgCawh/s-l500.jpg",
        secondImage: "https://i.ebayimg.com/images/g/8-cAAOSwnGVgCawh/s-l500.jpg",
      },
      price: 30,
    },
  
    {
      id: 12,
      title: "Sonic Youth - Goo T-Shirt",
      description: "T-Shirt, SY",
      stock: 20,
      type: "Remeras",
      imageProduct: {
        firtsImage: "https://poisoncityestore.com/cdn/shop/products/SonicYouth_WashingMachine_Tee.jpg?v=1597119766",
        secondImage: "https://poisoncityestore.com/cdn/shop/products/SonicYouth_WashingMachine_Tee.jpg?v=1597119766",
      },
      price: 30,
    },
  
     
    {
      id: 13,
      title: "Llavero Nirvana",
      description: "Llavero Nirvana",
      stock: 8,
      type: "Accesorios",
      imageProduct: {
        firtsImage: "https://i.pinimg.com/originals/5f/dd/b3/5fddb3fb4ffd96840c12619eff75979f.jpg",
        secondImage: "https://i.pinimg.com/originals/5f/dd/b3/5fddb3fb4ffd96840c12619eff75979f.jpg",
      },
      price: 3,
    },
  
    
    {
      id: 14,
      title: "U Are Gonna Be My Girl (Dirty)",
      description: "Playlist Post Bar",
      stock: 8,
      type: "Playlist",
      imageProduct: {
        firtsImage: "https://i.pinimg.com/236x/28/35/c3/2835c3370a24bd3295e4f8de293af7cf.jpg",
        secondImage: "https://open.spotify.com/playlist/6FB4AcCROWLNZvxatITVaM?si=01857759f7714025",
      },
      price: 3,
    },
  
    {
      id: 15,
      title: "Junkie'",
      description: "Playlist Junkie",
      stock: 8,
      type: "Playlist",
      imageProduct: {
        firtsImage: "https://i.pinimg.com/564x/6b/c4/48/6bc44852e62e3b63efddba5d38347006.jpg",
        secondImage: "https://open.spotify.com/playlist/4BHxzcMAUUELrKvDcg3nTn?si=b1169258b8174f3c",
      },
      price: 3,
    },
  
  ];
  
  export default products;
  