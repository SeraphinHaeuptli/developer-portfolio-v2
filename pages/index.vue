<template>
  	<main v-if="!loading" id="hello">

    	<!-- gradients -->

		<section class="hero">
		
			<div class="head">
				<span>
					Hi all, I am
				</span>
				<h1>{{ config.name }}</h1>
        <span class="diple flex">
          >&nbsp;
				<h2 class="line-1 anim-typewriter max-w-fit"> {{ config.role }} </h2>
        </span>
			</div>

			<div id="info">
				<span class="action">
					// complete the game to continue
				</span>
				<span :class="{hide: isMobile}">
					// you can also see it on my Github page
				</span>
				<span :class="{hide: !isMobile}">
					// find my profile on Github:
				</span>
				<p class="code">
					<span class="identifier">
						const
					</span>
					<span class="variable-name">
						githubLink
					</span>
					<span class="operator">
						=
					</span>
					<a class="string" :href="'https://github.com/' + config.contacts.social.github.user">
						"{{ isMobile ? '' : 'https://' }}github.com/{{ config.contacts.social.github.user }}"
					</a>
				</p>
			</div>
		</section>

		<section data-aos="fade-up" class="game" v-if="!isMobile">
			<SnakeGame />
		</section>

	</main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DevConfig from '~/developer.json';

const config = ref(DevConfig)

const isMobile = ref(false)
const loading = ref(false)

onMounted(() => {
  if (window.innerWidth <= 1024) isMobile.value = true
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  if (window.innerWidth <= 1024) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}
</script>

<style scoped>
#hello {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding-left: 200px;
  overflow: hidden;
}
.hero {
	width: 100%;
	justify-content: center;
	
}
.game {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
/* 	align-items: center; */
	z-index: 20;
}

#hello .hero {
	display: flex;
	flex-direction: column;
	/* display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr)); */
	margin: 0rem;
}


#hello .head span {
  font-size: 18px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Retina';
}

#hello .head h1 {
  font-size: 58px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Regular';
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
}

#hello .head h2, #hello .head .diple {
  font-size: 32px;
  line-height: 1;
  color: #43D9AD;
  font-family: 'Fira Code Retina';
}

.head {
  padding-bottom: 3rem;
}

#info {
	display: flex;
	flex-direction: column;
}

#info > span {
  font-size: 14px;
  line-height: 1;
  color: #8da9c6;
  font-family: 'Fira Code Retina';
  padding-bottom: 1rem; /* 16px */
}

.code {
  font-family: 'Fira Code Medium';
  color: #E5E9F0;
}

.code .identifier {
  color: #6172ff;
}

.code .variable-name {
  color: #43D9AD;
}

.code .operator {
  color: white;
}

.code .string {
  color: #E99287;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

#info {
	padding-block: 2.5rem;
}

#info .action {
	display: flex
}

.hide {
  display: none;
}


#info {
  font-size: 14px;
}

/* Typewrite Animation */

.line-1 {
    width: fit-content;
    border-right: 3px solid rgba(255,255,255,.75);
    white-space: nowrap;
    overflow: hidden;
    padding-right: 2px;
}

.anim-typewriter{
    animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 100%;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}


/* mobile */
@media (max-width: 768px) {

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

	#hello .head h2, #hello .head .diple {
		font-size: 20px;
		color: #43D9AD;
	}
	
	#info .action {
		display: none;
	}

}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	#hello {
		padding-left: 0;
	}
	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

}

@media (min-width: 1024px) and (max-width: 1320px) {
	#hello {
		padding-left: 135px;
	}
}


/* LG */


@media (min-width: 1920px){
	#hello {
		padding-left: 310px;
	}
	#hello .head h1 {
		font-size: 62px;
	}
}

</style>
