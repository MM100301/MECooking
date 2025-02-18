---
title: Test Page
permalink: /testpage/
layout: about
tags: Test
order: 6
---
<html>
  <body>
    <h1>Recipes</h1>
    <div>
      {% for tag in site.tags %}
        <h3 class="post-meta">
          Pages tagged with "{{ tag[0] }}"
        </h3>
        <ul>
          {% for page in tag[1] %}
            <li><a href="{{ page.url }}">{{ page.title }}</a></li>
          {% endfor %}
        </ul>
      {% endfor %}
    </div>
  </body>
</html>
