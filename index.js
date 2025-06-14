import express from 'express';
import cors from 'cors';

const app = express();

// ✅ Use dynamic port for deployment (Render), fallback to 3000 for local dev
const port = process.env.PORT || 3000;

app.use(cors());

const placesByCategory = {
  cities: [
    {
      id: "c1",
      name: "Mumbai",
      state: "Maharashtra",
      description: "The financial capital of India.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mumbai_Skyline_at_Night.jpg"
    },
    {
      id: "c2",
      name: "Delhi",
      state: "Delhi",
      description: "India's capital city with rich history.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Delhi_Collage.png"
    },
    {
      id: "c3",
      name: "Bengaluru",
      state: "Karnataka",
      description: "The Silicon Valley of India.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangalore_Skyline.jpg"
    },
    {
      id: "c4",
      name: "Jaipur",
      state: "Rajasthan",
      description: "The Pink City, known for its palaces.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Jal_Mahal_in_Jaipur.jpg"
    }
  ],
  hills: [
    {
      id: "h1",
      name: "Manali",
      state: "Himachal Pradesh",
      description: "A beautiful hill station in the Himalayas.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Manali_City.jpg"
    },
    {
      id: "h2",
      name: "Darjeeling",
      state: "West Bengal",
      description: "Famous for tea and Himalayan views.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Darjeeling_Himalayas.jpg"
    },
    {
      id: "h3",
      name: "Nainital",
      state: "Uttarakhand",
      description: "Popular for its lakes and mountains.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Nainital_Lake.jpg"
    },
    {
      id: "h4",
      name: "Ooty",
      state: "Tamil Nadu",
      description: "The Queen of Hill Stations in South India.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Ooty_Lake_Boating.jpg"
    }
  ],
  beaches: [
    {
      id: "b1",
      name: "Goa",
      state: "Goa",
      description: "Famous for its beaches and nightlife.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Palolem_Beach_Goa.jpg"
    },
    {
      id: "b2",
      name: "Varkala",
      state: "Kerala",
      description: "Scenic beach with red cliffs.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Varkala_beach.jpg"
    },
    {
      id: "b3",
      name: "Puri",
      state: "Odisha",
      description: "Popular pilgrimage and beach destination.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Puri_beach.jpg"
    },
    {
      id: "b4",
      name: "Marina Beach",
      state: "Tamil Nadu",
      description: "Longest urban beach in India.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Marina_Beach_Chennai.jpg"
    }
  ],
  spiritual: [
    {
      id: "s1",
      name: "Varanasi",
      state: "Uttar Pradesh",
      description: "Oldest living city and spiritual capital.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ganga_Aarti_at_Varanasi.jpg"
    },
    {
      id: "s2",
      name: "Rishikesh",
      state: "Uttarakhand",
      description: "Yoga capital and spiritual retreat.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Rishikesh_evening_aarti.jpg"
    },
    {
      id: "s3",
      name: "Tirupati",
      state: "Andhra Pradesh",
      description: "Famous temple town of Lord Venkateshwara.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tirumala_Temple.jpg"
    },
    {
      id: "s4",
      name: "Amritsar",
      state: "Punjab",
      description: "Home of the Golden Temple.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Golden_Temple%2C_Amritsar%2C_Punjab.jpg"
    }
  ],
  heritage: [
    {
      id: "hgt1",
      name: "Taj Mahal",
      state: "Uttar Pradesh",
      description: "Symbol of love and Mughal architecture.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
    },
    {
      id: "hgt2",
      name: "Qutub Minar",
      state: "Delhi",
      description: "Tallest brick minaret in the world.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Qutub_Minar_Front_View.jpg"
    },
    {
      id: "hgt3",
      name: "Hampi",
      state: "Karnataka",
      description: "UNESCO heritage ruins of Vijayanagara Empire.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Virupaksha_Temple_Hampi.jpg"
    },
    {
      id: "hgt4",
      name: "Khajuraho",
      state: "Madhya Pradesh",
      description: "Famous for stunning temples and carvings.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Khajuraho_temples.jpg"
    }
  ],
  wildlife: [
    {
      id: "w1",
      name: "Jim Corbett",
      state: "Uttarakhand",
      description: "India's oldest national park.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Jim_Corbett_Tiger_Reserve.jpg"
    },
    {
      id: "w2",
      name: "Ranthambore",
      state: "Rajasthan",
      description: "Famous for Bengal tigers.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ranthambore_National_Park.jpg"
    },
    {
      id: "w3",
      name: "Kaziranga",
      state: "Assam",
      description: "Home to the one-horned rhinoceros.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kaziranga_Rhino.jpg"
    },
    {
      id: "w4",
      name: "Sundarbans",
      state: "West Bengal",
      description: "Mangrove forest with Royal Bengal Tigers.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sundarbans_Boat.jpg"
    }
  ],
  deserts: [
    {
      id: "d1",
      name: "Jaisalmer",
      state: "Rajasthan",
      description: "Golden city of India with desert charm.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jaisalmer_Fort_Rajasthan.jpg"
    },
    {
      id: "d2",
      name: "Bikaner",
      state: "Rajasthan",
      description: "Desert town famous for Junagarh Fort.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Junagarh_Fort.jpg"
    },
    {
      id: "d3",
      name: "Pushkar",
      state: "Rajasthan",
      description: "Holy desert town with camel fair.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Pushkar_Ghat.jpg"
    },
    {
      id: "d4",
      name: "Barmer",
      state: "Rajasthan",
      description: "Quiet desert region with scenic beauty.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Barmer_Desert.jpg"
    }
  ],
  islands: [
    {
      id: "i1",
      name: "Andaman",
      state: "Andaman & Nicobar",
      description: "Tropical paradise with clear waters.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Andaman_Island.jpg"
    },
    {
      id: "i2",
      name: "Lakshadweep",
      state: "Lakshadweep",
      description: "Coral islands and lagoons.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Kavaratti_Beach.jpg"
    },
    {
      id: "i3",
      name: "Diu Island",
      state: "Daman & Diu",
      description: "Portuguese heritage on a peaceful island.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Diu_Fort.jpg"
    },
    {
      id: "i4",
      name: "Majuli",
      state: "Assam",
      description: "World's largest river island.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Majuli_Island.jpg"
    }
  ]
};

app.get('/api/places/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const data = placesByCategory[category];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

app.listen(port, () => {
  console.log(`✅ Category API running at http://localhost:${port}`);
});
