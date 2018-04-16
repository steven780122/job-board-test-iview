<template>
    <div class="layout">
        <Layout>
            <nav-header></nav-header>
            <nav-content></nav-content>
            <nav-footer></nav-footer>
        </Layout>
    </div>
</template>

<script>
    import NavHeader from '@/components/Header.vue'
    import NavContent from '@/components/Content.vue'
    import NavFooter from '@/components/Footer.vue'

    export default {
        components:{
            NavHeader,  // 沒有用key valu 會自動生成key和value名稱相同
            NavContent,
            NavFooter
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>