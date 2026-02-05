import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
    { name: 'luxury-villa.jpg', url: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1600&q=80' },
    { name: 'modern-apartment.jpg', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80' },
    { name: 'beach-house.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
    { name: 'farm-ranch.jpg', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
    { name: 'golf-estate.jpg', url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80' },
    { name: 'urban-penthouse.jpg', url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80' },
    { name: 'interior-living.jpg', url: 'https://images.unsplash.com/photo-1522050212171-61b01dd24579?auto=format&fit=crop&w=800&q=80' },
    { name: 'interior-view.jpg', url: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80' },
    { name: 'agent-profile.jpg', url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete the file async. (But we don't check the result)
            console.error(`Error downloading ${url}: ${err.message}`);
            reject(err);
        });
    });
};

const run = async () => {
    console.log('Starting image downloads...');
    for (const img of images) {
        const filepath = path.join('public/images/placeholders', img.name);
        if (!fs.existsSync(filepath)) {
            try {
                await downloadImage(img.url, filepath);
            } catch (e) {
                console.error(`Failed to download ${img.name}`);
            }
        } else {
            console.log(`Skipping ${img.name}, already exists.`);
        }
    }
    console.log('All downloads finished.');
};

run();
