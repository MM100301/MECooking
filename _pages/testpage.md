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
        <input type="text" id="searchInput" placeholder="Search tags" oninput="searchTags()">
        <ul id="tagList">
          {% for tag in recipe_tags %}
            <li>{{ tag }}</li>
          {% endfor %}
        </ul>
        <script>
          function searchTags() {
            var input, filter, tags, i, txtValue;
            input = document.getElementById('searchInput');
            filter = input.value.toLowerCase();
            tags = {{ recipe_tags | jsonify }};
            var tagList = document.getElementById("tagList");
            tagList.innerHTML = '';
            for (i = 0; i < tags.length; i++) {
              txtValue = tags[i];
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                var li = document.createElement('li');
                li.textContent = txtValue;
                tagList.appendChild(li);
              }
            }
          }
          </script>
    </div>
  </body>
</html>