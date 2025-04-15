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
          <grid>
            {% for item in collection.docs %}
              <div>
                <img src="{{ item.image }}" alt="{{ item.title }}" />
                <p>{{ item.title }}</p>
              </div>
            {% endfor %}
          </grid>
        {% endunless %}
      {% endfor %}
    </div>
  </body>
</html>