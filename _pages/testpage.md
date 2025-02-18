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
      {% for recipe in site[collection.label] %}
        {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
      {% endfor %}
  {% endunless %}
{% endfor %}
{%- assign recipe_tags = recipe_tags | remove: "\n" | split: " " -%}

<p>{{ recipe_tags }}</p>