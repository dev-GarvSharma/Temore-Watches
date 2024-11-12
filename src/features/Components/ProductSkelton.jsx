import React from 'react';
import { Skeleton } from 'primereact/skeleton';

const ProductSkelton = () => {
    return (
        <div className='md:grid grid-cols-3 gap-5 pt-5'>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="rounded-3xl relative">
                    {/* Skeleton for image */}
                    <Skeleton shape="rectangle" height="250px" className="rounded-t-3xl" />

                    <div className="flex items-center justify-between px-2 py-4">
                        <div className="p-2">
                            {/* Skeleton for title */}
                            <Skeleton width="80px" height="20px" className="mb-2" />
                            {/* Skeleton for subtitle */}
                            <Skeleton width="120px" height="16px" />
                        </div>
                        <div>
                            {/* Skeleton for button */}
                            <Skeleton shape="circle" size="40px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkelton;
