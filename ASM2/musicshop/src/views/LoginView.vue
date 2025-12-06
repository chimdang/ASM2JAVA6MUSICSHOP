<template>
    <div class="content-wrapper">
        <div class="login-container">
            <div class="login-left">
                <h3>Đăng ký</h3>
                <p>Tạo tài khoản để quản lý đơn hàng, và các thông tin thanh toán, gửi hàng một cách dễ dàng hơn.</p>
                <button class="btn-signup">
                    <i class="fas fa-user-plus"></i> TẠO TÀI KHOẢN
                </button>
            </div>

            <div class="login-right">
                <h3>Đăng nhập</h3>
                <p>Nếu bạn có tài khoản, hãy đăng nhập dưới đây.</p>

                <form @submit.prevent>
                    <div class="form-group">
                        <label for="email">Email<span class="required">*</span></label>
                        <input type="email" id="email" placeholder="Email" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Mật khẩu <span class="required">*</span></label>
                        <input type="password" id="password" placeholder="Mật khẩu" required>
                    </div>

                    <div class="checkbox-group">
                        <input type="checkbox" id="remember">
                        <label for="remember" style="margin-bottom: 0; font-weight: normal;">Remember</label>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn-login">
                            <i class="fas fa-sign-in-alt"></i> ĐĂNG NHẬP
                        </button>
                        <a href="#" class="forgot-password">Mất mật khẩu?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper { 
  padding-top: 40px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  min-height: 100%; 
  width: 100%;
  background-color: #1e1b36;
}

.login-container { 
  display: flex; 
  width: 100%; 
  max-width: 1000px; 
  background-color: #1e1b36; 
  border-radius: 8px; 
  overflow: hidden; 
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); 
}

.login-left { 
  flex: 1; 
  background-color: #f5f5f5; 
  color: #333; 
  padding: 60px 40px; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
}

.login-left h3, .login-right h3 { 
  font-size: 1.8rem; 
  font-weight: 600; 
  margin-bottom: 20px; 
  color: #333; 
}

.login-left p { 
  font-size: 0.95rem; 
  color: #666; 
  line-height: 1.6; 
  margin-bottom: 30px; 
}

.btn-signup { 
  background-color: #333333; 
  color: white; 
  border: none; 
  padding: 12px 30px; 
  border-radius: 4px; 
  font-weight: 600; 
  width: fit-content; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

.login-right { 
  flex: 1; 
  background-color: #f9f9f9; 
  color: #333; 
  padding: 60px 40px; 
}

.form-group { 
  margin-bottom: 25px; 
}

.form-group label { 
  display: block; 
  font-size: 0.95rem; 
  color: #333; 
  margin-bottom: 8px; 
  font-weight: 500; 
}

.form-group input { 
  width: 100%; 
  padding: 12px 15px; 
  border: none; 
  background-color: #f0f0f0; 
  border-radius: 4px; 
  color: #333; 
}

.checkbox-group { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  margin-bottom: 25px; 
  color: #333; 
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-login { 
  background-color: #333333; 
  color: white; 
  border: none; 
  padding: 12px 35px; 
  border-radius: 4px; 
  font-weight: 600; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  gap: 8px; 
}

.forgot-password { 
  color: #333; 
  text-decoration: none; 
  margin-left: 15px; 
}

@media (max-width: 768px) { 
  .login-container { 
    flex-direction: column; 
  } 
  .login-left, .login-right { 
    padding: 40px; 
  } 
}
</style>