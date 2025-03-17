document.addEventListener("DOMContentLoaded", function() {

  function recipeSearch() {
    var input, filter, tags, i, txtValue;
    input = document.getElementById('searchInput');
    paragraph = document.getElementById('paragraph');
    filter = input.value.toLowerCase();
    tags = {{ recipe_tags | jsonify }};
    var recipes = [];
    var results = [];
    var directories = {{ site.collections | map: "directory" | jsonify }};
    var collections = {{ site.collections | map: "label" | jsonify }};
    fetch("{{ site.url }}{{ site.baseurl }}/_data/recipes.json")
      .then(response => response.json())
      .then(data => {
        var printable = data;
        for (i = 0; i < tags.length; i++) {
          txtValue = tags[i];
          if (txtValue.toLowerCase().indexOf(filter) > -1) {
            results.push(txtValue);
          }
        }
        if (filter != '') {
          for (i = 0; i < printable.length; i++) {
            var splitTags = printable[i].tags.split(', ');
            for (j = 0; j < splitTags.length; j++) {
              if (results.includes(splitTags[j])) {
                recipes.push(printable[i].title);
              }
            }
          }
          paragraph.innerText = 'Results: ' + results.join(', ') + '\nRecipes Found: ' + recipes.join(', ');
        }
      })
      .catch(error => {
        console.error(`Error fetching recipes: ${error}`);
      });
    }
});