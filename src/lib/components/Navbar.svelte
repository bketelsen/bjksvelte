<script>
  // from https://svelte.dev/repl/267acb68b79647849f0532774d62c594?version=3.38.2
  import 'focus-visible'
  import { MoonIcon, SunIcon } from '@mattjennings/heroicons-svelte/solid'
  import { browser } from '$app/env'
  import { themeChange } from 'theme-change'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { enhance } from './enhance'

  let menuOpen = true
  onMount(() => {
    menuOpen = false
    themeChange()
  })
  let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
</script>

<div class="navbar  mb-2 shadow-lg bg-neutral text-neutral-content rounded-box shadow-2xl">
  <div class="px-2 mx-2 navbar-start">
    <a href="/"><span class="text-lg font-bold"> Brian Ketelsen </span></a>
  </div>
  <div class="hidden px-2 mx-2 navbar-center md:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/articles"> Blog </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/speaking"> Speaking </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Projects </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/elsewhere"> Elsewhere </a>
    </div>
  </div>
  <div class="navbar-end">
    {#if browser}
      <button
        type="button"
        role="switch"
        aria-label="Toggle Dark Mode"
        aria-checked={!prefersLight}
        class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
        data-set-theme="light"
        on:click={() => {
          prefersLight = !prefersLight
          localStorage.setItem('prefersLight', prefersLight.toString())

          if (prefersLight) {
            document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
          } else {
            document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
          }
        }}
      >
        {#if prefersLight}
          <MoonIcon class="text-gray-500" />
        {:else}
          <SunIcon class="text-yellow-500" />
        {/if}
      </button>
    {/if}
    <label for="toggle" class="md:hidden">&#9776;</label>
  </div>
  <input type="checkbox" id="toggle" class="sr-only" bind:checked={menuOpen} use:enhance />
</div>
<div class="container">
  {#if menuOpen}
    <nav transition:slide>
      <ul>
        <li><a class="btn btn-ghost btn-sm rounded-btn" href="/articles"> Blog </a></li>
        <li><a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Speaking </a></li>
        <li><a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Projects </a></li>
        <li><a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Elsewhere </a></li>
      </ul>
    </nav>
  {/if}
</div>

<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .navbar-end label {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.25em;
  }

  nav {
    padding-bottom: 1.5em;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    font-size: 1.25rem;
  }

  #toggle:not(.js) ~ nav {
    display: none;
  }

  #toggle:not(.js):checked ~ nav {
    display: block;
  }
</style>
