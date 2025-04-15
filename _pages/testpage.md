---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---
<html>
  <body>
    <h1>Recipes</h1>
    <div>
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
          <h3>
            Items in {{ collection.label }}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            {% for item in collection.docs %}
              <div style="text-align: center;">
                <a href="{{ item.url }}"><img src="{{ item.image }}" alt="{{ item.title }}" style="width: 120px; height: 150px;"></a>
                <h4>{{ item.title }}</h4>
              </div>
            {% endfor %}
          </div>
          {% endunless %}
      {% endfor %}
    </div>
  </body>
</html>
