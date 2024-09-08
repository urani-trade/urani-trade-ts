## How to publish a blog post on urani.trade

<br>


1. In a new branch, create a markdown file with your post and add it to **[_posts](../_posts)**. The file name will be the URL slug.

2. Add the header, something like this:

```
---
title: "A Midsummer Neo-Cypherpunk's Dream"
excerpt: "Learn what's next for Urani."
coverImage: "/assets/space/1.webp"
date: "2024-06-01T11:11:11.322ZZ"
author:
  name: by bt3gl
  picture: "/assets/blog/authors/bt3gl.jpeg"
ogImage:
  url: "/assets/space/1.webp"
---
```

<br>

3. Create a main image for the post:
    - Go to **[pexels.com](https://www.pexels.com/)** and search for "skateboarding"
    - Pick a nice (landscape) image.
    - Crop this image so it has a height of `1250px`.
    - Go **[here](https://www.fotor.com/images/create)** and generate an image selecting "cyberpunk".
    - Go **[here](https://tinypng.com/)** and convert the image to `.webp`
    -  Add this `webp` image to `public/assets/space` **[here](https://github.com/urani-trade/urani-trade-website/tree/main/public/assets/space/)**. Don't forget to rename it to the proper number.
    - Add the filename into the header above into `url` and `coverImage`.
   
4. Add the author (name and picture) into the header above.

5. Add a nice title, description, and the correct date to the header above.

6. Once your post is ready, create a pull request and `@urani-engineering` as the reviewer (and any other relevant contributor).

9. Once the PR is approved, merge the PR to `main`.

10. Check out your post at **[https://urani.trade/blog](https://urani.trade/blog)**. Voilà.


<br>

---

### Tips

<br>

* You can embed a tweet with **[this tool](https://help.x.com/en/using-x/how-to-embed-a-post)**.


* You can create cute boxes with:

```
<div class="quote-box">
TEXT HERE
</div>
```

* You should add images with:
  
```
<p align="center">
  <img src="<image path>" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>
```
