<script setup>
import { ref, computed } from 'vue'

// Dữ liệu giỏ hàng giả lập
const cartItems = ref([
  { id: 1, name: 'Album L2K – Vol.1', desc: 'Phiên bản Limited', price: 350000, qty: 1, image: '/static/L2K.jpg', checked: true },
  { id: 2, name: 'SIGN', desc: 'Bản Standard', price: 120000, qty: 2, image: '/static/SIGN.jpg', checked: true }
])

const shippingFee = ref(20000)

// Tính tổng tiền tự động
const subTotal = computed(() => {
  return cartItems.value
    .filter(item => item.checked)
    .reduce((sum, item) => sum + (item.price * item.qty), 0)
})

const total = computed(() => subTotal.value + shippingFee.value)

// Hàm định dạng tiền tệ (350000 -> 350.000₫)
const formatPrice = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<template>
  <div class="cart-panel">
    <div class="cart-head">
      <div class="left">
        <h4>Đơn hàng của bạn</h4>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-lg-8">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <input type="checkbox" class="form-check-input item-check" v-model="item.checked">
          
          <div class="cart-thumb">
            <img :src="item.image" alt="CD">
          </div>

          <div class="cart-info">
            <div class="title">{{ item.name }}</div>
            <small>{{ item.desc }}</small>
            <button @click="removeItem(item.id)" class="btn btn-sm text-danger p-0 mt-1">Xóa</button>
          </div>

          <div>
            <div class="qty-box">
              <button @click="item.qty > 1 ? item.qty-- : null">-</button>
              <input class="qty-input" type="number" v-model="item.qty" min="1">
              <button @click="item.qty++">+</button>
            </div>
          </div>

          <div class="price">{{ formatPrice(item.price * item.qty) }}</div>
        </div>
        
        <div v-if="cartItems.length === 0" class="text-center p-5 muted">
            Giỏ hàng đang trống
        </div>
      </div>

      <div class="col-lg-4">
        <div class="summary">
          <h5>Tóm tắt đơn hàng</h5>

          <div class="row">
            <div class="col-7 muted">Tạm tính</div>
            <div class="col-5 text-end">{{ formatPrice(subTotal) }}</div>
          </div>
          <div class="row">
            <div class="col-7 muted">Phí vận chuyển</div>
            <div class="col-5 text-end">
                 <select v-model="shippingFee" class="form-select form-select-sm bg-dark text-white border-secondary">
                    <option :value="0">Miễn phí</option>
                    <option :value="20000">Tiêu chuẩn (20k)</option>
                    <option :value="35000">Nhanh (35k)</option>
                 </select>
            </div>
          </div>

          <hr style="border-color: rgba(255,255,255,.04)">

          <div class="row">
            <div class="col-7">Tổng thanh toán</div>
            <div class="col-5 text-end" style="font-weight:800; color:#ffb0c4">{{ formatPrice(total) }}</div>
          </div>

          <div style="margin-top:14px;">
            <label class="muted">Phương thức thanh toán</label>
            <div class="form-check mt-2">
                <input class="form-check-input" type="radio" name="pay" checked>
                <label class="form-check-label">MoMo (QR / Wallet)</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="pay">
                <label class="form-check-label">Thanh toán khi nhận (COD)</label>
            </div>
          </div>

          <div style="margin-top:12px; display:flex; gap:8px;">
            <button class="btn btn-pay flex-grow-1">Thanh toán ngay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart-panel { 
    max-width: 1000px; 
    margin: 28px auto 100px; 
    background: #231f3c; 
    padding: 20px; 
    border-radius: 10px; 
    color: #fff;
    min-height: calc(100vh - 200px);
    width: 100%;
  }

  .cart-head { 
    display:flex; 
    align-items:center; 
    justify-content:space-between; 
    gap:10px; 
    margin-bottom: 18px; 
  }

  .cart-item{ 
    display: grid; 
    grid-template-columns: 30px 84px 1fr 120px 120px; 
    gap: 14px; 
    padding: 14px; 
    background:#2b2746; 
    border-radius:8px; 
    align-items:center; 
    margin-bottom:12px; 
  }

  .cart-thumb { 
    width:84px; 
    aspect-ratio:1/1; 
    border-radius:6px; 
    overflow:hidden; 
  }

  .cart-thumb img { 
    width:100%; 
    height:100%; 
    object-fit:cover; 
    display:block; 
  }

  .cart-info .title{
    font-weight:600;
  }

  .cart-info small{
    opacity:.8; 
    display:block; 
    margin-top:6px;
  }

  .qty-box { 
    display:flex; 
    align-items:center; 
    background:#1c1933; 
    border-radius:6px; 
    overflow:hidden; 
    border:1px solid #4f4a70;
  }

  .qty-box button{ 
    border:none; 
    background:transparent; 
    color:#fff; 
    padding:6px 10px; 
    cursor:pointer;
  }

  .qty-box input{ 
    width:46px; 
    text-align:center; 
    border:none; 
    background:transparent; 
    color:#fff; 
    outline:none; 
    -moz-appearance: textfield; 
  }

  .price{ 
    font-weight:700; 
    color:#ff9bbb; 
    text-align:right; 
  }

  .summary { 
    background:#221d36; 
    padding:16px; 
    border-radius:8px; 
    border:1px solid rgba(255,255,255,.03); 
  }

  .summary .row{
    margin-bottom:8px;
  }

  .muted{
    opacity:.8; 
    font-size:.95rem;
  }

  .btn-pay { 
    background:#ff6b93; 
    border:none; 
    color:#fff; 
    padding:10px 20px; 
    border-radius:8px; 
    font-weight:700; 
  }
  
  @media(max-width:768px){
    .cart-item{ 
      grid-template-columns: 30px 70px 1fr; 
      grid-template-rows: auto auto; 
      gap:10px;
    }
    .cart-item .qty-box, .cart-item .price { 
      grid-column: 3/4; 
      text-align:left; 
    }
  }
</style>