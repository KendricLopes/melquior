<template>
    <div>
      <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <Logo />
                </div>

                <div class="col-md-16">
                    <BtnTelefone />
                    <MenuSanduiche />
                    <Navegacao />
                </div>

            </div>
        </div>
        

      </header>
      <main>
        <NuxtPage />
      </main>
    </div>
  </template>
  
<script setup>
    import Logo from '~/components/MarcaNegativa.vue'
    import BtnTelefone from '~/components/BtnTelefone.vue'
    import MenuSanduiche from '~/components/MenuSanduiche.vue'
    import Navegacao from '~/components/Navegacao.vue'
</script>
  
<style scoped>
    header{
        padding: 20px;
        background-color: #cacaca;
    }

    header .col-md-16{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    header .col-md-16 .menu-sanduiche{
        margin-left: 20px;
    }

</style>