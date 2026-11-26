/* Same header behavior as the homepage React header, for pages that do not load the SPA. */
(function () {
  var header = document.querySelector('header');
  if (!header || header.getAttribute('data-dw-live') === '1') return;
  header.setAttribute('data-dw-live', '1');

  var bar = header.firstElementChild;
  var nav = header.querySelector('nav');
  if (!bar || !nav) return;

  var groups = [
    { label: 'Generative AI', items: [['Generative AI', '/services/generative-ai-development'], ['RAG Development Services', '/contact'], ['Generative AI Integration', '/services/generative-ai-development'], ['AI Chatbot Development', '/services/ai-chatbot-development'], ['Generative AI Consulting', '/contact'], ['LLM Application Development', '/services/generative-ai-development'], ['AI Agent Development', '/services/ai-agent-development'], ['AI Copilot Development', '/contact']] },
    { label: 'Artificial Intelligence & ML', items: [['Artificial Intelligence & ML', '/services/artificial-intelligence'], ['MLOps Consulting', '/services/mlops-setup'], ['AI Automation Services', '/solutions/ai-automation'], ['Machine Learning Consulting', '/services/machine-learning'], ['Healthcare AI Consulting', '/industries/ai-for-healthcare'], ['Predictive Analytics Services', '/solutions/predictive-analytics'], ['Computer Vision Development', '/solutions/computer-vision-image-recognition'], ['Machine Learning Development', '/services/machine-learning-development']] },
    { label: 'Data Engineering', items: [['Data Engineering', '/services/data-engineering'], ['Data Management Services', '/services/data-and-cloud'], ['Data Integration Consulting', '/services/automation-and-integration'], ['Cloud Migration Services', '/services/cloud-architecture-and-deployment'], ['BI Consulting', '/contact'], ['Data Pipeline & ETL Development', '/services/data-engineering'], ['Data Warehouse Engineering', '/services/data-and-cloud'], ['Data Migration Services', '/contact'], ['Data Analytics Consulting', '/services/data-and-cloud']] },
    { label: 'Software Development', items: [['Software Development', '/services/mobile-app-development'], ['Custom Software Development Services', '/contact'], ['DevOps Consulting Services', '/services/cloud-and-devops'], ['Software Modernization Services', '/contact'], ['Cloud Application Development', '/services/cloud-architecture-and-deployment'], ['SaaS Development', '/contact'], ['Healthcare Software Development', '/industries/ai-for-healthcare'], ['QA Automation Services', '/contact'], ['Mobile App Development', '/services/mobile-app-development'], ['Taxi App Development', '/contact'], ['Fitness App Development', '/contact'], ['API Development & Integration', '/services/automation-and-integration']] },
    { label: 'Hire Developers', items: [['Hire Developers', '/hire/hire-ai-engineers'], ['Hire Dedicated Developers', '/hire/dedicated-ai-pods'], ['Hire Angular Developers', '/contact'], ['Hire Laravel Developers', '/contact'], ['Hire Golang Developers', '/contact'], ['Hire Vue.js Developers', '/contact'], ['Hire Cloud Developers', '/contact'], ['IT Staff Augmentation', '/hire/hire-ai-engineers'], ['Hire Generative AI Engineers', '/hire/hire-ai-engineers'], ['Hire Machine Learning Engineers', '/hire/hire-ml-engineers'], ['Hire Python Developers', '/contact'], ['Hire Node.js Developers', '/contact'], ['Hire Data Engineers', '/hire/hire-data-scientists'], ['Hire DevOps Engineers', '/contact'], ['Hire Data Scientists', '/hire/hire-data-scientists'], ['Hire React Developers', '/contact']] },
  ];

  function link(href, label, className) {
    var a = document.createElement('a');
    a.href = href;
    a.className = className;
    a.textContent = label;
    return a;
  }

  var servicesWrap = nav.querySelector(':scope > div');
  var servicesBtn = servicesWrap && servicesWrap.querySelector('button');
  var activeGroup = 0;
  var servicePanel = document.createElement('div');
  servicePanel.hidden = true;
  servicePanel.style.cssText = 'position:fixed;top:5.25rem;left:max(0.75rem, calc(50vw - 36rem));width:min(72rem, calc(100vw - 1.5rem));z-index:80';
  var serviceBox = document.createElement('div');
  serviceBox.style.cssText = 'display:grid;grid-template-columns:16.5rem minmax(0,1fr);min-height:22rem;overflow:hidden;border-radius:1.5rem;border:1px solid rgba(255,255,255,0.14);background:rgba(9,7,11,0.98);box-shadow:inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.65);backdrop-filter:blur(24px)';
  var side = document.createElement('div');
  side.className = 'flex flex-col gap-1 border-r border-white/10 bg-white/[0.03] px-3 pb-3 pt-6';
  var main = document.createElement('div');
  main.className = 'px-5 pb-5 pt-6';
  groups.forEach(function (group, index) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold text-dusk/75';
    button.innerHTML = '<span></span><svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7.5 5 12.5 10 7.5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    button.querySelector('span').textContent = group.label;
    button.addEventListener('mouseenter', function () { showGroup(index); });
    button.addEventListener('focus', function () { showGroup(index); });
    side.appendChild(button);
    var pane = document.createElement('div');
    pane.hidden = index !== 0;
    var title = document.createElement('p');
    title.className = 'mb-3 text-lg font-bold text-dusk';
    title.textContent = group.label;
    var grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:0.15rem 0.75rem';
    group.items.forEach(function (item, itemIndex) {
      grid.appendChild(link(item[1], item[0], itemIndex === 0
        ? 'block rounded-lg px-3 py-2.5 text-sm font-semibold text-cyan hover:bg-electric/10'
        : 'block rounded-lg px-3 py-2.5 text-sm text-dusk/75 hover:bg-coral/[0.07] hover:text-dusk'));
    });
    pane.appendChild(title);
    pane.appendChild(grid);
    main.appendChild(pane);
  });
  serviceBox.appendChild(side);
  serviceBox.appendChild(main);
  servicePanel.appendChild(serviceBox);
  servicesWrap.appendChild(servicePanel);

  function showGroup(index) {
    activeGroup = index;
    var buttons = side.querySelectorAll('button');
    var panes = main.children;
    buttons.forEach(function (button, i) {
      var on = i === index;
      button.className = 'flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold ' + (on ? 'bg-coral/10 text-dusk' : 'text-dusk/75 hover:bg-coral/10 hover:text-dusk');
      var icon = button.querySelector('svg');
      icon.className = on ? 'text-cyan' : 'opacity-40';
      panes[i].hidden = !on;
    });
  }
  showGroup(0);

  var menus = [
    { label: 'Solutions', cols: 2, items: [['AI Automation', '/solutions/ai-automation'], ['Predictive Analytics', '/solutions/predictive-analytics'], ['Conversational AI', '/solutions/conversational-ai'], ['Generative AI', '/services/generative-ai-development'], ['AI in Cybersecurity', '/solutions/ai-for-cybersecurity'], ['Image Intelligence', '/solutions/computer-vision-image-recognition']] },
    { label: 'Industries', cols: 2, items: [['AI for Healthcare', '/industries/ai-for-healthcare'], ['AI for Fintech', '/industries/ai-for-fintech'], ['AI for Retail & E-commerce', '/industries/ai-for-retail-and-ecommerce'], ['AI for Manufacturing', '/industries/ai-for-manufacturing'], ['AI for Logistics & Supply Chain', '/industries/ai-for-logistics-and-supply-chain'], ['AI for Real Estate', '/industries/ai-for-real-estate'], ['AI for Education', '/industries/ai-for-education']] },
    { label: 'Hire Developers', cols: 2, items: [['Hire AI Engineers', '/hire/hire-ai-engineers'], ['Hire ML Engineers', '/hire/hire-ml-engineers'], ['Hire Data Scientists', '/hire/hire-data-scientists'], ['Hire NLP Engineers', '/hire/hire-nlp-engineers'], ['Hire Computer Vision Engineers', '/hire/hire-computer-vision-developers'], ['Dedicated AI Pods', '/hire/dedicated-ai-pods']] },
    { label: 'Company', cols: 1, items: [['About Us', '/about'], ['Meet the Team', '/team'], ['Blog', '/blog'], ['AI Readiness Score', '/ai-readiness'], ['Contact Us', '/contact']] },
  ];

  var drops = [];
  menus.forEach(function (menu, index) {
    var slot = nav.querySelectorAll(':scope > div')[index + 1];
    if (!slot) return;
    var wrap = document.createElement('div');
    wrap.hidden = true;
    wrap.className = 'absolute top-full z-50 w-max max-w-[min(52rem,calc(100vw-2rem))] pt-3 ' + (index <= 0 ? 'left-0' : index >= 2 ? 'right-0' : 'left-1/2 -translate-x-1/2');
    var panel = document.createElement('div');
    panel.className = 'relative overflow-hidden rounded-3xl border border-white/[0.14] p-5 backdrop-blur-2xl';
    panel.style.background = 'rgba(9,7,11,0.98)';
    panel.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.65)';
    var grid = document.createElement('div');
    grid.className = 'relative grid gap-x-8 gap-y-0.5';
    grid.style.gridTemplateColumns = 'repeat(' + menu.cols + ', minmax(170px, 1fr))';
    menu.items.forEach(function (item) {
      grid.appendChild(link(item[1], item[0], 'rounded-lg px-3 py-2 text-sm text-dusk/75 hover:bg-coral/[0.07] hover:text-dusk'));
    });
    panel.appendChild(grid);
    wrap.appendChild(panel);
    slot.appendChild(wrap);
    drops.push(wrap);
  });

  var open = null;
  function setOpen(name) {
    open = name;
    servicePanel.hidden = name !== 'Services';
    drops.forEach(function (drop, index) { drop.hidden = menus[index].label !== name; });
    nav.querySelectorAll(':scope > div > button').forEach(function (button) {
      var on = button.textContent.trim() === name;
      button.setAttribute('aria-expanded', on ? 'true' : 'false');
      button.classList.toggle('bg-coral/10', on);
      button.classList.toggle('text-dusk', on);
      button.classList.toggle('text-dusk/70', !on);
      var icon = button.querySelector('svg');
      if (icon) icon.classList.toggle('rotate-180', on);
    });
  }

  var closeTimer = 0;
  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () { setOpen(null); }, 220);
  }
  function cancelClose() {
    clearTimeout(closeTimer);
  }
  nav.querySelectorAll(':scope > div').forEach(function (slot) {
    var button = slot.querySelector(':scope > button');
    if (!button) return;
    var name = button.textContent.trim();
    slot.addEventListener('mouseenter', function () { cancelClose(); setOpen(name); });
    button.addEventListener('focus', function () { cancelClose(); setOpen(name); });
    button.addEventListener('click', function () { cancelClose(); setOpen(open === name ? null : name); });
  });
  servicePanel.addEventListener('mouseenter', cancelClose);
  drops.forEach(function (drop) { drop.addEventListener('mouseenter', cancelClose); });
  var caseLink = nav.querySelector(':scope > a');
  if (caseLink) caseLink.addEventListener('mouseenter', function () { cancelClose(); setOpen(null); });
  function placeServices() {
    servicePanel.style.top = Math.max(0, bar.getBoundingClientRect().bottom - 12) + 'px';
    servicePanel.style.paddingTop = '12px';
  }
  var openServices = setOpen;
  setOpen = function (name) {
    if (name) cancelClose();
    if (name === 'Services') placeServices();
    openServices(name);
  };
  bar.addEventListener('mouseleave', scheduleClose);
  servicePanel.addEventListener('mouseleave', scheduleClose);
  drops.forEach(function (drop) { drop.addEventListener('mouseleave', scheduleClose); });

  function syncBar() {
    var on = (window.scrollY || 0) > 24;
    bar.classList.toggle('border-dusk/10', on);
    bar.classList.toggle('bg-panel/85', on);
    bar.classList.toggle('shadow-[0_8px_32px_rgba(60,0,0,0.1)]', on);
    bar.classList.toggle('backdrop-blur-2xl', on);
    bar.classList.toggle('border-transparent', !on);
    bar.classList.toggle('bg-transparent', !on);
    bar.style.margin = on ? '0' : '';
    bar.style.maxWidth = on ? '100%' : '';
    bar.style.width = on ? '100%' : '';
    bar.style.borderRadius = on ? '0' : '';
  }
  syncBar();
  window.addEventListener('scroll', syncBar, { passive: true });

  var menuBtn = header.querySelector('button[aria-label="Menu"]');
  var drawer = document.createElement('div');
  drawer.hidden = true;
  drawer.className = 'fixed inset-0 top-[68px] z-40 overflow-y-auto bg-void/95 px-6 pb-24 pt-6 backdrop-blur-2xl lg:hidden';
  var mobileMenus = [
    { label: 'Services', items: [['Artificial Intelligence Development', '/services/artificial-intelligence'], ['Mobile App Development', '/services/mobile-app-development'], ['Machine Learning', '/services/machine-learning'], ['Automation and Integration', '/services/automation-and-integration'], ['Data and Cloud', '/services/data-and-cloud'], ['Security and Compliance', '/services/security-and-compliance'], ['AI Training and Support', '/services/ai-training-and-support'], ['AI Agent Development', '/services/ai-agent-development'], ['Generative AI Development', '/services/generative-ai-development'], ['Predictive Modeling', '/services/predictive-modeling'], ['AI Chatbot Development', '/services/ai-chatbot-development'], ['Natural Language Processing', '/services/natural-language-processing'], ['Intelligent Automation', '/services/intelligent-automation'], ['Autonomous AI Agents', '/services/autonomous-ai-agents'], ['MLOps Setup', '/services/mlops-setup'], ['Real-Time Data Streaming', '/services/real-time-data-streaming'], ['Cloud Architecture', '/services/cloud-architecture-and-deployment'], ['Privacy-Preserving AI', '/services/privacy-preserving-ai'], ['AI Red Teaming', '/services/ai-red-teaming'], ['AI Application Security', '/services/ai-security'], ['Cloud and DevOps', '/services/cloud-and-devops'], ['Data Engineering', '/services/data-engineering'], ['Intelligent Document Processing', '/services/intelligent-document-processing'], ['Machine Learning Development', '/services/machine-learning-development']] },
  ].concat(menus);
  var opened = null;
  mobileMenus.forEach(function (menu) {
    var block = document.createElement('div');
    block.className = 'border-b border-dusk/10';
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'flex w-full items-center justify-between py-4 font-display text-lg font-bold text-dusk';
    button.innerHTML = '<span></span><span class="text-cyan">+</span>';
    button.querySelector('span').textContent = menu.label;
    var list = document.createElement('div');
    list.className = 'space-y-1 pb-4';
    list.hidden = true;
    menu.items.forEach(function (item) {
      list.appendChild(link(item[1], item[0], 'block rounded-lg px-3 py-2 text-sm text-dusk/70'));
    });
    button.addEventListener('click', function () {
      var on = opened !== menu.label;
      opened = on ? menu.label : null;
      drawer.querySelectorAll('button + div').forEach(function (node) { node.hidden = true; });
      list.hidden = !on;
      button.lastElementChild.style.transform = on ? 'rotate(45deg)' : '';
    });
    block.appendChild(button);
    block.appendChild(list);
    drawer.appendChild(block);
  });
  drawer.appendChild(link('/case-studies', 'Case Studies', 'flex items-center justify-between border-b border-dusk/10 py-4 font-display text-lg font-bold bg-gradient-to-r from-coral to-violet bg-clip-text text-transparent'));
  var call = link('tel:+17373945488', '+1 737 394 5488', 'ember-trace mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#4c9eff]/20 bg-[#0c1424]/70 py-3.5 text-sm font-semibold text-white');
  drawer.appendChild(call);
  drawer.appendChild(link('/contact', 'Book a Call', 'btn-primary mt-4 w-full'));
  header.insertAdjacentElement('afterend', drawer);
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var on = drawer.hidden;
      drawer.hidden = !on;
      menuBtn.setAttribute('aria-expanded', on ? 'true' : 'false');
      document.body.style.overflow = on ? 'hidden' : '';
    });
  }
})();
