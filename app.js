const getUserObject = function(username){
  const URL = `https://api.github.com/users/${username}/repos`;
  fetch(URL).then(response => response.json()).then(responseJson => displayResults(responseJson));
};

const displayResults = function(array){
  $('.list').html('');
  for(let repo of array){
    $('.list').append(`<p>${repo.name}</p>`);
    $('.list').append(`<a href="${repo.html_url}">${repo.html_url}</a>`);
  }
};

const watchForm = function() {
  $('form').submit(event => {
    event.preventDefault();
    getUserObject($('#query').val());
  });
}; 
watchForm();