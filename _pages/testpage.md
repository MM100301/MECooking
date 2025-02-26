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
      <ul id="tagList">
        {% for tag in recipe_tags %}
          <li>{{ tag }}</li>
        {% endfor %}
      </ul>
      <p id="paragraph"></p>
      <script>
        function recipeSearch() {
          var input, filter, tags, i, txtValue;
          input = document.getElementById('searchInput');
          paragraph = document.getElementById('paragraph');
          filter = input.value.toLowerCase();
          tags = {{ recipe_tags | jsonify }};
          collections = [];
          for (i = 0; i < tags.length; i++) {
            txtValue = tags[i];
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                results.push(txtValue);
            }
          }
          {% for collection in site.collections %}
            {% unless collection.label == "posts" %}
              collections.push("{{ collection.label }}");
            {% endunless %}
          {% endfor %}
          var results = [];
          if (filter === "") {
              paragraph.innerText = collections.join(', ');
              return;
          }
          paragraph.innerText = 'Recipes found: ' + results.join(', ');
        }
      </script>
    </div>
  </body>
</html>
