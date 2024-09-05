## How to publish a blog post on urani.trade

<br>

1. Create a markdown file with your post in this directory.

2. Add the header, something like this:

<br>

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

3. Name the file with what you want to be in the URL slug.

4. Create the new image for the post:
    - Go to pexels.com and search for "skateboarding"
    - Pick a nice (landscape) image.
    - Crop it to have a height of `1250px`.
    - Go **[here](https://www.fotor.com/images/create)** to generate an image selecting "cyberpunk".
    - Go **[here](https://tinypng.com/)** to transform the image to be `.webp`
    - Add this `webp` image to the `public/` **[here](https://github.com/urani-trade/urani-trade-website/tree/main/public/assets/space/)**.
    - Link it in the header above.
   
8. Once your post is ready, create a pull request to add them to **[_posts/](https://github.com/urani-trade/urani-trade-website/tree/main/_posts)**. Add @von-steinkirch as reviewer.

9. Once she approves, merge the PR it to `main`.

10. See your post at **[https://urani.trade/blog](https://urani.trade/blog)**. Voilà.


<br>

---

### Useful Tips

<br>

* Embebed a tweet with **[this tool](https://help.x.com/en/using-x/how-to-embed-a-post)**.


* Create cute boxes with:

```
<div class="quote-box">

</div>
```

* Add images with:
  
```
<p align="center">
  <img src="<image path>" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>
