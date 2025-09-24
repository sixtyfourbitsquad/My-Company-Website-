import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Target, BarChart3, Smartphone, Globe, Zap, Share2 } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "7 Reasons Your Google Ads Aren't Converting in 2025 (And How Indian Businesses Can Fix Them)",
      excerpt: "Discover why your Google Ads campaigns are failing and learn proven strategies to turn them into high-ROI growth machines. Expert insights from Adswadi's campaign audits.",
      content: `
        <p>Google Ads is one of the most powerful ways for Indian businesses to attract new customers. With billions of daily searches and a rapidly growing online audience, every business owner wants a share of this digital goldmine. But here's the harsh reality: many Indian startups, local businesses, and even established brands run Google Ads campaigns that simply don't convert.</p>
        
        <p>They get clicks, impressions, and spend thousands of rupees, but the leads or sales never arrive. Sounds familiar? Don't worry — you're not alone.</p>
        
        <p>At Adswadi, we've audited hundreds of campaigns for Indian businesses. Again and again, we find the same problems holding campaigns back. In this blog, we'll break down the 7 most common reasons your Google Ads aren't converting in 2025 — and exactly how you can fix them.</p>
        
        <h2>1. Targeting the Wrong Keywords</h2>
        <p><strong>The Problem:</strong> Many Indian businesses bid on broad or generic keywords like "real estate", "clothing", or "digital marketing." These keywords are expensive, highly competitive, and often bring in traffic with low buyer intent.</p>
        <p>For example, someone searching "clothing" may just be browsing, while someone searching "buy cotton shirts online Pune" is much closer to purchase.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Use long-tail keywords (e.g., "buy 2BHK flat in Gurgaon" or "best coaching ads India")</li>
          <li>Add negative keywords to filter irrelevant traffic (e.g., "free," "jobs," "training")</li>
          <li>Regularly check your search terms report and eliminate wasteful clicks</li>
        </ul>
        <p>👉 <strong>Pro Tip from Adswadi:</strong> We often see CPC drop by 30–40% when clients shift from broad to long-tail buyer-intent keywords.</p>
        
        <h2>2. Poor Ad Copy That Doesn't Resonate</h2>
        <p><strong>The Problem:</strong> If your ad copy sounds generic or robotic, users won't click. Ads like "Best Real Estate Deals in India. Call Now!" no longer cut through. In 2025, Indian audiences expect ads that feel relevant, local, and trustworthy.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Highlight unique benefits (e.g., "0% brokerage" or "guaranteed student leads")</li>
          <li>Use local references ("Property Deals in Bangalore – Starting at ₹25 Lakhs")</li>
          <li>Include numbers and offers (discount %, free consultations, limited-time deals)</li>
        </ul>
        <p>👉 <strong>Adswadi Tip:</strong> We A/B test at least 3–5 ad variations per campaign to identify the best performers.</p>
        
        <h2>3. No Negative Keyword Strategy</h2>
        <p><strong>The Problem:</strong> Without negative keywords, you end up paying for irrelevant clicks. For example, if you're a coaching institute, you don't want clicks from people searching "free coaching PDF."</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Build a negative keyword list (words like "free," "cheap," "jobs," "internship")</li>
          <li>Update it weekly based on search reports</li>
          <li>Use phrase match and exact match for tighter control</li>
        </ul>
        <p>👉 This alone can save 20–25% of wasted ad spend every month.</p>
        
        <h2>4. Weak Landing Pages</h2>
        <p><strong>The Problem:</strong> Your ad may be perfect, but if the landing page is weak, users won't convert. Common mistakes include:</p>
        <ul>
          <li>Slow loading times</li>
          <li>Cluttered design</li>
          <li>No clear CTA (Call-to-Action)</li>
          <li>Asking for too much information</li>
        </ul>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Keep landing pages fast (under 3 seconds load)</li>
          <li>One clear CTA (e.g., "Book a Free Consultation" or "Get a Quote")</li>
          <li>Add trust elements like testimonials, Google ratings, and client logos</li>
        </ul>
        <p>👉 <strong>Example:</strong> A restaurant ad should lead to a page with menu + location + quick booking option, not a generic homepage.</p>
        
        <h2>5. Low Quality Score</h2>
        <p><strong>The Problem:</strong> Google assigns a Quality Score (1–10) to your ads based on ad relevance, CTR (click-through rate), and landing page quality. Low scores mean you pay more per click — and still don't convert.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Match ad text closely to the keyword</li>
          <li>Ensure landing page headlines reflect the ad promise</li>
          <li>Continuously improve CTR with strong CTAs and offers</li>
        </ul>
        <p>👉 At Adswadi, we've seen CPC drop by up to 50% after improving Quality Scores.</p>
        
        <h2>6. Poor Audience Targeting</h2>
        <p><strong>The Problem:</strong> Many campaigns target everyone, wasting money on irrelevant clicks. For example, an ad for luxury villas in Goa doesn't need to target all of India.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Use geo-targeting (city, state, or radius around business location)</li>
          <li>Layer targeting with income levels, age groups, and interests</li>
          <li>Exclude locations where you don't sell</li>
        </ul>
        <p>👉 Narrow targeting = Higher conversions, Lower cost.</p>
        
        <h2>7. No Conversion Tracking</h2>
        <p><strong>The Problem:</strong> If you don't track conversions (calls, form fills, purchases), you're flying blind. Many Indian businesses measure only "clicks," not actual ROI.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Set up Google Ads conversion tracking</li>
          <li>Link Google Ads with Google Analytics</li>
          <li>Track phone calls, WhatsApp clicks, and form submissions</li>
        </ul>
        <p>👉 Without tracking, you'll never know which ads actually drive results.</p>
        
        <h2>FAQs: Quick Fixes for Indian Businesses</h2>
        <p><strong>Q1. How much budget should I spend on Google Ads in India?</strong><br>
        ➡ Small businesses should start with at least ₹30,000/month to see meaningful results.</p>
        
        <p><strong>Q2. How long before I see conversions?</strong><br>
        ➡ With proper setup, results can be seen in 2–4 weeks.</p>
        
        <p><strong>Q3. Can Google Ads really work for local shops?</strong><br>
        ➡ Yes! For salons, gyms, restaurants, or coaching centres, geo-targeted ads bring immediate leads.</p>
        
        <h2>Final Thoughts</h2>
        <p>Running Google Ads in India in 2025 isn't just about creating an ad and hoping for the best. It's about strategy, optimization, and consistency.</p>
        
        <p>If your campaigns aren't converting, it's likely because of one (or more) of the 7 reasons we've discussed:</p>
        <ul>
          <li>Wrong keywords</li>
          <li>Weak ad copy</li>
          <li>No negative keywords</li>
          <li>Poor landing pages</li>
          <li>Low Quality Score</li>
          <li>Poor targeting</li>
          <li>No tracking</li>
        </ul>
        
        <p>The good news? All of these problems are fixable.</p>
        
        <p>At Adswadi, we specialize in turning underperforming campaigns into high-ROI growth machines. Whether you're a local shop, an e-commerce brand, or a large enterprise, we know how to make your ads work harder and smarter.</p>
        
        <p>👉 <strong>Ready to stop wasting money and start converting?</strong> <a href="#contact" className="text-blue-600 hover:text-blue-800 underline">Contact Adswadi today</a> for affordable, guaranteed-results advertising.</p>
      `,
      author: "Adswadi Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Google Ads",
      image: "/blogs/google-ads-fail-india-2025.png",
      featured: true,
      slug: "google-ads-not-converting-india-2025",
      metaTitle: "7 Reasons Your Google Ads Aren't Converting in 2025 – Adswadi",
      metaDescription: "Struggling with Google Ads in India? Discover 7 reasons your campaigns fail and how Adswadi helps businesses get guaranteed results.",
      keywords: ["Google Ads agency India", "PPC services India", "Google Ads management", "digital marketing agency India", "advertising ROI"]
    },
    {
      id: 2,
      title: "High CPC in India? 5 Proven Hacks to Lower Your Google Ad Costs Without Losing Reach",
      excerpt: "Discover proven strategies to reduce your Google Ads CPC by 20-40% while maintaining reach and quality leads. Expert insights from Adswadi's cost optimization campaigns.",
      content: `
        <p>Running Google Ads in India has become more expensive than ever. Whether you're a startup, a local coaching centre, or an e-commerce brand, you've probably noticed that your cost-per-click (CPC) keeps going up.</p>
        
        <p>According to recent studies, CPC for industries like real estate, e-commerce, and education can range between ₹8–₹15 per click — and in competitive metro cities, even higher. For small and medium businesses (SMBs), this can drain the marketing budget quickly without producing meaningful results.</p>
        
        <p>But here's the good news: a high CPC doesn't always mean you're stuck paying more. By making smart changes to your campaign strategy, you can reduce CPC while still getting qualified leads.</p>
        
        <p>At Adswadi, we've helped dozens of Indian businesses slash CPC costs by 20–40% without losing reach. In this blog, we'll break down 5 proven hacks to lower your Google Ads costs in 2025.</p>
        
        <h2>1. Use Long-Tail Keywords for Better Targeting</h2>
        <p><strong>The Problem:</strong> Many businesses bid on broad terms like "real estate" or "buy clothes." These keywords are highly competitive, vague, and expensive. Worse, they attract people who are just browsing, not ready to buy.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Focus on long-tail, buyer-intent keywords such as:</li>
          <li>"Buy 2BHK flat in Gurgaon under 50 lakhs"</li>
          <li>"Affordable digital marketing agency for small business India"</li>
          <li>"Best coaching ads for student enrollment"</li>
        </ul>
        <p>These are less competitive, cheaper, and bring in users closer to conversion.</p>
        <p>Use keyword research tools like Google Keyword Planner or SEMrush to identify untapped long-tail phrases.</p>
        <p>👉 <strong>Adswadi Example:</strong> A client targeting "flats in Bangalore" reduced CPC from ₹12 to ₹7 when we shifted to long-tail keywords like "2BHK flats near Whitefield Bangalore."</p>
        
        <h2>2. Improve Your Quality Score</h2>
        <p><strong>The Problem:</strong> Google rewards advertisers with higher Quality Scores by reducing CPC. But many businesses ignore ad relevance, landing page quality, and CTR (click-through rate).</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Match ad copy with keywords.</li>
          <li>If keyword = "affordable coaching ads India," your ad headline should mention "Affordable Coaching Ads in India."</li>
          <li>Optimize landing pages for relevance and speed.</li>
          <li>Write strong CTAs ("Book Free Demo," "Get Instant Quote").</li>
          <li>Continuously A/B test your ad creatives.</li>
        </ul>
        <p>👉 <strong>Why it matters:</strong> A higher Quality Score can cut CPC by up to 50%.</p>
        
        <h2>3. Leverage Ad Scheduling & Geo-Targeting</h2>
        <p><strong>The Problem:</strong> Many businesses run ads 24/7 across India, which wastes budget. Ads shown at the wrong time or in irrelevant cities eat up clicks without conversions.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li><strong>Use Ad Scheduling:</strong></li>
          <li>Restaurants may run ads during lunch/dinner hours.</li>
          <li>Coaching centres can target evenings (when parents browse).</li>
          <li><strong>Apply Geo-Targeting:</strong></li>
          <li>Instead of targeting "India," narrow down to profitable cities.</li>
          <li>For example, a luxury builder in Goa shouldn't target tier-3 cities.</li>
        </ul>
        <p>👉 <strong>Adswadi Example:</strong> By running ads only between 10 AM–9 PM for a coaching client, we reduced wasted clicks by 25%.</p>
        
        <h2>4. Use Remarketing to Reduce Acquisition Costs</h2>
        <p><strong>The Problem:</strong> Most first-time visitors don't convert. Businesses waste money chasing new clicks while ignoring past visitors who are easier to convert.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Set up Remarketing campaigns on Google Display Network.</li>
          <li>Retarget users who visited your site but didn't convert.</li>
          <li>Offer special deals ("Still interested? Book today and get 10% off").</li>
        </ul>
        <p>👉 Remarketing CPCs are often 40–60% lower than cold audience CPCs.</p>
        
        <h2>5. Optimize Your Ad Extensions & Formats</h2>
        <p><strong>The Problem:</strong> Ads that lack extensions (call, location, site links) appear less attractive and get lower CTR. A low CTR = higher CPC.</p>
        <p><strong>The Fix:</strong></p>
        <ul>
          <li>Add Call Extensions (direct phone call).</li>
          <li>Add Location Extensions (Google Maps visibility).</li>
          <li>Add Sitelinks (extra links like "Pricing," "Contact," "Case Studies").</li>
          <li>Experiment with Responsive Search Ads (RSA) to let Google auto-optimize headlines.</li>
        </ul>
        <p>👉 Businesses with optimized extensions often see a 20–30% CPC reduction.</p>
        
        <h2>Bonus Hack: Regularly Audit & Prune Wasted Spend</h2>
        <p>Even the best campaigns generate wasted clicks. If you don't prune them, your CPC skyrockets.</p>
        <p><strong>What to do:</strong></p>
        <ul>
          <li>Check search term reports weekly.</li>
          <li>Pause keywords with high spend but zero conversions.</li>
          <li>Move poor performers into negative keyword lists.</li>
        </ul>
        <p>👉 Adswadi runs weekly audits for all clients to ensure every rupee is working hard.</p>
        
        <h2>FAQs: Reducing CPC in India</h2>
        <p><strong>Q1. Is a lower CPC always better?</strong><br>
        ➡ Not necessarily. What matters is Cost per Conversion (CPA). A ₹12 click that converts is better than a ₹6 click that doesn't.</p>
        
        <p><strong>Q2. How long before CPC improvements show results?</strong><br>
        ➡ With optimization, improvements can show within 2–3 weeks.</p>
        
        <p><strong>Q3. Can small businesses really compete in CPC-heavy industries?</strong><br>
        ➡ Yes, with smart targeting and long-tail keywords, even a ₹30,000/month budget can generate strong ROI.</p>
        
        <h2>Final Thoughts</h2>
        <p>High CPCs in India are a reality — but they don't have to drain your budget. By:</p>
        <ul>
          <li>Using long-tail keywords,</li>
          <li>Improving Quality Score,</li>
          <li>Leveraging ad scheduling and geo-targeting,</li>
          <li>Running remarketing campaigns, and</li>
          <li>Optimizing ad extensions,</li>
        </ul>
        <p>… you can significantly lower costs without losing reach or quality leads.</p>
        
        <p>At Adswadi, we specialize in affordable, performance-driven campaigns. Our proven strategies have helped dozens of Indian businesses save lakhs in wasted ad spend while doubling ROI.</p>
        
        <p>👉 <strong>If your Google Ads budget feels like it's slipping away, it's time to stop guessing and start optimizing.</strong> <a href="#contact" className="text-blue-600 hover:text-blue-800 underline">Contact Adswadi today</a> and get guaranteed results.</p>
      `,
      author: "Adswadi Team",
      date: "January 20, 2025",
      readTime: "7 min read",
      category: "Google Ads",
      image: "/blogs/cpc-reduction-hacks-india-2025.png",
      featured: false,
      slug: "high-cpc-india-5-hacks-lower-google-ad-costs",
      metaTitle: "High CPC in India? 5 Proven Hacks to Lower Your Google Ad Costs – Adswadi",
      metaDescription: "Reduce Google Ads CPC by 20-40% in India with proven strategies. Expert insights from Adswadi's cost optimization campaigns.",
      keywords: ["Google Ads CPC reduction India", "lower PPC costs India", "Google Ads optimization", "cost per click reduction", "affordable Google Ads India"]
    }
  ];

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven digital marketing strategies, industry insights, and success stories 
            that can transform your business growth.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image}
                    alt={`${post.title} - Google Ads conversion optimization guide`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            text: post.excerpt,
                            url: `${window.location.origin}/blog/${post.slug}`
                          });
                        } else {
                          // Fallback: copy URL to clipboard
                          const blogUrl = `${window.location.origin}/blog/${post.slug}`;
                          navigator.clipboard.writeText(blogUrl).then(() => {
                            alert('Blog URL copied to clipboard!');
                          }).catch(() => {
                            // Fallback for older browsers
                            const textArea = document.createElement('textarea');
                            textArea.value = blogUrl;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert('Blog URL copied to clipboard!');
                          });
                        }
                      }}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-300 text-sm"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={index === 0 ? "/blogs/frustrated-vs-happy-business-owner.png" : "/blogs/cpc-costs-going-down-india.png"}
                alt={`${post.title} - Digital marketing insights`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', post.image);
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Featured
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Marketing?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get expert insights, proven strategies, and actionable tips delivered to your inbox. 
              Join thousands of business owners who trust Adswadi for their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
