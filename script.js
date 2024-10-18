// Function to open the modal and load the URL in the iframe
function openModal(url) {
    // Get the iframe element and set its src attribute to the passed URL
    var iframe = document.getElementById('content_frame');
    iframe.src = url;
  
    // Display the modal
    document.getElementById('modal').style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    // Hide the modal
    document.getElementById('modal').style.display = 'none';
  
    // Clear the iframe src to stop loading the page when closed
    document.getElementById('content_frame').src = '';
  }
  