<template>
  <div class="navbar-wrapper">
    <div class="container-fluid">
      <header class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <router-link to="/" class="home-brand">
          <i class="fas fa-home"></i> Home
        </router-link>

        <div class="search-container d-flex align-items-center">
          <i class="fas fa-bars text-secondary me-2 cursor-pointer"></i>
          <input type="text" class="form-control search-input" placeholder="Tìm kiếm...">
          <i class="fas fa-search text-dark cursor-pointer"></i>
        </div>

        <div class="d-flex align-items-center gap-4">
          <div class="dropdown">
            <button class="btn btn-link nav-link dropdown-toggle d-flex align-items-center gap-2 p-0" data-bs-toggle="dropdown">
              <i class="fas fa-list"></i>
              <span class="d-none d-lg-block">Danh mục</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/cd">CD</router-link></li>
              <li><router-link class="dropdown-item" to="/">Album</router-link></li>
            </ul>
          </div>

          <router-link to="/cart" class="nav-link cursor-pointer" title="Giỏ hàng">
            <i class="fas fa-shopping-cart fs-5"></i>
          </router-link>

          <div class="dropdown">
            <button class="btn p-0 user-avatar dropdown-toggle" data-bs-toggle="dropdown">
              <i class="far fa-user"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/login">Đăng nhập</router-link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper { background-color: #1e1b36; padding: 20px 40px; width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.1); position: sticky; top: 0; z-index: 1000; }
.navbar-wrapper header { max-width: 1200px; margin: 0 auto; }
.nav-link { color: #ffffff; text-decoration: none; transition: color 0.3s; cursor: pointer; }
.nav-link:hover { color: #ff9999; }
.home-brand { color: #ff9999; text-decoration: none; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 8px; }
.search-container { background-color: #e0dce4; border-radius: 30px; padding: 8px 15px; max-width: 400px; width: 100%; }
.search-input { background: transparent; border: none; outline: none; box-shadow: none !important; color: #333; }
.user-avatar { background-color: #d8b4e2; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #333; border: none; }
@media (max-width: 768px) { .navbar-wrapper { padding: 15px 20px; } }
</style>