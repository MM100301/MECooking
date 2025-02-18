---
title: Test Page
permalink: /testpage/
layout: about
tags: Test
order: 6
---
{% assign page_tags = "" | split: ',' %}
{% assign all_tags = "" | split: ',' %}

{% comment %}
# get all unique page tags
{% endcomment %}

{%- for page in site.pages -%}
  {% assign page_tags = page_tags | concat:page.tags %}
{%- endfor -%}

{%- assign post_tags = post_tags | remove: "\n" | split: " " -%}


<p> {{ post_tags }}</p>