---
title: Test Page
permalink: /testpage/
layout: about
tags: Test
order: 6
---

{% for page in site.pages %}
<p> {{ page.title }}</p>
{% endfor %}


{% for collection in site.collections %}
  {% unless collection.label == "posts" %}
    <ul>
      {% for recipe in site[collection.label] %}
        <li>{{ recipe.title }}</li>
      {% endfor %}
    </ul>
  {% endunless %}
{% endfor %}