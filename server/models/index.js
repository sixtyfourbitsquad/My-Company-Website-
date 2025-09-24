import { sequelize } from '../config/database.js';
import User from './User.js';
import BlogPost from './BlogPost.js';

// Define associations
User.hasMany(BlogPost, {
  foreignKey: 'userId',
  as: 'posts',
});

BlogPost.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Initialize database
const initializeDatabase = async () => {
  try {
    // Sync all models
    await sequelize.sync({ force: false });
    console.log('✅ Database models synchronized successfully.');
    
    // Create default admin user if it doesn't exist
    const adminExists = await User.findOne({ where: { username: 'admin' } });
    if (!adminExists) {
      await User.create({
        username: 'admin',
        email: 'admin@adswadi.com',
        password: 'admin123',
        role: 'admin',
      });
      console.log('✅ Default admin user created.');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    return false;
  }
};

// Seed sample blog posts
const seedBlogPosts = async () => {
  try {
    const postCount = await BlogPost.count();
    if (postCount === 0) {
      const adminUser = await User.findOne({ where: { username: 'admin' } });
      
      const samplePosts = [
        {
          title: "7 Reasons Your Google Ads Aren't Converting in 2025 (And How Indian Businesses Can Fix Them)",
          slug: "google-ads-not-converting-india-2025",
          excerpt: "Discover why your Google Ads campaigns are failing and learn proven strategies to turn them into high-ROI growth machines. Expert insights from Adswadi's campaign audits.",
          content: `<p>Google Ads is one of the most powerful ways for Indian businesses to attract new customers. With billions of daily searches and a rapidly growing online audience, every business owner wants a share of this digital goldmine. But here's the harsh reality: many Indian startups, local businesses, and even established brands run Google Ads campaigns that simply don't convert.</p>

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

<h2>2. Poor Landing Page Experience</h2>
<p><strong>The Problem:</strong> Your ads might be perfect, but if users land on a slow, confusing, or irrelevant page, they'll bounce immediately.</p>
<p><strong>The Fix:</strong></p>
<ul>
  <li>Ensure landing pages load in under 3 seconds</li>
  <li>Match the landing page content to your ad copy</li>
  <li>Use clear, compelling call-to-action buttons</li>
  <li>Optimize for mobile devices (70% of Indian traffic is mobile)</li>
</ul>

<h2>3. Ignoring Local SEO and Geo-Targeting</h2>
<p><strong>The Problem:</strong> Running ads to the entire country when your business only serves specific cities or regions.</p>
<p><strong>The Fix:</strong></p>
<ul>
  <li>Use location targeting for your service areas</li>
  <li>Include city names in your ad copy and keywords</li>
  <li>Set up location extensions</li>
</ul>`,
          author: "Adswadi Team",
          status: "published",
          tags: ["Google Ads", "Digital Marketing", "PPC", "Conversion Optimization", "India"],
          metaTitle: "7 Reasons Your Google Ads Aren't Converting in 2025 | Adswadi",
          metaDescription: "Discover why your Google Ads campaigns are failing and learn proven strategies to turn them into high-ROI growth machines. Expert insights from Adswadi.",
          readTime: 8,
          userId: adminUser?.id,
        },
        {
          title: "High CPC in India? 5 Proven Hacks to Lower Your Google Ad Costs",
          slug: "high-cpc-india-5-hacks-lower-google-ad-costs",
          excerpt: "Struggling with expensive Google Ads in India? Learn 5 battle-tested strategies to reduce your cost-per-click and maximize your advertising ROI.",
          content: `<p>If you're running Google Ads in India, you've probably noticed that costs keep rising. What used to cost ₹10 per click now costs ₹25 or more. Competition is fierce, and many businesses are struggling to maintain profitable campaigns.</p>

<p>But here's the good news: there are proven strategies to reduce your CPC without sacrificing quality traffic. At Adswadi, we've helped hundreds of Indian businesses cut their advertising costs by 30-60% while maintaining or even improving their conversion rates.</p>

<h2>1. Master the Art of Long-Tail Keywords</h2>
<p><strong>Why it works:</strong> Long-tail keywords have lower competition and higher intent.</p>
<p><strong>Example:</strong> Instead of bidding on "digital marketing" (₹45/click), target "digital marketing services for restaurants in Mumbai" (₹12/click).</p>
<p><strong>Action Steps:</strong></p>
<ul>
  <li>Use Google's Keyword Planner to find long-tail variations</li>
  <li>Include location, service type, and industry in your keywords</li>
  <li>Target "how to" and "best" keywords for educational content</li>
</ul>

<h2>2. Optimize Your Quality Score</h2>
<p><strong>Why it matters:</strong> Higher Quality Score = Lower CPC. Google rewards relevant, high-quality ads with better positions at lower costs.</p>
<p><strong>How to improve:</strong></p>
<ul>
  <li>Ensure ad copy matches your keywords exactly</li>
  <li>Improve landing page load speed (aim for under 3 seconds)</li>
  <li>Use ad extensions (sitelinks, callouts, structured snippets)</li>
  <li>Maintain high click-through rates (aim for 3%+ for search campaigns)</li>
</ul>

<h2>3. Leverage Dayparting and Geographic Targeting</h2>
<p><strong>The Strategy:</strong> Only show ads when and where your customers are most likely to convert.</p>
<p><strong>Implementation:</strong></p>
<ul>
  <li>Analyze your conversion data by hour and day</li>
  <li>Pause ads during low-performing hours</li>
  <li>Focus on high-converting cities and states</li>
  <li>Use bid adjustments to reduce costs in expensive locations</li>
</ul>

<h2>4. Use Negative Keywords Aggressively</h2>
<p><strong>The Problem:</strong> You're paying for irrelevant clicks that will never convert.</p>
<p><strong>The Solution:</strong></p>
<ul>
  <li>Add "free," "cheap," "jobs," "course" as negative keywords</li>
  <li>Exclude competitor names</li>
  <li>Review search terms weekly and add irrelevant queries as negatives</li>
</ul>

<h2>5. Implement Smart Bidding with Target CPA</h2>
<p><strong>Why it works:</strong> Google's machine learning optimizes bids in real-time based on conversion likelihood.</p>
<p><strong>Setup Process:</strong></p>
<ul>
  <li>Ensure you have at least 30 conversions in the last 30 days</li>
  <li>Set a realistic target CPA based on your profit margins</li>
  <li>Allow 2-3 weeks for the algorithm to learn</li>
  <li>Monitor performance and adjust targets gradually</li>
</ul>

<h2>Bonus Tip: The Indian Market Advantage</h2>
<p>Focus on regional languages and local festivals. Create campaigns in Hindi, Tamil, or other regional languages for specific markets. This often results in 40-50% lower CPCs due to reduced competition.</p>

<p><strong>Ready to implement these strategies?</strong> Start with long-tail keywords and negative keyword optimization – these typically show results within 1-2 weeks.</p>`,
          author: "Adswadi Team",
          status: "published",
          tags: ["Google Ads", "CPC Optimization", "Cost Reduction", "India Marketing", "PPC"],
          metaTitle: "High CPC in India? 5 Proven Hacks to Lower Google Ad Costs | Adswadi",
          metaDescription: "Struggling with expensive Google Ads in India? Learn 5 battle-tested strategies to reduce your cost-per-click and maximize your advertising ROI.",
          readTime: 6,
          userId: adminUser?.id,
        }
      ];

      await BlogPost.bulkCreate(samplePosts);
      console.log('✅ Sample blog posts created.');
    }
  } catch (error) {
    console.error('❌ Failed to seed blog posts:', error);
  }
};

export {
  sequelize,
  User,
  BlogPost,
  initializeDatabase,
  seedBlogPosts,
};
