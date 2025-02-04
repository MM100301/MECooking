---
title: book
permalink: /book/
layout: about
tags: Matthew Emma
---

<div>
{% for recipe in site.collections %}
  <h3 class="post-meta">
    Items in {{ collection.label }}</h3>
  <ul>
    {% for recipe in site[collection.label] %}
    <li><a href='{{ recipe.url }}">{{recipe.title}}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
<p>This is just to prove that the book site is working and that the issues was the for loop</p>
