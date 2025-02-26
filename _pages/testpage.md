---
title: Test Page
permalink: /testpage/
layout: about
order: 6
---

<html>
  <body>
    <div>
      {% assign recipe_tags = "" | split: ',' %}
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
            {% for recipe in site[collection.label] %}
              {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
            {% endfor %}
        {% endunless %}
      {% endfor %}
      {% assign recipe_tags = recipe_tags | join: ',' | split: ',' | uniq %}
        <input type="text" id="searchInput" placeholder="Search tags" oninput="recipeSearch()">
        <button type="submit" onclick="recipeSearch()" id="searchButton">Search</button>
        <ul id="tagList">
          {% for tag in recipe_tags %}
            <li>{{ tag }}</li>
          {% endfor %}
        </ul>
        <script>
        function recipeSearch() {
              var input, filter, tags, i, txtValue;
              input = document.getElementById('searchInput');
              paragraph = document.getElementById('paragraph').innerHTML = '';
              filter = input.value.toLowerCase();
              tags = {{ recipe_tags | jsonify }};
              var results = [];
              if (filter === "") {
              return;
              }
              for (i = 0; i < tags.length; i++) {
              txtValue = tags[i];
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                results.push(txtValue);
              }
              }
              paragraph.innerHTML = 'Recipes found: ' + results.join(', ');
              javascript
              var recipes = [];
              for (var i = 0; i < results.length; i++) {
                recipe_tags.forEach(tag => {
                  var tagHeader = document.createElement('h3');
                  tagHeader.textContent = 'Recipes With ' + tag;
                  paragraph.appendChild(tagHeader);
                  var tagList = document.createElement('ul');
                  site.pages.forEach(page => {
                    if (page.tags.includes(tag)) {
                      var listItem = document.createElement('li');
                      var link = document.createElement('a');
                      link.href = site.url + site.baseurl + page.url;
                      link.textContent = page.url;
                      listItem.appendChild(link);
                      tagList.appendChild(listItem);
                    }
                  });
                  paragraph.appendChild(tagList);
                });
                }
              }
            document.getElementById('searchButton').addEventListener('click', recipeSearch());     </script>
      <p id="paragraph"></p>
    </div>
  </body>
</html>
