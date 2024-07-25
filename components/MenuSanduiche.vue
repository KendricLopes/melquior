<template>
    <div class="menu-sanduiche">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
    </div>
    

</template>

<style lang="scss" scoped>
@import '~/assets/css/variables';

	.menu-sanduiche{
		display: block;
		width: 24px;
        height: 14px;
		z-index: 1;
        position: relative;
	}

	.menu-sanduiche .bar{
		height: 3px;
		width: 100%;
		position: absolute;
	}

	.menu-sanduiche .bar.bar1{
		top: 0;
        background-color: $corPrimaria;
	}

	.menu-sanduiche .bar.bar2{
		top: 50%;
        background-color: $corQuartenaria;

	}

	.menu-sanduiche .bar.bar3{
		top: 100%;
        background-color: $corPrimaria;
	}
</style>