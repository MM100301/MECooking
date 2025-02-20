---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---

{% include search.json.liquid %}

<html>
<body>
  <div>
    {% for item in site.data.search %}
      <h2>{{ item.title }}</h2>
    {% endfor %}
  </div>
</body>
</html>