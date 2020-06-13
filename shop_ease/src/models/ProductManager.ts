import { Product } from "./Product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductManager {
  products: Product[];

  constructor() {
    this.products = [
      {
        product_code: "M20324",
        name: "Stan Smith Shoes",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Originals",
        price: 4800.0,
        description:
          "Roll with the classic. Back in the day, Stan Smith won big on the tennis court. Slide into the adidas shoe worthy of his name and you'll win big on the streets. Top to bottom, these shoes capture the essential style of the 1971 original, with a minimalist leather build and clean trim.",
        short_desc: "AN AUTHENTIC VERSION OF THE ICONIC 1971 TENNIS CLASSIC.",
        specs: [
          "Regular fit",
          "Lace closure",
          "Leather upper",
          "Timeless tennis trainers",
          "Leather lining and OrthoLite® sockliner",
          "Rubber cupsole"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7bc16c0933f849a1bbeba3470047af60_9366/Stan_Smith_Shoes_White_M20324_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/eb638fce8b4f4678b40aa80e00818f3a_9366/Stan_Smith_Shoes_White_M20324_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ce27a7891ad4a44b9f2a80e00819188_9366/Stan_Smith_Shoes_White_M20324_05_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/71a83ee6b8824631bc88a3470047bb7f_9366/Stan_Smith_Shoes_White_M20324_41_detail.jpg"
        ]
      },
      {
        product_code: "EG0691",
        name: "Ultraboost 20 Shoes",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Running",
        price: 9500.0,
        description:
          "A new day. A new run. Make it your best. These high-performance shoes feature a foot-hugging knit upper. Stitched-in reinforcement is precisely placed to give you support in the places you need it most. The soft elastane heel delivers a more comfortable fit. Responsive cushioning returns energy to your stride with every footstrike for that I-could-run-forever feeling.",
        short_desc: "TOUCH DOWN WITH CONTROL, RIDE WITH COMFORT.",
        specs: [
          "Snug, sock-like fit",
          "Lace closure",
          "Leather upperadidas Primeknit+ textile upper",
          "Tailored Fibre Placement locked-in fit",
          "High-performance running shoes",
          "Stretchweb outsole with Continental™ Rubber"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4290012d8fba42a48795ab0a00c8c50d_9366/Ultraboost_20_Shoes_Black_EG0698_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0e506ab4260f4fac95e7ab0a00c8f9a4_9366/Ultraboost_20_Shoes_Black_EG0698_010_hover_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e47577959aee494a93a7ab0a00c8d805_9366/Ultraboost_20_Shoes_Black_EG0698_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/bfab9cafdb684929abc6ab0a00c8e885_9366/Ultraboost_20_Shoes_Black_EG0698_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8b55619062f34c228486ab0a00c8f142_9366/Ultraboost_20_Shoes_Black_EG0698_05_standard.jpg"
        ]
      },
      {
        product_code: "G27706",
        name: "Continental 80 Shoes",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Originals",
        price: 5300.0,
        description:
          "Revel in the nostalgia. These adidas Continental 80 shoes capture all the retro vibes of the classic '80s leather trainers. The split rubber cupsole and swooping two-tone stripe nail the look. French terry lining completes the throwback feel.",
        short_desc: "THESE '80S TRAINERS BRING ON THE TENNIS VIBES.",
        specs: [
          "Regular fit",
          "Lace closure",
          "Leather upper",
          "Soft feel",
          "Retro tennis trainers",
          "French terry lining and OrthoLite® sockliner",
          "EVA midsole insert and split rubber cupsole"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8df5ab4346d7475ebb08a91500a047d3_9366/Continental_80_Shoes_White_G27706_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a7d87c7891544febb443a921008ab15c_9366/Continental_80_Shoes_White_G27706_010_hover_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/31dcbed40f7a45a7b745a91500a05e4b_9366/Continental_80_Shoes_White_G27706_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/516fdf055bfa4bcea568a91500a074a5_9366/Continental_80_Shoes_White_G27706_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b7a717aa166b4d30aae7a91500a08cbf_9366/Continental_80_Shoes_White_G27706_41_detail.jpg"
        ]
      },
      {
        product_code: "EE4599",
        name: "Fitbounce Trainers",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Training",
        price: 3500.0,
        description:
          "Put your versatility on display in these adidas training shoes. The mesh upper keeps you cool. Midsole cushioning means unmatched comfort and an agile, springy feel. The outsole adds multidirectional traction on any surface.",
        short_desc: "SHOES FOR PLUSH, STABLE COMFORT.",
        specs: [
          "Lace closure",
          "Mesh upper",
          "Heel pillow",
          "Cushioned training shoes",
          "Bounce+ midsole",
          "Rubber outsole"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/891699720bc0403a8405ab04017023fb_9366/FitBounce_Trainers_Red_EE4616_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8bd245f4e4ef48cfb2f6ab0b0127df17_9366/FitBounce_Trainers_Red_EE4616_010_hover_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/07dc57c8e9d1476eb8c9ab04017093cc_9366/FitBounce_Trainers_Red_EE4616_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f7da4c42023749f98be6ab0401719b33_9366/FitBounce_Trainers_Red_EE4616_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/043be97a11bc44e49c89ab0401704326_9366/FitBounce_Trainers_Red_EE4616_41_detail.jpg"
        ]
      },
      {
        product_code: "EG4958",
        name: "Disney Mickey Mouse Superstar Shoes",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Originals",
        price: 7000.0,
        description:
          "Originally made for basketball courts in the '70s. Celebrated by hip hop royalty in the '80s. The adidas Superstar shoe is now a lifestyle staple for streetwear enthusiasts. The world-famous shell toe feature remains, providing style and protection. Just like it did on the B-ball courts back in the day.    Now, whether at a festival or walking in the street you can enjoy yourself without the fear of being stepped on. The serrated 3-Stripes detail and adidas Superstar box logo adds OG authenticity to your look.",
        short_desc: "THE AUTHENTIC LOW TOP WITH THE SHELL TOE.",
        specs: [
          "Lace closure",
          "Leather upper",
          "Iconic leather shoes",
          "Rubber outsole"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/f3e620d5cc9b4101b796ab1800a6a85c_9366/Disney_Mickey_Mouse_Superstar_Shoes_White_FW2901_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/fc4d99b36a764e81b252ab750133e9c5_9366/Disney_Mickey_Mouse_Superstar_Shoes_White_FW2901_011_hover_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f8ce8039c2d545649c86ab1800a6bcd8_9366/Disney_Mickey_Mouse_Superstar_Shoes_White_FW2901_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/23624dd3699946deb5a0ab1800a6cf97_9366/Disney_Mickey_Mouse_Superstar_Shoes_White_FW2901_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e3ab8fa6a3f54cd9a9c9ab1800a6d954_9366/Disney_Mickey_Mouse_Superstar_Shoes_White_FW2901_05_standard.jpg"
        ]
      },
      {
        product_code: "288022",
        name: "Adilette Slides",
        brand: {
          id: 1,
          name: "Adidas",
          description: "All in or Nothing.",
          logoUrl:
            "https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg"
        },
        category: "Originals",
        price: 1600.0,
        description:
          "First introduced in 1972, the adilette has since risen to global prominence as the most popular slide ever. Built for recreation and relaxation, this lightweight style features a secure jelly bandage and a contour footbed for long lasting comfort.",
        short_desc: "",
        specs: [
          "Synthetic textured single-bandage upper for durability and quick drying",
          "Comfortable textile lining",
          "Comfortable contoured footbed for long-lasting comfort",
          "Contrast 3-Stripes on bandage",
          "Patterned outsole for grip"
        ],
        imageUrls: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b26b8d0ea5254529ae5ba7fa00deedd6_9366/adilette_Slides_Blue_288022_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ba2804e6fd694ee298c5a36800b29a52_9366/adilette_Slides_Blue_288022_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a461b4f042b14834b203a7fa00df16b6_9366/adilette_Slides_Blue_288022_04_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/42f4705777dc4a32b63ca7fa00e108a7_9366/adilette_Slides_Blue_288022_05_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f4752349c2b24c2382d6a36800b2ba9f_9366/adilette_Slides_Blue_288022_42_detail.jpg"
        ]
      },
      {
        product_code: "CJ0611",
        name: "Air Max 90 Premium",
        brand: {
          id: 2,
          name: "Nike",
          description: "Just Do It.",
          logoUrl:
            "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg"
        },
        category: "Lifestyle",
        price: 7195.0,
        description:
          "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Celebrating the home and away kits of your favourite teams, the soft leather upper features a rub-away material that reveals a secondary colour through normal wear while Max Air cushioning adds comfort to your journey.",
        short_desc: "COMFORT, HERITAGE AND NOTHING BETTER.",
        specs: [
          "Foam midsole adds springy cushioning",
          "Rubber outsole",
          "The luggage tag and new graphic on the tongue add a fun football twist, energising your look for when your team plays in the championships."
        ],
        imageUrls: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3f999582-cc61-47e1-9bb7-3909b52fd7d0/air-max-90-shoe-hTsX5h.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3108cd19-ef41-46c8-8924-3cf2a7270f06/air-max-90-shoe-hTsX5h.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7af424e-55a1-4c87-a3c6-2ec12c2d00c5/air-max-90-shoe-hTsX5h.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9103cd01-ba5c-493e-818b-f3e07fb2e60f/air-max-90-shoe-hTsX5h.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e3f0e755-acc7-4398-9dde-0bda1a674fe8/air-max-90-shoe-hTsX5h.jpg"
        ]
      },
      {
        product_code: "CJ1642",
        name: "Air Force 1 Sage Low",
        brand: {
          id: 2,
          name: "Nike",
          description: "Just Do It.",
          logoUrl:
            "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg"
        },        category: "Lifestyle",
        price: 5295.0,
        description:
          "Taking old-school b-ball style to new levels, the Nike Air Force 1 Sage Low features a platform midsole and a pared-down upper for a boldly feminine look. Colour accents around the Swoosh and on the heel and tongue add a fresh take to any summertime outfit.",
        short_desc: "SOPHISTICATED STYLE FOR THE STREETS",
        specs: [
          "The pared-down upper features premium leather for sophisticated style, while the stitch-and-turn construction creates a seamless look",
          "The classic Air Force 1 foam midsole is exaggerated to create a platform that's fresh, modern and bold. Enlarged sole tread brings the OG AF-1 design into the present.",
          "The original AF-1 perforation pattern lets your foot breathe."
        ],
        imageUrls: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-54ebdef2-a11a-42f9-be9e-2fca066e451b/air-force-1-sage-low-shoe-2l9rBQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-398d553f-66ee-498c-a613-17644964ab3d/air-force-1-sage-low-shoe-2l9rBQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-a5f93a77-e220-4c6c-adf3-ba3f8d4019a7/air-force-1-sage-low-shoe-2l9rBQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-3df47e9d-7516-4868-87a0-5e475c3a4db5/air-force-1-sage-low-shoe-2l9rBQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e193ef5b-3c76-4077-aea3-7db80fc16e59/air-force-1-sage-low-shoe-2l9rBQ.jpg"
        ]
      },
      {
        product_code: "921733",
        name: "Airmax 97",
        brand: {
          id: 2,
          name: "Nike",
          description: "Just Do It.",
          logoUrl:
            "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg"
        },        category: "Running",
        price: 8995.0,
        description:
          "The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.",
        short_desc: "SLEEK COMFORT. ICONIC STYLE.",
        specs: [
          "Full-length Max Air unit provides lightweight cushioning.",
          "Innovative lacing system creates a custom fit.",
          "Low-cut collar provides comfort around the ankle."
        ],
        imageUrls: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rujd1mapnz3d1pormplg/air-max-97-shoe-qVRbjT.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fnfiumxy7batwbvbwcow/air-max-97-shoe-qVRbjT.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aqaypawm2tmiz21shkqn/air-max-97-shoe-qVRbjT.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/udsl71kdafcvhguccse8/air-max-97-shoe-qVRbjT.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/znwt7zrihbho9ui6vsma/air-max-97-shoe-qVRbjT.jpg"
        ]
      },
      {
        product_code: "AQ2731",
        name: "Joyride Run Flyknit",
        brand: {
          id: 2,
          name: "Nike",
          description: "Just Do It.",
          logoUrl:
            "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg"
        },        category: "Running",
        price: 8545.0,
        description:
          "The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot contour to your foot for cushioning that stands up to your mileage.",
        short_desc: "REVOLUTIONARY CUSHIONING THAT CONTOURS WITH EVERY STEP.",
        specs: [
          "Contouring Cushioning",
          "Snug and Secure",
          "Zoned Durability",
          "Comfort Collar"
        ],
        imageUrls: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05acb355-fcfd-4207-a095-ae11e675d3a4/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6014ef7b-85c7-4d68-bac6-993a0dd89bb4/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/79eb1a2c-9048-4e2b-8d91-c8dc42e1dbb2/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c07da809-cd25-49ab-86dc-d6251d821475/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/53d51fb2-cf79-4d9d-9428-020f3ba09f78/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"
        ]
      },
      {
        product_code: "705265",
        name: "SB Check",
        brand: {
          id: 2,
          name: "Nike",
          description: "Just Do It.",
          logoUrl:
            "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg"
        },        category: "Skateboarding",
        price: 3195.0,
        description:
          "Crafted from soft suede, the Nike SB Check is reinforced in key areas for the durability you need to skate all day long.",
        short_desc: "LOW-PROFILE COMFORT AND CUSHIONING.",
        specs: [
          "Suede upper is soft and durable",
          "Foam sockliner provides lightweight cushioning",
          "Reinforcement in the lateral forefoot adds durability to this high-wear area."
        ],
        imageUrls: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b980ad41-f97c-407e-b953-b9081aa37cac/sb-check-skate-shoe-6WblMb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b7b319cd-cf2e-4a7d-891f-286c78c5250f/sb-check-skate-shoe-6WblMb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/03e21619-f159-4d95-bea3-59efb8987d68/sb-check-skate-shoe-6WblMb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f10312ec-acaf-41f3-9fba-2f32ce57bbd1/sb-check-skate-shoe-6WblMb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4db0e93f-afd4-4170-87ed-400bcf9b16a1/sb-check-skate-shoe-6WblMb.jpg"
        ]
      }
    ];
  }

  getProducts() {
    return this.products;
  }
}
