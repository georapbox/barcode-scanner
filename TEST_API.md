# Testing the UPC Database API

## Check What Data We're Getting

The UPC Database API might return images in different formats. Let's check!

### Test a Real Barcode

Try scanning one of these common barcodes:

**Coca-Cola** (12-pack): `049000050103`  
**Oreos**: `044000032326`  
**Cheerios**: `016000275256`  
**Red Bull**: `611269991512`

### See the API Response

1. Open the app: https://barcode-scanner-cs465.web.app
2. Open browser DevTools (F12 on desktop, or inspect on mobile)
3. Go to Console tab
4. Scan a barcode
5. Look for logs like:
   - `"Found product image: https://..."`
   - `"No product image available"`

### What API Actually Returns

The UPC Database API response looks like this:

```json
{
  "success": true,
  "title": "Coca Cola Classic",
  "brand": "Coca Cola",
  "description": "Carbonated Soft Drink",
  "category": "Beverages",
  "images": [
    "https://images.upcdatabase.org/product/123.jpg"
  ],
  "offers": [],
  "// ... more fields"
}
```

**Important**: Not all products have images! It depends on:
- If someone uploaded a photo
- Product popularity
- Database coverage

### Manual API Test

Want to test the API directly? Use this:

```bash
# Replace YOUR_API_KEY with: 4190D3F1E6057DD921DA7E426A79AAF3
curl "https://api.upcdatabase.org/product/049000050103" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Why Images Might Not Show

1. **API doesn't have that image** - Most common reason
2. **Wrong field name** - My code checks: `images[0]`, `image_url`, `image`, `imageUrl`
3. **CORS issues** - The proxy should fix this
4. **Image URL is broken** - The image file doesn't exist anymore

### The Fix

My code handles missing images gracefully:

```javascript
img.onerror = () => {
  imgContainer.style.display = 'none';  // Hide if image fails to load
};
```

So if there's no image, you just won't see one - no error!

---

## Alternative: Use Placeholder Images

If you want to ALWAYS show an image, even if the API doesn't have one:

```javascript
const imageUrl = info.images?.[0] || 
                 info.image_url || 
                 info.image || 
                 'https://via.placeholder.com/300x300?text=No+Image';  // Fallback
```

This shows a placeholder if no real image exists.

---

## For Your Team

**Expected behavior**:
- ✅ Popular products (Coca-Cola, Oreos) → Should show images
- ✅ Generic products → Might not have images
- ✅ Random barcodes → Probably no images

**Test with**:
- Household items with packaging
- Food products from stores
- Popular brands

**Don't test with**:
- Handmade QR codes (no product data)
- Random numbers (not real barcodes)
- Very obscure products

---

## Need More Images?

If the UPC Database doesn't have enough images, you could:

1. **Add multiple APIs** - Check UPC DB first, then try Open Food Facts
2. **Let users upload** - Use Firebase Storage to save custom photos
3. **Google Image Search** - Search for product name + "product image"

Want me to implement any of these? Let me know!

