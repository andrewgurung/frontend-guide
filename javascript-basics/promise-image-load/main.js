function imgLoad(url) {
    // Create new promise with the Promise() constructor with two parameters, resolve and reject
    return new Promise(function(resolve, reject) {
        // Standard XHR
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        // When the request loads, check whether it was successful
        request.onload = function() {
            if (request.status === 200) {
                // If successful, resolve the promise
                resolve(request.response);
            } else {
                // If it fails, reject the promise
                reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
            }
        }

        // When the entire request fails to begin with
        request.onerror = function() {
            reject(Error('There was a network error.'));
        };

        // Send request
        request.send();
    });
}

var body = document.querySelector('body');
var myImage = new Image();

// Call the function to load image, chain the promise then() method which contains two callbacks

imgLoad('http://res.cloudinary.com/ddylgzvo9/image/upload/c_lfill,h_200,w_200/v1500598144/brooklyn-bridge-105079_640_dddvyd.jpg').then(
  // The first callback runs when the promise resolves
  function(response) {
      var imageURL = window.URL.createObjectURL(response);
      myImage.src = imageURL;
      body.appendChild(myImage);
  },
  // The second callback runs when the promise rejects
  function(Error) {
      console.log(Error);
  }
);
