import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../Assets/IconPack/uploadArea.png';

const AddProduct = () => {
    // Product state stores only display URLs
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        side_images: [],
        category: "hoodies",
        new_price: "",
        old_price: ""
    });

    // File state for actual upload
    const [mainFile, setMainFile] = useState(null);
    const [sideFiles, setSideFiles] = useState([]);

    // Handle text input / dropdown changes
    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    // Handle main image selection
    const handleMainImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setMainFile(file);
        setProductDetails({ ...productDetails, image: URL.createObjectURL(file) });
    };

    // Handle side image selection (max 4)
    const handleSideImage = (e) => {
        const file = e.target.files[0];
        if (!file || sideFiles.length >= 4) return;
        setSideFiles([...sideFiles, file]);
        setProductDetails({
            ...productDetails,
            side_images: [...productDetails.side_images, URL.createObjectURL(file)]
        });
    };

    // Handle form submission
    const handleAddProduct = async () => {
        try {
            // Upload main image
            let mainImageUrl = '';
            if (mainFile) {
                const mainForm = new FormData();
                mainForm.append('product', mainFile);
                const mainResp = await fetch('http://localhost:4000/upload', { method: 'POST', body: mainForm });
                const mainData = await mainResp.json();
                if (mainData.success) mainImageUrl = mainData.image_url;
            }

            // Upload side images
            const sideImageUrls = [];
            for (let file of sideFiles) {
                const sideForm = new FormData();
                sideForm.append('product', file);
                const sideResp = await fetch('http://localhost:4000/upload', { method: 'POST', body: sideForm });
                const sideData = await sideResp.json();
                if (sideData.success) sideImageUrls.push(sideData.image_url);
            }

            // Build product object
            const product = {
                ...productDetails,
                image: mainImageUrl,
                side_images: sideImageUrls
            };

            // Send product to backend
            const addResp = await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });

            const addData = await addResp.json();
            if (addData.success) {
                console.log('Product added successfully!');
                // Reset form
                setProductDetails({
                    name: '',
                    image: '',
                    side_images: [],
                    category: 'hoodies',
                    new_price: '',
                    old_price: '',
                    description: ''
                });
                setMainFile(null);
                setSideFiles([]);
            } else console.error('Failed to add product', addData);

        } catch (err) {
            console.error('Error uploading product:', err);
        }
    };


    return (
        <div className="add-product">

            {/* Product Title */}
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Type Here"
                    value={productDetails.name}
                    onChange={handleChange}
                />
            </div>

            {/* Product Description */}
            <div className="addproduct-itemfield">
                <p>Product Description</p>
                <textarea
                    name="description"
                    placeholder="Type Here"
                    value={productDetails.description}
                    onChange={handleChange}
                />
            </div>

            {/* Prices */}
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Old Price (0 if not on sale)</p>
                    <input
                        type="text"
                        name="old_price"
                        placeholder="Type Here"
                        value={productDetails.old_price}
                        onChange={handleChange}
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        type="text"
                        name="new_price"
                        placeholder="Type Here"
                        value={productDetails.new_price}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Category */}
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    name="category"
                    className="add-product-selector"
                    value={productDetails.category}
                    onChange={handleChange}
                >
                    <option value="hoodies">Hoodie</option>
                    <option value="hats">Hat</option>
                    <option value="sneakers">Sneakers</option>
                    <option value="sweatpants">Sweatpants</option>
                    <option value="shirts">Shirt</option>
                </select>
            </div>

            {/* Main Image */}
            <div className="addproduct-itemfield">
                <p>Main Image</p>
                <label htmlFor="file-input-main">
                    <img
                        src={productDetails.image ? productDetails.image : upload_area}
                        className="addproduct-thumbnail"
                        alt="Main preview"
                    />
                </label>
                <input
                    type="file"
                    id="file-input-main"
                    hidden
                    onChange={handleMainImage}
                />
            </div>

            {/* Side Images */}
            <div className="addproduct-itemfield">
                <p>Side Images</p>
                <div className="side-images-inputs">
                    {productDetails.side_images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className="addproduct-thumbnail"
                            alt={`Side ${i + 1}`}
                        />
                    ))}

                    {sideFiles.length < 4 && (
                        <label htmlFor="file-input-side">
                            <img
                                src={upload_area}
                                className="addproduct-thumbnail"
                                alt="Add more"
                            />
                            <input
                                type="file"
                                id="file-input-side"
                                hidden
                                onChange={handleSideImage}
                            />
                        </label>
                    )}
                </div>
            </div>

            {/* Add Button */}
            <div className="button-container">
                <button
                    className="addproduct-button"
                    onClick={handleAddProduct}
                >
                    ADD
                </button>
            </div>

        </div>
    );
};

export default AddProduct;
