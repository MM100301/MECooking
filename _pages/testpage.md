---
title: Test Page
permalink: /testpage/
layout: about
tags: Test
order: 6
---
<html>
  <body>
    <h1>Site Tags</h1>
    <div>
      {% for tag in site.tags %}
        <h3 class="post-meta">
          Pages tagged with "{{ tag }}"
        </h3>
        <ul>
          {% for page in tag %}
            <li><a href="{{ page.url }}">{{ page.title }}</a></li>
          {% endfor %}
        </ul>
      {% endfor %}
    </div>
  </body>
</html>
