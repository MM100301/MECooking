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
          <h3>
            Items in {{ collection.label }}
          </h3>
          <ul>
            {% for recipe in site[collection.label] %}
              <li><a class="colorLink" href="{{ recipe.url }}">{{ recipe.title }}</a></li>
            {% endfor %}
          </ul>
        {% endunless %}
      {% endfor %}
    </div>
  </body>
</html>


<h3>
  Items in {{ collection.label }}
</h3>
<ul>
  {% for recipe in site[collection.label] %}
    <li><a class="colorLink" href="{{ recipe.url }}">{{ recipe.title }}</a></li>
  {% endfor %}
</ul>