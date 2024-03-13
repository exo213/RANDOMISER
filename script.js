document.addEventListener('DOMContentLoaded', function() { 
    // Define your food lists 
    const foodLists = {
        breakfast: [
            "Idli Sambhar", "Bread Omelette", "Dal", "Sprouts", "Parantha", 
            "Daliya", "Aloo Puri", "Poha", "Pakode", "Sandwich" , "Kachodi" , "Samose" , "pav bhaji"
        ], 
        lunch: [
            "Paneer Bhurji", "Chole", "Rajma", "Dal", "Bhindi", 
            "Arbi", "Kaddu", "Tinde", "Kofte", "Curry" , "Rolls"
        ],
        dinner: [
            "Pasta", "Dal Makhani", "Paneer Butter Masala", "Egg Curry", "Palak Paneer", 
            "Kebab", "Matar Paneer",  "Khichdi", "Chinese", "Biryani", "Soya chaap" , 
        ] 
    };

    // Get element references
    const breakfastBtn = document.getElementById('breakfastBtn');
    const lunchBtn = document.getElementById('lunchBtn');
    const dinnerBtn = document.getElementById('dinnerBtn');
    const foodResult = document.getElementById('foodResult'); 

    // Function to choose random food
    function chooseFood(mealType) {
        const foodList = foodLists[mealType]; 
        const randomIndex = Math.floor(Math.random() * foodList.length);
        const selectedFood = foodList[randomIndex];
        foodResult.textContent = selectedFood; 
    }

    // Attach event listeners to buttons
    breakfastBtn.addEventListener('click', () => chooseFood('breakfast'));
    lunchBtn.addEventListener('click', () => chooseFood('lunch'));
    dinnerBtn.addEventListener('click', () => chooseFood('dinner'));
});
