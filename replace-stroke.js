const fs = require('fs');
const path = require('path');

const dir = '/Users/laotie/Documents/02_设计项目/astre ui设计系统';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file.includes('node_modules') || file.includes('.git')) return;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (file.endsWith('.md') || file.endsWith('.html') || file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk(dir);
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let newContent = content
        .replace(/strokeWidth=\{1\.5\}/g, 'strokeWidth={2.5}')
        .replace(/stroke-\[1\.5\]/g, 'stroke-[2.5]')
        .replace(/stroke-width="1\.5"/g, 'stroke-width="2.5"')
        .replace(/stroke-width:\s*1\.5/g, 'stroke-width: 2.5')
        .replace(/`1\.5`/g, '`2.5`'); 
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated:', file);
        updatedCount++;
    }
});

console.log(`Successfully updated ${updatedCount} files.`);
