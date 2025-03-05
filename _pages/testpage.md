---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---

<html>
  <body>
    <div>
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
          {% for recipe in site[collection.label] %}
            {% assign recipestags = recipestags | concat: recipe.title | append: ": " | append: recipe.tags | append: ", " %}
          {% endfor %}
        {% endunless %}
      {% endfor %}
      {% assign recipestags = recipestags | split: ', ' | uniq %}
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
            var recipes = {{ recipestags | jsonify}};
            var results = [];
            var directories = {{ site.collections | map: "directory" | jsonify }};
            var collections = {{ site.collections | map: "label" | jsonify }};
            for (i = 0; i < tags.length; i++) {
              txtValue = tags[i];
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                results.push(txtValue);
              }
            }
            if (filter === "") {
              paragraph.innerText = "Nothing found";
              return;
            }
            paragraph.innerText = 'Collections: ' + collections.join(', ') + 'Directories: ' + directories.join(', ') + 'Recipes: ' + recipes.join(', ');
          }
        </script>
    </div>
  </body>
</html>
