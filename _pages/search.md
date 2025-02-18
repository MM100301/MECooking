---
title: Search
permalink: /search/
layout: about
order: 4
---

<html>
  <body>
    <button id="tagSearch">Tag Search</button>
    <button id="titleSearch">Recipe Title Search</button>
    <input type="text" id="searchBar"></input>
  </body>
</html>




{% assign recipe_tags = "" | split: ',' %}

{% for collection in site.collections %}
  {% unless collection.label == "posts" %}
      {% for recipe in site[collection.label] %}
        {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
      {% endfor %}
  {% endunless %}
{% endfor %}

{% assign recipe_tags = recipe_tags | join: ',' | split: ',' | uniq %}

{% for tag in recipe_tags %}
<h3>Recipes With {{ tag }}</h3>
<ul>
{% for page in site.pages %}
  {% if page.tags contains tag %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}