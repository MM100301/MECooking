---
title: Search
permalink: /search/
layout: about
order: 4
---

<html>
  <body>
    <div>
      <button id="tagButton" class="tagButton">Tag Search</button>
      <button id="titleButton" class="titleButton">Recipe Title Search</button>
    </div>
    <div>
      <input type="text" id="searchBar">
    </div>
    <div>
      <h1 class="testText">Button Test Text (Not ready)</h1>
    </div>
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