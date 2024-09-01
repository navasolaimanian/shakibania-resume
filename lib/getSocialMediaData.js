import fs from 'fs';
import path from 'path';

export function getSocialMediaData() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'socialMedia.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}