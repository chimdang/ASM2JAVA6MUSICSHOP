<template>
  <div class="home-page">
    <div class="main-container">
        <div class="section-title">Album của năm 2025</div>
        <div class="gallery-grid">
            <router-link to="/product/1" class="video-frame" v-for="n in 5" :key="n">
                <img src="/static/L2K.jpg" alt="Album L2K" onerror="this.src='https://placehold.co/200'">
                <span class="album-title">L2K Vol.1 - Limited</span>
            </router-link>
        </div>

        <div class="section-title">Có thể bạn sẽ thích</div>
        <div class="gallery-grid">
             <router-link to="/product/1" class="video-frame" v-for="n in 5" :key="'sub'+n">
                <img src="/static/L2K.jpg" alt="Album L2K" onerror="this.src='https://placehold.co/200'">
                <span class="album-title">L2K Vol.1 - Limited</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100%;
  background-color: #1e1b36;
}

.main-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 40px 20px;
}

.section-title { 
  font-size: 1.3rem; 
  font-weight: 600; 
  margin-bottom: 25px; 
  color: #ffffff; 
  border-left: 4px solid #ff9999; 
  padding-left: 15px; 
  text-transform: uppercase; 
}

.gallery-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
  gap: 25px; 
  margin-bottom: 60px; 
}

.video-frame { 
  background-color: #2b2746; 
  border-radius: 12px; 
  overflow: hidden; 
  transition: all 0.3s ease; 
  cursor: pointer; 
  text-decoration: none; 
  color: white; 
  display: block; 
}

.video-frame:hover { 
  transform: translateY(-8px); 
  box-shadow: 0 10px 25px rgba(0,0,0,0.4); 
}

.video-frame img { 
  width: 100%; 
  aspect-ratio: 1/1; 
  object-fit: cover; 
}

.album-title { 
  padding: 12px 10px; 
  font-size: 0.95rem; 
  text-align: center; 
  display: block; 
  font-weight: 500; 
}

.album-title:hover { 
  color: #ff9999; 
}
</style>