document.addEventListener("DOMContentLoaded", () => {
  const siteConfig = {
    email: "dt.consultant7@gmail.com",
    phone: "+905352875577",
    phoneDisplay: "+90 535 287 55 77",
    whatsapp: "905352875577",
    addressAr: "\u062a\u0631\u0643\u064a\u0627 - \u0625\u0633\u0637\u0646\u0628\u0648\u0644 - \u0628\u0648\u0631\u0635\u0627",
    addressEn: "Turkey - Istanbul - Bursa",
    headerCtaAr: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
    headerCtaEn: "Contact Us",
  };

  const translations = {
    "ط§ظ„ط±ط¦ظٹط³ظٹط©": "Home",
    "ظ…ظ† ظ†ط­ظ†": "About Us",
    "ط®ط¯ظ…ط§طھظ†ط§": "Services",
    "ط£ط¹ظ…ط§ظ„ظ†ط§": "Our Work",
    "طھظˆط§طµظ„ ظ…ط¹ظ†ط§": "Contact Us",
    "ط§ظ„ط£ظ‚ط³ط§ظ…": "Sections",
    "ط§ظ„طھط­ظˆظ„ ط§ظ„ط±ظ‚ظ…ظٹ": "Digital Transformation",
    "ط§ظ„طھط¬ط§ط±ط© ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹط©": "E-Commerce",
    "ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظˆط§ظ„ط¨ظٹط§ظ†ط§طھ": "AI & Data",
    "ط§ظ„ظ…ظ†طµط§طھ ظˆط§ظ„ظ…ظˆط§ظ‚ط¹": "Platforms & Websites",
    "ط£طھظ…طھط© ط§ظ„ط£ط¹ظ…ط§ظ„": "Business Automation",
    "ط§ظ„ط¯ط¹ظ… ظˆط§ظ„طھظƒط§ظ…ظ„": "Support & Integration",
    "ط§ط·ظ„ط¨ ط§ط³طھط´ط§ط±ط©": "Request a Consultation",
    "ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†": "Get Started",
    "ط§ظƒطھط´ظپ ط®ط¯ظ…ط§طھظ†ط§": "Explore Our Services",
    "ط´ط§ظ‡ط¯ ط£ط¹ظ…ط§ظ„ظ†ط§": "View Our Work",
    "ظ†ظ‚ظˆط¯ طھط­ظˆظ„ظƒ ط§ظ„ط±ظ‚ظ…ظٹ ط¨ط®ط·ط© ظˆط§ط¶ط­ط© ظˆطھظ†ظپظٹط° ظ‚ط§ط¨ظ„ ظ„ظ„ظ‚ظٹط§ط³": "We lead your digital transformation with a clear plan and measurable execution.",
    "ظپظٹ Maderaa ظ†ط¨ظ†ظٹ ط­ظ„ظˆظ„ظ‹ط§ ط±ظ‚ظ…ظٹط© طھط¨ط¯ط£ ظ…ظ† ط§ظ„ظپظƒط±ط© ظˆط§ظ„ط§ط³طھط±ط§طھظٹط¬ظٹط© ظˆطھطµظ„ ط¥ظ„ظ‰ ط§ظ„طھظ†ظپظٹط° ظˆط§ظ„طھط´ط؛ظٹظ„ ظˆط§ظ„طھط­ط³ظٹظ† ط§ظ„ظ…ط³طھظ…ط±.": "At Maderaa, we build digital solutions that start with strategy and continue through execution, launch, and continuous improvement.",
    "ظ†ط­ظ† ط´ط±ظٹظƒ ط±ظ‚ظ…ظٹ ظٹط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط±ط¤ظٹط© ط§ظ„طھط¬ط§ط±ظٹط© ظˆط§ظ„طھظ†ظپظٹط° ط§ظ„طھظ‚ظ†ظٹ": "We are a digital partner that combines business vision with technical execution.",
    "ظ†ط³ط§ط¹ط¯ ط§ظ„ط´ط±ظƒط§طھ ط§ظ„ظ†ط§ط´ط¦ط© ظˆط§ظ„ط¬ظ‡ط§طھ ط§ظ„ظ…طھظ†ط§ظ…ظٹط© ط¹ظ„ظ‰ ط¨ظ†ط§ط، ط­ط¶ظˆط± ط±ظ‚ظ…ظٹ ط§ط­طھط±ط§ظپظٹطŒ طھط·ظˆظٹط± ظ…ظ†طµط§طھ ظپط¹ط§ظ„ط©طŒ ظˆط±ظپط¹ ظƒظپط§ط،ط© ط§ظ„طھط´ط؛ظٹظ„ ط¹ط¨ط± ط­ظ„ظˆظ„ ط¹ظ…ظ„ظٹط© ظ‚ط§ط¨ظ„ط© ظ„ظ„طھظˆط³ط¹.": "We help startups and growing organizations build a professional digital presence, develop effective platforms, and improve operations through scalable solutions.",
    "ظ…ظ† طھط­ظ„ظٹظ„ ط§ظ„ط§ط­طھظٹط§ط¬ ظˆط­طھظ‰ ط§ظ„طھط³ظ„ظٹظ… ظˆط§ظ„طھط´ط؛ظٹظ„طŒ ظ†ط±ط¨ط· ط¨ظٹظ† ط£ظ‡ط¯ط§ظپ ط§ظ„ط¹ظ…ظ„طŒ طھط¬ط±ط¨ط© ط§ظ„ظ…ط³طھط®ط¯ظ…طŒ ظˆط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„طھظ‚ظ†ظٹط© ظپظٹ ظ…ط³ط§ط± ظˆط§ط­ط¯ ظˆط§ط¶ط­.": "From needs analysis to launch and operation, we connect business goals, user experience, and technical systems in one clear path.",
    "ظ†ط¤ظ…ظ† ط£ظ† ط§ظ„طھظ‚ظ†ظٹط© ظ„ط§ طھظƒظˆظ† ظ†ط§ط¬ط­ط© ط¥ظ„ط§ ط¹ظ†ط¯ظ…ط§ طھط®ط¯ظ… ط§ظ„ظ‚ط±ط§ط±طŒ طھط®طھطµط± ط§ظ„ظˆظ‚طھطŒ ظˆطھظ†ط¹ظƒط³ ظ…ط¨ط§ط´ط±ط© ط¹ظ„ظ‰ ط¬ظˆط¯ط© ط§ظ„ظ†طھط§ط¦ط¬.": "We believe technology succeeds only when it supports decisions, saves time, and directly improves outcomes.",
    "ط®ط·ط· طھظ†ظپظٹط° ظˆط§ظ‚ط¹ظٹط© ظ…ط±طھط¨ط·ط© ط¨ط£ظ‡ط¯ط§ظپ طھط¬ط§ط±ظٹط© ظˆط§ط¶ط­ط©.": "Practical execution plans tied to clear business goals.",
    "ط­ظ„ظˆظ„ ط±ظ‚ظ…ظٹط© ظ…ط±ظ†ط© ظ‚ط§ط¨ظ„ط© ظ„ظ„ظ†ظ…ظˆ ظ…ط¹ طھظˆط³ط¹ ط£ط¹ظ…ط§ظ„ظƒ.": "Flexible digital solutions that grow with your business.",
    "ظپط±ظٹظ‚ ظٹط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط§ط³طھط´ط§ط±ط©طŒ ط§ظ„طھطµظ…ظٹظ…طŒ ط§ظ„طھط·ظˆظٹط±طŒ ظˆط§ظ„طھط­ط³ظٹظ† ط§ظ„ظ…ط³طھظ…ط±.": "A team combining consulting, design, development, and continuous improvement.",
    "ط§ط³طھط±ط§طھظٹط¬ظٹط© ط£ظˆظ„ظ‹ط§": "Strategy First",
    "ظ†ط¨ط¯ط£ ظ…ظ† ظپظ‡ظ… ط§ظ„ط³ظˆظ‚ ظˆط§ظ„ظ‡ط¯ظپ ظˆط§ظ„ط¹ظ…ظٹظ„ ظ‚ط¨ظ„ ط§ظ‚طھط±ط§ط­ ط£ظٹ ط­ظ„ طھظ‚ظ†ظٹ.": "We start by understanding the market, the objective, and the customer before proposing any technical solution.",
    "طھظ†ظپظٹط° ظ…طھظƒط§ظ…ظ„": "Integrated Execution",
    "ظ†ظˆط­ط¯ ط§ظ„ظ‡ظˆظٹط©طŒ ط§ظ„ظ…ط­طھظˆظ‰طŒ طھط¬ط±ط¨ط© ط§ظ„ظ…ط³طھط®ط¯ظ…طŒ ظˆط§ظ„طھط·ظˆظٹط± ط¯ط§ط®ظ„ ط±ط­ظ„ط© ط¹ظ…ظ„ ظˆط§ط­ط¯ط©.": "We align identity, content, user experience, and development in one execution journey.",
    "ظ†طھط§ط¦ط¬ ظ‚ط§ط¨ظ„ط© ظ„ظ„ظ‚ظٹط§ط³": "Measurable Results",
    "ظ†ط¨ظ†ظٹ ط¹ظ„ظ‰ ظ…ط¤ط´ط±ط§طھ ط£ط¯ط§ط، ظˆط§ط¶ط­ط© طھط³ط§ط¹ط¯ظƒ ط¹ظ„ظ‰ ط§طھط®ط§ط° ط§ظ„ظ‚ط±ط§ط± ط¨ط«ظ‚ط©.": "We build on clear performance indicators that help you make decisions with confidence.",
    "ط´ط±ط§ظƒط© ط·ظˆظٹظ„ط©": "Long-Term Partnership",
    "ظ„ط§ ظ†طھظˆظ‚ظپ ط¹ظ†ط¯ ط§ظ„ط¥ط·ظ„ط§ظ‚طŒ ط¨ظ„ ظ†ظˆط§طµظ„ ط§ظ„ط¯ط¹ظ… ظˆط§ظ„طھط­ط³ظٹظ† ط­ط³ط¨ ط§ط­طھظٹط§ط¬ ط§ظ„ط¹ظ…ظ„.": "We do not stop at launch; we continue support and improvement as your business evolves.",
    "ط­ظ„ظˆظ„ ظ…طµظ…ظ…ط© ظ„طھط؛ط·ظٹط© ط±ط­ظ„ط© ط§ظ„طھط­ظˆظ„ ط§ظ„ط±ظ‚ظ…ظٹ ظ…ظ† ط§ظ„طھط®ط·ظٹط· ط¥ظ„ظ‰ ط§ظ„طھط´ط؛ظٹظ„": "Solutions designed to cover the digital transformation journey from planning to operation.",
    "ط¨ظ†ط§ط، ط®ط§ط±ط·ط© ط·ط±ظٹظ‚ ط±ظ‚ظ…ظٹط© طھظˆط§ط¦ظ… ط¨ظٹظ† ط§ظ„ط£ظ‡ط¯ط§ظپ ط§ظ„طھط´ط؛ظٹظ„ظٹط© ظˆط§ظ„طھظˆط³ط¹ ط§ظ„ظ…ط³طھظ‚ط¨ظ„ظٹ.": "Building a digital roadmap aligned with operational goals and future growth.",
    "ط§ط³طھط´ط§ط±ط§طھ ظˆطھط¬ط§ط±ط¨ ط´ط±ط§ط، ظ…ط¯ط±ظˆط³ط© طھط³ط§ط¹ط¯ ط§ظ„ط¹ظ„ط§ظ…ط§طھ ط¹ظ„ظ‰ ط±ظپط¹ ط§ظ„طھط­ظˆظٹظ„ط§طھ ظˆط§ظ„ظ…ط¨ظٹط¹ط§طھ.": "Thoughtful commerce strategies and buying experiences that improve conversions and sales.",
    "طھط­ظ„ظٹظ„ ط¨ظٹط§ظ†ط§طھطŒ ظ„ظˆط­ط§طھ ظ…طھط§ط¨ط¹ط©طŒ ظˆظ†ظ…ط§ط°ط¬ طھط³ط§ط¹ط¯ظƒ ط¹ظ„ظ‰ ظ‚ط±ط§ط،ط© ط§ظ„ط£ط¯ط§ط، ظˆطµظ†ط¹ ط§ظ„ظ‚ط±ط§ط±.": "Data analysis, dashboards, and models that help you read performance and make decisions.",
    "ظ…ظˆط§ظ‚ط¹ ط§ط­طھط±ط§ظپظٹط© ظˆظ…ظ†طµط§طھ طھط´ط؛ظٹظ„ظٹط© ظ…طµظ…ظ…ط© ظ„طھط¬ط±ط¨ط© ظ…ط³طھط®ط¯ظ… ظˆط§ط¶ط­ط© ظˆط£ط¯ط§ط، ظ…ط³طھظ‚ط±.": "Professional websites and operational platforms designed for a clear user experience and stable performance.",
    "طھط­ظˆظٹظ„ ط§ظ„ط¥ط¬ط±ط§ط،ط§طھ ط§ظ„ظٹط¯ظˆظٹط© ط¥ظ„ظ‰ ظ…ط³ط§ط±ط§طھ ط¹ظ…ظ„ ط£ط³ط±ط¹ ظˆط£ظƒط«ط± ط¯ظ‚ط© ظˆط£ظ‚ظ„ طھظƒظ„ظپط©.": "Turning manual procedures into faster, more accurate, and lower-cost workflows.",
    "ط±ط¨ط· ط§ظ„ط£ظ†ط¸ظ…ط©طŒ طھط­ط³ظٹظ† ط§ظ„ط§ط³طھظ‚ط±ط§ط±طŒ ظˆظ…طھط§ط¨ط¹ط© ظپظ†ظٹط© ظ…ط³طھظ…ط±ط© ط¨ط¹ط¯ ط§ظ„ط¥ط·ظ„ط§ظ‚.": "Connecting systems, improving stability, and providing continuous technical follow-up after launch.",
    "ط£ط¹ظ…ط§ظ„ظ†ط§": "Our Projects",
    "ظ†ظ…ط§ط°ط¬ ظ…ط´ط§ط±ظٹط¹ ظ‚ط§ط¨ظ„ط© ظ„ظ„طھط®طµظٹطµ ط­ط³ط¨ ط§ظ„طµظˆط± ظˆط§ظ„ظپظٹط¯ظٹظˆظ‡ط§طھ ط§ظ„طھظٹ ط³طھط¶ظٹظپظ‡ط§ ظ„ط§ط­ظ‚ظ‹ط§": "Project examples that can be customized with the images and videos you add later.",
    "ط¢ظ„ظٹط© ط§ظ„ط¹ظ…ظ„": "How We Work",
    "ظ…ط³ط§ط± ظˆط§ط¶ط­ ظٹط®طھطµط± ط§ظ„ظپظˆط¶ظ‰ ظˆظٹط¹ط·ظٹ ظƒظ„ ظ…ط´ط±ظˆط¹ ظ†ظ‚ط·ط© ط§ظ†ط·ظ„ط§ظ‚ طµط­ظٹط­ط©": "A clear process that reduces confusion and gives every project the right starting point.",
    "ط§ظƒطھط´ط§ظپ ط§ظ„ط§ط­طھظٹط§ط¬": "Discovery",
    "طµظٹط§ط؛ط© ط§ظ„ط­ظ„": "Solution Design",
    "ط§ظ„طھظ†ظپظٹط° ظˆط§ظ„ط¥ط·ظ„ط§ظ‚": "Execution & Launch",
    "ط§ظ„طھط­ط³ظٹظ† ط§ظ„ظ…ط³طھظ…ط±": "Continuous Improvement",
    "طھظˆط§طµظ„ ظ…ط¹ظ†ط§": "Contact Us",
    "ظ†ظ†ط§ظ‚ط´ ط£ظ‡ط¯ط§ظپظƒ ظˆظ†ظ‚طھط±ط­ ط§ظ„ظ…ط³ط§ط± ط§ظ„ط£ظ†ط³ط¨ ط¯ظˆظ† طھط¹ظ‚ظٹط¯ طھظ‚ظ†ظٹ ط؛ظٹط± ط¶ط±ظˆط±ظٹ": "We discuss your goals and propose the right path without unnecessary technical complexity.",
    "ط§ظ„ط¹ظ†ظˆط§ظ†": "Address",
    "تركيا - إسطنبول - بورصا": "Turkey - Istanbul - Bursa",
    "ط§ظ„ظ‡ط§طھظپ": "Phone",
    "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ": "Email",
    "ط§ظ„ط§ط³ظ… ط§ظ„ظƒط§ظ…ظ„": "Full Name",
    "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ": "Email Address",
    "ط§ط³ظ… ط§ظ„ط´ط±ظƒط©": "Company Name",
    "ط­ط¯ط«ظ†ط§ ط¹ظ† ط§ظ„ظ…ط´ط±ظˆط¹ ط£ظˆ ط§ظ„طھط­ط¯ظٹ ط§ظ„ط°ظٹ طھط¹ظ…ظ„ ط¹ظ„ظٹظ‡": "Tell us about the project or challenge you are working on",
    "ط¥ط±ط³ط§ظ„ ط§ظ„ط·ظ„ط¨": "Send Request",
    "ط­ظ„ظˆظ„ ط±ظ‚ظ…ظٹط© طھظ†ط·ظ„ظ‚ ظ…ظ† ظپظ‡ظ… ط§ظ„ط¹ظ…ظ„": "Digital solutions built on understanding the business.",
    "ط§ظ„ط§ط³طھط±ط§طھظٹط¬ظٹط©طŒ ط§ظ„طھظ†ظپظٹط°طŒ ظˆط§ظ„طھط­ط³ظٹظ† ظپظٹ ظ…ط³ط§ط± ظˆط§ط­ط¯": "Strategy, execution, and improvement in one path.",
    "ط±ظˆط§ط¨ط· ظ…ظ‡ظ…ط©": "Quick Links",
    "ط£ظ‚ط³ط§ظ…ظ†ط§": "Our Sections",
    "ط±ط³ط§ظ„طھظ†ط§": "Our Mission",
    "ظ†ط¨ظ†ظٹ طھط¬ط§ط±ط¨ ط±ظ‚ظ…ظٹط© ظ…طھظˆط§ط²ظ†ط© ط¨ظٹظ† ط§ظ„ط¬ظ…ط§ظ„ ط§ظ„ظˆط¸ظٹظپظٹطŒ ط§ظ„ظˆط¶ظˆط­ ط§ظ„طھط´ط؛ظٹظ„ظٹطŒ ظˆط§ظ„ظ†طھظٹط¬ط© ط§ظ„طھط¬ط§ط±ظٹط©.": "We build digital experiences that balance functional beauty, operational clarity, and business impact.",
    "ط¨ط±ظٹط¯ظƒ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ": "Your Email",
    "ط§ط´طھط±ظƒ": "Subscribe",
    "ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©": "All rights reserved",
    "ظ…ظ†طµط© طھط¬ط§ط±ط© ط¥ظ„ظƒطھط±ظˆظ†ظٹط©": "E-Commerce Platform",
    "ظ„ظˆط­ط© ظ…ط¤ط´ط±ط§طھ طھظ†ظپظٹط°ظٹط©": "Executive Dashboard",
    "ط£طھظ…طھط© ط®ط¯ظ…ط© ط§ظ„ط¹ظ…ظ„ط§ط،": "Customer Service Automation",
    "ط¨ظˆط§ط¨ط© طھط´ط؛ظٹظ„ ط¯ط§ط®ظ„ظٹط©": "Internal Operations Portal",
    "ظ…ظˆظ‚ط¹ طھط¹ط±ظٹظپظٹ ظ…طھظƒط§ظ…ظ„": "Corporate Website",
    "ط±ط¨ط· ط£ظ†ط¸ظ…ط© ظ…طھط¹ط¯ط¯ط©": "Multi-System Integration",
    "ظ‚طµطھظ†ط§": "Our Story",
    "ط±ط¤ظٹطھظ†ط§": "Our Vision",
    "ظ‚ظٹظ…ظ†ط§": "Our Values",
    "ظ„ظ…ط§ط°ط§ Maderaa": "Why Maderaa",
    "ط®ط¯ظ…ط§طھظ†ط§": "Our Services",
    "ط£ط±ط³ظ„ طھظپط§طµظٹظ„ ظ…ط´ط±ظˆط¹ظƒ": "Send Your Project Details",
    "ظƒظ„ظ…ط§ ظƒط§ظ†طھ ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ ط£ظˆط¶ط­طŒ ط§ط³طھط·ط¹ظ†ط§ ط§ظ‚طھط±ط§ط­ ظ…ط³ط§ط± ط£ط¯ظ‚ ظˆط£ظ†ط³ط¨ ظ„ظ…ط±ط­ظ„ط© ط¹ظ…ظ„ظƒ.": "The clearer the information, the more accurately we can propose the right path for your business stage.",
    "ط§ط³ظ… ط§ظ„ط´ط±ظƒط© ط£ظˆ ط§ظ„ط¬ظ‡ط©": "Company or Organization Name",
    "ط±ظ‚ظ… ط§ظ„ط¬ظˆط§ظ„": "Mobile Number",
    "ط§ط®طھط± ظ†ظˆط¹ ط§ظ„ط®ط¯ظ…ط©": "Select Service Type",
    "ط§ظƒطھط¨ ظ†ط¨ط°ط© ظ…ط®طھطµط±ط© ط¹ظ† ط§ظ„ظپظƒط±ط© ط£ظˆ ط§ظ„طھط­ط¯ظٹ ط£ظˆ ط§ظ„ظ†طھط§ط¦ط¬ ط§ظ„طھظٹ طھط±ظٹط¯ ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظٹظ‡ط§": "Write a short brief about your idea, challenge, or the results you want to achieve.",
    "ط¥ط±ط³ط§ظ„ ط§ظ„ط±ط³ط§ظ„ط©": "Send Message",
    "ظ„ظ…ط§ط°ط§ ظٹط¨ط¯ط£ ط§ظ„ط¹ظ…ظ„ط§ط، ظ…ط¹ظ†ط§": "Why Clients Start With Us",
    "ط§ط³طھط¬ط§ط¨ط© ظˆط§ط¶ط­ط©": "Clear Response",
    "ظپظ‡ظ… ط¯ظ‚ظٹظ‚": "Accurate Understanding",
    "ظ„ط؛ط© ط¹ظ…ظ„ ظ…ط´طھط±ظƒط©": "Shared Business Language",
    "طھظ†ظپظٹط° ظ…ظˆط«ظˆظ‚": "Reliable Execution",
    "ط¬ط¯ظˆظ„ط© ظˆط§ظ‚ط¹ظٹط©": "Realistic Planning",
    "ظ…ظˆط§ظƒط¨ط© ظ…ط³طھظ…ط±ط©": "Continuous Support",
    "ط³ط§ط¹ط§طھ ط§ظ„ط¹ظ…ظ„": "Working Hours",
    "ط§ظ„ط£ط­ط¯ - ط§ظ„ط®ظ…ظٹط³": "Sunday - Thursday",
    "9:00 طµط¨ط§ط­ظ‹ط§ - 6:00 ظ…ط³ط§ط،ظ‹": "9:00 AM - 6:00 PM",
    "ظ…ظˆظ‚ط¹ظ†ط§ ط£ظˆ ط®ط±ظٹط·ط© ط§ظ„طھط؛ط·ظٹط©": "Our Location or Coverage Map",
    "ط¬ط§ظ‡ط²ظˆظ† ظ„ظ…ظ†ط§ظ‚ط´ط© ظ…ط´ط±ظˆط¹ظƒ ط§ظ„ظ‚ط§ط¯ظ…": "Ready to discuss your next project",
    "ط§طھطµظ„ ط§ظ„ط¢ظ†": "Call Now",
    "ظˆط§طھط³ط§ط¨": "WhatsApp",
    "ط£ط±ط³ظ„ ط¨ط±ظٹط¯ظ‹ط§": "Send Email",
    "ظ…طھظ‰ طھط­طھط§ط¬ ظ‡ط°ظ‡ ط§ظ„ط®ط¯ظ…ط©طں": "When do you need this service?",
    "ظ…ط§ط°ط§ ظ†ظ‚ط¯ظ…": "What We Provide",
    "ظ„ظ…ظ† طھظ†ط§ط³ط¨طں": "Who Is It For?",
    "ظ…ط§ ط§ظ„ط°ظٹ ظ†ط±ظƒط² ط¹ظ„ظٹظ‡": "What We Focus On",
    "ط§ظ„ظ‚ظٹظ…ط© ط§ظ„ط£ط³ط§ط³ظٹط©": "Core Value",
    "ظ†ط·ط§ظ‚ ط§ظ„ط®ط¯ظ…ط©": "Service Scope",
    "ط§ظ„ظ‡ط¯ظپ ظ…ظ† ط§ظ„ط®ط¯ظ…ط©": "Purpose of the Service",
    "ظ…ط§ ط§ظ„ط°ظٹ ظٹط´ظ…ظ„ظ‡ ط§ظ„ط¹ظ…ظ„": "What the Work Includes",
    "ظ…طھظ‰ طھطµط¨ط­ ط¶ط±ظˆط±ظٹط©طں": "When Does It Become Necessary?",
    "ظƒظٹظپ ظ†ط·ط¨ظ‚ظ‡ط§": "How We Apply It",
    "ط¨ط¹ط¯ ط§ظ„ط¥ط·ظ„ط§ظ‚ طھط¨ط¯ط£ ط§ظ„ظ…ط±ط­ظ„ط© ط§ظ„ط£ظ‡ظ…": "The most important stage begins after launch",
    "ظ…ط§ ط§ظ„ط°ظٹ ظ†ظ‚ط¯ظ…ظ‡ ظ‡ظ†ط§": "What We Offer Here",
    "ط£ظ…ط«ظ„ط© ظ…ط­طھظˆظ‰ ظ‚ط§ط¨ظ„ط© ظ„ظ„طھط¹ط¯ظٹظ„ ط¨ط­ط³ط¨ ط§ظ„طµظˆط± ظˆط§ظ„ظپظٹط¯ظٹظˆظ‡ط§طھ ط§ظ„طھظٹ ط³طھط¶ظٹظپظ‡ط§ ظ„ط§ط­ظ‚ظ‹ط§.": "Content examples that can be adjusted based on the images and videos you add later.",
    "ظ†ظ…ط§ط°ط¬ ظ…ط®طھط§ط±ط©": "Selected Samples",
    "ظ…ط´ط§ط±ظٹط¹ طھظڈط¸ظ‡ط± ظƒظٹظپ ظ†ط±ط¨ط· ط¨ظٹظ† ط§ظ„طھط¬ط±ط¨ط©طŒ ط§ظ„طھط´ط؛ظٹظ„طŒ ظˆط§ظ„ظ†طھط§ط¦ط¬": "Projects showing how we connect experience, operations, and results",
  };

  if (window.AOS) {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, mirror: false });
  }

  const body = document.body;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector("#header");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const scrollTop = document.querySelector("#scroll-top");
  const preloader = document.querySelector("#preloader");
  let langBtn = document.querySelector(".lang-btn");

  const setNodeTranslation = (node, ar, en) => {
    if (!node || node.dataset.ar) return;
    node.dataset.ar = ar;
    node.dataset.en = en;
  };

  const seedStaticTranslations = () => {
    const setPageTitle = (ar, en) => {
      document.documentElement.dataset.titleAr = ar;
      document.documentElement.dataset.titleEn = en;
    };

    const setTranslations = (items) => {
      items.forEach(([selector, ar, en]) => {
        document.querySelectorAll(selector).forEach((node) => setNodeTranslation(node, ar, en));
      });
    };

    [
      [".navmenu a[href='index.html']", "الرئيسية", "Home"],
      [".navmenu a[href='about.html']", "من نحن", "About Us"],
      [".navmenu a[href='service-details.html']", "خدماتنا", "Services"],
      [".navmenu a[href='portfolio.html']", "أعمالنا", "Our Work"],
      [".navmenu a[href='contact.html']", "تواصل معنا", "Contact Us"],
      [".navmenu .dropdown > a > span", "الأقسام", "Sections"],
      [".navmenu .dropdown ul li:nth-child(1) a", "التحول الرقمي", "Digital Transformation"],
      [".navmenu .dropdown ul li:nth-child(2) a", "التجارة الإلكترونية", "E-Commerce"],
      [".navmenu .dropdown ul li:nth-child(3) a", "الذكاء الاصطناعي والبيانات", "AI & Data"],
      [".cta-btn", siteConfig.headerCtaAr, siteConfig.headerCtaEn],
      [".btn-get-started", "اكتشف خدماتنا", "Explore Our Services"],
      [".custom-outline-btn", "شاهد أعمالنا", "View Our Work"],
      [".hero-full-btn", "اطلب استشارة", "Request a Consultation"],
      [".info-item .contact-phone", siteConfig.phoneDisplay, siteConfig.phoneDisplay],
      [".info-item .contact-email", siteConfig.email, siteConfig.email],
      [".footer-links:nth-of-type(1) h4", "روابط مهمة", "Quick Links"],
      [".footer-links:nth-of-type(2) h4", "الأقسام", "Sections"],
      [".footer-newsletter h4", "رسالتنا", "Our Mission"],
      [".footer-newsletter p", "نبني تجارب رقمية متوازنة بين الجمال الوظيفي، الوضوح التشغيلي، والنتيجة التجارية.", "We build digital experiences that balance functional beauty, operational clarity, and business impact."],
      [".footer-about .footer-contact p:first-child", "حلول رقمية تنطلق من فهم العمل", "Digital solutions built on understanding the business."],
      [".footer-links:nth-of-type(1) a[href='index.html']", "الرئيسية", "Home"],
      [".footer-links:nth-of-type(1) a[href='about.html']", "من نحن", "About Us"],
      [".footer-links:nth-of-type(1) a[href='service-details.html']", "خدماتنا", "Services"],
      [".footer-links:nth-of-type(1) a[href='contact.html']", "تواصل معنا", "Contact Us"],
      [".footer-links:nth-of-type(2) a[href='service-digital-transformation.html']", "التحول الرقمي", "Digital Transformation"],
      [".footer-links:nth-of-type(2) a[href='service-ecommerce.html']", "التجارة الإلكترونية", "E-Commerce"],
      [".footer-links:nth-of-type(2) a[href='service-ai-data.html']", "الذكاء الاصطناعي", "AI & Data"],
    ].forEach(([selector, ar, en]) => {
      document.querySelectorAll(selector).forEach((node) => setNodeTranslation(node, ar, en));
    });

    document.querySelectorAll(".info-item").forEach((item) => {
      if (item.querySelector(".bi-geo-alt")) {
        const paragraphs = item.querySelectorAll("p");
        if (paragraphs[0]) setNodeTranslation(paragraphs[0], siteConfig.addressAr, siteConfig.addressEn);
        if (paragraphs[1]) setNodeTranslation(paragraphs[1], siteConfig.addressEn, siteConfig.addressEn);
      }
    });

    const footerGroups = document.querySelectorAll("#footer .footer-links");
    if (footerGroups[0]) {
      setNodeTranslation(footerGroups[0].querySelector("h4"), "روابط مهمة", "Quick Links");
      const links = footerGroups[0].querySelectorAll("a");
      const items = [
        ["الرئيسية", "Home"],
        ["من نحن", "About Us"],
        ["خدماتنا", "Services"],
        ["أعمالنا", "Our Work"],
        ["تواصل معنا", "Contact Us"],
      ];
      links.forEach((link, index) => {
        if (items[index]) setNodeTranslation(link, items[index][0], items[index][1]);
      });
    }
    if (footerGroups[1]) {
      setNodeTranslation(footerGroups[1].querySelector("h4"), "أقسامنا", "Sections");
      const links = footerGroups[1].querySelectorAll("a");
      const items = [
        ["التحول الرقمي", "Digital Transformation"],
        ["التجارة الإلكترونية", "E-Commerce"],
        ["الذكاء الاصطناعي", "AI & Data"],
      ];
      links.forEach((link, index) => {
        if (items[index]) setNodeTranslation(link, items[index][0], items[index][1]);
      });
    }

    const newsletter = document.querySelector("#footer .footer-newsletter");
    if (newsletter) {
      setNodeTranslation(newsletter.querySelector("h4"), "رسالتنا", "Our Mission");
      setNodeTranslation(
        newsletter.querySelector("p"),
        "نبني تجارب رقمية متوازنة بين الجمال الوظيفي، الوضوح التشغيلي، والنتيجة التجارية.",
        "We build digital experiences that balance functional beauty, operational clarity, and business impact.",
      );
      const newsletterEmail = newsletter.querySelector("input[type='email']");
      if (newsletterEmail && !newsletterEmail.dataset.arPlaceholder) {
        newsletterEmail.dataset.arPlaceholder = "بريدك الإلكتروني";
        newsletterEmail.dataset.enPlaceholder = "Your Email";
      }
      const newsletterSubmit = newsletter.querySelector("input[type='submit']");
      if (newsletterSubmit) {
        newsletterSubmit.dataset.ar = "اشترك";
        newsletterSubmit.dataset.en = "Subscribe";
      }
    }

    const copyrightSpan = document.querySelector("#footer .copyright span");
    if (copyrightSpan) {
      setNodeTranslation(copyrightSpan, "جميع الحقوق محفوظة", "All rights reserved");
    }

    document.querySelectorAll(".php-email-form").forEach((form) => {
      if (form.closest(".footer-newsletter")) return;

      const textInputs = form.querySelectorAll("input[type='text']");
      if (textInputs[0] && !textInputs[0].dataset.arPlaceholder) {
        textInputs[0].dataset.arPlaceholder = "الاسم الكامل";
        textInputs[0].dataset.enPlaceholder = "Full Name";
      }
      if (textInputs[1] && !textInputs[1].dataset.arPlaceholder) {
        textInputs[1].dataset.arPlaceholder = "اسم الشركة أو الجهة";
        textInputs[1].dataset.enPlaceholder = "Company or Organization Name";
      }

      const emailInput = form.querySelector("input[type='email']");
      if (emailInput && !emailInput.dataset.arPlaceholder) {
        emailInput.dataset.arPlaceholder = "البريد الإلكتروني";
        emailInput.dataset.enPlaceholder = "Email Address";
      }

      const telInput = form.querySelector("input[type='tel']");
      if (telInput && !telInput.dataset.arPlaceholder) {
        telInput.dataset.arPlaceholder = "رقم الجوال";
        telInput.dataset.enPlaceholder = "Mobile Number";
      }

      const textarea = form.querySelector("textarea");
      if (textarea && !textarea.dataset.arPlaceholder) {
        const rows = Number(textarea.getAttribute("rows") || 0);
        if (rows >= 6) {
          textarea.dataset.arPlaceholder = "اكتب نبذة مختصرة عن الفكرة أو التحدي أو النتائج التي تريد الوصول إليها";
          textarea.dataset.enPlaceholder = "Write a short brief about your idea, challenge, or the results you want to achieve.";
        } else {
          textarea.dataset.arPlaceholder = "حدثنا عن المشروع أو التحدي الذي تعمل عليه";
          textarea.dataset.enPlaceholder = "Tell us about the project or challenge you are working on";
        }
      }

      const selectOptions = form.querySelectorAll("select option");
      const selectMap = [
        ["اختر نوع الخدمة", "Select Service Type"],
        ["التحول الرقمي", "Digital Transformation"],
        ["التجارة الإلكترونية", "E-Commerce"],
        ["الذكاء الاصطناعي والبيانات", "AI & Data"],
      ];
      selectOptions.forEach((option, index) => {
        if (selectMap[index] && !option.dataset.ar) {
          option.dataset.ar = selectMap[index][0];
          option.dataset.en = selectMap[index][1];
        }
      });

      const submitButton = form.querySelector("button[type='submit']");
      if (submitButton && !submitButton.dataset.ar) {
        const isContactForm = form.closest(".contact-form-wrapper");
        submitButton.dataset.ar = isContactForm ? "إرسال الرسالة" : "إرسال الطلب";
        submitButton.dataset.en = isContactForm ? "Send Message" : "Send Request";
      }
    });

    if (currentPage === "index.html") {
      setPageTitle("Maderaa | التحول الرقمي والحلول التقنية", "Maderaa | Digital Transformation & Technology Solutions");
      setTranslations([
        ["#hero p", "في Maderaa نبني حلولًا رقمية تبدأ من الفكرة والاستراتيجية وتصل إلى التنفيذ والتشغيل والتحسين المستمر.", "At Maderaa, we build digital solutions that start with strategy and continue through execution, operation, and continuous improvement."],
        ["#about h3", "نحن شريك رقمي يجمع بين الرؤية التجارية والتنفيذ التقني", "We are a digital partner that combines business vision with technical execution."],
        ["#about .content p:nth-of-type(1)", "نساعد الشركات الناشئة والجهات المتنامية على بناء حضور رقمي احترافي، تطوير منصات فعالة، ورفع كفاءة التشغيل عبر حلول عملية قابلة للتوسع.", "We help startups and growing organizations build a professional digital presence, develop effective platforms, and improve operations through scalable solutions."],
        ["#about .content p:nth-of-type(2)", "من تحليل الاحتياج وحتى التسليم والتشغيل، نربط بين أهداف العمل، تجربة المستخدم، والأنظمة التقنية في مسار واحد واضح.", "From needs analysis to launch and operation, we connect business goals, user experience, and technical systems in one clear path."],
        ["#about .content p:nth-of-type(3)", "نؤمن أن التقنية لا تكون ناجحة إلا عندما تخدم القرار، تختصر الوقت، وتنعكس مباشرة على جودة النتائج.", "We believe technology succeeds only when it supports decisions, saves time, and directly improves outcomes."],
        ["#about .content li:nth-child(1) span", "خطط تنفيذ واقعية مرتبطة بأهداف تجارية واضحة.", "Practical execution plans tied to clear business goals."],
        ["#about .content li:nth-child(2) span", "حلول رقمية مرنة قابلة للنمو مع توسع أعمالك.", "Flexible digital solutions that grow with your business."],
        ["#about .content li:nth-child(3) span", "فريق يجمع بين الاستشارة، التصميم، التطوير، والتحسين المستمر.", "A team combining consulting, design, development, and continuous improvement."],
        [".features .feature-item:nth-child(1) h4", "استراتيجية أولًا", "Strategy First"],
        [".features .feature-item:nth-child(1) p", "نبدأ من فهم السوق والهدف والعميل قبل اقتراح أي حل تقني.", "We start by understanding the market, objective, and customer before proposing any technical solution."],
        [".features .feature-item:nth-child(2) h4", "تنفيذ متكامل", "Integrated Execution"],
        [".features .feature-item:nth-child(2) p", "نوحد الهوية، المحتوى، تجربة المستخدم، والتطوير داخل رحلة عمل واحدة.", "We align identity, content, user experience, and development in one execution journey."],
        [".features .feature-item:nth-child(3) h4", "نتائج قابلة للقياس", "Measurable Results"],
        [".features .feature-item:nth-child(3) p", "نبني على مؤشرات أداء واضحة تساعدك على اتخاذ القرار بثقة.", "We build on clear performance indicators that help you make decisions with confidence."],
        [".features .feature-item:nth-child(4) h4", "شراكة طويلة", "Long-Term Partnership"],
        [".features .feature-item:nth-child(4) p", "لا نتوقف عند الإطلاق، بل نواصل الدعم والتحسين حسب احتياج العمل.", "We do not stop at launch; we continue support and improvement as your business evolves."],
        ["#services .section-title h2", "خدماتنا", "Our Services"],
        ["#services .section-title p", "حلول مصممة لتغطية رحلة التحول الرقمي من التخطيط إلى التشغيل", "Solutions designed to cover the digital transformation journey from planning to operation."],
        ["#services .row > div:nth-child(1) .service-item h3", "التحول الرقمي", "Digital Transformation"],
        ["#services .row > div:nth-child(1) .service-item p", "بناء خارطة طريق رقمية توائم بين الأهداف التشغيلية والتوسع المستقبلي.", "Building a digital roadmap aligned with operational goals and future growth."],
        ["#services .row > div:nth-child(2) .service-item h3", "التجارة الإلكترونية", "E-Commerce"],
        ["#services .row > div:nth-child(2) .service-item p", "استشارات وتجارب شراء مدروسة تساعد العلامات على رفع التحويلات والمبيعات.", "Thoughtful commerce strategies and buying experiences that improve conversions and sales."],
        ["#services .row > div:nth-child(3) .service-item h3", "الذكاء الاصطناعي والبيانات", "AI & Data"],
        ["#services .row > div:nth-child(3) .service-item p", "تحليل بيانات، لوحات متابعة، ونماذج تساعدك على قراءة الأداء وصنع القرار.", "Data analysis, dashboards, and models that help you read performance and make decisions."],
        [".why-us .nav-item:nth-child(1) h4", "فهم العمل", "Business Understanding"],
        [".why-us .nav-item:nth-child(2) h4", "إدارة التنفيذ", "Execution Management"],
        [".why-us .nav-item:nth-child(3) h4", "قياس الأداء", "Performance Measurement"],
        [".why-us .nav-item:nth-child(4) h4", "شراكة مستمرة", "Ongoing Partnership"],
        ["#features-tab-1 h3", "نقرأ تحدياتك من زاوية العمل لا من زاوية الأدوات فقط", "We read your challenges from a business perspective, not only a tools perspective."],
        ["#features-tab-1 .fst-italic", "كل مشروع ناجح يبدأ بفهم النموذج التشغيلي، السوق، والجمهور المستهدف.", "Every successful project starts with understanding the operating model, market, and target audience."],
        ["#features-tab-1 li:nth-child(1) span", "تحليل الفجوات الحالية في المسار الرقمي.", "Analyzing the current gaps in the digital journey."],
        ["#features-tab-1 li:nth-child(2) span", "تحديد الأولويات حسب الأثر والميزانية.", "Prioritizing based on impact and budget."],
        ["#features-tab-1 li:nth-child(3) span", "تحويل الاحتياج إلى خطة تنفيذ واضحة.", "Turning the need into a clear execution plan."],
        ["#features-tab-1 p:last-child", "نختصر عليك الدوران بين مزودين متعددين عبر رؤية واحدة تربط الحاجة بالحجم المناسب من الحل.", "We reduce the back-and-forth between multiple providers through one clear view that matches the need with the right solution scope."],
        ["#features-tab-2 h3", "نحوّل التصور إلى خطوات عملية قابلة للتنفيذ", "We turn the concept into practical and executable steps."],
        ["#features-tab-2 p:nth-of-type(1)", "نقسم المشروع إلى مراحل واضحة، ونحدد المخرجات والاعتمادات منذ البداية.", "We break the project into clear phases and define deliverables and dependencies from the beginning."],
        ["#features-tab-2 .fst-italic", "هذا يقلل التشتت ويحافظ على سرعة الإنجاز وجودة التسليم.", "This reduces confusion and preserves delivery speed and quality."],
        ["#features-tab-2 li:nth-child(1) span", "تسلسل منطقي للمراحل والمهام.", "A logical sequence for phases and tasks."],
        ["#features-tab-2 li:nth-child(2) span", "مرونة في التطوير حسب الأولوية.", "Flexibility in development based on priority."],
        ["#features-tab-2 li:nth-child(3) span", "تنسيق محكم بين المحتوى والتصميم والتقنية.", "Tight coordination between content, design, and technology."],
        ["#features-tab-3 h3", "نربط التطوير بالبيانات لا بالانطباع", "We connect development to data, not assumptions."],
        ["#features-tab-3 p:nth-of-type(1)", "نحدد ما الذي يجب قياسه قبل الإطلاق، ثم نتابع أثر التغييرات بعد التشغيل.", "We define what should be measured before launch, then track the impact of changes after release."],
        ["#features-tab-3 li:nth-child(1) span", "لوحات مؤشرات مرتبطة بالأهداف الفعلية.", "Dashboards tied to actual goals."],
        ["#features-tab-3 li:nth-child(2) span", "قراءة نقاط التسرب والتحويل والاحتفاظ.", "Reading drop-off, conversion, and retention points."],
        ["#features-tab-3 li:nth-child(3) span", "اقتراحات تطوير مبنية على الأداء.", "Improvement recommendations based on performance."],
        ["#features-tab-3 .fst-italic", "القرار الأفضل هو القرار الذي يستند إلى أرقام واضحة وسياق مفهوم.", "The best decision is the one backed by clear numbers and clear context."],
        ["#features-tab-4 h3", "نظل قريبين بعد الإطلاق", "We stay close after launch."],
        ["#features-tab-4 p:nth-of-type(1)", "المرحلة الأهم تبدأ بعد نشر المشروع، لذلك نقدّم دعمًا تشغيليًا وتحسينًا مستمرًا حسب نمو العمل.", "The most important stage starts after launch, so we provide operational support and continuous improvement as the business grows."],
        ["#features-tab-4 .fst-italic", "نساعدك على التوسع بثبات بدل إعادة البناء من الصفر كل مرة.", "We help you scale steadily instead of rebuilding from scratch every time."],
        ["#features-tab-4 li:nth-child(1) span", "متابعة فنية وتشغيلية دورية.", "Regular technical and operational follow-up."],
        ["#features-tab-4 li:nth-child(2) span", "اقتراحات توسع محسوبة حسب المرحلة.", "Calculated scaling recommendations based on stage."],
        ["#features-tab-4 li:nth-child(3) span", "دعم التكامل مع الأنظمة الجديدة.", "Integration support for new systems."],
        ["#portfolio .section-title h2", "أعمالنا", "Our Work"],
        ["#portfolio .section-title p", "نماذج مشاريع قابلة للتخصيص حسب الصور والفيديوهات التي ستضيفها لاحقًا", "Project examples that can be customized with the images and videos you add later."],
        ["#portfolio .row > div:nth-child(1) .portfolio-item h3", "منصة تجارة إلكترونية", "E-Commerce Platform"],
        ["#portfolio .row > div:nth-child(1) .portfolio-item p", "تطوير تجربة بيع رقمية أكثر سلاسة مع تحسين بنية التصنيفات ومسار الشراء.", "Developing a smoother selling experience with improved category structure and purchase flow."],
        ["#portfolio .row > div:nth-child(2) .portfolio-item h3", "لوحة مؤشرات تنفيذية", "Executive Dashboard"],
        ["#portfolio .row > div:nth-child(2) .portfolio-item p", "تجميع مصادر البيانات في واجهة واحدة لرفع سرعة المتابعة واتخاذ القرار.", "Combining data sources into one interface to improve tracking speed and decision-making."],
        ["#portfolio .row > div:nth-child(3) .portfolio-item h3", "أتمتة خدمة العملاء", "Customer Service Automation"],
        ["#portfolio .row > div:nth-child(3) .portfolio-item p", "تصميم تدفقات عمل تقلل المهام اليدوية وتسرّع الاستجابة للطلبات المتكررة.", "Designing workflows that reduce manual tasks and speed up responses to repeated requests."],
        ["#portfolio .row > div:nth-child(4) .portfolio-item h3", "بوابة تشغيل داخلية", "Internal Operations Portal"],
        ["#portfolio .row > div:nth-child(4) .portfolio-item p", "منصة موحدة لإدارة العمليات الداخلية بصلاحيات واضحة وتقارير دورية.", "A unified platform for internal operations with clear permissions and recurring reporting."],
        ["#portfolio .row > div:nth-child(5) .portfolio-item h3", "موقع تعريفي متكامل", "Corporate Website"],
        ["#portfolio .row > div:nth-child(5) .portfolio-item p", "بناء حضور احترافي يعكس الهوية والخدمات ويقود العميل إلى التواصل بسهولة.", "Building a professional presence that reflects the brand and guides the client toward easy contact."],
        ["#portfolio .row > div:nth-child(6) .portfolio-item h3", "ربط أنظمة متعددة", "Multi-System Integration"],
        ["#portfolio .row > div:nth-child(6) .portfolio-item p", "تكامل بين أنظمة الإدارة والمبيعات والتقارير لتقليل التكرار وتحسين الدقة.", "Integration between management, sales, and reporting systems to reduce duplication and improve accuracy."],
        ["#team .section-title h2", "آلية العمل", "How We Work"],
        ["#team .section-title p", "مسار واضح يختصر الفوضى ويعطي كل مشروع نقطة انطلاق صحيحة", "A clear process that reduces confusion and gives every project the right starting point."],
        ["#team .feature-item:nth-child(1) h4", "1. اكتشاف الاحتياج", "1. Discovery"],
        ["#team .feature-item:nth-child(1) p", "جلسات فهم، مراجعة واقع العمل، وتحديد ما يحتاجه المشروع فعلًا.", "Discovery sessions, business review, and defining what the project truly needs."],
        ["#team .feature-item:nth-child(2) h4", "2. صياغة الحل", "2. Solution Design"],
        ["#team .feature-item:nth-child(2) p", "تحويل الاحتياج إلى تصور تنفيذي ومحتوى وهيكل تقني واضح.", "Turning the need into a clear execution plan, content structure, and technical architecture."],
        ["#team .feature-item:nth-child(3) h4", "3. التنفيذ والإطلاق", "3. Execution & Launch"],
        ["#team .feature-item:nth-child(3) p", "تطوير وتجهيز المشروع وربطه بما يحتاجه من أدوات وأنظمة.", "Building and preparing the project and connecting it to the tools and systems it needs."],
        ["#team .feature-item:nth-child(4) h4", "4. التحسين المستمر", "4. Continuous Improvement"],
        ["#team .feature-item:nth-child(4) p", "متابعة الأداء وإجراء التحسينات اللازمة مع تطور العمل.", "Monitoring performance and applying improvements as the business evolves."],
        ["#contact .section-title h2", "تواصل معنا", "Contact Us"],
        ["#contact .section-title p", "نناقش أهدافك ونقترح المسار الأنسب دون تعقيد تقني غير ضروري", "We discuss your goals and propose the most suitable path without unnecessary technical complexity."],
        ["#contact .info-item:nth-child(1) h3", "العنوان", "Address"],
        ["#contact .info-item:nth-child(2) h3", "الهاتف", "Phone"],
        ["#contact .info-item:nth-child(3) h3", "البريد الإلكتروني", "Email"],
        ["#contact .php-email-form button", "إرسال الطلب", "Send Request"],
        [".footer-about .footer-contact p:nth-of-type(1)", "شريكك في بناء الحلول الرقمية العملية", "Your partner in building practical digital solutions."],
        [".footer-about .footer-contact p:nth-of-type(2)", "الاستراتيجية، التنفيذ، والتحسين في مسار واحد", "Strategy, execution, and improvement in one path."],
        ["#contact .php-email-form input[type='submit']", "اشترك", "Subscribe"],
      ]);
    }

    if (currentPage === "about.html") {
      setPageTitle("Maderaa | من نحن", "Maderaa | About Us");
      setTranslations([
        [".page-title h1", "من نحن", "About Us"],
        [".page-title p", "نصنع حلولًا رقمية متزنة بين الرؤية التجارية والتنفيذ التقني الفعّال.", "We build balanced digital solutions that align business vision with effective technical execution."],
        [".breadcrumbs .current", "من نحن", "About Us"],
        [".services-list a:nth-child(1)", "قصتنا", "Our Story"],
        [".services-list a:nth-child(2)", "رؤيتنا", "Our Vision"],
        [".services-list a:nth-child(3)", "قيمنا", "Our Values"],
        [".services-list a:nth-child(4)", "لماذا Maderaa", "Why Maderaa"],
        [".col-lg-4[data-aos-delay='100'] h4", "نعمل كامتداد لفريقك", "We work as an extension of your team."],
        [".col-lg-4[data-aos-delay='100'] p", "هدفنا ليس فقط تسليم مشروع جميل، بل بناء أساس رقمي يساعدك على اتخاذ قرارات أفضل، تشغيل أسرع، ونمو أكثر استقرارًا.", "Our goal is not only to deliver a polished project, but to build a digital foundation that supports better decisions, faster operations, and more stable growth."],
        ["#our-story", "قصتنا", "Our Story"],
        ["#our-story + p", "انطلقت Maderaa من حاجة واضحة في السوق: كثير من الشركات تحتاج شريكًا يفهم العمل بعمق، ويستطيع تحويل الاحتياج إلى تجربة رقمية مدروسة دون تعقيد مبالغ فيه.", "Maderaa began from a clear market need: many companies need a partner that understands the business deeply and can turn needs into thoughtful digital experiences without unnecessary complexity."],
        ["#our-story + p + p", "لهذا جمعنا بين منهجية استشارية عملية، قدرة تنفيذ تقنية، ونظرة طويلة المدى تجعل كل مشروع قابلًا للنمو والتحسين بعد الإطلاق.", "That is why we combine practical consulting, technical execution capability, and a long-term view that keeps every project ready for growth and improvement after launch."],
        ["#our-vision", "رؤيتنا", "Our Vision"],
        ["#our-vision + p", "أن نكون الشريك الرقمي الذي تلجأ إليه الشركات لبناء منظومات أكثر وضوحًا، أسرع أداءً، وأفضل أثرًا على تجربة العميل والنتائج التجارية.", "To be the digital partner companies turn to for building clearer systems, faster operations, and stronger impact on customer experience and business results."],
        ["#our-vision + p + p", "نؤمن أن التقنية الناجحة ليست الأكثر تعقيدًا، بل الأكثر ملاءمة لمرحلة العمل والأقدر على تحويل الاحتياج إلى قيمة فعلية.", "We believe the best technology is not the most complex, but the most suitable for the business stage and the most capable of turning needs into real value."],
        ["#our-values", "قيمنا", "Our Values"],
        ["#our-values + ul li:nth-child(1) span", "الوضوح في الفهم والتخطيط والتنفيذ.", "Clarity in understanding, planning, and execution."],
        ["#our-values + ul li:nth-child(2) span", "تصميم حلول قابلة للتوسع لا حلول مؤقتة.", "Designing scalable solutions, not temporary fixes."],
        ["#our-values + ul li:nth-child(3) span", "ربط القرار الرقمي بأهداف العمل الحقيقية.", "Connecting digital decisions to real business goals."],
        ["#our-values + ul li:nth-child(4) span", "الالتزام بالجودة دون إبطاء غير مبرر.", "Commitment to quality without unnecessary delay."],
        ["#our-values + ul li:nth-child(5) span", "شراكة مستمرة مبنية على الثقة والنتائج.", "An ongoing partnership built on trust and results."],
        ["#our-values + ul li:nth-child(6) span", "المرونة في التعامل مع اختلاف احتياجات كل مشروع.", "Flexibility in dealing with the unique needs of each project."],
        ["#why-choose-us", "لماذا تختار Maderaa", "Why Choose Maderaa"],
        ["#why-choose-us + p", "لأننا لا نتعامل مع المشروع كصفحة أو نظام منفصل، بل كجزء من رحلة أوسع تشمل الهوية، المحتوى، التجربة، والتشغيل. هذا ما يمنح العمل اتساقًا ونتائج أكثر استدامة.", "Because we do not treat the project as an isolated page or system, but as part of a wider journey that includes identity, content, experience, and operations. That creates stronger consistency and more sustainable results."],
        ["#why-choose-us + p + p", "نحرص على تقديم مسار واضح منذ البداية، بحيث تعرف ما الذي سينفذ، ولماذا، وما الأثر المتوقع منه.", "We make sure the path is clear from the beginning, so you know what will be delivered, why it matters, and what impact to expect."],
        [".row.gy-4.mt-4 > div:nth-child(1) .info-box h4", "جودة احترافية", "Professional Quality"],
        [".row.gy-4.mt-4 > div:nth-child(1) .info-box p", "نوازن بين الجمال البصري، سهولة الاستخدام، والجاهزية التقنية.", "We balance visual quality, usability, and technical readiness."],
        [".row.gy-4.mt-4 > div:nth-child(2) .info-box h4", "فهم للسوق", "Market Understanding"],
        [".row.gy-4.mt-4 > div:nth-child(2) .info-box p", "نقارب كل مشروع من زاوية العميل والسياق التجاري لا من زاوية القالب الجاهز.", "We approach each project from the client's reality and business context, not from a ready-made template."],
        [".row.gy-4.mt-4 > div:nth-child(3) .info-box h4", "اعتمادية وثبات", "Reliability & Stability"],
        [".row.gy-4.mt-4 > div:nth-child(3) .info-box p", "نبني حلولًا مدروسة تسهّل التطوير اللاحق وتحافظ على الاستقرار.", "We build thoughtful solutions that make future development easier while preserving stability."],
        [".row.gy-4.mt-4 > div:nth-child(4) .info-box h4", "تجربة تعاون مريحة", "Smooth Collaboration"],
        [".row.gy-4.mt-4 > div:nth-child(4) .info-box p", "تواصل واضح، خطوات مفهومة، والتزام بالمواعيد والنتائج.", "Clear communication, understandable steps, and commitment to timelines and outcomes."],
      ]);
    }

    if (currentPage === "service-details.html") {
      setPageTitle("Maderaa | خدماتنا", "Maderaa | Services");
      setTranslations([
        [".page-title h1", "خدماتنا", "Our Services"],
        [".page-title p", "حزمة خدمات مرنة تغطي التخطيط والتنفيذ والتشغيل والتحسين.", "A flexible service offering that covers planning, execution, operations, and improvement."],
        [".breadcrumbs .current", "خدماتنا", "Services"],
        [".services-list a:nth-child(1)", "التحول الرقمي", "Digital Transformation"],
        [".services-list a:nth-child(2)", "التجارة الإلكترونية", "E-Commerce"],
        [".services-list a:nth-child(3)", "الذكاء الاصطناعي والبيانات", "AI & Data"],
        [".col-lg-4[data-aos-delay='100'] h4", "خدمات مترابطة لا حلول معزولة", "Connected services, not isolated solutions."],
        [".col-lg-4[data-aos-delay='100'] p", "سواء كنت تحتاج موقعًا جديدًا، منصة تشغيل، تحليل بيانات، أو إعادة ترتيب الرحلة الرقمية كاملة، فنحن نصمم الخدمة بما يناسب مرحلتك الحالية.", "Whether you need a new website, an operational platform, data analytics, or a full restructuring of the digital journey, we shape the service around your current stage."],
        [".col-lg-8[data-aos-delay='200'] h3", "كيف نعمل على الخدمة", "How We Deliver The Service"],
        [".col-lg-8[data-aos-delay='200'] p:nth-of-type(1)", "نبدأ بتحليل الوضع الحالي، ثم نحدد الأولويات ونحوّلها إلى مسار تنفيذ واضح. بعد ذلك نبني النسخة الأنسب من الحل، ونراقب أداءها لنطورها على أساس النتائج.", "We start by analyzing the current situation, define priorities, and turn them into a clear delivery path. Then we build the most suitable version of the solution and monitor performance to improve it based on results."],
        [".col-lg-8[data-aos-delay='200'] li:nth-child(1) span", "تحليل الاحتياج وربطه بهدف عملي واضح.", "Analyzing the need and connecting it to a clear practical goal."],
        [".col-lg-8[data-aos-delay='200'] li:nth-child(2) span", "اقتراح نطاق مناسب للميزانية ومرحلة المشروع.", "Proposing a scope that matches the budget and project stage."],
        [".col-lg-8[data-aos-delay='200'] li:nth-child(3) span", "تنفيذ احترافي مع قابلية للتوسع والتحسين.", "Professional execution with room for scaling and improvement."],
        [".col-lg-8[data-aos-delay='200'] p:nth-of-type(2)", "قسمنا خدماتنا إلى ثلاثة مسارات رئيسية حتى تصل بسرعة إلى ما يناسبك، ويمكن بالطبع دمج أكثر من خدمة داخل مشروع واحد.", "We organized our services into three main tracks so you can quickly reach what fits your needs, and of course more than one service can be combined in a single project."],
        [".col-lg-8[data-aos-delay='200'] p:nth-of-type(3)", "استخدم القائمة الجانبية للاطلاع على كل خدمة بتفاصيلها، أو تواصل معنا مباشرة لنقترح عليك المسار الأنسب.", "Use the side list to review each service in detail, or contact us directly and we will suggest the most suitable path."],
      ]);
    }

    if (currentPage === "portfolio.html") {
      setPageTitle("Maderaa | أعمالنا", "Maderaa | Our Work");
      setTranslations([
        [".cta-btn", "ابدأ مشروعك", "Start Your Project"],
        [".page-title h1", "أعمالنا", "Our Work"],
        [".page-title p", "أمثلة محتوى قابلة للتعديل بحسب الصور والفيديوهات التي ستضيفها لاحقًا.", "Content examples that can be adjusted based on the images and videos you add later."],
        [".breadcrumbs .current", "أعمالنا", "Our Work"],
        [".portfolio.section .section-title h2", "نماذج مختارة", "Selected Samples"],
        [".portfolio.section .section-title p", "مشاريع تظهر كيف نربط بين التجربة، التشغيل، والنتائج", "Projects showing how we connect experience, operations, and results."],
        [".portfolio.section .row > div:nth-child(1) .portfolio-item h3", "تجربة متجر إلكتروني", "E-Commerce Store Experience"],
        [".portfolio.section .row > div:nth-child(1) .portfolio-item p", "إعادة بناء تجربة التصفح والشراء لرفع نسبة الإكمال وتقليل مغادرة السلة.", "Rebuilding browsing and checkout to improve completion rates and reduce cart abandonment."],
        [".portfolio.section .row > div:nth-child(2) .portfolio-item h3", "تحليلات تشغيلية", "Operational Analytics"],
        [".portfolio.section .row > div:nth-child(2) .portfolio-item p", "لوحات مؤشرات تساعد الإدارة على متابعة الأداء اليومي والمؤشرات الحرجة.", "Dashboards that help management monitor daily performance and critical metrics."],
        [".portfolio.section .row > div:nth-child(3) .portfolio-item h3", "أتمتة عمليات", "Process Automation"],
        [".portfolio.section .row > div:nth-child(3) .portfolio-item p", "مسارات عمل تقلل الإدخال اليدوي وتسرّع تنفيذ الطلبات والموافقات.", "Workflows that reduce manual input and speed up requests and approvals."],
        [".portfolio.section .row > div:nth-child(4) .portfolio-item h3", "بوابة مؤسسية", "Corporate Portal"],
        [".portfolio.section .row > div:nth-child(4) .portfolio-item p", "موقع تعريفي متكامل يعكس القوة المؤسسية ويوضح الخدمات والقطاعات.", "A complete corporate site that reflects organizational strength and clearly presents services and sectors."],
        [".portfolio.section .row > div:nth-child(5) .portfolio-item h3", "ربط أنظمة", "Systems Integration"],
        [".portfolio.section .row > div:nth-child(5) .portfolio-item p", "تكامل بين إدارة الطلبات، التقارير، وأدوات خدمة العملاء داخل مسار موحد.", "Integration between order management, reporting, and customer support tools within one unified flow."],
        [".portfolio.section .row > div:nth-child(6) .portfolio-item h3", "منصة داخلية", "Internal Platform"],
        [".portfolio.section .row > div:nth-child(6) .portfolio-item p", "واجهة تشغيلية تساعد الفرق على تنظيم المهام والملفات والإجراءات بكفاءة أعلى.", "An operational interface that helps teams organize tasks, files, and procedures more efficiently."],
      ]);
    }

    if (currentPage === "contact.html") {
      setPageTitle("Maderaa | تواصل معنا", "Maderaa | Contact Us");
      setTranslations([
        [".page-title h1", "تواصل معنا", "Contact Us"],
        [".page-title p", "شاركنا تفاصيل مشروعك وسنساعدك على تحديد نقطة البداية المناسبة.", "Share your project details and we will help you identify the right starting point."],
        [".breadcrumbs .current", "اتصل بنا", "Contact Us"],
        [".contact-form-wrapper h3", "أرسل تفاصيل مشروعك", "Send Your Project Details"],
        [".contact-form-wrapper .mb-4", "كلما كانت المعلومات أوضح، استطعنا اقتراح مسار أدق وأنسب لمرحلة عملك.", "The clearer the information, the more accurately we can propose the right path for your business stage."],
        [".info-item:nth-child(1) h3", "العنوان", "Address"],
        [".info-item:nth-child(2) h3", "الهاتف", "Phone"],
        [".info-item:nth-child(3) h3", "البريد", "Email"],
        [".col-lg-6[data-aos-delay='400'] .info-wrapper h3", "لماذا يبدأ العملاء معنا", "Why Clients Start With Us"],
        [".why-item:nth-child(1) h4", "استجابة واضحة", "Clear Response"],
        [".why-item:nth-child(1) p", "نراجع الطلب بسرعة ونرتب الخطوة التالية بوضوح دون تعقيد.", "We review the request quickly and define the next step clearly without unnecessary complexity."],
        [".why-item:nth-child(2) h4", "فهم دقيق", "Accurate Understanding"],
        [".why-item:nth-child(2) p", "نركز على أصل المشكلة قبل اقتراح الحلول أو المنصات أو الأدوات.", "We focus on the root challenge before proposing solutions, platforms, or tools."],
        [".why-item:nth-child(3) h4", "لغة عمل مشتركة", "Shared Business Language"],
        [".why-item:nth-child(3) p", "نشرح الأمور التقنية بطريقة مفهومة تساعد الإدارة والفرق التنفيذية معًا.", "We explain technical matters in a way that helps both management and execution teams."],
        [".why-item:nth-child(4) h4", "تنفيذ موثوق", "Reliable Execution"],
        [".why-item:nth-child(4) p", "نلتزم بخطة مدروسة ومخرجات قابلة للمراجعة والتطوير.", "We commit to a clear plan and deliverables that can be reviewed and improved."],
        [".why-item:nth-child(5) h4", "جدولة واقعية", "Realistic Planning"],
        [".why-item:nth-child(5) p", "نحدد المراحل والمدة حسب حجم العمل الحقيقي وليس الوعود العامة.", "We define phases and timing based on the real workload, not generic promises."],
        [".why-item:nth-child(6) h4", "مواكبة مستمرة", "Continuous Support"],
        [".why-item:nth-child(6) p", "نبقى معك بعد الإطلاق لتطوير التجربة وتحسين الأداء.", "We stay with you after launch to evolve the experience and improve performance."],
        [".working-hours h4", "ساعات العمل", "Working Hours"],
        [".hour-item h3", "الأحد - الخميس", "Sunday - Thursday"],
        [".hour-item p", "9:00 صباحًا - 6:00 مساءً", "9:00 AM - 6:00 PM"],
        [".map-wrapper h3", "موقعنا أو خريطة التغطية", "Our Location or Coverage Map"],
        [".cta-box h2", "جاهزون لمناقشة مشروعك القادم", "Ready to discuss your next project"],
        [".cta-box p", "إذا كانت لديك فكرة أولية أو مشروع قائم يحتاج تطويرًا، سنساعدك على ترتيب الأولويات والانطلاق بثقة.", "If you have an early idea or an existing project that needs development, we will help you organize priorities and move forward with confidence."],
        [".call-link", "اتصل الآن", "Call Now"],
        [".whatsapp-link", "واتساب", "WhatsApp"],
        [".mail-link", "أرسل بريدًا", "Send Email"],
        [".contact-form-wrapper button[type='submit']", "إرسال الرسالة", "Send Message"],
      ]);

      const placeholders = [
        [".contact-form-wrapper input[type='text']", ["الاسم الكامل", "اسم الشركة أو الجهة"], ["Full Name", "Company or Organization Name"]],
        [".contact-form-wrapper input[type='email']", ["البريد الإلكتروني"], ["Email Address"]],
        [".contact-form-wrapper input[type='tel']", ["رقم الجوال"], ["Mobile Number"]],
        [".contact-form-wrapper textarea", ["اكتب نبذة مختصرة عن الفكرة أو التحدي أو النتائج التي تريد الوصول إليها"], ["Write a short brief about your idea, challenge, or the results you want to achieve."]],
      ];

      placeholders.forEach(([selector, arList, enList]) => {
        document.querySelectorAll(selector).forEach((field, index) => {
          if (!field.dataset.arPlaceholder && arList[index]) {
            field.dataset.arPlaceholder = arList[index];
            field.dataset.enPlaceholder = enList[index];
          }
        });
      });

      document.querySelectorAll(".contact-form-wrapper select option").forEach((option, index) => {
        const values = [
          ["اختر نوع الخدمة", "Select Service Type"],
          ["التحول الرقمي", "Digital Transformation"],
          ["التجارة الإلكترونية", "E-Commerce"],
          ["الذكاء الاصطناعي والبيانات", "AI & Data"],
        ];
        if (values[index]) {
          option.dataset.ar = values[index][0];
          option.dataset.en = values[index][1];
        }
      });
    }

    if (currentPage === "service-digital-transformation.html" || currentPage === "service-ecommerce.html" || currentPage === "service-ai-data.html") {
      setTranslations([
        [".services-list a:nth-child(1)", "التحول الرقمي", "Digital Transformation"],
        [".services-list a:nth-child(2)", "التجارة الإلكترونية", "E-Commerce"],
        [".services-list a:nth-child(3)", "الذكاء الاصطناعي والبيانات", "AI & Data"],
      ]);
    }
  };

  const updateContactLinks = (lang = "ar") => {
    document.querySelectorAll("a[href^='tel:']").forEach((link) => {
      link.href = `tel:${siteConfig.phone}`;
      if (!link.textContent.trim() || /\+90|\+966|\+971/.test(link.textContent)) {
        link.textContent = siteConfig.phoneDisplay;
      }
    });

    document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
      link.href = `mailto:${siteConfig.email}`;
      if (!link.textContent.trim() || link.textContent.includes("@")) {
        link.textContent = siteConfig.email;
      }
    });

    document.querySelectorAll(".contact-phone, .footer-phone").forEach((node) => {
      node.textContent = siteConfig.phoneDisplay;
    });

    document.querySelectorAll(".contact-email, .footer-email").forEach((node) => {
      node.textContent = siteConfig.email;
    });

    document.querySelectorAll(".cta-btn").forEach((node) => {
      node.textContent = lang === "en" ? siteConfig.headerCtaEn : siteConfig.headerCtaAr;
    });

    document.querySelectorAll(".info-item").forEach((item) => {
      if (!item.querySelector(".bi-geo-alt")) return;
      const paragraphs = item.querySelectorAll("p");
      if (paragraphs[0]) paragraphs[0].textContent = lang === "en" ? siteConfig.addressEn : siteConfig.addressAr;
      if (paragraphs[1]) paragraphs[1].textContent = siteConfig.addressEn;
    });

    document.querySelectorAll(".btn-whatsapp, .whatsapp-link").forEach((link) => {
      link.href = `https://wa.me/${siteConfig.whatsapp}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    document.querySelectorAll(".btn-primary.call-link").forEach((link) => {
      link.href = `tel:${siteConfig.phone}`;
    });

    document.querySelectorAll(".btn-secondary.mail-link").forEach((link) => {
      link.href = `mailto:${siteConfig.email}`;
    });
  };

  const ensureWhatsappButton = () => {
    if (document.querySelector(".floating-whatsapp")) return;
    const link = document.createElement("a");
    link.className = "floating-whatsapp";
    link.href = `https://wa.me/${siteConfig.whatsapp}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "WhatsApp");
    link.innerHTML = '<i class="bi bi-whatsapp"></i>';
    document.body.appendChild(link);
  };

  const setupForms = () => {
    document.querySelectorAll(".php-email-form").forEach((form, index) => {
      form.action = `https://formsubmit.co/${siteConfig.email}`;
      form.method = "POST";

      const hiddenFields = [
        ["_captcha", "false"],
        ["_template", "table"],
        ["_subject", index === 0 ? "New Website Inquiry - Maderaa" : "New Website Form Submission - Maderaa"],
      ];

      hiddenFields.forEach(([name, value]) => {
        if (form.querySelector(`input[name='${name}']`)) return;
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      form.querySelectorAll("input, textarea, select").forEach((field, fieldIndex) => {
        if (!field.name) {
          field.name = field.placeholder || field.options?.[field.selectedIndex]?.text || `field_${fieldIndex + 1}`;
        }
      });
    });
  };

  const applyLanguage = (lang) => {
    document.querySelectorAll("[data-ar][data-en]").forEach((node) => {
      node.textContent = lang === "en" ? node.dataset.en : node.dataset.ar;
    });

    document.querySelectorAll("[data-ar-placeholder][data-en-placeholder]").forEach((field) => {
      field.placeholder = lang === "en" ? field.dataset.enPlaceholder : field.dataset.arPlaceholder;
    });

    document.querySelectorAll("option[data-ar][data-en]").forEach((option) => {
      option.textContent = lang === "en" ? option.dataset.en : option.dataset.ar;
    });

    document.querySelectorAll("input[type='submit'][data-ar][data-en]").forEach((input) => {
      input.value = lang === "en" ? input.dataset.en : input.dataset.ar;
    });

    if (document.documentElement.dataset.titleAr && document.documentElement.dataset.titleEn) {
      document.title = lang === "en" ? document.documentElement.dataset.titleEn : document.documentElement.dataset.titleAr;
    }
    document.documentElement.lang = lang === "en" ? "en" : "ar";
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

    if (langBtn) {
      langBtn.textContent = lang === "en" ? "AR" : "EN";
    }

    updateContactLinks(lang);
  };

  const ensureLangButton = () => {
    if (langBtn) return;
    const headerContainer = document.querySelector(".header .container-fluid");
    if (!headerContainer) return;

    const button = document.createElement("button");
    button.className = "lang-btn";
    button.type = "button";
    button.setAttribute("aria-label", "Switch language");
    button.textContent = (localStorage.getItem("site_lang") || "ar") === "en" ? "AR" : "EN";

    const ctaButton = headerContainer.querySelector(".cta-btn");
    if (ctaButton) {
      headerContainer.insertBefore(button, ctaButton);
    } else {
      headerContainer.appendChild(button);
    }

    langBtn = button;
  };

  const setupTranslation = () => {
    seedStaticTranslations();
    ensureLangButton();
    const savedLang = localStorage.getItem("site_lang") || "ar";
    applyLanguage(savedLang);

    if (!langBtn) return;
    langBtn.addEventListener("click", () => {
      const nextLang = (localStorage.getItem("site_lang") || "ar") === "en" ? "ar" : "en";
      localStorage.setItem("site_lang", nextLang);
      applyLanguage(nextLang);
    });
  };

  const toggleScrolled = () => {
    if (!header) return;
    body.classList.toggle("scrolled", window.scrollY > 100);
  };

  const toggleScrollTop = () => {
    if (!scrollTop) return;
    scrollTop.classList.toggle("active", window.scrollY > 100);
  };

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
      body.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
    });
  }

  document.querySelectorAll(".navmenu .dropdown > a").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (window.innerWidth > 1199) return;
      event.preventDefault();
      const next = item.nextElementSibling;
      if (next) next.classList.toggle("dropdown-active");
    });
  });

  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!body.classList.contains("mobile-nav-active")) return;
      body.classList.remove("mobile-nav-active");
      if (mobileNavToggle) {
        mobileNavToggle.classList.add("bi-list");
        mobileNavToggle.classList.remove("bi-x");
      }
    });
  });

  if (scrollTop) {
    scrollTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", () => {
    if (preloader) preloader.remove();
  });

  window.addEventListener("scroll", () => {
    toggleScrolled();
    toggleScrollTop();
  });

  toggleScrolled();
  toggleScrollTop();
  updateContactLinks();
  ensureWhatsappButton();
  setupForms();
  setupTranslation();
});

