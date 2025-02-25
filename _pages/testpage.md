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
        <form method="get" action="search">
          <input type="text" name="query" placeholder="Search tags">
          <input type="submit" value="Search">
        </form>
        {% if request.query.query %}
          {% assign search_word = request.query.query %}
          <ul>
            {% for tag in recipe_tags %}
          {% if tag contains search_word %}
            <li>{{ tag }}</li>
          {% endif %}
            {% endfor %}
          </ul>
        {% endif %}
    </div>
  </body>
</html>