const config = require('../config');
const fs = require('fs');

module.exports = (() => {
  const write = (data) => {
    fs.writeFile('public/index.html', data, (err) => {
      if (err) throw err;
    });
  };

  const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/styles.css" />
    <link rel="stylesheet" href="./assets/category.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <title>Trip Advisor</title>
  </head>
  <body>
    <div id="page">
      <div id="Details"></div>
      <article class="main_container">
        <div id="main" class="attraction">
          <div class="attraction_columns">
            <div class="attraction_column column"></div>
            <div class="sidebar_column column">
              <div id="Sidebar"></div>
            </div>
          </div>
          <div class="content_block">
            <div id="Categories"></div>
          </div>
        </div>
      </article>
    </div>
    <!-- Details -->
    <!-- <script src="http://34.205.143.254/bundle.js"></script> -->
    <script src="http://${config.details}/bundle.js"></script>
    <!-- Sidebar -->
    <!-- <script src="http://54.146.177.133/bundle.js"></script> -->
    <script src="http://${config.sidebar}/bundle.js"></script>
    <!-- Categories -->
    <!-- <script src="http://18.218.78.109/bundle.js"></script> -->
    <script src="http://${config.categories}/bundle.js"></script>
  </body>
</html>`;
  write(template);
})();
