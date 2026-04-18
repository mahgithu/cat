import { X, Trash2, ShoppingCart } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onRemoveFromCart, onProceedToCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => {
      if(e.target === e.currentTarget) onClose();
    }}>
      <div className="cart-panel">
        <div className="cart-header">
          <h2 style={{display:'flex', alignItems:'center', gap:'10px'}}><ShoppingCart size={24} /> سلة المشتريات</h2>
          <button className="close-cart" onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingCart size={48} opacity={0.5} />
              <p>السلة فارغة حالياً</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <span className="cart-item-price">{item.price}$</span>
                </div>
                <button 
                  className="cart-item-remove" 
                  onClick={() => onRemoveFromCart(index)}
                  title="حذف"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>الإجمالي:</span>
              <span>{total}$</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={onProceedToCheckout}>
              الاستمرار للدفع PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
