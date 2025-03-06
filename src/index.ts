// Basic digital clock implementation
document.addEventListener("DOMContentLoaded", () => {
  // Get the clock container element
  const clockContainer = document.getElementById("clock");

  if (!clockContainer) {
    console.error(
      'Clock container element not found! Make sure you have a div with id="clock" in your HTML.'
    );
    return;
  }

  // Create a new element for the clock display
  const clockDisplay = document.createElement("div");
  clockContainer.appendChild(clockDisplay);

  // Style the container to fill the viewport
  clockContainer.style.display = "flex";
  clockContainer.style.justifyContent = "center";
  clockContainer.style.alignItems = "center";
  clockContainer.style.height = "100vh";
  clockContainer.style.width = "100%";

  // Style the clock display element
  clockDisplay.style.fontSize = "min(20vw, 35vh)"; // Responsive font size
  clockDisplay.style.fontFamily = "Arial, sans-serif";
  clockDisplay.style.fontWeight = "bold";
  clockDisplay.style.color = "#fff";

  // Function to update the clock
  function updateClock(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Update the clock immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);
});
