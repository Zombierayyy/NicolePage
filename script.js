// 导航栏滚动效果
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// 监听滚动事件，改变导航栏样式
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端菜单切换
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 点击移动端菜单项后关闭菜单
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 作品数据
const projectsData = [
    {
        id: 1,
        title: "电商网站重设计",
        category: "web",
        thumbnail: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一个电商网站重设计项目，旨在提升用户购物体验和转化率。通过用户研究和竞品分析，我发现原网站存在导航不清晰、产品展示不够直观等问题。",
        challenge: "原网站存在导航混乱、加载速度慢、移动端体验差等问题，导致用户流失率高，转化率低。",
        solution: "重新设计了网站架构和视觉风格，优化了产品展示方式，实现了响应式设计，并添加了个性化推荐功能。",
        results: "网站重设计后，用户停留时间增加了35%，转化率提升了28%，移动端流量增长了42%。",
        tools: ["Figma", "Adobe XD", "HTML5", "CSS3", "JavaScript", "React"]
    },
    {
        id: 2,
        title: "健康追踪应用",
        category: "mobile",
        thumbnail: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1510166089176-b713df2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一款帮助用户记录健康数据、设定目标并提供个性化建议的移动应用。通过简洁直观的界面设计，让用户轻松管理自己的健康状况。",
        challenge: "市场上的健康应用往往功能复杂，数据展示混乱，导致用户难以坚持使用。",
        solution: "设计了简洁直观的界面，重点突出关键健康数据，添加了游戏化元素提高用户参与度，并提供个性化的健康建议。",
        results: "应用上线后，用户留存率达到了65%，日活跃用户增长了80%，用户反馈非常积极。",
        tools: ["Sketch", "Principle", "React Native", "Firebase"]
    },
    {
        id: 3,
        title: "金融数据仪表盘",
        category: "ui",
        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一个为金融分析师设计的数据可视化仪表盘，能够直观展示复杂的金融数据，帮助用户快速做出决策。",
        challenge: "金融数据复杂且量大，传统的表格展示方式难以让用户快速理解和分析数据。",
        solution: "采用了现代化的数据可视化设计，包括图表、热图和趋势线等，让复杂数据变得直观易懂，并支持自定义视图和数据筛选。",
        results: "用户反馈显示，数据分析效率提升了45%，决策时间缩短了30%，大大提高了工作效率。",
        tools: ["Figma", "D3.js", "Chart.js", "Vue.js", "Node.js"]
    },
    {
        id: 4,
        title: "旅行博客平台",
        category: "web",
        thumbnail: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一个为旅行爱好者打造的内容分享平台，支持图文、视频等多媒体内容，让用户能够分享自己的旅行经历和见闻。",
        challenge: "现有旅行平台内容展示单一，社区互动性不强，难以满足用户分享和发现旅行灵感的需求。",
        solution: "设计了丰富的内容展示形式，包括瀑布流、地图视图等，增强了社区互动功能，添加了旅行路线规划工具。",
        results: "平台上线3个月后，注册用户达到5万，内容发布量增长了200%，用户互动率提升了60%。",
        tools: ["Adobe Photoshop", "Figma", "HTML5", "CSS3", "JavaScript", "Next.js", "MongoDB"]
    },
    {
        id: 5,
        title: "任务管理工具",
        category: "mobile",
        thumbnail: "https://images.unsplash.com/photo-1586953208448-90a2f4615776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1586953208448-90a2f4615776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一款帮助用户高效组织任务、设置提醒并追踪进度的移动应用，采用了简洁的设计和直观的交互方式。",
        challenge: "市场上的任务管理应用功能过于复杂，学习成本高，导致用户难以坚持使用。",
        solution: "设计了简洁直观的界面，采用了拖放交互和手势操作，支持多种视图（列表、看板、日历），并添加了团队协作功能。",
        results: "应用上线后，用户完成任务的效率提升了35%，用户满意度达到4.8/5分，推荐率超过70%。",
        tools: ["Sketch", "InVision", "React Native", "Firebase"]
    },
    {
        id: 6,
        title: "音乐流媒体平台",
        category: "ui",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "这是一个提供个性化音乐推荐和无缝播放体验的流媒体平台界面设计，注重音乐发现和社交分享功能。",
        challenge: "现有音乐平台的推荐算法不够精准，用户难以发现新音乐，社交分享功能薄弱。",
        solution: "重新设计了音乐发现页面，优化了推荐算法界面展示，增强了社交分享功能，并提供了沉浸式的音乐播放体验。",
        results: "用户测试显示，新音乐发现率提升了50%，社交分享增加了75%，用户停留时间增长了40%。",
        tools: ["Figma", "Adobe Illustrator", "HTML5", "CSS3", "JavaScript", "React"]
    }
];

