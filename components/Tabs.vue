<template>
  <div class="tabs-component">
    <div class="tabs-component-panels">
      <slot />
    </div>

    <ul
      v-font="[
        $getFont('Roboto', 200),
        $getFont('Roboto', 400, 'normal', { selector: '.is-active' }),
      ]"
      role="tablist"
      class="tabs-component-tabs"
    >
      <li
        v-for="(tab, i) in tabs"
        v-show="tab.isVisible"
        :key="i"
        :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
        class="tabs-component-tab"
        role="presentation"
      >
        <!-- eslint-disable vue/no-v-html -->
        <a
          :aria-controls="tab.hash"
          :href="tab.hash"
          class="tabs-component-tab-a"
          :aria-selected="tab.isActive"
          role="tab"
          @click="selectTab(tab.hash, $event)"
          v-html="tab.header"
        ></a>
        <!-- eslint-enable vue/no-v-html -->
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * @link https://github.com/spatie/vue-tabs-component
 */
import expiringStorage from '../utils/expiring-storage'
export default {
  props: {
    cacheLifetime: {
      type: Number,
      default: 5,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        useUrlFragment: true,
        defaultTabHash: null,
      }),
    },
  },
  data: () => ({
    tabs: [],
    activeTabHash: '',
    activeTabIndex: 0,
    lastActiveTabHash: '',
  }),
  computed: {
    storageKey() {
      return `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`
    },
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    window.addEventListener('hashchange', () =>
      this.selectTab(window.location.hash)
    )
    if (this.findTab(window.location.hash)) {
      this.selectTab(window.location.hash)
      return
    }
    const previousSelectedTabHash = expiringStorage.get(this.storageKey)
    if (this.findTab(previousSelectedTabHash)) {
      this.selectTab(previousSelectedTabHash)
      return
    }
    if (
      this.options.defaultTabHash !== null &&
      this.findTab('#' + this.options.defaultTabHash)
    ) {
      this.selectTab('#' + this.options.defaultTabHash)
      return
    }
    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash)
    }
  },
  methods: {
    findTab(hash) {
      return this.tabs.find((tab) => tab.hash === hash)
    },
    selectTab(selectedTabHash, event) {
      // See if we should store the hash in the url fragment.
      if (event && !this.options.useUrlFragment) {
        event.preventDefault()
      }
      const selectedTab = this.findTab(selectedTabHash)
      if (!selectedTab) {
        return
      }
      if (selectedTab.isDisabled) {
        event.preventDefault()
        return
      }
      if (this.lastActiveTabHash === selectedTab.hash) {
        this.$emit('clicked', { tab: selectedTab })
        return
      }
      this.tabs.forEach((tab) => {
        tab.isActive = tab.hash === selectedTab.hash
      })
      this.$emit('changed', { tab: selectedTab })
      this.activeTabHash = selectedTab.hash
      this.activeTabIndex = this.getTabIndex(selectedTabHash)
      this.lastActiveTabHash = this.activeTabHash = selectedTab.hash
      expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime)
    },
    setTabVisible(hash, visible) {
      const tab = this.findTab(hash)
      if (!tab) {
        return
      }
      tab.isVisible = visible
      if (tab.isActive) {
        // If tab is active, set a different one as active.
        tab.isActive = visible
        this.tabs.every((tab, index, array) => {
          if (tab.isVisible) {
            tab.isActive = true
            return false
          }
          return true
        })
      }
    },

    getTabIndex(hash) {
      const tab = this.findTab(hash)

      return this.tabs.indexOf(tab)
    },

    getTabHash(index) {
      const tab = this.tabs.find((tab) => this.tabs.indexOf(tab) === index)

      if (!tab) {
        return
      }

      return tab.hash
    },

    getActiveTab() {
      return this.findTab(this.activeTabHash)
    },

    getActiveTabIndex() {
      return this.getTabIndex(this.activeTabHash)
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-component-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 5rem 0;
  list-style: none;
  display: flex;
  li {
    width: 1.9em;
    height: 1.9em;
    font-size: 2rem;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0 rem(22px) rem(22px) 0;
    &.is-active {
      font-weight: 400;
      border: 0;
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      &:hover {
        color: inherit;
        font-weight: 400;
      }
      &:focus-visible {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
  @include mq($from: tablet) {
    justify-content: flex-end;
    margin-right: rem(20px);
  }
  @include mq($from: desktop) {
    li {
      font-size: 1.5rem;
    }
  }
}
</style>
