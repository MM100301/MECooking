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
          <button type="submit" id="searchButton" onClick="titleSearch()">Search</button>
          <p id="paragraph"></p>
        </div>
        <div>
          <h1 id="testText">Searching By Title</h1>
          <ul id="list">This is a test for the search bar</ul>
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
          list = document.getElementById('list');
          filter = input.value.toLowerCase();
          titles = {{ recipe_titles | jsonify }};
          titleSort = titles.split(', ');
          var recipes = [];
          var results = [];
          var urls = [];
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
                      urls.push(printable[i].url);
                    }
                }
                paragraph.innerText = 'Search: ' + results.join(', ') + '\nRecipes Found: ' + recipes.join(', ');
                list.innerHTML = '';
                for (let i = 0; i < recipes.length; i++) {
                  let listItem = document.createElement('li');
                  let link = document.createElement('a');
                  link.href = urls[i];
                  link.textContent = recipes[i];
                  listItem.appendChild(link);
                  list.appendChild(listItem);
                }
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
            tagButton.style.backgroundColor = "lightblue";
            titleButton.style.backgroundColor = "";
            searchBar.placeholder = "Searching By Tag";
            searchButton.onclick = tagSearch;
            testText.textContent = "Searching By Tag";
           }
           function titleButtonClick() {
            const tagButton = document.getElementById("tagButton");
            const titleButton = document.getElementById("titleButton");
            const searchBar = document.getElementById("searchInput");
            const searchButton = document.getElementById("searchButton");
            const testText = document.getElementById("testText");
            titleButton.style.backgroundColor = "lightblue";
            tagButton.style.backgroundColor = "";
            searchBar.placeholder = "Searching By Title";
            searchButton.onclick = titleSearch;
            testText.textContent = "Searching By Title";
           }
      </script>
    </div>
  </body>
</html>
