# Image Placeholders Reference

Use high-quality placeholder images from stock photo services. Match images to the design context and content type.

Priority: `Unsplash > Pexels > Pixabay`

## Image Selection Logic

When generating HTML, pick placeholder images in this order:

1. Identify the visual pattern
2. Match the image to nearby text content
3. Choose the correct output size

### Step 1: Identify Image Context

| Visual Pattern | Image Type | Example Keywords |
|----------------|------------|------------------|
| Hero banner (full width, top of page) | Landscape, abstract | `nature`, `mountain`, `sky`, `abstract` |
| Product card (square/small rectangle) | Product photo | `product`, `watch`, `phone`, `shoes` |
| User avatar (circle/small square) | Portrait | `portrait`, `person`, `face` |
| Blog thumbnail (medium rectangle) | Context-dependent | Match article topic |
| Category icon (small, with text) | Simple object | `food`, `travel`, `tech` |
| Background texture (repeating) | Pattern/texture | `texture`, `pattern`, `gradient` |

### Step 2: Match Image to Design Content

Check nearby text before choosing a placeholder:

- If text mentions `food`, `menu`, `restaurant` -> use food images
- If text mentions `team`, `about us`, `member` -> use people or group images
- If text mentions a product name or SKU -> use relevant product images
- If text shows price, cart, inventory, order actions -> use e-commerce product images
- If text is about office workflows, dashboards, SaaS, or collaboration -> use office / business / workspace images

### Step 3: Select Appropriate Size

| Element Type | Recommended Width |
|--------------|-------------------|
| Hero / banner | `1200-1920px` |
| Card image | `400-600px` |
| Thumbnail | `200-300px` |
| Avatar | `100-200px` |
| Icon placeholder | `48-64px` |

## Quick Reference

| Category | Unsplash Photo ID | Example Usage |
|----------|-------------------|---------------|
| Mountain | `photo-1506905925346-21bda4d32df4` | Hero, landscape |
| Office | `photo-1497366216548-37526070297c` | Business, team |
| Laptop | `photo-1496181133206-80ce9b88a853` | Tech, workspace |
| Portrait | `photo-1494790108377-be9c29b29330` | Avatar, team |
| Pizza | `photo-1565299624946-b28f40a0ae38` | Food, restaurant |
| Watch | `photo-1523275335684-37898b6baf30` | Product, ecommerce |

## URL Format

Unsplash:

```text
https://images.unsplash.com/photo-{ID}?w={width}&q=80
```

Example:

```html
<img
  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  alt="Modern office"
  class="w-[300px] h-[200px] object-cover"
/>
```

## Unsplash Examples by Category

### Nature & Travel

```html
<!-- Mountain landscape -->
<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Mountain landscape" class="w-full h-[200px] object-cover" />

<!-- Beach / Ocean -->
<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" alt="Beach" class="w-full h-[300px] object-cover" />

<!-- Forest -->
<img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" alt="Forest" class="w-[400px] h-[300px] object-cover" />

<!-- City skyline -->
<img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80" alt="City skyline" class="w-full h-[250px] object-cover" />
```

### Business & Office

```html
<!-- Modern office -->
<img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Modern office" class="w-[300px] h-[200px] object-cover" />

<!-- Team meeting -->
<img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Team meeting" class="w-full h-[200px] object-cover" />

<!-- Laptop workspace -->
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" alt="Workspace" class="w-[400px] h-[300px] object-cover" />

<!-- Coffee and desk -->
<img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" alt="Coffee on desk" class="w-[200px] h-[150px] object-cover" />
```

### Technology

```html
<!-- Circuit board -->
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Technology" class="w-full h-[150px] object-cover" />

<!-- Laptop -->
<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80" alt="Laptop" class="w-[400px] h-[300px] object-cover" />

<!-- Smartphone -->
<img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80" alt="Smartphone" class="w-[200px] h-[300px] object-cover" />

<!-- Coding screen -->
<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="Code on screen" class="w-full h-[200px] object-cover" />
```

