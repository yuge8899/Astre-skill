const fs = require('fs');
const path = require('path');

const dir = '/Users/laotie/Documents/02_设计项目/astre ui设计系统';
const targetFiles = [
    'SYSTEM_GUIDE.md',
    'skills/astra-ui/SKILL.md',
    'workflow/demos/product-tags-demo.html'
];

targetFiles.forEach(file => {
    let fullPath = path.join(dir, file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Convert Tailwind CDN to v4 if in HTML
    if (file.endsWith('.html')) {
        content = content.replace('<script src="https://cdn.tailwindcss.com"></script>', '<script src="https://unpkg.com/@tailwindcss/browser@4"></script>');
    }

    // Shift blue scale down to make it brighter
    let newContent = content
        .replace(/blue-900/g, 'blue_TMP_800')
        .replace(/blue-800/g, 'blue-700')
        .replace(/blue-700/g, 'blue-600')
        .replace(/blue_TMP_800/g, 'blue-800');
        
    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated colors in:', file);
    }
});
