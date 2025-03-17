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
      {% assign recipe_titles %}
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
            {% for recipe in site[collection.label] %}
              {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
              {% assign recipe_titles = recipe_titles | append:recipe.title %}
            {% endfor %}
        {% endunless %}
      {% endfor %}
      {% assign recipe_tags = recipe_tags | join: ',' | split: ',' | uniq %}
      <input type="text" id="searchInput" placeholder="Search tags">
      <button type="submit" onclick="titleSearch()" id="searchButton">Search</button>
      <p id="paragraph"></p>
      <script>
        function tagSearch() {
          var input, filter, tags, txtValue;
          input = document.getElementById('searchInput');
          paragraph = document.getElementById('paragraph');
          filter = input.value.toLowerCase();
          tags = {{ recipe_tags | jsonify }};
          var recipes = [];
          var results = [];
          fetch("{{ site.url }}{{ site.baseurl }}/_data/recipes.json")
            .then(response => response.json())
            .then(data => {
              var printable = data;
              for (i = 0; i < tags.length; i++) {
                txtValue = tags[i];
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                  results.push(txtValue);
                }
              }
              if (filter != '') {
                for (i = 0; i < printable.length; i++) {
                  var splitTags = printable[i].tags.split(', ');
                  for (j = 0; j < splitTags.length; j++) {
                    if (results.includes(splitTags[j])) {
                      recipes.push(printable[i].title);
                    }
                  }
                }
                paragraph.innerText = 'Results: ' + results.join(', ') + '\nRecipes Found: ' + recipes.join(', ');
              }
            })
            .catch(error => {
              console.error(`Error fetching recipes: ${error}`);
            });
          }
          function titleSearch() {
          var input, filter, titles, txtValue;
          input = document.getElementById('searchInput');
          paragraph = document.getElementById('paragraph');
          filter = input.value.toLowerCase();
          titles = {{ recipe_titles | jsonify }};
          console.log(titles);
          titleSort = titles.split(', ');
          console.log(titleSort);
          var recipes = [];
          var results = [];
          fetch("{{ site.url }}{{ site.baseurl }}/_data/recipes.json")
            .then(response => response.json())
            .then(data => {
              var printable = data;
              for (i = 0; i < titleSort.length; i++) {
                txtValue = titleSort[i];
                console.log(txtValue);
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                  results.push(txtValue);
                }
              }
              if (filter != '') {
                for (i = 0; i < printable.length; i++) {
                    if (results.includes(printable[i].title)) {
                      recipes.push(printable[i].title);
                    }
                }
                paragraph.innerText = 'Search: ' + results.join(', ') + '\nRecipes Found: ' + recipes.join(', ');
              }
            })
            .catch(error => {
              console.error(`Error fetching recipes: ${error}`);
            });
          }
      </script>
    </div>
  </body>
</html>
