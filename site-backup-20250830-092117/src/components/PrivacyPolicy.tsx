import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </motion.button>
              <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Last updated: January 2025</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          {/* Introduction */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-full bg-purple-100">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Your Privacy Matters</h2>
            </motion.div>
            <p className="text-slate-600 leading-relaxed text-lg">
              At Adswadi, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              use our digital marketing services, or interact with our advertising campaigns. As a performance marketing agency 
              specializing in Meta Ads, Google Ads, and lead generation, we handle sensitive business data and are committed to 
              maintaining the highest standards of data protection.
            </p>
          </div>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Eye className="w-5 h-5 text-purple-600" />
              Information We Collect
            </h3>
            <div className="space-y-4 text-slate-600">
                             <div>
                 <h4 className="font-semibold text-slate-800 mb-2">Personal Information</h4>
                 <p>We may collect personal information such as:</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                   <li>Name and contact information (email, phone number)</li>
                   <li>Company name, job title, and business details</li>
                   <li>Marketing budget and campaign requirements</li>
                   <li>Business goals and target audience information</li>
                   <li>Communication preferences and service history</li>
                   <li>Payment and billing information for services</li>
                 </ul>
               </div>
                             <div>
                 <h4 className="font-semibold text-slate-800 mb-2">Technical Information</h4>
                 <p>We automatically collect certain technical information including:</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                   <li>IP address and device information</li>
                   <li>Browser type and version</li>
                   <li>Pages visited and time spent on our website</li>
                   <li>Referring website information and traffic sources</li>
                   <li>Campaign performance data and conversion tracking</li>
                   <li>Ad interaction data and click-through rates</li>
                 </ul>
               </div>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-600" />
              How We Use Your Information
            </h3>
                         <div className="space-y-4 text-slate-600">
               <p>We use the collected information for the following purposes:</p>
               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>Providing and improving our digital marketing services (Meta Ads, Google Ads, lead generation)</li>
                 <li>Creating and optimizing advertising campaigns for your business</li>
                 <li>Analyzing campaign performance and providing detailed reports</li>
                 <li>Communicating with you about campaign updates and results</li>
                 <li>Personalizing your experience and content recommendations</li>
                 <li>Analyzing website usage and conversion tracking</li>
                 <li>Complying with legal obligations and platform policies</li>
                 <li>Protecting against fraud and security threats</li>
                 <li>Providing customer support and service improvements</li>
               </ul>
             </div>
          </motion.section>

          {/* Information Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h3>
                         <div className="space-y-4 text-slate-600">
               <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>With your explicit consent for campaign management</li>
                 <li>With Meta (Facebook) and Google for advertising platform access and campaign management</li>
                 <li>With trusted service providers who assist in our operations (analytics, payment processing)</li>
                 <li>To comply with legal requirements and platform policies</li>
                 <li>To protect our rights and safety</li>
                 <li>With your permission for case studies and testimonials (anonymized when possible)</li>
               </ul>
             </div>
          </motion.section>

          {/* Data Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Shield className="w-5 h-5 text-purple-600" />
              Data Security
            </h3>
            <div className="space-y-4 text-slate-600">
              <p>We implement appropriate technical and organizational measures to protect your personal information against:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unauthorized access and disclosure</li>
                <li>Accidental loss and destruction</li>
                <li>Data breaches and cyber threats</li>
              </ul>
              <p className="mt-4">
                We regularly review and update our security practices to ensure the highest level of protection for your data.
              </p>
            </div>
          </motion.section>

                     {/* Campaign Data and Analytics */}
           <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.7 }}
             className="mb-8"
           >
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Campaign Data and Analytics</h3>
             <div className="space-y-4 text-slate-600">
               <p>As a digital marketing agency, we handle campaign-specific data including:</p>
               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li><strong>Ad Performance Data:</strong> Click-through rates, conversion rates, and ROI metrics</li>
                 <li><strong>Audience Insights:</strong> Demographics, interests, and behavior patterns (anonymized)</li>
                 <li><strong>Campaign Budgets:</strong> Ad spend allocation and performance tracking</li>
                 <li><strong>Lead Information:</strong> Contact details of potential customers generated through campaigns</li>
                 <li><strong>Platform Access:</strong> Secure access to your Meta Ads and Google Ads accounts</li>
                 <li><strong>Reporting Data:</strong> Custom reports and performance analytics</li>
               </ul>
               <p className="mt-4">
                 All campaign data is handled with strict confidentiality and used solely for campaign optimization and reporting purposes.
               </p>
             </div>
           </motion.section>

           {/* Cookies and Tracking */}
           <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="mb-8"
           >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking</h3>
                         <div className="space-y-4 text-slate-600">
               <p>We use cookies and similar tracking technologies to:</p>
               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>Remember your preferences and settings</li>
                 <li>Analyze website traffic and usage patterns</li>
                 <li>Track conversion events and campaign performance</li>
                 <li>Improve our website functionality and user experience</li>
                 <li>Provide personalized content and advertising recommendations</li>
                 <li>Integrate with Meta Pixel and Google Analytics for campaign tracking</li>
                 <li>Monitor lead generation and form submissions</li>
               </ul>
               <p className="mt-4">
                 You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality 
                 and our ability to provide accurate campaign performance data.
               </p>
             </div>
          </motion.section>

                     {/* Your Rights */}
           <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.9 }}
             className="mb-8"
           >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h3>
                         <div className="space-y-4 text-slate-600">
               <p>You have the following rights regarding your personal information:</p>
               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li><strong>Access:</strong> Request a copy of your personal data and campaign information</li>
                 <li><strong>Correction:</strong> Update or correct inaccurate business and contact information</li>
                 <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                 <li><strong>Portability:</strong> Receive your data in a structured format for campaign analysis</li>
                 <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
                 <li><strong>Withdrawal:</strong> Withdraw consent for campaign management at any time</li>
                 <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                 <li><strong>Campaign Control:</strong> Request changes to your advertising campaigns</li>
               </ul>
             </div>
          </motion.section>

                     {/* Contact Information */}
           <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 1.0 }}
             className="mb-8"
           >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h3>
                         <div className="bg-slate-50 rounded-xl p-6">
               <p className="text-slate-600 mb-4">
                 If you have any questions about this Privacy Policy, our data practices, or your advertising campaigns, please contact us:
               </p>
               <div className="space-y-2 text-slate-600">
                 <p><strong>Email:</strong> adswadiofficial@gmail.com</p>
                 <p><strong>Phone:</strong> +91 8678830021</p>

                 <p><strong>Address:</strong> Ranchi, India</p>
                 <p><strong>Response Time:</strong> We typically respond within 24 hours</p>
               </div>
             </div>
          </motion.section>

                     {/* Updates to Policy */}
           <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 1.1 }}
             className="mb-8"
           >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Updates to This Policy</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
                and updating the "Last updated" date.
              </p>
            </div>
          </motion.section>

                     {/* Back to Top Button */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 1.2 }}
             className="text-center pt-8"
           >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Back to Top
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
