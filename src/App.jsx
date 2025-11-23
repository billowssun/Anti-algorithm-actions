import React, { useState } from 'react';
import { Shield, Eye, Lock, Zap, Smartphone, ChevronRight, Menu, X, BookOpen, AlertTriangle, ArrowRight } from 'lucide-react';

// APP Path Data
const appsData = [
  {
    id: 1,
    name: "闲鱼",
    category: "shopping",
    icon: "🐟",
    color: "bg-yellow-400 text-black",
    path: ["我的", "右上角设置⚙️", "隐私设置", "推荐管理", "关闭 '个性化推荐'"]
  },
  {
    id: 2,
    name: "抖音",
    category: "social",
    icon: "🎵",
    color: "bg-black text-white border border-gray-700",
    path: ["我", "右上角三条杠 ☰", "设置", "个人信息与权限", "个性化推荐设置", "关闭全部开关"]
  },
  {
    id: 3,
    name: "淘宝",
    category: "shopping",
    icon: "🛒",
    color: "bg-orange-500 text-white",
    path: ["我的淘宝", "右上角设置⚙️", "隐私", "广告管理/推荐管理", "个性化推荐设置", "关闭开关"]
  },
  {
    id: 4,
    name: "微信 (公众号/服务号)",
    category: "social",
    icon: "💬",
    color: "bg-green-500 text-white",
    path: ["进入订阅号/服务号消息", "右上角个人图标 👤", "设置", "关闭 '个性化推荐' / '广告'"]
  },
  {
    id: 5,
    name: "小红书",
    category: "social",
    icon: "📕",
    color: "bg-red-500 text-white",
    path: ["我", "左上角/右上角设置⚙️", "隐私设置", "个性化选项", "关闭 '开启个性化推荐'"]
  },
  {
    id: 6,
    name: "京东",
    category: "shopping",
    icon: "🐶",
    color: "bg-red-600 text-white",
    path: ["我的", "右上角设置⚙️", "隐私设置", "广告管理/推荐管理", "个性化广告/商品推荐", "关闭"]
  },
  {
    id: 7,
    name: "拼多多",
    category: "shopping",
    icon: "🛍️",
    color: "bg-red-700 text-white",
    path: ["个人中心", "设置", "常见问题", "个性化推荐/广告", "（拼多多入口隐藏较深，建议搜索客服输入'关闭个性化'获取最新入口）"]
  },
  {
    id: 8,
    name: "知乎",
    category: "social",
    icon: "🧠",
    color: "bg-blue-500 text-white",
    path: ["我的", "右上角设置⚙️", "隐私中心", "权限设置/个性化", "关闭 '个性化推荐'"]
  },
  {
    id: 9,
    name: "Bilibili",
    category: "video",
    icon: "📺",
    color: "bg-pink-400 text-white",
    path: ["我的", "设置", "隐私权限设置", "个性化内容推荐管理", "关闭开关"]
  },
  {
    id: 10,
    name: "美团",
    category: "life",
    icon: "🦘",
    color: "bg-yellow-300 text-black",
    path: ["我的", "右上角设置⚙️", "隐私管理", "个性化内容推荐", "关闭"]
  }
];

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4">
    {children}
  </h2>
);

