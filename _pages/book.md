---
title: book
permalink: /book/
layout: about
tags: Matthew Emma
---

{% for recipe in site.collections %}
  <li>
    <h3 class="post-meta">
      Recipe {{ :title }}
    </h3>
  </li>
{% endfor %}
