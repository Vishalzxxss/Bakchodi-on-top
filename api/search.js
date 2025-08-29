export default function handler(req, res) {
  // Sample data from the provided JSON
  const users = [
    {
      "name": "J Vinod",
      "fathersName": "",
      "phoneNumber": "9490160194",
      "otherNumber": "",
      "passportNumber": "",
      "aadharNumber": "393933081942",
      "age": "28",
      "gender": "Male",
      "address": "Hyderabad",
      "district": "HYDERABAD",
      "pincode": "",
      "state": "TELANGANA",
      "town": ""
    },
    // ... (all other user objects from the JSON)
    {
    "name": "J Vinod",
    "fathersName": "",
    "phoneNumber": "9490160194",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "393933081942",
    "age": "28",
    "gender": "Male",
    "address": "Hyderabad",
    "district": "HYDERABAD",
    "pincode": "",
    "state": "TELANGANA",
    "town": ""
  },
  {
    "name": "CHANDRAVATHI",
    "fathersName": "",
    "phoneNumber": "9443129502",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "687548546061",
    "age": "29",
    "gender": "Female",
    "address": "D 0 BALACHANDRAN 6 PARASAKTHI ST POTHERI",
    "district": "CHENGALPATTU",
    "pincode": "603203",
    "state": "TAMIL NADU",
    "town": ""
  },
  {
    "name": "DIL BHADUR",
    "fathersName": "",
    "phoneNumber": "7060369827",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "826140371260",
    "age": "40",
    "gender": "Male",
    "address": "DLF LYNNDALF ESTATE MUSSOORIE",
    "district": "DEHRADUN",
    "pincode": "",
    "state": "UTTARAKHAND",
    "town": ""
  },
  {
    "name": "K Sarswathi",
    "fathersName": "",
    "phoneNumber": "8499958171",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "428346580855",
    "age": "23",
    "gender": "Female",
    "address": "Paidipadu",
    "district": "PRAKASAM",
    "pincode": "523271",
    "state": "ANDHRA PRADESH",
    "town": "Zarugumalli"
  },
  {
    "name": "Janapati Sujatha",
    "fathersName": "",
    "phoneNumber": "9848277347",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "673742610282",
    "age": "39",
    "gender": "Female",
    "address": "W o Ravi Gopalapuram",
    "district": "WEST GODAVARI",
    "pincode": "534316",
    "state": "ANDHRA PRADESH",
    "town": "Gopalapuram"
  },
  {
    "name": "KATHIRVELU",
    "fathersName": "",
    "phoneNumber": "9488567480",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "799000210409",
    "age": "76",
    "gender": "Male",
    "address": "NO-B1  VENGATESH NAGAR  GOUNDAMPALAYAM  CBE",
    "district": "COIMBATORE",
    "pincode": "641030",
    "state": "TAMIL NADU",
    "town": ""
  },
  {
    "name": "RASHIDA BANO",
    "fathersName": "",
    "phoneNumber": "9450000223",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "483789976234",
    "age": "60",
    "gender": "Female",
    "address": "349 PURANI DAAL MIL SAMA BIHAR COLONY NEAR AAI LUCKNOW",
    "district": "SOUTH EAST",
    "pincode": "",
    "state": "DELHI",
    "town": ""
  },
  {
    "name": "PRASHANT K",
    "fathersName": "",
    "phoneNumber": "9820263696",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "824683536998",
    "age": "41",
    "gender": "Male",
    "address": "601 B WING SKY VISTA D N NAGAR",
    "district": "MUMBAI",
    "pincode": "400053",
    "state": "MAHARASHTRA",
    "town": "Urban"
  },
  {
    "name": "MD KASHIM",
    "fathersName": "",
    "phoneNumber": "9315178347",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "870752532282",
    "age": "19",
    "gender": "Male",
    "address": "H NO 337 GALI NO 7 SHAKTI PARK GURGAON",
    "district": "GURUGRAM",
    "pincode": "",
    "state": "HARYANA",
    "town": ""
  },
  {
    "name": "Mr Kiaan Kanade",
    "fathersName": "",
    "phoneNumber": "9819813089",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "301548711277",
    "age": "9",
    "gender": "Male",
    "address": "AHMEDABAD",
    "district": "AHMADABAD",
    "pincode": "",
    "state": "GUJARAT",
    "town": ""
  },
  {
    "name": "My manohar Reddy",
    "fathersName": "",
    "phoneNumber": "7993768617",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "880867937678",
    "age": "20",
    "gender": "Male",
    "address": "Rajapanagalroad",
    "district": "PRAKASAM",
    "pincode": "523001",
    "state": "ANDHRA PRADESH",
    "town": "Ongole"
  },
  {
    "name": "MANICKAM CHINNATHAMPI",
    "fathersName": "",
    "phoneNumber": "9566878444",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "832773103271",
    "age": "36",
    "gender": "Male",
    "address": "13-329-2  5TH STREET  SAMUNDI NAGAR  STEEL PLANT 1ST GATE  SALEM",
    "district": "SALEM",
    "pincode": "636030",
    "state": "TAMIL NADU",
    "town": ""
  },
  {
    "name": "SAIMAHESH PERUMAL",
    "fathersName": "",
    "phoneNumber": "9486215410",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "788246098788",
    "age": "31",
    "gender": "Male",
    "address": "16 PAVENDAR BHARATHIDASAN SCHOOL GANDHI NAGAR POST TIRUPUR",
    "district": "TIRUPPUR",
    "pincode": "",
    "state": "TAMIL NADU",
    "town": ""
  },
  {
    "name": "KUNAL DHAR",
    "fathersName": "",
    "phoneNumber": "9667569642",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "992833680479",
    "age": "16",
    "gender": "Male",
    "address": "B 31 MEA HOUSING COMPLEX RthanksHA KRISHNA MARG CHANKYPURI DELHI NEW DELHI",
    "district": "NEW DELHI",
    "pincode": "110021",
    "state": "DELHI",
    "town": ""
  },
  {
    "name": "Jasleen kaur kainth",
    "fathersName": "",
    "phoneNumber": "9131777143",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "949061990596",
    "age": "14",
    "gender": "Female",
    "address": "Bsp",
    "district": "BILASPUR",
    "pincode": "",
    "state": "CHHATTISGARH",
    "town": ""
  },
  {
    "name": "PRAFULLA KUNDU",
    "fathersName": "",
    "phoneNumber": "8910636097",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "994478079118",
    "age": "69",
    "gender": "Male",
    "address": "OKSS HOTEL THOUSAND LIGHTS CHENNAI",
    "district": "CHENNAI",
    "pincode": "600006",
    "state": "TAMIL NADU",
    "town": ""
  },
  {
    "name": "ARCHANA  CHAVAN",
    "fathersName": "SHAMRAO",
    "phoneNumber": "9561779474",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "509236607092",
    "age": "25",
    "gender": "Male",
    "address": "A P -KULRLA  WEST  MUMBAI  KRANTI  NAGAR  BAIL  BAZAR  MUMBAI",
    "district": "MUMBAI",
    "pincode": "400070",
    "state": "MAHARASHTRA",
    "town": ""
  },
  {
    "name": "Gavara Ramu",
    "fathersName": "",
    "phoneNumber": "7901275735",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "652582426691",
    "age": "42",
    "gender": "Male",
    "address": "K Gumpa",
    "district": "VIZIANAGARAM",
    "pincode": "535524",
    "state": "ANDHRA PRADESH",
    "town": "Komarada"
  },
  {
    "name": "Ch ashok Kumar",
    "fathersName": "",
    "phoneNumber": "9989986893",
    "otherNumber": "",
    "passportNumber": "",
    "aadharNumber": "806890450747",
    "age": "29",
    "gender": "Female",
    "address": "Edepalli",
    "district": "KRISHNA",
    "pincode": "521001",
    "state": "ANDHRA PRADESH",
    "town": "Machilipatnam"
  },
  {
      "name": "Ch ashok Kumar",
      "fathersName": "",
      "phoneNumber": "9989986893",
      "otherNumber": "",
      "passportNumber": "",
      "aadharNumber": "806890450747",
      "age": "29",
      "gender": "Female",
      "address": "Edepalli",
      "district": "KRISHNA",
      "pincode": "521001",
      "state": "ANDHRA PRADESH",
      "town": "Machilipatnam"
    }
  ];

  // Get the phone number from the query string
  const { phone } = req.query;

  // Check if phone number is provided
  if (!phone) {
    return res.status(400).json({ 
      error: 'Phone number is required. Use /api/search?phone=YOUR_NUMBER' 
    });
  }

  // Search for user with the provided phone number
  const user = users.find(u => u.phoneNumber === phone);

  // If user not found
  if (!user) {
    return res.status(404).json({ 
      error: 'User not found with the provided phone number' 
    });
  }

  // Return the user details
  res.status(200).json(user);
}
  
