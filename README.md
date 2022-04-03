# Git_Tweeter

A Twitter-ish clone for GitHub data &amp; users built [me](https://aaronangle.github.io/Portfolio/) with React, React Query, and CSS modules, using GitHub's API.

View the site here: [https://aaronangle.github.io/twitter_clone/](https://aaronangle.github.io/twitter_clone/)

## Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder contains static files such as images and global CSS stylesheet.
|
+-- components        # shared components that are use in multiple locations across the application
        |
        +--Elements   # spinners, buttons, inputs, etc...
        |
        +--Functional # Components that useState or other hooks
        |
        +--Layouts    # Resuable page layouts, page heading, page containers, etc...
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # libraries that wrapped in custom functionality and exported
|
+-- pages             # every page of the application (Some people architect React apps by features instead of pages. For this project I thought pages made more sense to go with)
|
+-- routes            # routes configuration
|
+-- utils             # shared utility functions used across the app
```

Most of the code lives inside the pages folder.

Here's a structure example of a page

```sh
src/pages/Home
|
+-- api                 # API request related to the page
|
+-- components          # components scoped to the page
|
+-- Home.js             # main layout and functionality of the page
|
+-- styles.module.css   # CSS classes scoped to the page
|
+-- index.js            # entry point for the page
```

For this project I used CSS modules to scope the CSS to each component. I refrained from using a component or CSS library because I enjoy writing CSS.

`src/assets/globalStyles.css` contains unscoped CSS that can be used in any component. Aside from that every component or page contains a `styles.module.css` file as needed.

## Project Challenges

One of the biggest challenges I ran into was the rate limit on the GitHub API. GitHub only allows a few amount of API calls every minute. In order to mitigate this problem I implemented `react-query` and cached the data as much as possible.

## Next Steps

I plan on creating Git_Tweeter with React Native and publishing it to the Google Play Store.
