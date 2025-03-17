---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---

<html>
  <body>
    <div>
      {% assign recipe_tags = "" | split: ',' %}
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
            {% for recipe in site[collection.label] %}
              {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
            {% endfor %}
        {% endunless %}
      {% endfor %}
      {% assign recipe_tags = recipe_tags | join: ',' | split: ',' | uniq %}
      <input type="text" id="searchInput" placeholder="Search tags">
      <button type="submit" onclick="recipeSearch()" id="searchButton">Search</button>
      <p id="paragraph"></p>
      <script>
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
                    console.log(txtValue);
                    if (results.includes(txtValue.toLowerCase())) {
                      recipes.push(printable[i].title);
                    }
                  }
                }
                paragraph.innerText = 'Results: ' + results.join(', ') + ' Recipes Found: ' + recipes.join(', ');     }
            })
            .catch(error => {
              console.error(`Error fetching recipes: ${error}`);
            });
        }
      </script>
    </div>
  </body>
</html>
