const doctorsData = [
        {
            "name": "Dr. Jane Smith",
            "specialization": "Pediatrics",
            "zipcode": 90210,
            "hospital": "Cedars-Sinai Medical Center",
            "insuranceAccepted": ["Blue Cross Blue Shield", "Aetna"],
			"ratings": {
				rating: 4.9,
				number: 124
			},
            "gender": "Female",
            "languageSpoken": ["English", "Spanish", "Mandarin", "German", "Russian"],
            "mainLocation": "123 Main St",
            "additionalLocations": ["456 Market St", "789 Park Ave"],
			"networkStatus": "In-Network",
			"id": "fjkvfdkjdf"
        },
        {
            "name": "Dr. John Doe",
            "specialization": "Cardiology",
            "zipcode": 10001,
            "hospital": "NewYork-Presbyterian Hospital",
            "insuranceAccepted": ["Cigna", "UnitedHealthcare"],
            "ratings": {
				rating: 4.5,
				number: 84
			},
            "gender": "Male",
            "languageSpoken": ["English", "Mandarin"],
            "mainLocation": "321 Main St",
            "additionalLocations": ["654 Market St", "987 Park Ave"],
            "networkStatus": "In-Network",
			"id": "fjkvfdddddddkjdf"
        },
        {
            "name": "Dr. Alice Johnson",
            "specialization": "Dermatology",
            "zipcode": 60606,
            "hospital": "Rush University Medical Center",
            "insuranceAccepted": ["Medicare", "Anthem"],
            "ratings": {
				rating: 4.9,
				number: 18
			},
            "gender": "Female",
            "languageSpoken": ["English", "French"],
            "mainLocation": "456 Market St",
            "additionalLocations": ["789 Park Ave", "123 Main St"],
            "networkStatus": "Out-of-Network",
			"id": "fjkffffffqqqvfdkjdf"
        },
        {
            "name": "Dr. Bob Williams",
            "specialization": "Orthopedics",
            "zipcode": 80808,
            "hospital": "Kaiser Permanente",
            "insuranceAccepted": ["Blue Shield", "HealthNet"],
            "ratings": {
				rating: 4.3,
				number: 234
			},
            "gender": "Male",
            "languageSpoken": ["English", "Russian"],
            "mainLocation": "789 Park Ave",
            "additionalLocations": ["123 Main St", "456 Market St"],
            "networkStatus": "In-Network",
			"id": "fjkvfder4432sf"
        },
        {
            "name": "Dr. Jennifer Davis",
            "specialization": "Gastroenterology",
            "zipcode": 70707,
            "hospital": "Mayo Clinic",
            "insuranceAccepted": ["Aetna", "Cigna"],
            "ratings": {
				rating: 4.0,
				number: 94
			},
            "gender": "Female",
            "languageSpoken": ["English", "Arabic"],
            "mainLocation": "987 Park Ave",
            "additionalLocations": ["654 Market St", "321 Main St"],
			"networkStatus": "In-Network",
			"id": "fjkvfdkqazxswjdf"
		},
		{
			"name": "Dr. Maria Rodriguez",
			"specialization": "Obstetrics & Gynecology",
			"zipcode": 90210,
			"hospital": "Cedars-Sinai Medical Center",
			"insuranceAccepted": ["Blue Cross Blue Shield", "Aetna"],
			"ratings": {
				rating: 4.5,
				number: 65
			},
			"gender": "Female",
			"languageSpoken": ["English", "Spanish"],
			"mainLocation": "123 Main St",
			"additionalLocations": ["456 Market St", "789 Park Ave"],
			"networkStatus": "In-Network",
			"id": "fjkvfdkjdfddsssdddssdaa"
		},
		{
			"name": "Dr. David Kim",
			"specialization": "Ophthalmology",
			"zipcode": 10001,
			"hospital": "NewYork-Presbyterian Hospital",
			"insuranceAccepted": ["Cigna", "UnitedHealthcare"],
			"ratings": {
				rating: 3.9,
				number: 32
			},
			"gender": "Male",
			"languageSpoken": ["English", "Korean"],
			"mainLocation": "321 Main St",
			"additionalLocations": ["654 Market St", "987 Park Ave"],
			"networkStatus": "In-Network",
			"id": "fjkvfdkjpppppqqqqqdf"
		},
		{
			"name": "Dr. Elizabeth Thomas",
			"specialization": "Psychiatry",
			"zipcode": 60606,
			"hospital": "Rush University Medical Center",
			"insuranceAccepted": ["Medicare", "Anthem"],
			"ratings": {
				rating: 4.8,
				number: 54
			},
			"gender": "Female",
			"languageSpoken": ["English", "German"],
			"mainLocation": "456 Market St",
			"additionalLocations": ["789 Park Ave", "123 Main St"],
			"networkStatus": "Out-of-Network",
			"id": "fjkvfdwqqqwertyypuof"
		},
		{
			"name": "Dr. Michael Anderson",
			"specialization": "Neurology",
			"zipcode": 80808,
			"hospital": "Kaiser Permanente",
			"insuranceAccepted": ["Blue Shield", "HealthNet"],
			"ratings": {
				rating: 4.2,
				number: 21
			},
			"gender": "Male",
			"languageSpoken": ["English", "Japanese"],
			"mainLocation": "789 Park Ave",
			"additionalLocations": ["123 Main St", "456 Market St"],
			"networkStatus": "In-Network",
			"id": "fjkvfdkjdfscdkmddxcv"
		},
		{
			"name": "Dr. Sarah Patel",
			"specialization": "Endocrinology",
			"zipcode": 70707,
			"hospital": "Mayo Clinic",
			"insuranceAccepted": ["Aetna", "Cigna"],
			"ratings": {
				rating: 4.9,
				number: 7
			},
			"gender": "Female",
			"languageSpoken": ["English", "Hindi"],
			"mainLocation": "987 Park Ave",
			"additionalLocations": ["654 Market St", "321 Main St"],
			"networkStatus": "In-Network",
			"id": "fjkvfflcccxxxxcfdkjdf"
	},
			{
				"name": "Dr. Maria Rodriguez",
				"specialization": "Obstetrics & Gynecology",
				"zipcode": 90210,
				"hospital": "Cedars-Sinai Medical Center",
				"insuranceAccepted": ["Blue Cross Blue Shield", "Aetna"],
				"ratings": {
					rating: 4.9,
					number: 4
				},
				"gender": "Female",
				"languageSpoken": ["English", "Spanish"],
				"mainLocation": "123 Main St",
				"additionalLocations": ["456 Market St", "789 Park Ave"],
				"networkStatus": "In-Network",
				"id": "fjkvfflcccbbbbbbxcfdkjdf"
			},
			{
				"name": "Dr. David Kim",
				"specialization": "Ophthalmology",
				"zipcode": 10001,
				"hospital": "NewYork-Presbyterian Hospital",
				"insuranceAccepted": ["Cigna", "UnitedHealthcare"],
				"ratings": {
					rating: 4.7,
					number: 12
				},
				"gender": "Male",
				"languageSpoken": ["English", "Korean"],
				"mainLocation": "321 Main St",
				"additionalLocations": ["654 Market St", "987 Park Ave"],
				"networkStatus": "In-Network",
				"id": "fjkvppplbnmbb",
			},
			{
				"name": "Dr. Elizabeth Thomas",
				"specialization": "Psychiatry",
				"zipcode": 60606,
				"hospital": "Rush University Medical Center",
				"insuranceAccepted": ["Medicare", "Anthem"],
				"ratings": {
					rating: 4.1,
					number: 14
				},
				"gender": "Female",
				"languageSpoken": ["English", "German"],
				"mainLocation": "456 Market St",
				"additionalLocations": ["789 Park Ave", "123 Main St"],
				"networkStatus": "Out-of-Network",
				"id": "fjkvppplbnmbqq",
			},
			{
				"name": "Dr. Michael Anderson",
				"specialization": "Neurology",
				"zipcode": 80808,
				"hospital": "Kaiser Permanente",
				"insuranceAccepted": ["Blue Shield", "HealthNet"],
				"ratings": {
					rating: 4.6,
					number: 98
				},
				"gender": "Male",
				"languageSpoken": ["English", "Japanese"],
				"mainLocation": "789 Park Ave",
				"additionalLocations": ["123 Main St", "456 Market St"],
				"networkStatus": "In-Network",
				"id": "fjkvppplbnmmmn",
			},
			{
				"name": "Dr. Sarah Patel",
				"specialization": "Endocrinology",
				"zipcode": 70707,
				"hospital": "Mayo Clinic",
				"insuranceAccepted": ["Aetna", "Cigna"],
				"ratings": {
					rating: 4.9,
					number: 64
				},
				"gender": "Female",
				"languageSpoken": ["English", "Hindi"],
				"mainLocation": "987 Park Ave",
				"additionalLocations": ["654 Market St", "321 Main St"],
				"networkStatus": "In-Network",
				"id": "fjkvppplbnmddddd",
			}
		
	
]

export default doctorsData;
