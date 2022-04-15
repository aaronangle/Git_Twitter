# Git_Tweeter

A Twitter-ish clone for GitHub data &amp; users built by [me](https://aaronangle.github.io/Portfolio/) with React, React Query, and CSS modules, using GitHub's API.

The React Native code can be viewed [here](https://github.com/aaronangle/Git_Tweeter-React-Native).

View the site here: [https://aaronangle.github.io/Git_Twitter/](https://aaronangle.github.io/Git_Twitter/)

## Project Structure

The layout of the `src` folder looks like this:

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
+-- lib               # libraries that are wrapped in custom functionality and exported
|
+-- pages             # every page of the application (Some people architect React apps by features instead of pages. For this project I thought pages made more sense to go with)
|
+-- routes            # routes configuration
|
+-- utils             # shared utility functions used across the app
```

Most of the code lives inside the `pages` folder.

Here's a structural example of a page

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

When creating class names in CSS I loosely followed the BEM naming convention.

## Project Challenges

One of the biggest challenges I ran into was the rate limit on the GitHub API. GitHub only allows a few amount of API calls every minute. In order to mitigate this problem I implemented `react-query` and cached the data as much as possible.

## Next Steps

✅~~I plan on creating Git_Tweeter with React Native and publishing it to the Google Play Store~~.

Git_Tweeter is now available on the [Google Play Store](https://play.google.com/store/apps/details?id=com.ang.gittweeter).
