import React from 'react'
const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",

]

const BlogCard = () => {
  return (
    <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src={images[Math. floor(Math. random() * images. length)]}
    class="absolute inset-0 h-full w-full object-cover"
  />

  <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div class="p-4 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-white/90"> 10th Oct 2022 </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
  )
}

export default BlogCard