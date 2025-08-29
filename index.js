const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

function alternatingCaps(str) {
  let result = [];
  let toggle = true;
  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      if (toggle) {
        result.push(ch.toUpperCase());
      } else {
        result.push(ch.toLowerCase());
      }
      toggle = !toggle;
    }
  }
  return result.join("");
}

app.get("/", (req, res) => {
  res.send("Server is running. Use POST /bfhl for API requests.");
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let specials = [];
    let totalSum = 0;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input. 'data' should be an array",
      });
    }

    data.forEach((item) => {
      if (/^\d+$/.test(item)) {
        let num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        totalSum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specials.push(item);
      }
    });

    const concatString = alternatingCaps(alphabets.join(""));

    res.status(200).json({
      is_success: true,
      user_id: "aryajeet_jha_130604",
      email: "aryajeet.jha2022@vitstudent.ac.in",
      roll_number: "22BCT0199",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters: specials,
      sum: totalSum.toString(),
      concat_string: concatString,
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
