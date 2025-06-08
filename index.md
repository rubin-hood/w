---
layout: default
title: Startseite
---

Willkommen auf meinem Blog!

<div class="blog-preview-list">
  {% for post in site.posts limit:6 %}
    <article class="blog-preview-card">
      <a href="{{ post.url | relative_url }}" class="preview-img-link">
        {% if post.preview_img %}
          <img src="{{ post.preview_img | relative_url }}" alt="Vorschaubild {{ post.title }}" class="preview-img">
        {% else %}
          <div class="preview-img empty"></div>
        {% endif %}
      </a>
      <div class="preview-text">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="preview-date">{{ post.date | date: "%d.%m.%Y" }}</div>
        <p>{{ post.excerpt }}</p>
      </div>
    </article>
  {% endfor %}
</div>

