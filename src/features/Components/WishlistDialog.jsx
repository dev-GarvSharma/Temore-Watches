import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';

const WishlistDialog = ({ visible, onHide }) => {
    const wishlistItems = [
        {
            id: 1,
            name: "Classic Leather Watch",
            price: 129.99,
            category: "Men's Watches",
            image: "https://img.freepik.com/free-vector/happy-birthday-golden-silver-balloons-with-confetti_1017-29992.jpg"
        },
        {
            id: 2,
            name: "Rose Gold Minimalist",
            price: 149.99,
            category: "Women's Watches",
            image: "https://img.freepik.com/free-vector/happy-birthday-golden-silver-balloons-with-confetti_1017-29992.jpg"
        },
        {
            id: 3,
            name: "Digital Sports Watch",
            price: 89.99,
            category: "Sports Watches",
            image: "https://img.freepik.com/free-vector/happy-birthday-golden-silver-balloons-with-confetti_1017-29992.jpg"
        }
    ];

    return (
        <Dialog
            header={<h2 style={{ color: '#3e2723', fontWeight: 'bold', margin: '0' }}>Your Wishlist</h2>}
            visible={visible}
            onHide={onHide}
            style={{ width: '50vw', maxWidth: '700px', borderRadius: '12px' }}
            blockScroll
            draggable={false}
            className="wishlist-dialog"
        >
            <div style={{ padding: '1rem', maxHeight: '500px', overflowY: 'auto' }}>
                {wishlistItems.length ? wishlistItems.map((item) => (
                    <div key={item.id} style={luxuryItemCardStyle}>
                        <img src={item.image} alt={item.name} style={luxuryItemImageStyle} />
                        <div style={luxuryItemInfoStyle}>
                            <h4 style={luxuryItemTitleStyle}>{item.name}</h4>
                            <p style={luxuryItemPriceStyle}>Rs {item.price}</p>
                            {/* <Tag value={item.category} style={{ backgroundColor: '#b388ff', color: '#fff' }} /> */}
                        </div>
                        <Button
                            label="Remove"
                            className="border-2 border-black p-1 text-black focus:outline-none"
                            onClick={() => alert(`Removed ${item.name} from wishlist!`)}
                            style={{ marginLeft: 'auto' }}
                            tooltip="Remove from Wishlist"
                        />

                    </div>
                )) : (
                    <p className="p-text-center" style={{ fontStyle: 'italic', color: '#555' }}>Your wishlist is empty!</p>
                )}
            </div>
            <div className="flex justify-end" style={{ padding: '0 1rem' }}>
                <Button label="Continue Shopping" onClick={onHide} className="p-button-text bg-red-500 p-3 text-white" />
            </div>
        </Dialog>
    );
};

export default WishlistDialog;

const luxuryItemCardStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
};

const luxuryItemImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '20px',
};

const luxuryItemInfoStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
};

const luxuryItemTitleStyle = {
    margin: '0',
    color: '#3e2723',
    fontSize: '1.2rem',
    fontWeight: 'bold',
};

const luxuryItemPriceStyle = {
    margin: '5px 0 10px',
    color: '#9e9e9e',
    fontSize: '1rem',
};
