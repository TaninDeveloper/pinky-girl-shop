
import React, { useState } from 'react';

function ProfilePage() {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('pinkyUser');

    return savedUser ? JSON.parse(savedUser) : { name: '', phone: '', address: '', isLoggedIn: false };
  });

  const [tempName, setTempName] = useState(''); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (tempName.trim().length > 2) {
      const newUser = { ...user, name: tempName, isLoggedIn: true };
      setUser(newUser);
      localStorage.setItem('pinkyUser', JSON.stringify(newUser));
    } else {
      alert(" لطفاً نام قشنگت رو کامل وارد کن 🌸");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('pinkyUser');
    setUser({ name: '', phone: '', address: '', isLoggedIn: false });
    setTempName('');
  };

  if (!user.isLoggedIn) {

    return (
      
      <div className="container d-flex justify-content-center align-items-center" 
      style={{ minHeight: '80vh' }}>
        <div className="card p-5 border-0 shadow-lg text-center" 
        style={{ borderRadius: '30px', maxWidth: '450px', background: '#fff' }}>

          <div className="mb-4">

            <span style={{ fontSize: '3rem' }}>🌸</span>

            <h2 className="fw-bold mt-2"
             style={{ color: '#ec0e93' }}>ورود به دنیای پینکی</h2>

            <p className="text-muted">لطفاً نام و نام خانوادگی خود را وارد کنید</p>

          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input 
                type="text" 
                className="form-control form-control-lg border-0 bg-light text-center rounded-pill p-3" 
                placeholder="نام و نام خانوادگی"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                required
                autoFocus
              />
            </div>

            <button 
              type="submit"
              className="btn btn-lg w-100 py-3 text-white fw-bold shadow"
              style={{ background: 'linear-gradient(90deg, #ff4d94, #ec0e93)', borderRadius: '20px', border: 'none' }}
            >
              تایید و ورود ✨
            </button>
          </form>

        </div>
      </div>
    );
  }

  return (

    <div className="container mt-5 pt-5 text-end" dir="rtl">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card border-0 shadow-sm p-4" 
          style={{ borderRadius: '30px' }}>

            <div className="text-center mb-4">

              <div className="display-6">💖</div>

              <h4 className="fw-bold mt-2"
               style={{ color: '#ec0e93' }}>خوش اومدی {user.name} قشنگم!</h4>

              <p className="text-muted small">اطلاعاتت رو اینجا کامل کن تا توی خریدها راحت باشی</p>
            </div>


            <div className="mb-3">

              <label className="fw-bold small mb-2 ms-2">شماره تماس (برای هماهنگی ارسال):</label>

              <input 
                type="text" 
                className="form-control rounded-pill border-0 bg-light p-3 text-center" 
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
                placeholder="۰۹۱۲۰۰۰۰۰۰۰"/>
            </div>

            <div className="mb-4">

              <label className="fw-bold small mb-2 ms-2">آدرس دقیق جهت ارسال کالا:</label>

              <textarea 
                className="form-control rounded-4 border-0 bg-light p-3" 
                rows="3"
                value={user.address}
                onChange={(e) => setUser({...user, address: e.target.value})}
                placeholder="مثلاً: تهران، محله ...">

                </textarea>
            </div>

            <button 
              className="btn w-100 py-3 fw-bold text-white shadow-sm mb-3"
              style={{ background: '#28a745', borderRadius: '15px', border: 'none' }}
              onClick={() => {
                localStorage.setItem('pinkyUser', JSON.stringify(user));
                alert("اطلاعاتت با موفقیت ذخیره شد و توی سبد خرید آماده‌ست! ✅");
              }}>
              ذخیره اطلاعات پروفایل
            </button>

            <button onClick={handleLogout} className="btn btn-link text-muted w-100 text-decoration-none small">
              خروج از حساب (تغییر نام)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;