// 作品筛选功能
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的active类
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-gray-900', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
        });
        
        // 添加当前按钮的active类
        button.classList.add('active', 'bg-gray-900', 'text-white');
        button.classList.remove('bg-gray-100', 'text-gray-700');
        
        const filter = button.getAttribute('data-filter');
        
        // 筛选作品
        workItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// 作品详情模态框
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

// 打开模态框
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = parseInt(button.getAttribute('data-id'));
        const project = projectsData.find(p => p.id === projectId);
        
        if (project) {
            modalTitle.textContent = project.title;
            
            // 构建模态框内容
            let content = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="col-span-1 md:col-span-2">
                        <img src="${project.images[0]}" alt="${project.title}" class="w-full h-auto rounded-lg shadow-md">
                    </div>
            `;
            
            if (project.images.length > 1) {
                project.images.slice(1).forEach(image => {
                    content += `
                        <div>
                            <img src="${image}" alt="${project.title}" class="w-full h-auto rounded-lg shadow-md">
                        </div>
                    `;
                });
            }
            
            content += `
                </div>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-2">项目描述</h4>
                        <p class="text-gray-600">${project.description}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-2">挑战</h4>
                        <p class="text-gray-600">${project.challenge}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-2">解决方案</h4>
                        <p class="text-gray-600">${project.solution}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-2">成果</h4>
                        <p class="text-gray-600">${project.results}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-2">使用工具</h4>
                        <div class="flex flex-wrap gap-2">
            `;
            
            project.tools.forEach(tool => {
                content += `
                    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">${tool}</span>
                `;
            });
            
            content += `
                        </div>
                    </div>
                </div>
            `;
            
            modalContent.innerHTML = content;
            
            // 显示模态框
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
    });
});

// 关闭模态框
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复背景滚动
});

// 点击模态框外部关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// 社交媒体图标交互
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 隐藏所有其他提示框
        document.querySelectorAll('.social-tooltip').forEach(tooltip => {
            tooltip.classList.add('hidden');
        });
        
        // 显示当前图标的提示框
        const tooltip = icon.nextElementSibling;
        tooltip.classList.toggle('hidden');
        
        // 点击其他地方关闭提示框
        document.addEventListener('click', function closeTooltip(e) {
            if (!icon.contains(e.target) && !tooltip.contains(e.target)) {
                tooltip.classList.add('hidden');
                document.removeEventListener('click', closeTooltip);
            }
        });
    });
});

// 简历下载功能
const downloadResumeBtn = document.getElementById('download-resume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // 模拟简历下载
    alert('简历下载功能已触发！在实际应用中，这里会开始下载简历文件。');
    
    // 这里是模拟下载，实际应用中可以使用以下代码：
    // const resumeUrl = 'path/to/your/resume.pdf';
    // const a = document.createElement('a');
    // a.href = resumeUrl;
    // a.download = '郭睿_简历.pdf';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
});

// 联系表单提交
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // 简单验证
    if (!name || !email || !subject || !message) {
        alert('请填写所有必填字段');
        return;
    }
    
    // 模拟表单提交
    alert(`感谢您的留言，${name}！我会尽快回复您。`);
    
    // 重置表单
    contactForm.reset();
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.classList.add('loaded');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // 回退方案
        lazyImages.forEach(image => {
            image.classList.add('loaded');
        });
    }
});

// GSAP 动画
document.addEventListener('DOMContentLoaded', () => {
    // Hero 区域动画
    gsap.to('#hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2
    });
    
    gsap.to('#hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4
    });
    
    gsap.to('#hero-status', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6
    });
    
    gsap.to('#sticky-note', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8
    });
    
    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);
    
    // 各部分动画
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8
        });
    });
    
    gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
        gsap.from(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 80%'
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.2
        });
    });
    
    // 作品项动画
    gsap.utils.toArray('.work-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.1
        });
    });
    
    // 教育和经验项动画
    gsap.utils.toArray('.education-item, .experience-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            x: i % 2 === 0 ? -30 : 30,
            duration: 0.8
        });
    });
});