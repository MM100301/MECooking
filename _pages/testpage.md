---
title: Test Page
permalink: /testpage/
layout: about
tags: Test
order: 6
---

{% assign recipe_tags = "" | split: ',' %}

{% for collection in site.collections %}
  {% unless collection.label == "posts" %}
    <h3 class="post-meta">
      Items in {{ collection.label }}
    </h3>
    <ul>
      {% for recipe in site[collection.label] %}
        {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
      {% endfor %}
    </ul>
  {% endunless %}
{% endfor %}