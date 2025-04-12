// PrivacyPolicy.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

// Define policy sections for the accordion
const policySections = [
  {
    title: "Introduction to Privacy Policy",
    content: `This privacy policy (the "Privacy Policy") applies to your use of the website of Razorpay hosted at razorpay.com, the Services (as
defined under the Razorpay "Terms of Use") and Razorpay applications on mobile platforms (Android, Blackberry, Windows Phone, iOS
etc.) (collectively ("RAZORPAY" or "WEBSITE")), but does not apply to any third party websites that may be linked to them, or any
relationships you may have with the businesses listed on Razorpay.

The terms "we", "our" and "us" refer to Razorpay and the terms "you", "your" and "User" refer to you, as a user of Razorpay. The term
"Personal Information" means information that you provide to us which personally identifies you to be contacted or identified, such as
your name, phone number, email address, and any other data that is tied to such information. Our practices and procedures in relation to
the collection and use of Personal Information have been set-out below in order to ensure safe usage of the Website for you.

We have implemented reasonable security practices and procedures that are commensurate with the information assets being protected
and with the nature of our business. While we try our best to provide security that is better than the industry standards, because of the
inherent vulnerabilities of the internet, we cannot ensure or warrant complete security of all information that is being transmitted to us by
you. By visiting this Website, you agree and acknowledge to be bound by this Privacy Policy and you hereby consent that we will
collect, use, process and share your Personal Information in the manner set out herein below. If you do not agree with these terms, do not
use the Website.

It is clarified that the terms and conditions that are provided separately, form an integral part of your use of this Website and should be
read in conjunction with this Privacy Policy.`
  },
  {
    title: "Information we collect and how we use it",
    content: `We collect, receive and store your Personal Information. If you provide your third-party account credentials ("Third Party Account
Information") to us, you understand that some content and information in those accounts may be transmitted to your account with us if
you authorise such transmissions and that Third Party Account Information transmitted to us shall be covered by this Privacy Policy.
You may opt to not provide us with certain information, however that will restrict you from registering with us or availing some of our
features and services.

We use commercially reasonable efforts to ensure that the collection of Personal Information is limited to that which is necessary to
fulfill the purposes identified below. If we use or plan to use your information in a manner different than the purpose for which it is
collected, then we will ask you for your consent prior to such use.

The Personal Information collected will be used only for the purpose of enabling you to use the services provided by us, to help promote
a safe service, calibrate consumer interest in our products and services, inform you about online offers and updates, troubleshoot
problems, customize User experience, detect and protect us against error, fraud and other criminal activity, collect money, enforce our
terms and conditions, and as otherwise described to you at the time of collection of such information.`
  },
  {
    title: "Account information of Merchants",
    content: `If you create an account to take advantage of the full range of services offered on Razorpay, we ask for and record Personal Information
such as your name, email address and mobile number. We may collect and store your Sensitive Personal Data or Information (such as
any financial information including inter alia credit card, debit card details, bank account and know your customer ("KYC") documents
as per RBI regulations and any other information as may be applicable) that the User may opt to save in the User account created with
Razorpay]. We use your email address to send you updates, news, and newsletters (if you willingly subscribe to the newsletter during
signup, or anytime after signup) and contact you on behalf of other Users (such other Users who send you friend requests, personal
messages, or other social collaboration based events). [If you do not want to receive communications from us that are not relevant to you
or your use of our services, please click on the unsubscribe link provided at the bottom of such e-mails sent to you by us. We use your
mobile numbers to send you transaction alerts and SMS alerts based on your preferences. If you do not wish to receive such SMSs from
us, please notify us at razorpay.com/support to stop receiving SMSs from us. Razorpay assures that your Personal Information will not be
made public or sold to any third party.

The User shall have an option to erase any information provided by the User including Personal Information. If a User opts for the said
option of erasure, Razorpay shall delete all stored information of the User from its servers.`
  },
  {
    title: "Customer Information",
    content: `We also store customer information of customers such as address, mobile number, Third Party Wallet details, Card Details and email
address making payments through Razorpay checkouts. However, only when customer chooses to share the information on the
businesses powered with Razorpay applications we share the information to respective businesses. However, Razorpay is not liable in
any way for any misuse of this information by the business or people related to the businesses to whom the information is shared by the
customer.`
  },
  {
    title: "Activity",
    content: `We record information relating to your use of Razorpay, such as the searches you undertake, the pages you view, your browser type, IP
address, location, requested URL, referring URL, and timestamp information. We use this type of information to administer Razorpay
and provide the highest possible level of security and service to you. We also use this information in the aggregate to perform statistical
analyses of User behavior and characteristics in order to measure interest in and use of the various areas of Razorpay. However, you
cannot be identified from this aggregate information.

We own all the intellectual property rights associated with the Website and its contents. No right, title or interest in any downloaded
material is transferred to you as a result of any such downloading or copying. The Website is protected by copyright as a collective work
and/ or compilation (meaning the collection, arrangement, and assembly) of all the content on this Website, pursuant to applicable law.
Our logos, product and service marks and/ or names, trademarks, copyrights and other intellectual property, whether registered or not
("Our IP") are exclusively owned by us. Without our prior written permission, you agree to not display and/ or use Our IP in any
manner. Nothing contained in this Website or the content, should be construed as granting, in any way to the User, any license or right or
interest whatsoever, in and/ or to Our IP, without our express written permission.`
  },
  {
    title: "Cookies",
    content: `We send cookies to your computer in order to uniquely identify your browser and improve the quality of our service. The term "cookies"
refers to small pieces of information that a website sends to your computer's hard drive while you are viewing the site. We may use both
session cookies (which expire once you close your browser) and persistent cookies (which stay on your computer until you delete them).
Persistent cookies can be removed by following your browser help file directions. If you choose to disable cookies, some areas of
Razorpay may not work properly or at all. Razorpay uses third party tools, who may collect anonymous information about your visits to
Razorpay using cookies, and interaction with Razorpay products and services. Such third parties may also use information about your
visits to Razorpay products and services and other web sites to target advertisements for Razorpay's products and services. No Personal
Information is collected or used in this process. These third parties do not know or have access to the name, phone number, address,
email address, or any Personal Information about Razorpay's Users. Razorpay Users can opt-out of sharing this information with third
parties by deactivating cookies, the process of which varies from browser to browser. Please refer to the help file of your browser to
understand the process of deactivating cookies on your browser.`
  },
  {
    title: "Enforcement",
    content: `We may use the information we collect in connection with your use of Razorpay (including your Personal Information) in order to
investigate, enforce, and apply our terms and conditions and Privacy Policy.`
  },
  {
    title: "Transfer of information",
    content: `We do not share your Personal Information with any third party apart from financial institutions such as banks, RBI or other regulatory
agencies (as may be required) and to provide you with services that we offer through Razorpay, conduct quality assurance testing,
facilitate creation of accounts, provide technical and customer support, or provide specific services, such as synchronization of your
contacts with other software applications, in accordance with your instructions. These third parties are required not to use your Personal
Information other than to provide the services requested by you.

We may share your Personal Information with our parent company, subsidiaries, joint ventures, or other companies under a common
control (collectively, the "Affiliates") that we may have now or in the future, in which case we will require them to honor this Privacy
Policy. If another company acquires our company or our assets, that company will possess your Personal Information, and will assume
the rights and obligations with respect to that information as described in this Privacy Policy. We may disclose your Personal Information
to third parties in a good faith belief that such disclosure is reasonably necessary to (a) take action regarding suspected illegal activities;
(b) enforce or apply our terms and conditions and Privacy Policy; (c) comply with legal process, such as a search warrant, subpoena,
statute, or court order; or (d) protect our rights, reputation, and property, or that of our Users, Affiliates, or the public. Please note that we
are not required to question or contest the validity of any search warrant, subpoena or other similar governmental request that we receive.

We may disclose information in the aggregate to third parties relating to User behavior in connection with actual or prospective business
relationship with those third parties, such as advertisers and content distributors. For example, we may disclose the number of Users that
have been exposed to, or clicked on, advertising banners.`
  },
  {
    title: "Links",
    content: `References on this Website to any names, marks, products or services of third parties or hyperlinks to third party websites or information
are provided solely for your convenience and do not in any way constitute or imply our endorsement, sponsorship or recommendation of
the third party, information, product or service. Except as set forth herein, we do not share your Personal Information with those third
parties, and are not responsible for their privacy practices. We suggest you read the privacy policies on all such third party websites.`
  },
  {
    title: "User access of Personal Information",
    content: `As a registered Razorpay User, you can modify some of your Personal Information and your privacy preferences by accessing the
"Account" section of this Website.`
  },
  {
    title: "Security",
    content: `Your account is password protected. We use industry standard measures to protect the Personal Information that is stored in our database.
We follow industry standard best practices on Information Security, as also mentioned in our website. We limit the access to your
Personal Information to those employees and contractors who need access to perform their job function, such as our customer service
personnel. If you have any questions about the security on Razorpay, please contact us at disclosures@razorpay.com.

You hereby acknowledge that Razorpay is not responsible for any intercepted information sent via the internet, and you hereby release
us from any and all claims arising out of or related to the use of intercepted information in any unauthorized manner.`
  },
  {
    title: "Terms and modifications to this Privacy Policy",
    content: `Our Privacy Policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy
periodically. These changes will be effective immediately on the Users of Razorpay. Please note that at all times you are responsible for
updating your Personal Information, including to provide us with your most current e-mail address.

If you do not wish to permit changes in our use of your Personal Information, you must notify us promptly that you wish to deactivate
your account with us. Continued use of Razorpay after any change/ amendment to this Privacy Policy shall indicate your
acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.`
  },
  {
    title: "Applicable law",
    content: `Your use of this Website will be governed by and construed in accordance with the laws of India. The Users agree that any legal action or
proceedings arising out of your use may be brought exclusively in the competent courts/ tribunals having jurisdiction in Bengaluru in
India and irrevocably submit themselves to the jurisdiction of such courts/ tribunals.`
  },
  {
    title: "Complaints and Grievance Redressal",
    content: `If you contact us to provide feedback, register a complaint, or ask a question, we will record any Personal Information and other content
that you provide in your communication so that we can effectively respond to your communication. Any complaints or concerns in
relation to your Personal Information or content of this Website or any dispute or breach of confidentiality or any proprietary rights of
User during use of the Website or any intellectual property of any User should be immediately informed to the Grievance cum Nodal
Officer at the co-ordinates mentioned below in writing or by way of raising a grievance ticket through the hyperlink mentioned below:

DPO
Mr. SHASHANK KARINCHETI
Razorpay Software Private Limited
Address: No. 22, 1st Floor, SJR Cyber, Laskar - Hosur Road, Adugodi, Bangalore - 560030
Ph: 080-46669555
E-mail: dpo@razorpay.com
Grievances portal: https://razorpay.com/grievances/`
  },
  {
    title: "Acceptance Details",
    content: `Owner Id QI2OgCuRnKVton
Owner Name BIGHNESH KUMAR SAHOO
IP Address 10.26.199.57
Date Of Acceptance 2025-04-12 11:36:32 IST
Signatory Name BIGHNESH KUMAR SAHOO
Contact Number +919337561649
Email bighneshkumarsahoo58@gmail.com`
  }
];

const PrivacyPolicy = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-10 px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-sm text-gray-500">Last updated: March 19th, 2024</p>
              </div>
              
              <ScrollArea className="h-[60vh] rounded-md border p-4">
                <Accordion type="single" collapsible className="w-full">
                  {policySections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                        <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                          {section.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </ScrollArea>
              
              <motion.div 
                className="mt-6 flex flex-col items-center justify-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="accept-policy"
                    checked={isAccepted}
                    onChange={() => setIsAccepted(!isAccepted)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="accept-policy" className="text-sm text-gray-700">
                    I have read and agree to the Privacy Policy
                  </label>
                </div>
                
                <Button 
                  disabled={!isAccepted}
                  className={`w-full sm:w-auto px-6 py-2 rounded-md font-medium ${
                    isAccepted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Accept and Continue
                </Button>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex mt-4 items-center cursor-pointer text-blue-600 text-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span>Back to top</span>
                  <ChevronUp className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;