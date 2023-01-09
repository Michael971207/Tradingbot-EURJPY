var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/api/endpoint');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();