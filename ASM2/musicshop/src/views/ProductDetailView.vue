<script setup>
import { ref } from 'vue'

const quantity = ref(1)

const increase = () => quantity.value++
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <main class="detail-container">
    <div class="product-row">
      <div class="product-img-placeholder">
        <img src="/static/L2K.jpg" alt="Album L2K">
      </div>

      <div class="product-info">
        <h2 class="fw-normal">Album L2K</h2>
        <div class="meta">
          <div>Lượt bán: <strong>36</strong></div>
          <div>Nghệ sĩ: <strong>Low G</strong></div>
        </div>

        <div class="product-desc mb-3">
          Album <a href="#">L2K</a> là album phòng thu đầu tay của rapper...
        </div>

        <div class="fs-5">Số lượng:</div>
        <div class="quantity">
          <button @click="decrease" class="qty-btn" aria-label="Giảm">−</button>
          <div class="qty-value">{{ quantity < 10 ? '0' + quantity : quantity }}</div>
          <button @click="increase" class="qty-btn" aria-label="Tăng">+</button>
        </div>

        <div class="actions d-flex gap-3">
          <button class="btn-custom-dark">Mua ngay</button>
          <button class="btn-custom-dark">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.detail-container { max-width: 1200px; margin: 40px auto; padding: 20px; }
.product-row { display: grid; grid-template-columns: 350px 1fr; gap: 40px; align-items: start; }
.product-img-placeholder { background-color: #dcdcdc; color: #000; width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; font-size: 1rem; border-radius: 4px; overflow: hidden; }
.product-img-placeholder img { width: 100%; height: 100%; object-fit: cover; display: block; }
.product-info h2 { color: #ffffff; margin-bottom: 8px; }
.product-info .meta { color: #cfc7de; margin-bottom: 18px; }
.product-desc a { color: #fff; text-decoration: underline; }
.actions { margin-top: 30px; }
.btn-custom-dark { background-color: #333333; color: white; border: none; padding: 10px 18px; border-radius: 6px; transition: 0.3s; }
.btn-custom-dark:hover { background-color: #555555; }
.quantity { margin-top: 12px; display: flex; align-items: center; gap: 8px; }
.qty-btn { min-width: 34px; min-height: 34px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; background: #f5f5f5; color: #222; border: none; font-weight: 700; cursor: pointer; }
.qty-value { min-width: 36px; text-align: center; font-weight: 600; color: #fff; }
@media (max-width: 768px) { .product-row { grid-template-columns: 1fr; } .detail-container { margin: 20px; } }
</style>