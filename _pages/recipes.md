---
title: Recipes
permalink: /recipes/
layout: about
tags: Matthew Emma
order: 3
---
<html>
  <body>
    <script src="../assets/js/header.js"></script>
    <h1>Recipes</h1>
    <div>
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
          <h3 class="post-meta">
            Items in {{ collection.label }}
          </h3>
          <ul>
            {% for recipe in site[collection.label] %}
              <li><a href="{{ recipe.url }}">{{ recipe.title }}</a></li>
            {% endfor %}
          </ul>
        {% endunless %}
      {% endfor %}
    </div>
  </body>
</html>
