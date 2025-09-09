---
title: Search
permalink: /search/
layout: about
order: 4
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
        <div class="search">
          <button id="titleButton" class="phone" onClick="titleButtonClick()">Recipe Title Search</button>
          <button id="tagButton" class="phone" onClick="tagButtonClick()">Tag Search</button>
        </div>
        <div>
          <input type="text" id="searchInput" class="phone" placeholder="Searching by Title" oninput="titleSearch()">
          <button type="submit" id="searchButton" class="phone" onClick="titleSearch()">Search</button>
          </div>
        <div>
          <h1 id="testText">Searching By Title</h1>
          <p id="paragraph"></p>
          <ul id="list" class="phone"></ul>
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
          var urls = [];
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
                      if (!recipes.includes(printable[i].title)) {
                        recipes.push(printable[i].title);
                        urls.push(printable[i].url);
                      }
                    }
                  }
                }
                paragraph.innerText = '';
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
              else {
                paragraph.innerText = 'No Recipes Found!';
                list.innerHTML = '';
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
                      if (!recipes.includes(printable[i].title)) {
                        recipes.push(printable[i].title);
                        urls.push(printable[i].url);
                      }
                    }
                }
                paragraph.innerText = '';
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
              else {
                paragraph.innerText = 'No Recipes Found!';
                list.innerHTML = '';
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
            searchBar.placeholder = "Searching by Tag";
            searchBar.oninput = tagSearch;
            searchButton.onclick = tagSearch;
            testText.textContent = "Searching by Tag";
           }
           function titleButtonClick() {
            const tagButton = document.getElementById("tagButton");
            const titleButton = document.getElementById("titleButton");
            const searchBar = document.getElementById("searchInput");
            const searchButton = document.getElementById("searchButton");
            const testText = document.getElementById("testText");
            titleButton.style.backgroundColor = "lightblue";
            tagButton.style.backgroundColor = "";
            searchBar.placeholder = "Searching by Title";
            searchBar.oninput = titleSearch;
            searchButton.onclick = titleSearch;
            testText.textContent = "Searching by Title";
           }
      </script>
    </div>
  </body>
</html>
