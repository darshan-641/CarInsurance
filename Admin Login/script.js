
const userData = [
    {
      name: "John Doe",
      policyNumber: "POL1234",
      reasonOfDamage: "Accident",
      policyExpiryDate: "2023-12-31"
    },
    {
      name: "Jane Smith",
      policyNumber: "POL5678",
      reasonOfDamage: "Theft",
      policyExpiryDate: "2022-11-30"
    },
    
  ];
  

  function generateTableRows(data) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
  
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.policyNumber}</td>
        <td>${user.reasonOfDamage}</td>
        <td>${user.policyExpiryDate}</td>
        <td>
          <button onclick="claimInsurance('${user.policyNumber}')">Claim Insurance</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Function to handle the "Claim Insurance" button click
  function claimInsurance(policyNumber) {
    // Here, you can define the logic to redirect to the SetClaimAmountPage
    // For demonstration purposes, we'll simply display a message in the console.
    console.log(`Claim insurance for Policy Number: ${policyNumber}`);
  }
  
  // Call the function to populate the table on page load
  generateTableRows(userData);
  

  // Sample user data for demonstration purposes
const userData2 = {
    name: "John Doe",
    vehicleNumber: "ABC123",
    policyNumber: "POL1234"
  };
  
  // Function to populate user details on the page
  function populateUserDetails() {
    const userNameElement = document.getElementById("user-name");
    const vehicleNumberElement = document.getElementById("vehicle-number");
    const policyNumberElement = document.getElementById("policy-number");
  
    userNameElement.textContent = userData2.name;
    vehicleNumberElement.textContent = userData2.vehicleNumber;
    policyNumberElement.textContent = userData2.policyNumber;
  }
  
  // Function to set the claim amount for the user
  function setClaimAmount() {
    const claimAmount = document.getElementById("claim-amount").value;
    // Here, you can define the logic to set the claim amount for the user
    // For demonstration purposes, we'll simply display a message in the console.
    console.log(`Set claim amount for ${userData2.name} (Policy Number: ${userData2.policyNumber}): Rs ${claimAmount}`);
  }
  
  // Call the function to populate user details on page load
  populateUserDetails();
  