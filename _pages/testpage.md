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
      {% for tag in recipe_tags %}
      <h3>Recipes With {{ tag }}</h3>
      <ul>
      {% for page in site.pages %}
        {% if page.tags contains tag %}
          <li><a href="{{ page.url }}">{{ page.url }}</a></li>
        {% endif %}
      {% endfor %}
      </ul>
      {% endfor %}
    </div>
  </body>
</html>