import { BookOpen, ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onHome }) {
  return (
    <nav className="navbar glass">
      <div 
        className="brand" 
        style={{cursor: 'pointer'}} 
        onClick={onHome}
        title="العودة للرئيسية"
      >
        <BookOpen size={32} />
        <span>MyBook</span>
      </div>
      <div className="cart-btn-wrapper">
        <button className="btn btn-primary" onClick={onOpenCart}>
          <ShoppingCart size={20} />
          السلة
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}
