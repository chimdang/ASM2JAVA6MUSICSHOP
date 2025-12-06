<template>
  <div class="main-container">
    <h3 class="section-title">CD</h3>

    <div class="row g-4">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="n in 10" :key="n">
        <div class="cd-item" data-bs-toggle="modal" data-bs-target="#cdModal1">
          <img src="/static/L2K.jpg" alt="CD Cover"> 
          <div class="cd-overlay">Album L2K Vol.{{ n }}</div>
        </div>
      </div>
    </div>

    <nav aria-label="page-nav" class="mt-5">
      <ul class="pagination justify-content-center">
        <li class="page-item active"><span class="page-link">1</span></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item disabled"><span class="page-link">…</span></li>
        <li class="page-item"><a class="page-link" href="#">»</a></li>
      </ul>
    </nav>

    <div class="modal fade" id="cdModal1" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Album L2K – Vol.1</h5>
            <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="row g-4">
              <div class="col-md-5">
                <img src="/static/L2K.jpg" class="img-fluid rounded">
              </div>
              <div class="col-md-7">
                <h5>Mô tả Album</h5>
                <p>Phiên bản giới hạn của album L2K, bao gồm 12 track original, kèm mini-booklet + postcard.</p>
                <p><b>Giá:</b> 350.000₫</p>
                <router-link to="/cart" class="btn btn-light" data-bs-dismiss="modal">
                  <i class="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 40px 20px; 
  min-height: 100%;
  width: 100%;
}

.section-title { 
  font-size: 1.3rem; 
  font-weight: 600; 
  margin-bottom: 25px; 
  color: #ffffff; 
}

/* Grid item tròn như CD */
.cd-item { 
  position: relative; 
  aspect-ratio: 1/1; 
  width: 100%; 
  border-radius: 50%; 
  overflow: hidden; 
  cursor: pointer; 
  transition: transform .25s ease; 
}

.cd-item:hover { 
  transform: scale(1.05); 
}

.cd-item img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.cd-overlay { 
  position: absolute; 
  inset: 0; 
  background: rgba(0,0,0,.55); 
  opacity: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  transition: .25s; 
  padding: 10px; 
  border-radius: 50%; 
  font-size: 0.9rem; 
}

.cd-item:hover .cd-overlay { 
  opacity: 1; 
}

/* Pagination dark */
.pagination .page-link { 
  background: #29263f; 
  border: 1px solid #444; 
  color: #eee; 
}

.pagination .page-item.active .page-link { 
  background: #ff6b6b; 
  border-color: #ff6b6b; 
  color: #fff; 
}

.pagination .page-link:hover { 
  background: #3c3952; 
}
</style>