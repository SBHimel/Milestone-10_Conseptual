import AddProductModal from '@/components/dashboard/seller/AddProductModal';
import React from 'react';

const SellerProductPage = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Products</h1>
                <AddProductModal></AddProductModal>
            </div>
        </div>
    );
};

export default SellerProductPage;