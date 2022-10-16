const getRocketsInfo = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');

  try {
    if (response.ok) {
      const data = await response.json();
      data.filter((rocket) => {
        // Filter out Falcon 1 from rendering cause the images are broken 
        // Refer to broken_image.png to see what I mean
        return rocket.name !== 'Falcon 1';
      }).map((rocket) => {
        // Displaying names of landing pads
        const rocketDiv = document.createElement('div');
        rocketDiv.className = 'rocket';
        rocketDiv.style.border = '1px solid black';
        rocketDiv.style.margin = '10px';
        rocketDiv.textContent = rocket.name;
        document.getElementById('rockets').appendChild(rocketDiv);
        
        // Displaying images of rockets
        rocket.flickr_images.forEach((image) => {
          const imageDiv = document.createElement('img');
          imageDiv.src = image;
          imageDiv.style.width = '300px';
          imageDiv.style.height = 'auto';
          imageDiv.style.margin = '10px';
          document.getElementById('rockets').appendChild(imageDiv);
        });
      })
    } else {
      console.log(`Something happened here: ${response.status}`)
    }
  } catch (err) {
    console.error(`Rocket Error: ${err}`);
  }
}

getRocketsInfo();