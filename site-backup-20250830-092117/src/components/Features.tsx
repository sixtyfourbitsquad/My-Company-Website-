import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Fade In */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              From Click to Conversion
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We handle the complete funnel automation and ad optimization process to maximize your results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup with Slide In from Left */}
          <div className="relative scroll-slide-left scroll-delay-200">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-4 border border-slate-100">
                  <div className="text-xs text-purple-600 mb-2 bg-purple-100 inline-block px-2 py-1 rounded">
                    ADS • ADS • ADS
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Strategic Marketing</h3>
                  
                  {/* Mock Chart */}
                  <div className="h-32 bg-gradient-to-t from-blue-100 to-transparent rounded-lg mb-4 flex items-end justify-center">
                    <div className="w-full h-20 bg-blue-200 rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm font-bold">46505</span>
                      <span className="text-xs text-slate-500">Net Orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm font-bold">$438,892</span>
                      <span className="text-xs text-slate-500">Revenue</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <div className="bg-slate-100 px-3 py-1 rounded-full text-xs">Facebook Ads</div>
                    <div className="bg-slate-100 px-3 py-1 rounded-full text-xs">Google Ads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content with Slide In from Right */}
          <div className="space-y-8 scroll-slide-right scroll-delay-400">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">
                Ready to give your brand the spotlight it deserves?
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dive into our Paid Ads extravaganza and let your message shine in the digital universe! 
                Our expert team combines data-driven strategies with creative excellence to deliver campaigns 
                that don't just reach your audience—they convert them.
              </p>
            </div>

            {/* Statistics with Staggered Scale In */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 scroll-scale-in scroll-delay-500">
                <div className="text-2xl font-bold text-green-600">3.2x</div>
                <div className="text-slate-600">Average ROAS</div>
              </div>
              <div className="space-y-2 scroll-scale-in scroll-delay-600">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-slate-600">Campaign Monitoring</div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:scale-105 transform transition-transform scroll-fade-in scroll-delay-900">
              Start Your Campaign
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;