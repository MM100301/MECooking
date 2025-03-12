document.addEventListener("DOMContentLoaded", function() {

  function recipeSearch() {
    var input, filter, tags, i, txtValue;
    input = document.getElementById('searchInput');
    paragraph = document.getElementById('paragraph');
    filter = input.value.toLowerCase();
    tags = {{ recipe_tags | jsonify }};
    var recipes = [];
    var results = [];
    var printable = [];
    var directories = {{ site.collections | map: "directory" | jsonify }};
    var collections = {{ site.collections | map: "label" | jsonify }};
    fetch("{{ site.url }}{{ site.baseurl }}/_data/recipes.json")
      .then(response => response.json())
      .then(data => {
        printable = data;
        for (i = 0; i < tags.length; i++) {
          txtValue = tags[i];
          if (txtValue.toLowerCase().indexOf(filter) > -1) {
            results.push(txtValue);
          }
        }
        if (filter != '') {
          for (i = 0; i < printable.length; i++) {
            for (j = 0; j < printable[i].tags.length; j++) {
              txtValue = printable[i].tags[j];
              if (results.includes(txtValue.toLowerCase())) {
                  recipes.push(printable[i].title);
              }
            }
          }
          paragraph.innerText = 'Recipes Found: ' + recipes.join(', ') + 'Results: ' + results.join(', ');
        }
      })
      .catch(error => {
        console.error(`Error fetching recipes: ${error}`);
      });
  }
});