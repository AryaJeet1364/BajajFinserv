# 🚀 BFHL API

A REST API built using **Node.js + Express**, deployed on **Render**, which processes an input array and returns categorized values (numbers, alphabets, special characters, sum, concatenated string with alternating caps, etc).

## 📌 Features

* Accepts an input array of strings (`POST /bfhl`)
* Splits the array into:
  * ✅ Odd numbers
  * ✅ Even numbers
  * ✅ Alphabets (converted to uppercase)
  * ✅ Special characters
* Returns:
  * Sum of numbers (as string)
  * Concatenation of alphabets in reverse order with alternating caps
  * User info (ID, email, roll number)
  * Status flag (`is_success`)

## 📂 Project Structure

```
.
├── index.js        # Main server file (Express API)
├── package.json    # Dependencies and scripts
└── README.md       # Documentation
```

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/bfhl-api.git
cd bfhl-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

Server runs on `http://localhost:3000`

## 🌐 Deployment (Render)

1. Push code to GitHub
2. Create new **Web Service** on Render
3. Configure:
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
4. Deploy 🎉

Your live API will be available at:
```
https://<your-service-name>.onrender.com
```

## 📡 API Endpoints

### `GET /`
* Health check route
* **Response**:
```json
"Server is running. Use POST /bfhl for API requests."
```

### `POST /bfhl`

#### Request Body
```json
{
  "data": ["a","1","334","4","R","$"]
}
```

#### Response
```json
{
  "is_success": true,
  "user_id": "aryajeet_jha_130604",
  "email": "aryajeet.jha2022@vitstudent.ac.in",
  "roll_number": "22BCT0199",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## 🧪 Testing with Postman

1. Open **Postman**
2. Choose **POST** → `https://<your-service-name>.onrender.com/bfhl`
3. Set **Body** → **raw** → **JSON**

```json
{
  "data": ["M","1","92","5","z","*"]
}
```

4. Send ✅

## 📝 API Logic Breakdown

### Data Processing Rules:

- **Numbers**: Separated into odd and even arrays
- **Alphabets**: Converted to uppercase and stored
- **Special Characters**: Non-alphanumeric characters
- **Sum**: All numeric values added together (returned as string)
- **Concat String**: Alphabets in reverse order with alternating capitalization

### Example Processing:
Input: `["a","1","334","4","R","$"]`
- Odd numbers: `["1"]`
- Even numbers: `["334","4"]`
- Alphabets: `["A","R"]` (uppercase)
- Special chars: `["$"]`
- Sum: `"339"` (1+334+4)
- Concat string: `"Ra"` (R+a in alternating caps)

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Render** - Cloud deployment platform

## 🔧 Environment Setup

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 📚 Dependencies

```json
{
  "express": "^4.x.x"
}
```

## 🚨 Error Handling

The API includes basic error handling for:
- Invalid JSON format
- Missing `data` field
- Server errors

## 🔗 Live Demo

**Base URL**: `https://<your-render-service>.onrender.com`

Try it out:
```bash
curl -X POST https://<your-render-service>.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","1","2","b","#"]}'
```

## 👨‍💻 Author

**Aryajeet Jha**
- 📧 aryajeet.jha2022@vitstudent.ac.in
- 🎓 Roll Number: 22BCT0199
- 🆔 User ID: aryajeet_jha_130604

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
