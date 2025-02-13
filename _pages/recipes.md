---
title: Recipes
permalink: /recipes/
layout: about
tags: Matthew Emma
order: 3
---
<html>
  <body>
    <script src="../assets/js/button.js"></script>
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
    <p>This is just to prove that the book site is working and that the issue was the for loop</p>
    <button id="button" class="button">Click to change color</button>
  </body>
</html>
