function bmi(weight, height) {
    // Convert height to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmiValue = weight / (heightInMeters * heightInMeters);
    
    // Determine the category based on BMI value
    if (bmiValue <= 18.5) {
      return "Underweight";
    } else if (bmiValue <= 25.0) {
      return "Normal";
    } else if (bmiValue <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  console.log(bmi(34, 32))