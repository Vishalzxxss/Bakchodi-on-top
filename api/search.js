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
  
