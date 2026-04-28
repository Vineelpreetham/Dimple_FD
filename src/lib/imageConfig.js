/**
 * Image Management Configuration
 * Centralizes image/video base URLs and provides helper functions for optimizations and transformations.
 */

// Actual ImageKit URL provided by the user
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/Nouskun';

// Current Cloudinary ID (from existing codebase)
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dbeh0eisn';

/**
 * Transforms a source URL (Cloudinary or ImageKit) into an optimized URL.
 * 
 * @param {string} url - The original image/video URL
 * @param {Object} options - Transformation options
 * @param {boolean} options.isTransparent - Whether to apply background removal/transparency
 * @param {number} options.width - Target width
 * @param {number} options.quality - Target quality (0-100)
 * @returns {string} - The optimized URL
 */
export function getOptimizedUrl(url, options = {}) {
  if (!url) return '';

  const { isTransparent = false, width, quality = 80 } = options;

  let finalUrl = url;

  // Handle ImageKit Transformations
  if (finalUrl.includes('ik.imagekit.io')) {
    const isVideo = finalUrl.match(/\.(mp4|webm|mov|ogg)/i) || 
                   finalUrl.toLowerCase().includes('.mp4') || 
                   finalUrl.toLowerCase().includes('.mov');

    // Remove existing query params to handle them safely
    const [base, queryStr] = finalUrl.split('?');
    const params = [];
    const queryParams = new URLSearchParams(queryStr || '');
    
    if (isVideo) {
      // Force original video to bypass transformation limits
      queryParams.set('tr', 'orig');
    } else {
      if (isTransparent) {
        // ImageKit background removal (requires the extension to be enabled)
        params.push('e-bg_remove');
        // Adding f-png to ensure output is transparent PNG
        params.push('f-png');
      } else {
        // Auto-format for web compatibility (converts HEIC to WebP/JPEG)
        params.push('f-auto');
      }
      
      if (width) params.push(`w-${width}`);
      if (quality) params.push(`q-${quality}`);

      if (params.length > 0) {
        queryParams.set('tr', params.join(','));
      }
    }

    let newUrl = base;
    const finalQuery = queryParams.toString();
    if (finalQuery) {
      newUrl = `${base}?${finalQuery}`;
    }
    
    return newUrl;
  }

  // Handle Cloudinary URLs (fallback if any remain)
  if (url.includes('cloudinary.com')) {
    let transformedUrl = url;
    if (isTransparent) {
      transformedUrl = transformedUrl.replace('/upload/', '/upload/e_make_transparent:20,f_png/');
    }
    if (width || quality) {
      const transformations = [
        width ? `w_${width}` : '',
        quality ? `q_${quality}` : '',
      ].filter(Boolean).join(',');
      transformedUrl = transformedUrl.replace('/upload/', `/upload/${transformations}/`);
    }
    return transformedUrl;
  }

  return finalUrl;
}
