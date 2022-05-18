<template>
  <footer class="p-4 bg-white rounded-sm shadow md:flex md:items-center md:justify-start md:p-6 border-gray-700">
    <span class="text-gray-500 sm:text-center text-sm"> scREAD is developed by <a
      href="https://u.osu.edu/bmbl/"
      underline
    >BMBL</a>. It is
      free and open to all users and there is no login requirement. | {{ new Date().getFullYear() }}
    </span>
    <a
      flex flex-wrap items-start mt-3 text-base text-gray-500 sm:mt-0 mx-4 hover:text-purple-800 class="icon-btn"
      i-carbon-logo-github rel="noreferrer" href="https://github.com/Wang-Cankun/scread-frontend-next" target="_blank"
      title="GitHub"
    />
  </footer>
</template>

