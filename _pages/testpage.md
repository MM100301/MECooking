---
```markdown
title: Test Page
permalink: /testpage/
layout: about
order: 6
---

{% assign all_data = "" | split: ',' %}

{% for collection in site.collections %}
  {% unless collection.label == "posts" %}
      {% for page in site[collection.label] %}
        {% assign page_data = {
          "title": page.title,
          "url": page.url,
          "tags": page.tags
        } %}
        {% assign all_data = all_data | push: page_data %}
      {% endfor %}
  {% endunless %}
{% endfor %}

{% assign json_data = all_data | jsonify %}

<script type="application/json" id="page-data">
{{ json_data }}
</script>
```