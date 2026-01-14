<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useData } from 'vitepress'

const visible = ref(false)
const { frontmatter, page } = useData()

/**
 * 是否启用
 */
const enabled = computed(() => {
    return frontmatter.value?.DocNotice?.enabled === true
})

/**
 * 是否允许关闭提示
 */
const dismissible = computed(() => {
    const v = frontmatter.value?.DocNotice?.dismissible
    return v !== false
})

const noticekey = computed(() => {
    if (!dismissible.value) return null
    return frontmatter.value?.DocNotice?.noticekey ?? null
})

/**
 * 文案
 */
const text = computed(() => {
    return (
        frontmatter.value?.DocNotice?.text ??
        '警告：通知文案未设置 如果您是本网站的访客那么请尝试向作者汇报此问题，当然也可以听听歌：<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Rick Astley - Never Gonna Give You Up</a>'
    )
})

/**
 * 按钮文案
 */
const buttontext = computed(() => {
    return (
        frontmatter.value?.DocNotice?.buttontext ??
        '警告：按钮文案未设置'
    )
})

/**
 * 显示逻辑
 */
function updateVisibility() {
    if (typeof window === 'undefined') return

    if (!enabled.value) {
        visible.value = false
        return
    }

    if (!dismissible.value) {
        visible.value = true
        return
    }

    if (!noticekey.value) {
        visible.value = true
        return
  }

    visible.value = !localStorage.getItem(noticekey.value)
}

/**
 * 页面切换
 */
onMounted(updateVisibility)
watch(() => page.value.relativePath, updateVisibility)

/**
 * 关闭提示
 */
function accept() {
    if (!dismissible.value) return

    if (noticekey.value) {
    localStorage.setItem(noticekey.value, 'true')
  }

    visible.value = false
}
</script>

<template>
    <div v-if="visible" class="doc-notice">
        <div class="doc-notice-content">
            <span v-html="text"></span>
            <button v-if="dismissible" @click="accept">
                {{ buttontext }}
            </button>
        </div>
    </div>
</template>

<style>
.doc-notice {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--vp-c-bg-soft);
    border-top: 1px solid var(--vp-c-divider);
}

.doc-notice-content {
    max-width: var(--vp-layout-max-width);
    margin: 0 auto;
    padding: 12px 16px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: var(--vp-c-text-2);
}
</style>