const AppCard = ({ app }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all duration-300 shadow-lg group">
      <div className={`p-4 flex items-center justify-between ${app.color} bg-opacity-90`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{app.icon}</span>
          <h3 className="font-bold text-lg">{app.name}</h3>
        </div>
        <Lock size={18} className="opacity-70 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="text-slate-400 text-sm mb-2 font-mono">关闭路径 / PATHWAY</div>
        <div className="flex flex-col gap-2">
          {app.path.map((step, index) => (
            <div key={index} className="flex items-start text-slate-200">
              <span className="mr-2 text-red-500 font-bold mt-1">
                {index === app.path.length - 1 ? <Shield size={16} /> : <ChevronRight size={16} />}
              </span>
              <span className={index === app.path.length - 1 ? "text-red-400 font-bold" : ""}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AntiAlgorithm() {
  const [filter, setFilter] = useState('all');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const filteredApps = filter === 'all' 
    ? appsData 
    : appsData.filter(app => app.category === filter || (filter === 'others' && !['social', 'shopping'].includes(app.category)));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Eye className="text-red-500" />
              <span className="text-xl font-bold text-white tracking-wider">ANTI-ALGORITHM <span className="text-red-500">.</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#manifesto" className="hover:text-red-500 transition-colors">觉醒宣言</a>
              <a href="#evidence" className="hover:text-red-500 transition-colors">茧房效应</a>
              <a href="#action" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-medium">
                立即关闭推荐
              </a>
            </div>

            <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#manifesto" className="block px-3 py-2 text-base font-medium hover:bg-slate-700 hover:text-red-500" onClick={()=>setIsNavOpen(false)}>觉醒宣言</a>
              <a href="#evidence" className="block px-3 py-2 text-base font-medium hover:bg-slate-700 hover:text-red-500" onClick={()=>setIsNavOpen(false)}>茧房效应</a>
              <a href="#action" className="block px-3 py-2 text-base font-medium text-red-400 font-bold" onClick={()=>setIsNavOpen(false)}>开始行动</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
           {/* Abstract Matrix Background */}
           <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            夺回你的注意力
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            别让算法<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">定义你的世界</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            在大数据时代，我们正逐渐沦为数据的奴隶。
            <br className="hidden md:block"/>
            打破信息茧房，拒绝投喂，重获自由意志。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#action" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-900/50 flex items-center justify-center gap-2">
              <Shield size={20} />
              关闭算法推荐
            </a>
            <a href="#manifesto" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
              <BookOpen size={20} />
              了解真相
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        {/* Section 1: Philosophy & Manifesto */}
        <section id="manifesto" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle>井底之蛙的现代寓言</SectionTitle>
            <p className="text-lg leading-loose text-slate-300">
              在古老的寓言中，青蛙因为物理环境的限制，只能看到井口大小的天空。而在21世纪的今天，我们手中的发光屏幕正在成为那口深井。
            </p>
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-2">什么是“信息茧房”？</h3>
              <p className="text-slate-400">
                哈佛大学法学教授 <strong>Cass Sunstein</strong> 在《信息乌托邦》中提出：
                公众只注意自己感兴趣的东西和自己愉悦的领域，久而久之，会将自身桎梏于像蚕茧一般的“茧房”中。
              </p>
            </div>
            <p className="text-lg leading-loose text-slate-300">
              各大APP利用极其复杂的<strong>推荐算法（Recommendation Algorithms）</strong>，每时每刻都在收集你的点击、停留时长、甚至手指滑动的速度。它们比你更了解你的弱点，只给你推送你“想看”的，而不是你“需要知道”的。
            </p>
          </div>
          <div className="relative">
             <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col justify-center items-center text-center shadow-2xl">
                <div className="w-full space-y-4">
                  <div className="bg-slate-700 p-4 rounded-lg opacity-30 scale-90">不同的观点 (屏蔽)</div>
                  <div className="bg-slate-700 p-4 rounded-lg opacity-50 scale-95">客观的事实 (折叠)</div>
                  <div className="bg-red-600 p-6 rounded-xl text-white font-bold text-xl shadow-lg ring-4 ring-red-500/20 scale-105 z-10">
                    迎合你偏见的内容
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg opacity-50 scale-95">深度思考 (过滤)</div>
                  <div className="bg-slate-700 p-4 rounded-lg opacity-30 scale-90">复杂的世界 (不可见)</div>
                </div>
                <p className="mt-6 text-sm text-slate-500 font-mono">MODEL: THE FILTER BUBBLE</p>
             </div>
          </div>
        </section>

        {/* Section 2: Data & Consequences */}
        <section id="evidence">
           <SectionTitle>算法带来的代价</SectionTitle>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-blue-500 hover:-translate-y-2 transition-transform">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500">
                  <Zap />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">认知极化</h3>
                <p className="text-slate-400">你只会听到回声。相同观点被不断强化，异见被屏蔽。这导致群体极化，让我们失去理解复杂社会的能力，变得偏激、固执。</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-green-500 hover:-translate-y-2 transition-transform">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-green-500">
                  <Smartphone />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">消费主义陷阱</h3>
                <p className="text-slate-400">购物APP并不想让你买“最好的”，只想让你买“最多的”。它们利用你的价格敏感度和审美偏好，创造虚假的需求。</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-purple-500 hover:-translate-y-2 transition-transform">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-500">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">扼杀创新</h3>
                <p className="text-slate-400">当所有人都沉浸在千篇一律的BGM和短视频模板中时，人类的创造力正在枯竭。我们正在成为算法数据的反刍者。</p>
              </div>
           </div>
        </section>

        {/* Section 3: Action Guide */}
        <section id="action" className="bg-slate-900 pt-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              夺回控制权
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              这是你需要采取的第一步。以下是中国主流APP关闭“个性化推荐”的操作路径。
              <br/>
              <span className="text-sm text-slate-500">*注：APP版本更新频繁，路径可能略有变动，核心关键词通常在“隐私”或“广告”中。</span>
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { id: 'all', label: '全部应用' },
              { id: 'social', label: '社交媒体' },
              { id: 'shopping', label: '购物消费' },
              { id: 'others', label: '其他' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === tab.id 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {/* Disclaimer at bottom of grid */}
          <div className="mt-12 p-6 bg-slate-800/30 rounded-lg border border-slate-700 text-center">
            <p className="text-slate-400 mb-4">
              关闭个性化推荐后，你看到的广告数量不会减少，但相关度会降低。
              <br/>
              <strong>这正是我们想要的——不再让算法窥探你的喜好。</strong>
            </p>
            <div className="inline-flex items-center gap-2 text-red-400 font-bold">
              <ArrowRight size={20} />
              下一步：尝试每周进行一次“数字断舍离”
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-slate-200 mb-4">Anti-Algorithm Initiative</p>
          <p className="text-slate-500 mb-8">
            这是一个非营利性倡议。我们不收集任何数据，不使用任何追踪器。<br />
            保持清醒，保持独立。
          </p>
          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} 反信息茧房计划. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}