---
title: book
permalink: /book/
layout: about
tags: Matthew Emma
---

<h1>Recipes</h1>
<p>{{ site.collections }} site collections</p>
<div>
{% for recipe in site.collections %}
  <h3 class="post-meta">
    Items in {{ collection.label }}
  </h3>
{% endfor %}
</div>
<p>This is just to prove that the book site is working and that the issues was the for loop</p>
