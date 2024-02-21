<script lang="ts" setup></script>

<template>
  <section>
    <div class="container">
      <div class="px-5">
        <form class="max-w-xs">
          <fieldset>
            <legend>
              <label class="text-sm" for="wallet">Ticker</label>
            </legend>
            <div class="mt-2">
              <div>
                <input
                  class="inline-block w-full rounded bg-white px-3 py-2 text-app-clr-dark shadow-md placeholder:text-gray-400"
                  id="wallet"
                  name="wallet"
                  placeholder="For example doge"
                  type="text"
                />
              </div>
              <ul
                class="grid grid-cols-4 gap-3 rounded bg-white px-3 py-2 shadow-md"
              >
                <li class="flex">
                  <button
                    class="inline-block w-full rounded bg-app-clr-dark py-0.5 text-xs font-medium uppercase text-app-clr-light transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    type="button"
                  >
                    Btc
                  </button>
                </li>
                <li class="flex">
                  <button
                    class="inline-block w-full rounded bg-app-clr-dark py-0.5 text-xs font-medium uppercase text-app-clr-light transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    type="button"
                  >
                    Doge
                  </button>
                </li>
                <li class="flex">
                  <button
                    class="inline-block w-full rounded bg-app-clr-dark py-0.5 text-xs font-medium uppercase text-app-clr-light transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    type="button"
                  >
                    Bch
                  </button>
                </li>
                <li class="flex">
                  <button
                    class="inline-block w-full rounded bg-app-clr-dark py-0.5 text-xs font-medium uppercase text-app-clr-light transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    type="button"
                  >
                    Chd
                  </button>
                </li>
              </ul>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>
