<template>
  <footer
    class="rounded-sm border-gray-700 bg-white p-4 shadow md:flex md:items-center md:justify-start md:p-6"
  >
    <span class="text-sm text-gray-500 sm:text-center">
      scREAD is developed by
      <a href="https://u.osu.edu/bmbl/" underline>BMBL</a>. It is free and open
      to all users and there is no login requirement. |
      {{ new Date().getFullYear() }}
    </span>
    <a
      class="i-carbon-logo-github icon-btn mx-4 mt-3 flex flex-wrap items-start text-base text-gray-500 hover:text-purple-800 sm:mt-0"
      rel="noreferrer"
      href="https://github.com/Wang-Cankun/scread-frontend-next"
      target="_blank"
      title="GitHub"
    />
  </footer>
</template>
