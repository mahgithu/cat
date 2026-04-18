import { ShoppingBag } from 'lucide-react';

export default function BookCard({ book, onAddToCart }) {
  return (
    <div className="book-card glass">
      <div className="book-cover" style={{ background: book.coverColor }}>
        {/* Placeholder for cover image */}
        <h3 style={{ 
          color: 'white', 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          padding: '20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
        }}>
          {book.title}
        </h3>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-footer">
          <span className="book-price">{book.price}$</span>
          <button className="btn btn-primary" onClick={() => onAddToCart(book)}>
            <ShoppingBag size={18} />
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
