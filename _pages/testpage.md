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
        <input type="text" id="searchInput" placeholder="Search tags" oninput="recipeSearch()">
        <button type="submit" id="searchButton">Search</button>
        <ul id="tagList">
          {% for tag in recipe_tags %}
            <li>{{ tag }}</li>
          {% endfor %}
        </ul>
        <script>
        function recipeSearch() {
          var input, filter, tags, i, txtValue;
          input = document.getElementById('searchInput');
          filter = input.value.toLowerCase();
          tags = {{ recipe_tags | jsonify }};
          var results = [];
          for (i = 0; i < tags.length; i++) {
            txtValue = tags[i];
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
              results.push(txtValue);
            }
          }
          document.getElementById('paragraph').innerHTML = 'Recipes found: ' + results.join(', ');
        }
        document.getElementById('searchButton').addEventListener('click', recipeSearch());
      </script>
      <p id="paragraph"></p>
    </div>
  </body>
</html>
