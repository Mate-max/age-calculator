function calculateAge() {
    // Get input values
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    // Check if inputs are valid
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
      // Valid inputs
      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      // Calculate age
      let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
      let ageMonths = currentDate.getMonth() - birthDate.getMonth();
      let ageDays = currentDate.getDate() - birthDate.getDate();

      // Adjust age values if negative
      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths = 12 + ageMonths;
        ageDays = ageDays < 0 ? 30 + ageDays : ageDays;
      }

      // Update result container with purple text
      const ageResult = document.getElementById('age-result');
      ageResult.innerHTML = `<h1><span class="purple">${ageYears}</span> years</h1>
                             <h1><span class="purple">${ageMonths}</span> months</h1>
                             <h1><span class="purple">${ageDays}</span> days</h1>`;
    } else {
      // Invalid inputs
      alert('Please enter valid day, month, and year.');

      // Set input text color to red
      dayInput.style.color = monthInput.style.color = yearInput.style.color = 'red';

      // Update result container with default text
      const ageResult = document.getElementById('age-result');
      ageResult.innerHTML = `<h1><span class="purple">--</span> years</h1>
                             <h1><span class="purple">--</span> months</h1>
                             <h1><span class="purple">--</span> days</h1>`;
    }
  }