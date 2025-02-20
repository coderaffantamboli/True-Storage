function calculateCapacity() {
    // Get input values
    const driveSize = parseFloat(document.getElementById("driveSize").value);
    const unit = document.getElementById("unit").value;
  
    // Check if the input is valid
    if (isNaN(driveSize) || driveSize <= 0) {
      alert("Please enter a valid hard drive size.");
      return;
    }
  
    // Convert input to GB if necessary
    let sizeInGB;
    if (unit === "TB") {
      sizeInGB = driveSize * 1000; // 1 TB = 1000 GB (decimal)
    } else {
      sizeInGB = driveSize;
    }
  
    // Calculate usable capacity (binary conversion)
    const usableCapacityGB = sizeInGB * (931 / 1000); // Accounting for binary vs. decimal difference
  
    // Display the result
    document.getElementById("usableCapacity").textContent = `${usableCapacityGB.toFixed(2)} GB`;
  }
  
  // Add event listener for the Enter key
  document.getElementById("driveSize").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      calculateCapacity();
    }
  });