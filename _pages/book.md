---
title: book
permalink: /book/
layout: about
tags: Matthew Emma
---

<div>
{% for recipe in site.collections %}
  <li>
    <h3 class="post-meta">
      Recipe {{ recipe.title }}
    </h3>
  </li>
{% endfor %}
</div>
<p>This is just to prove that the book site is working and that the issues was the for loop</p>