### People & Portraits

```html
<!-- Female portrait -->
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Portrait" class="w-[100px] h-[100px] object-cover rounded-full" />

<!-- Male portrait -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Portrait" class="w-[80px] h-[80px] object-cover rounded-full" />

<!-- Group of people -->
<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" class="w-[400px] h-[250px] object-cover" />

<!-- Professional headshot -->
<img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Professional headshot" class="w-[120px] h-[120px] object-cover rounded-full" />
```

### Food & Restaurant

```html
<!-- Pizza -->
<img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Pizza" class="w-[200px] h-[150px] object-cover" />

<!-- Burger -->
<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" alt="Burger" class="w-[150px] h-[150px] object-cover" />

<!-- Healthy salad -->
<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" alt="Salad" class="w-[200px] h-[150px] object-cover" />

<!-- Coffee -->
<img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" alt="Coffee" class="w-[100px] h-[100px] object-cover" />

<!-- Dessert -->
<img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80" alt="Dessert" class="w-[180px] h-[180px] object-cover" />

<!-- Restaurant interior -->
<img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Restaurant interior" class="w-full h-[200px] object-cover" />
```

### E-commerce Products

```html
<!-- Watch -->
<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Watch" class="w-[150px] h-[150px] object-cover" />

<!-- Sneakers -->
<img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Sneakers" class="w-[200px] h-[150px] object-cover" />

<!-- Headphones -->
<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" alt="Headphones" class="w-[180px] h-[180px] object-cover" />

<!-- Bag -->
<img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" alt="Bag" class="w-[200px] h-[200px] object-cover" />

<!-- Perfume -->
<img src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80" alt="Perfume" class="w-[150px] h-[200px] object-cover" />
```

### Shopping & Fashion

```html
<!-- Fashion model -->
<img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" alt="Fashion" class="w-[300px] h-[400px] object-cover" />

<!-- Clothing rack -->
<img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80" alt="Clothing rack" class="w-full h-[200px] object-cover" />

<!-- Shopping bags -->
<img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Shopping bags" class="w-[400px] h-[300px] object-cover" />
```

### Real Estate

```html
<!-- House exterior -->
<img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" alt="House exterior" class="w-full h-[250px] object-cover" />

<!-- Living room -->
<img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" alt="Living room" class="w-[400px] h-[300px] object-cover" />

<!-- Bedroom -->
<img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80" alt="Bedroom" class="w-[350px] h-[250px] object-cover" />
```

### Fitness & Sports

```html
<!-- Gym workout -->
<img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" alt="Gym workout" class="w-full h-[200px] object-cover" />

<!-- Running -->
<img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80" alt="Running" class="w-[300px] h-[200px] object-cover" />

<!-- Yoga -->
<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Yoga" class="w-[400px] h-[300px] object-cover" />
```

## Pexels Examples

```html
<!-- Hero background -->
<img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?w=1200" alt="Hero background" class="w-full h-[400px] object-cover" />

<!-- Team collaboration -->
<img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800" alt="Team collaboration" class="w-[400px] h-[300px] object-cover" />

<!-- Abstract background -->
<img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=800" alt="Abstract background" class="w-full h-[200px] object-cover" />
```

## URL Format Reference

| Service | URL Format | Parameters |
|---------|------------|------------|
| Unsplash | `https://images.unsplash.com/photo-{ID}?w={width}&q={quality}` | `w`: width, `q`: quality (`1-100`) |
| Pexels | `https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg?w={width}` | `w`: width |
| Pixabay | `https://cdn.pixabay.com/photo/{year}/{month}/{day}/{time}/{ID}_{size}.jpg` | `size`: `_640`, `_1280`, `_1920` |

## Best Practices

1. Use `object-cover` for predictable cropping.
2. Match the image to nearby content, not just the component shape.
3. Do not use oversized source widths for thumbnails or avatars.
4. Always write descriptive `alt` text.
5. Prefer `q=80` for Unsplash placeholders unless a lower-weight preview is enough.
