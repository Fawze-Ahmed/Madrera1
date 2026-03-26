document.addEventListener("DOMContentLoaded", () => {
  const siteConfig = {
    email: "dt.consultant7@gmail.com",
    phone: "+971566628283",
    phoneDisplay: "+971 56 662 8283",
    whatsapp: "971566628283",
  };

  const translations = {
    "الرئيسية": "Home",
    "من نحن": "About Us",
    "خدماتنا": "Services",
    "أعمالنا": "Our Work",
    "تواصل معنا": "Contact Us",
    "الأقسام": "Sections",
    "التحول الرقمي": "Digital Transformation",
    "التجارة الإلكترونية": "E-Commerce",
    "الذكاء الاصطناعي والبيانات": "AI & Data",
    "المنصات والمواقع": "Platforms & Websites",
    "أتمتة الأعمال": "Business Automation",
    "الدعم والتكامل": "Support & Integration",
    "اطلب استشارة": "Request a Consultation",
    "ابدأ الآن": "Get Started",
    "اكتشف خدماتنا": "Explore Our Services",
    "شاهد أعمالنا": "View Our Work",
    "نقود تحولك الرقمي بخطة واضحة وتنفيذ قابل للقياس": "We lead your digital transformation with a clear plan and measurable execution.",
    "في Maderaa نبني حلولًا رقمية تبدأ من الفكرة والاستراتيجية وتصل إلى التنفيذ والتشغيل والتحسين المستمر.": "At Maderaa, we build digital solutions that start with strategy and continue through execution, launch, and continuous improvement.",
    "نحن شريك رقمي يجمع بين الرؤية التجارية والتنفيذ التقني": "We are a digital partner that combines business vision with technical execution.",
    "نساعد الشركات الناشئة والجهات المتنامية على بناء حضور رقمي احترافي، تطوير منصات فعالة، ورفع كفاءة التشغيل عبر حلول عملية قابلة للتوسع.": "We help startups and growing organizations build a professional digital presence, develop effective platforms, and improve operations through scalable solutions.",
    "من تحليل الاحتياج وحتى التسليم والتشغيل، نربط بين أهداف العمل، تجربة المستخدم، والأنظمة التقنية في مسار واحد واضح.": "From needs analysis to launch and operation, we connect business goals, user experience, and technical systems in one clear path.",
    "نؤمن أن التقنية لا تكون ناجحة إلا عندما تخدم القرار، تختصر الوقت، وتنعكس مباشرة على جودة النتائج.": "We believe technology succeeds only when it supports decisions, saves time, and directly improves outcomes.",
    "خطط تنفيذ واقعية مرتبطة بأهداف تجارية واضحة.": "Practical execution plans tied to clear business goals.",
    "حلول رقمية مرنة قابلة للنمو مع توسع أعمالك.": "Flexible digital solutions that grow with your business.",
    "فريق يجمع بين الاستشارة، التصميم، التطوير، والتحسين المستمر.": "A team combining consulting, design, development, and continuous improvement.",
    "استراتيجية أولًا": "Strategy First",
    "نبدأ من فهم السوق والهدف والعميل قبل اقتراح أي حل تقني.": "We start by understanding the market, the objective, and the customer before proposing any technical solution.",
    "تنفيذ متكامل": "Integrated Execution",
    "نوحد الهوية، المحتوى، تجربة المستخدم، والتطوير داخل رحلة عمل واحدة.": "We align identity, content, user experience, and development in one execution journey.",
    "نتائج قابلة للقياس": "Measurable Results",
    "نبني على مؤشرات أداء واضحة تساعدك على اتخاذ القرار بثقة.": "We build on clear performance indicators that help you make decisions with confidence.",
    "شراكة طويلة": "Long-Term Partnership",
    "لا نتوقف عند الإطلاق، بل نواصل الدعم والتحسين حسب احتياج العمل.": "We do not stop at launch; we continue support and improvement as your business evolves.",
    "حلول مصممة لتغطية رحلة التحول الرقمي من التخطيط إلى التشغيل": "Solutions designed to cover the digital transformation journey from planning to operation.",
    "بناء خارطة طريق رقمية توائم بين الأهداف التشغيلية والتوسع المستقبلي.": "Building a digital roadmap aligned with operational goals and future growth.",
    "استشارات وتجارب شراء مدروسة تساعد العلامات على رفع التحويلات والمبيعات.": "Thoughtful commerce strategies and buying experiences that improve conversions and sales.",
    "تحليل بيانات، لوحات متابعة، ونماذج تساعدك على قراءة الأداء وصنع القرار.": "Data analysis, dashboards, and models that help you read performance and make decisions.",
    "مواقع احترافية ومنصات تشغيلية مصممة لتجربة مستخدم واضحة وأداء مستقر.": "Professional websites and operational platforms designed for a clear user experience and stable performance.",
    "تحويل الإجراءات اليدوية إلى مسارات عمل أسرع وأكثر دقة وأقل تكلفة.": "Turning manual procedures into faster, more accurate, and lower-cost workflows.",
    "ربط الأنظمة، تحسين الاستقرار، ومتابعة فنية مستمرة بعد الإطلاق.": "Connecting systems, improving stability, and providing continuous technical follow-up after launch.",
    "أعمالنا": "Our Projects",
    "نماذج مشاريع قابلة للتخصيص حسب الصور والفيديوهات التي ستضيفها لاحقًا": "Project examples that can be customized with the images and videos you add later.",
    "آلية العمل": "How We Work",
    "مسار واضح يختصر الفوضى ويعطي كل مشروع نقطة انطلاق صحيحة": "A clear process that reduces confusion and gives every project the right starting point.",
    "اكتشاف الاحتياج": "Discovery",
    "صياغة الحل": "Solution Design",
    "التنفيذ والإطلاق": "Execution & Launch",
    "التحسين المستمر": "Continuous Improvement",
    "تواصل معنا": "Contact Us",
    "نناقش أهدافك ونقترح المسار الأنسب دون تعقيد تقني غير ضروري": "We discuss your goals and propose the right path without unnecessary technical complexity.",
    "العنوان": "Address",
    "الإمارات - أبوظبي": "United Arab Emirates - Abu Dhabi",
    "الهاتف": "Phone",
    "البريد الإلكتروني": "Email",
    "الاسم الكامل": "Full Name",
    "البريد الإلكتروني": "Email Address",
    "اسم الشركة": "Company Name",
    "حدثنا عن المشروع أو التحدي الذي تعمل عليه": "Tell us about the project or challenge you are working on",
    "إرسال الطلب": "Send Request",
    "حلول رقمية تنطلق من فهم العمل": "Digital solutions built on understanding the business.",
    "الاستراتيجية، التنفيذ، والتحسين في مسار واحد": "Strategy, execution, and improvement in one path.",
    "روابط مهمة": "Quick Links",
    "أقسامنا": "Our Sections",
    "رسالتنا": "Our Mission",
    "نبني تجارب رقمية متوازنة بين الجمال الوظيفي، الوضوح التشغيلي، والنتيجة التجارية.": "We build digital experiences that balance functional beauty, operational clarity, and business impact.",
    "بريدك الإلكتروني": "Your Email",
    "اشترك": "Subscribe",
    "جميع الحقوق محفوظة": "All rights reserved",
    "منصة تجارة إلكترونية": "E-Commerce Platform",
    "لوحة مؤشرات تنفيذية": "Executive Dashboard",
    "أتمتة خدمة العملاء": "Customer Service Automation",
    "بوابة تشغيل داخلية": "Internal Operations Portal",
    "موقع تعريفي متكامل": "Corporate Website",
    "ربط أنظمة متعددة": "Multi-System Integration",
    "قصتنا": "Our Story",
    "رؤيتنا": "Our Vision",
    "قيمنا": "Our Values",
    "لماذا Maderaa": "Why Maderaa",
    "خدماتنا": "Our Services",
    "أرسل تفاصيل مشروعك": "Send Your Project Details",
    "كلما كانت المعلومات أوضح، استطعنا اقتراح مسار أدق وأنسب لمرحلة عملك.": "The clearer the information, the more accurately we can propose the right path for your business stage.",
    "اسم الشركة أو الجهة": "Company or Organization Name",
    "رقم الجوال": "Mobile Number",
    "اختر نوع الخدمة": "Select Service Type",
    "اكتب نبذة مختصرة عن الفكرة أو التحدي أو النتائج التي تريد الوصول إليها": "Write a short brief about your idea, challenge, or the results you want to achieve.",
    "إرسال الرسالة": "Send Message",
    "لماذا يبدأ العملاء معنا": "Why Clients Start With Us",
    "استجابة واضحة": "Clear Response",
    "فهم دقيق": "Accurate Understanding",
    "لغة عمل مشتركة": "Shared Business Language",
    "تنفيذ موثوق": "Reliable Execution",
    "جدولة واقعية": "Realistic Planning",
    "مواكبة مستمرة": "Continuous Support",
    "ساعات العمل": "Working Hours",
    "الأحد - الخميس": "Sunday - Thursday",
    "9:00 صباحًا - 6:00 مساءً": "9:00 AM - 6:00 PM",
    "موقعنا أو خريطة التغطية": "Our Location or Coverage Map",
    "جاهزون لمناقشة مشروعك القادم": "Ready to discuss your next project",
    "اتصل الآن": "Call Now",
    "واتساب": "WhatsApp",
    "أرسل بريدًا": "Send Email",
    "متى تحتاج هذه الخدمة؟": "When do you need this service?",
    "ماذا نقدم": "What We Provide",
    "لمن تناسب؟": "Who Is It For?",
    "ما الذي نركز عليه": "What We Focus On",
    "القيمة الأساسية": "Core Value",
    "نطاق الخدمة": "Service Scope",
    "الهدف من الخدمة": "Purpose of the Service",
    "ما الذي يشمله العمل": "What the Work Includes",
    "متى تصبح ضرورية؟": "When Does It Become Necessary?",
    "كيف نطبقها": "How We Apply It",
    "بعد الإطلاق تبدأ المرحلة الأهم": "The most important stage begins after launch",
    "ما الذي نقدمه هنا": "What We Offer Here",
    "أمثلة محتوى قابلة للتعديل بحسب الصور والفيديوهات التي ستضيفها لاحقًا.": "Content examples that can be adjusted based on the images and videos you add later.",
    "نماذج مختارة": "Selected Samples",
    "مشاريع تُظهر كيف نربط بين التجربة، التشغيل، والنتائج": "Projects showing how we connect experience, operations, and results",
  };

  if (window.AOS) {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, mirror: false });
  }

  const body = document.body;
  const header = document.querySelector("#header");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const scrollTop = document.querySelector("#scroll-top");
  const preloader = document.querySelector("#preloader");
  const langBtn = document.querySelector(".lang-btn");

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([ar, en]) => [en, ar]),
  );

  const updateContactLinks = () => {
    document.querySelectorAll("a[href^='tel:']").forEach((link) => {
      link.href = `tel:${siteConfig.phone}`;
      if (!link.textContent.trim() || /\+966|\+971/.test(link.textContent)) {
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

  const setupTranslation = () => {
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
