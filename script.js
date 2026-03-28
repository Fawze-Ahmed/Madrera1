document.addEventListener("DOMContentLoaded", () => {
  const siteConfig = {
    email: "dt.consultant7@gmail.com",
    phone: "+905352875577",
    phoneDisplay: "+90 535 287 55 77",
    whatsapp: "905352875577",
    addressAr: "\u062a\u0631\u0643\u064a\u0627 - \u0625\u0633\u0637\u0646\u0628\u0648\u0644 - \u0628\u0648\u0631\u0635\u0627",
    addressEn: "Turkey - Istanbul - Bursa",
    headerCta: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
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
  const header = document.querySelector("#header");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const scrollTop = document.querySelector("#scroll-top");
  const preloader = document.querySelector("#preloader");
  let langBtn = document.querySelector(".lang-btn");

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([ar, en]) => [en, ar]),
  );

  const updateContactLinks = () => {
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
      node.textContent = siteConfig.headerCta;
    });

    document.querySelectorAll(".info-item").forEach((item) => {
      if (!item.querySelector(".bi-geo-alt")) return;
      const paragraphs = item.querySelectorAll("p");
      if (paragraphs[0]) paragraphs[0].textContent = siteConfig.addressAr;
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

  const translateValue = (text, lang) => {
    const trimmed = text.trim();
    if (!trimmed) return text;
    const dict = lang === "en" ? translations : reverseTranslations;
    if (!dict[trimmed]) return text;
    return text.replace(trimmed, dict[trimmed]);
  };

  const applyLanguage = (lang) => {
    document.querySelectorAll("[data-ar][data-en]").forEach((node) => {
      node.textContent = lang === "en" ? node.dataset.en : node.dataset.ar;
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parentTag = node.parentElement?.tagName;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parentTag)) continue;
      textNodes.push(node);
    }

    textNodes.forEach((node) => {
      node.textContent = translateValue(node.textContent, lang);
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
      field.placeholder = translateValue(field.placeholder, lang);
    });

    document.querySelectorAll("option").forEach((option) => {
      option.textContent = translateValue(option.textContent, lang);
    });

    document.title = translateValue(document.title, lang);
    document.documentElement.lang = lang === "en" ? "en" : "ar";
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

    if (langBtn) {
      langBtn.textContent = lang === "en" ? "AR" : "EN";
    }
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

