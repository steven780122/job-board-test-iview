<template>
    <div class="layout">
        <Layout>
            <nav-header class="header"></nav-header>
            <job-search></job-search>
            <nav-content></nav-content>
            <!-- <test></test> -->


            <nav-footer></nav-footer>
            
        </Layout>
    </div>
</template>

<script>
    import NavHeader from '@/components/Header.vue'
    import JobSearch from '@/components/JobSearch.vue'
    import NavContent from '@/components/Content.vue'
    import NavFooter from '@/components/Footer.vue'
    

    export default {
        components:{
            NavHeader,  // 沒有用key valu 會自動生成key和value名稱相同
            JobSearch,
            NavContent,
            // test,
            NavFooter
        }
    }
</script>

<style scoped>
    .layout{
        border: 0px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .header{
        z-index: 1;
    }
</style>