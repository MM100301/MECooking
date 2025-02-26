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
          for (i = 0; i < tags.length; i++) {
            txtValue = tags[i];
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                results.push(txtValue);
            }
          }
          {% for tag in results %}
          {% for collection in site.collections %}
            {% unless collection.label == "posts" %}
              {% for recipe in site[collection.label] %}
                {% if recipe.tags contains "tag" %}
                  recipes.push("{{ recipe.title }}");
                {% endif %}
              {% endfor %}
            {% endunless %}
          {% endfor %}
          {% endfor %}
          if (filter === "") {
              paragraph.innerText = "Nothing Found";
              return;
          }
          paragraph.innerText = 'Recipes found: ' + recipes.join(', ');
        }
      </script>
    </div>
  </body>
</html>
