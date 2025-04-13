const updateClock = () => {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    clock.innerHTML = `${now.toLocaleTimeString()} ${now.toLocaleDateString('en-US', options)}`;
  };
  
  setInterval(updateClock, 1000);
  updateClock();
  