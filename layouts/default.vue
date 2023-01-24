<template>
	<div class="app">
    <NavBar/>
		<Sidebar1 />
		<main>
			<slot />
		</main>

  <Footer />
	</div>

</template>

<style lang="scss" scoped>
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
	display: flex;
	main{
		flex:1 1 0;
		padding: 2rem;
		@media (max-width: 768px) {
			padding-left: 6rem;
		}
    @media (max-width: 415px) {
    padding-left: 0rem;
  }
	}




}
</style>
