<template>
    <div class="layout">
        <Layout>
            <nav-header>
            </nav-header>

            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                Content
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    import NavHeader from '../components/Header.vue'




    export default {
        components:{
            NavHeader,  // 沒有用key valu 會自動生成key和value名稱相同
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
    .layout-footer-center{
        text-align: center;
    }
</style>