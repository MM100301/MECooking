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
      {% assign recipe_titles = "" %}
      {% for collection in site.collections %}
        {% unless collection.label == "posts" %}
            {% for recipe in site[collection.label] %}
              {% assign recipe_tags = recipe_tags | concat:recipe.tags %}
              {% assign recipe_titles = recipe_titles | append: ', ' | append:recipe.title %}
            {% endfor %}
        {% endunless %}
      {% endfor %}
      {% assign recipe_tags = recipe_tags | join: ',' | split: ',' | uniq %}
      {% assign recipe_titles = recipe_titles | remove_first: ', ' %}
        <div>
          <button id="tagButton" onClick="tagButtonClick()">Tag Search</button>
          <button id="titleButton" onClick="titleButtonClick()">Recipe Title Search</button>
        </div>
        <div>
          <input type="text" id="searchInput" placeholder="Searching by Title">
          <button type="submit" onclick="titleSearch()" id="searchButton">Search</button>
          <p id="paragraph"></p>
        </div>
        <div>
          <h1 id="testText">testTex: Searching By Title</h1>
          <p id="testPara">testPara: This is a test for the search bar</p>
        </div>
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
          titleSort = titles.split(', ');
          var recipes = [];
          var results = [];
          fetch("{{ site.url }}{{ site.baseurl }}/_data/recipes.json")
            .then(response => response.json())
            .then(data => {
              var printable = data;
              for (i = 0; i < titleSort.length; i++) {
                txtValue = titleSort[i];
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
          function tagButtonClick() {
            const tagButton = document.getElementById("tagButton");
            const titleButton = document.getElementById("titleButton");
            const searchBar = document.getElementById("searchInput");
            const searchButton = document.getElementById("searchButton");
            const testText = document.getElementById("testText");
            tagButton.style.backgroundColor = "red";
            titleButton.style.backgroundColor = "blue";
            searchBar.placeholder = "Searching By Title";
            searchButton.onClick = tagSearch();
            testText.textContent = "Searching By Tag";
           }
           function titleButtonClick() {
            const tagButton = document.getElementById("tagButton");
            const titleButton = document.getElementById("titleButton");
            const searchBar = document.getElementById("searchInput");
            const searchButton = document.getElementById("searchButton");
            const testText = document.getElementById("testText");
            titleButton.style.backgroundColor = "red";
            tagButton.style.backgroundColor = "blue";
            searchBar.placeholder = "Searching By Title";
            searchButton.onClick = titleSearch();
            testText.textContent = "Searching By Title";
           }
      </script>
    </div>
  </body>
</html>
