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
            {{ collection.label | capitalize }}
            <span id="{{ collection.label }}-caret" style="display: inline-block; transform: rotate(0deg); transition: transform 0.3s;">▼</span>
          </h3>
          <div id="{{ collection.label }}-grid" style="display: none; grid-template-columns: repeat(3, 1fr); gap: 10px; transition: max-height 0.3s ease, opacity 0.3s ease; overflow: hidden; max-height: 0; opacity: 0;">
            {% for recipe in collection.docs %}
              <div style="text-align: center;">
                <a href="{{ recipe.url }}"><img src="{{ recipe.image }}" alt="{{ recipe.title }}" style="width: 200px; height: 250px;"></a>
                <p><a href="{{ recipe.url }}">{{ recipe.title }}</a></p>
              </div>
            {% endfor %}
          </div>
          <script>
            function toggleGrid(gridId) {
              const grid = document.getElementById(`${gridId}-grid`);
              const caret = document.getElementById(`${gridId}-caret`);
              if (grid.style.maxHeight === "0px" || grid.style.maxHeight === "") {
                grid.style.maxHeight = grid.scrollHeight + "px";
                grid.style.opacity = "1";
                caret.style.transform = "rotate(180deg)";
              }
              else {
                grid.style.maxHeight = "0px";
                grid.style.opacity = "0";
                caret.style.transform = "rotate(0deg)";
              }
            }
          </script>
        {% endunless %}
      {% endfor %}
    </div>
  </body>
</html>
