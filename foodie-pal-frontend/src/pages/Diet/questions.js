const Questions = {
  "Personal Information": [
    {
      Question: "What is your age?",
      type: "number",
      placeholder: "e.g., 21",
    },
    {
      Question: "What is your gender?",
      type: "select",
      options: [{ Male: 0 }, { female: 1 }],
    },
    {
      Question: "What is your height?",
      type: "number",
      placeholder: "e.g., 170cm",
    },
    {
      Question: "What is your weight?",
      type: "number",
      placeholder: "e.g., 70kg",
    },
    {
      Question: "What is your activity level?",
      type: "select",
      options: [
        { Sedentary: 1.2 },
        { Lightly: 1.375 },
        { Moderately: 1.55 },
        { Very: 1.725 },
        { Extra: 1.9 },
      ],
    },
  ],
  "Health and Medical History": [
    {
      Question: "Do you have any medical conditions?",
      type: "text",
      placeholder: "e.g., diabetes, hypertension",
    },
    {
      Question: "Are you taking any medications or supplements?",
      type: "text",
      placeholder: "e.g., multivitamins, fish oil",
    },
  ],
  "Dietary Preferences": [
    {
      Question: "Are there any specific foods you love or hate?",
      type: "text",
      placeholder: "e.g., I love pizza, I hate broccoli",
    },
    {
      Question:
        "Do you follow any specific dietary preferences or restrictions?",
      type: "text",
      placeholder: "e.g., vegetarian, gluten-free",
    },
    {
      Question: "How many meals do you prefer to eat in a day?",
      type: "text",
      placeholder: "e.g., 3 meals, 2 meals",
    },
  ],
  "Meal Timing:": [
    {
      Question: "What is your typical daily schedule like?",
      type: "text",
      placeholder:
        "e.g., 8:00 AM - 5:00 PM (work), 6:00 PM - 10:00 PM (school)",
    },
    {
      Question:
        "Do you have specific times you prefer to eat meals and snacks?",
      type: "text",
      placeholder: "e.g., 8:00 AM (breakfast), 12:00 PM (lunch)",
    },
  ],
  "Nutritional Goals:": [
    {
      Question: "What are your primary health and fitness goals?",
      type: "text",
      placeholder: "e.g., lose weight, gain muscle",
    },
    {
      Question: "Are there any specific nutrient goals you are aiming for?",
      type: "text",
      placeholder: "e.g., high protein, low sugar",
    },
  ],
  "Current Eating Habits:": [
    {
      Question:
        "Can you describe your typical breakfast, lunch, dinner, and snacks?",
      type: "text",
      placeholder:
        "e.g., breakfast: oatmeal, lunch: sandwich, dinner: pasta, snacks: chips",
    },
    {
      Question: "Do you tend to eat more at certain times of the day?",
      type: "text",
      placeholder: "e.g., I eat more at dinner",
    },
  ],
  "Stress and Emotional Eating:": [
    {
      Question:
        "Do you find that stress or emotions impact your eating habits?",
      type: "text",
      placeholder: "e.g., I eat more when I am stressed",
    },
  ],
  "Snacking Habits:": [
    {
      Question: "How often do you snack?",
      type: "text",
      placeholder: "e.g., 2 times a day",
    },
    {
      Question: "what types of snacks do you usually reach for?",
      type: "text",
      placeholder: "e.g., chips, cookies",
    },
  ],
  "Beverage Habits:": [
    {
      Question: "How much water do you drink in a day?",
      type: "text",
      placeholder: "e.g., 2 liters",
    },
    {
      Question: "What other beverages do you drink?",
      type: "text",
      placeholder: "e.g., coffee, tea",
    },
    {
      Question: "Do you drink alcohol?",
      type: "text",
      placeholder: "e.g., 1 glass of wine per day",
    },
  ],
  "Cooking Skills and Preferences:": [
    {
      Question: "How comfortable are you with cooking?",
      type: "text",
      placeholder: "e.g., I cook every day",
    },
    {
      Question:
        "Are there specific cooking methods or types of cuisine you prefer?",
      type: "text",
      placeholder: "e.g., I prefer baking and I like Italian food",
    },
  ],
  "Support System:": [
    {
      Question:
        "Do you have a support system that will help you reach your goals?",
      type: "text",
      placeholder: "e.g., my family and friends",
    },
  ],
};
export default Questions;
