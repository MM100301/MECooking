---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---
<html>
  <body>
    <h1>Recipes</h1>
    <div>
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
          <h3 style="cursor: pointer;" onclick="toggleGrid('{{ collection.label }}')">
            {{ collection.label | capitalize }} ⌄
          </h3>
            <div id="{{ collection.label }}-grid" style="display: none; grid-template-columns: repeat(3, 1fr); gap: 10px;">
              {% for recipe in collection.docs %}
                <div style="text-align: center;">
                <a href="{{ recipe.url }}"><img src="{{ recipe.image }}" alt="{{ recipe.title }}" style="width: 200px; height: 250px;"></a>
                <p><a href="{{ recipe.url }}">{{ recipe.title }}</a></p>
                </div>
              {% endfor %}
            </div>
        {% endunless %}
      {% endfor %}
    </div>
    <script>
      function toggleGrid(gridId) {
        const grid = document.getElementById(`${gridId}-grid`);
        if (grid.style.display === "none") {
          grid.style.display = "grid";
        } else {
          grid.style.display = "none";
        }
      }
    </script>
  </body>
</html>
